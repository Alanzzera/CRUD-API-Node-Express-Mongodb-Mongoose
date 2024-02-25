const mongoose = require("mongoose");
const fs = require("fs");
const readline = require("readline");
require('dotenv').config();

async function main(){
    try{
        mongoose.set("strictQuery", true);
        let mongoURI = process.env.MONGODB_URI;

        if (!mongoURI) {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            const username = await new Promise((resolve) => {
                rl.question("Insira o nome de usuário do MongoDB: ", (answer) => {
                    resolve(answer);
                });
            });

            const password = await new Promise((resolve) => {
                rl.question("Insira a senha do MongoDB: ", (answer) => {
                    resolve(answer);
                });
            });

            mongoURI = `mongodb+srv://${username}:${password}@cluster0.8mnxtks.mongodb.net/`;

            rl.close();

            fs.writeFileSync('.env', `MONGODB_URI=${mongoURI}`);
            console.log("Arquivo .env criado com sucesso.");
        }

        await mongoose.connect(
            mongoURI,
            { 
                useNewUrlParser: true,
                useUnifiedTopology: true
            } 
        );
        console.log("Conectado ao BD");
    }catch(error){
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;
