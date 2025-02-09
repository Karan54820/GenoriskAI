const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`DB Connection Successfully at ${mongoose.connection.host}`)
    }
    catch (error){
        console.log("MongoDB Connection Failed")
        console.log(error)
    }
}

module.exports = connectDB;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             // tlsAllowInvalidCertificates: true // Allows bypassing SSL issues
//         });
//         console.log(`DB Connection Successfully at ${mongoose.connection.host}`);
//     } catch (error) {
//         console.log("MongoDB Connection Failed");
//         console.log(error);
//     }
// };

// module.exports = connectDB;
