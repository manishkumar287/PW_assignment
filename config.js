import mongoose from "mongoose";

const url = "mongodb://localhost:27017/physicsWallah-assignment";
mongoose.set("strictQuery", true);

// mongoose
//   .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(console.log("Successfully connected to MongoDB Compass"))
//   .catch((err) => {
//     console.log("Failed to connect to MongoDB");
//     console.log(err.message);
//   });

mongoose
  .connect(
    "mongodb+srv://manishkumar287:manishkumar287@cluster0.1lsva.mongodb.net/physicWallah?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("Successfully connected to MongoDB"))
  .catch((err) => {
    console.log("Failed to connect to MongoDB");
    console.log(err.message);
  });
