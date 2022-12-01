const JokeController = require("../controllers/jokes.controller");




// app.get("/api", (req,res)=>{
//     res.json({greeting:"hello mongoose demo"});
// })

module.exports = (app)=>{
    app.get("/api", JokeController.helloWorld);
    app.get("/api/jokes", JokeController.showAllJokes);
    app.post("/api/jokes", JokeController.createJoke);

    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.put("/api/jokes/:id", JokeController.updateJoke);
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
    

}