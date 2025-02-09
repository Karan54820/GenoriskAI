// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require("jsonwebtoken");
// const { user } = require('../routes/user');


// const register = async (req, res) => {
//     try {
//         const email_ = req.body.email;
//         const password_ = req.body.password;
//         const existingUser = await User.findOne({ email: email_ });

//         if (existingUser) {
//             return res.status(200).json({
//                 success: false,
//                 mesaage: "User Already Refistered"
//             });
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password_, salt);

//         req.body.password = hashedPassword;

//         const newUser = new User(req.body);
//         await newUser.save();

//         res.status(201).json({
//             success: true,
//             message: "Registered  Successfully",
//         })
//     }
//     catch (error) {
//         console.log(error);
//         res.status(500).json({
//             success: false,
//             message: "Error Occurred in registerController"
//         })
//     }
// }

// const login = async (req, res) => {
//     try {
//         const email_ = req.body.email;
//         const password_ = req.body.password;
//         const user = await User.findOne({ email: email_ });

//         if (!user) {
//             return res.status(200).send({
//                 success: false,
//                 message: "User not found",
//             });
//         }

//         const isMatch = await bcrypt.compare(password_, user.password);

//         if (!isMatch) {
//             return res.status(200).send({
//                 success: false,
//                 message: "Entered Email OR Password is Invalid",
//             });
//         }

//         const token = jwt.sign(
//             { id: user._id },
//             process.env.JWT_SECRET,
//             { expiresIn: '1d' }
//         );

//         res.status(201).json({
//             success: true,
//             message: "Login Successfully",
//             token,
//         })
//     }
//     catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: "Error Occurred in login controller function",
//         })
//     }
// };


// const authController = async (req, res) => {
//     try {
//         const user = await User.findOne({ _id: req.body.userId })

//         if (!user) {
//             return res.status(200).send({
//                 success: false,
//                 message: "user not found --> error in userController's authController functio"
//             })
//         } 
//         else {
//             res.status(200).send({
//                 success: true,
//                 data: {
//                     name: user.name,
//                     email: user.email,
//                 }
//             });
//         }
//     }
//     catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: "error occurred in userController's authController function",
//             error
//         })
//     }
// }


// module.exports = { login, register, authController }




const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const email_ = req.body.email;
        const password_ = req.body.password;
        const existingUser = await User.findOne({ email: email_ });

        if (existingUser) {
            return res.status(200).json({
                success: false,
                message: "User Already Registered"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password_, salt);

        req.body.password = hashedPassword;

        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json({
            success: true,
            message: "Registered Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error Occurred in registerController"
        });
    }

    // try {
    //     const exisitingUser = await User.findOne({ email: req.body.email });
    //     if (exisitingUser) {
    //       return res
    //         .status(200)
    //         .send({ message: "User Already Exist", success: false });
    //     }
    //     const password = req.body.password;
    //     const salt = await bcrypt.genSalt(10);
    //     const hashedPassword = await bcrypt.hash(password, salt);
    //     req.body.password = hashedPassword;
    //     const newUser = new User(req.body);
    //     await newUser.save();
    //     res.status(201).send({ message: "Register Sucessfully", success: true });
    //   } catch (error) {
    //     console.log(error);
    //     res.status(500).send({
    //       success: false,
    //       message: `Register Controller ${error.message}`,
    //     });
    //   }
};

const login = async (req, res) => {
    try {
        const email_ = req.body.email;
        const password_ = req.body.password;
        const user = await User.findOne({ email: email_ });

        if (!user) {
            return res.status(200).send({
                success: false,
                message: "User not found",
            });
        }

        const isMatch = await bcrypt.compare(password_, user.password);

        if (!isMatch) {
            return res.status(200).send({
                success: false,
                message: "Entered Email OR Password is Invalid",
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(201).json({
            success: true,
            message: "Login Successfully",
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error Occurred in login controller function",
        });
    }

    // try {
    //     const user = await User.findOne({ email: req.body.email });
    //     if (!user) {
    //       return res
    //         .status(200)
    //         .send({ message: "user not found", success: false });
    //     }
    //     const isMatch = await bcrypt.compare(req.body.password, user.password);
    //     if (!isMatch) {
    //       return res
    //         .status(200)
    //         .send({ message: "Invlid EMail or Password", success: false });
    //     }
    //     const token = jwt.sign({ id: user.__id }, process.env.JWT_SECRET, {
    //       expiresIn: "1d",
    //     });
    //     res.status(200).send({ message: "Login Success", success: true, token });
    //   } catch (error) {
    //     console.log(error);
    //     res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
    //   }
};

// ✅ Add fetchUserData function
const fetchUserData = async (req, res) => {
    try {
        const userId = req.user.id; // Correct way to get user ID
        const user = await User.findById(userId).select("name email phoneNumber");

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.json({ success: true, user });
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};



exports.googleLogin = async (req, res) => {
    const { tokenId } = req.body;
  
    try {
      const ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const { email, name, picture } = payload;
  
      let user = await User.findOne({ email });
  
      if (!user) {
        user = new User({
          name,
          email,
          profilePicture: picture,
          password: 'google', // You can handle this differently
        });
        await user.save();
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });
  
      res.status(200).json({ success: true, token, user });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Something went wrong' });
    }
  };

module.exports = { login, register, fetchUserData};
