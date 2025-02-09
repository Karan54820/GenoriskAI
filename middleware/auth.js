// const JWT = require('jsonwebtoken');

// module.exports = async (req, res, next) => {
//     try {
//         const token = req.headers['authorization'].split(" ")[1]
//         JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
//             if (err) {
//                 return res.status(200).send({
//                     success: false,
//                     message: 'Authorization Failed',
//                 });
//             }
//             else {
//                 req.body.userId = decode.id
//                 next();
//             }
//         })
//     }  
//     catch (error) {
//         console.log(error)
//         res.status(401).send({
//             success:false,
//             message:"Auth Failed",
//         })
//     }
// }


const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: 'No token provided, authorization denied',
            });
        }

        const token = authHeader.split(" ")[1];

        JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid or expired token',
                });
            }

            req.user = decoded; // Store decoded user ID in `req.user`
            next();
        });
    }  
    catch (error) {
        console.error("Auth Middleware Error:", error);
        res.status(401).json({
            success: false,
            message: "Authorization failed",
        });
    }
};
