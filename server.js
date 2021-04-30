const mongoose= require("mongoose");
const logger = require("morgan");
const express = require("express");
const path = require("path");  // Need to require path for __dirname

const PORT = process.env.PORT || 3000;

const User = require("./userModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


const config = { useNewUrlParser: true, 
                 useUnifiedTopology: true, 
                 useCreateIndex: true, 
                 useFindAndModify: false 
                }
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", config);

//HTML routes
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
  });
app.get("/",(req,res)=> {
  res.sendFile(path.join(__dirname + "/public/index.html"));
  });
app.get("/stats",(req,res) =>{
  res.sendFile(path.join(__dirname +"/public/stats.html"))
  });

  // Api Route

  app.get('/api/workouts', (req, res) => {
    User.find({})
      .then(exercise => {
          res.json(exercise);
      })
      .catch(err => {
        res.json(err);
      });
  })

  app.get('/api/workouts/range', (req, res) => {
    User.find({})
      .then(exercise => {
          res.json(exercise);
      })
      .catch(err => {
        res.json(err);
      });
  })

  app.post('/api/workouts', ({body}, res) => {
    User.create(body)
      .then(exercise => {
          res.json(exercise);
      })
      .catch(err => {
        res.json(err);
      });
  })

  app.put('/api/workouts/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, { $push: { exercises : req.body }}, { new: true })
    .then(exercise => {
      console.log(exercise);
      res.json(exercise);
    })
    .catch(({err}) => {
      console.log(err);
      res.json(err);
    });
  })

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
