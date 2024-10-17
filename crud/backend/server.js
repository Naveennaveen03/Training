const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const pizzaModel = require("./models/Pizza");
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json("This a server");
});
mongoose.connect(
  "mongodb+srv://naveennaveen56268:OGKfXynxwdtKoYnT@cluster0.5clci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/create", async (req, res) => {
  const pizza = await pizzaModel.create(req.body);
  res.json(pizza);
});
app.get("/getALL", async (req, res) => {
  const pizzas = await pizzaModel.find();
  res.json(pizzas);
});

app.delete("/delete/:id", async (req, res) => {
  const pizz = req.params.id;
  await pizzaModel.findByIdAndDelete(pizz);
  res.json({
    message: "deleted",
  });

  
  
});

app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const data=req.body;            
  await pizzaModel.findByIdAndUpdate(id,data);
  res.json({
      message:"updated"
  });
});
app.listen("3001", () => {
  console.log("server is running");
});
