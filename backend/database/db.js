
import mongoose from "mongoose";

export const Connection = async (username , password) => {
    const URL = `mongodb://${username}:${password}@ac-nf2usxp-shard-00-00.pez4gpi.mongodb.net:27017,ac-nf2usxp-shard-00-01.pez4gpi.mongodb.net:27017,ac-nf2usxp-shard-00-02.pez4gpi.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-k1adma-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL , {useUnifiedTopology: true, useNewUrlParser: true})
       console.log('Database connected Successfully');
    }catch(error){
        console.log('Error while connecting with the database' , error.message);
    }
}

export default Connection;