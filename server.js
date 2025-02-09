// const express = require("express");
// const morgan = require("morgan");
// const nodemailer = require("nodemailer");
// const connectDB = require("./config/database");
// require("dotenv").config();

// // Database connection building
// connectDB();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(morgan("dev"));

// app.use("/api/v1/users", require("./routes/user"));

// // app.use("/api/v1/contact", require("./routes/contactRoute"));

// // const fileUpload = require("express-fileupload");
// // app.use(fileUpload());


// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(`Server running in ${process.env.NODE_MODE} at port ${port}`);
//   // res.json({message:"User "})
// });


//---------------- Updated server for model check ------------------------

// const express = require("express");
// const morgan = require("morgan");
// const nodemailer = require("nodemailer");
// const connectDB = require("./config/database");
// require("dotenv").config();

// // Database connection
// connectDB();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(morgan("dev"));

// // Routes
// app.use("/api/v1/users", require("./routes/user"));

// // Uncomment if needed
// // app.use("/api/v1/contact", require("./routes/contactRoute"));

// // File Upload Middleware (Uncomment when needed)
// // const fileUpload = require("express-fileupload");
// // app.use(fileUpload());

// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(`Server running in ${process.env.NODE_MODE} at port ${port}`);
// });



const express = require("express");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const connectDB = require("./config/database");
require("dotenv").config();

// Database connection
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Allow large file uploads
app.use(fileUpload({
    limits: { fileSize: 500 * 1024 * 1024 }, // 500MB limit
    useTempFiles: true, // Store file temporarily
    tempFileDir: "/tmp/"
}));

// Routes
app.use("/api/v1/users", require("./routes/user"));

// File Upload Route
app.post("/api/upload-disease", async (req, res) => {
    if (!req.files || !req.files.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const file = req.files.file;
    const uploadPath = `${__dirname}/uploads/${file.name}`;

    try {
        await file.mv(uploadPath);
        console.log(`File uploaded successfully: ${uploadPath}`);
        res.json({ success: true, filePath: uploadPath });
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ success: false, message: "File upload failed" });
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} at port ${port}`);
});

