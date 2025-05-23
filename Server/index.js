const express = require("express"); //import express
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Authentication");
const dotenv = require("dotenv");
dotenv.config(); // load env variables

const app = express(); // create app
app.use(express.json());
app.use(cors());

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("Error: MONGODB_URI is not defined in environment variables.");
  process.exit(1); // Exit the application with an error code
}

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the application with an error code
  }
}
run().catch(console.dir);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    UserModel.findOne({ email: email }).then((user) => {
      if (user) {
        if (user.password === password) {
          return res.json("Success");
        } else {
          return res.json("The password is incorrect");
        }
      } else {
        return res.json("No record existed");
      }
    });
  } catch (error) {
    return res.send({ message: "internal server error", code: 500 });
  }
});

app.post("/signup", (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    if (body.email === "" || body.password === "") {
      console.log("empty");
      return res.send({ message: "empty fields", code: 400 });
    }
    UserModel.create(req.body)
      .then((User) => res.json(User))
      .catch((err) => res.json(err));

    return res.send({ message: "success", code: 200 });
  } catch (error) {
    console.log(error);
    return res.send({ message: "internal server error", code: 500 });
  }
});

//Connection mongoose
// mongoose.connect("mongodb://127.0.0.1:27017/Authentication");

app.listen(process.env.PORT || 8000, () => console.log("Server is running"));
