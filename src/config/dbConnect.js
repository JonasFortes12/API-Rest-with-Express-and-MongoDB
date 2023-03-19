import mongoose from "mongoose";

let dbPassword = "clusterMongo"

mongoose.connect(`mongodb+srv://jonascfortes:${dbPassword}@fantasylibrary.plhkq8a.mongodb.net/?`)

let db = mongoose.connection

export default db