const mongoose = require("mongoose");
const db = mongoose.connect("mongodb+srv://dgorges:942324@cluster0.ucynk.azure.mongodb.net/Cluster0?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
    console.log("Conexão estabelecida com o banco de dados na nuvem");
});

mongoose.connection.on("disconnected", () => {
    console.log(new Date() + " - Conexão desestabelecida com o banco de dados na nuvem")
});

mongoose.connection.on("error", (erro) => {
    console.log(erro)
});

module.exports = db;