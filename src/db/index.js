const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery",true)

async function main(){
    await mongoose.connect(`mongodb+srv://${process.env.DBNAME}:${process.env.DBPASS}@credencial.ayewz9o.mongodb.net/?retryWrites=true&w=majority`)
    console.log("Conectado o banco com sucesso")
}
main().catch((err)=> console.log(err))
module.exports=main