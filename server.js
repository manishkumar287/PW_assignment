import "./config.js"
import express from 'express';
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";


const PORT=8090;

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/home",userRoutes);

app.get("/",(req,res)=>{
    res.send("Hey I am a Working on PW Assignment")
})




app.listen(PORT, () => {
  console.log(`Server is running of PORT : ${PORT}`);
});

