const mongoose = require('mongoose');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const url = "mongodb+srv://revanthpatnani:Vwh1JHBmcpYLvfRb@cluster0.0eselbe.mongodb.net/Employees?retryWrites=true&w=majority";

const connect = () => {
const url = "mongodb+srv://revanthpatnani:INW7nBHsMgA5UjDV@cluster0.0eselbe.mongodb.net/Employees?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url)
    .then(() => {
        console.info("Connected to the DB")
    })
    .catch((e) => {
        console.log("Error", e);
    })
}

module.exports = { connect };

// const client = new MongoClient(url, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });
//   async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);