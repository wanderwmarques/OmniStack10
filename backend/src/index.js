const express = require("express"); // EXPRESS LIDA COM AS ROTAS
const mongoose = require("mongoose"); // LIGA O NODE COM O MONGODB (BANCO DE DADOS)
const cors = require("cors"); // LIGA O NODE COM O MONGODB (BANCO DE DADOS)
const routes = require("./routes");

const app = express();

// app.use(cors({ origin: 'http://localhost:3000' })) -> Permite acesso apenas para a aplicação dentro do localhost:3000
app.use(cors()) // Acesso externo liverado para qualquer aplicação
app.use(express.json()); // SEMPRE ANTES DAS ROTAS
app.use(routes);

mongoose.connect(
  "mongodb://wwm:wwm123@cluster0-shard-00-00-a1ekw.mongodb.net:27017,cluster0-shard-00-01-a1ekw.mongodb.net:27017,cluster0-shard-00-02-a1ekw.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.listen(3333);
