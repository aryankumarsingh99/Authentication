const express = require("express"); //import express
const mongoose = require("mongoose");
const cors = require("cors");
const  UserModel = require("./models/Authentication");

const app = express(); // create app
app.use(express.json());
app.use(cors());

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
      .then((User) => res.json( User))
      .catch((err) => res.json(err));

    return res.send({ message: "success", code: 200 });
  } catch (error) {
    console.log(error);
    return res.send({ message: "internal server error", code: 500 });
  }
});

//Connection mongoose
mongoose.connect("mongodb://127.0.0.1:27017/Authentication");

app.listen(8000, () => console.log("Server is running"));  
