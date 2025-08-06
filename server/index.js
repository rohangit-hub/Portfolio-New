import express from "express";
const app = express();
import connectDB from "./db.js";
import transporter from "./mailTransporter.js";
import cors from "cors"

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


import dotenv from "dotenv";
dotenv.config();


const router = express.Router();
app.use("/api/v1", router);

connectDB()
.then(() => {
    console.log("Database Connected..!");
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});


///////////////////Test Route///////////////////
router.get("/", (req, res) => {
    res.status(200).send("Hello World..!");
}); 


///////////////////Send Email Route/////////////
router.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);

    // Mail Draft 
    const mailDraft = {
        from: process.env.SENDER_EMAIL,
        to: process.env.RECEIVER_EMAIL,
        subject: `Portfoli:Query sent by ${name} / ${email}`,
        text: message
    }

    // Send Mail by transporter
    try {
        await transporter.sendMail(mailDraft);
        res.status(200).send(`Hello ${name} you Query sent successfully, We will get back to you soon..!`);
    } catch (error) {
        res.status(500).send(`Error: while sending email: ${error}`);
    }

});













