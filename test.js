var request   = require("supertest");
var server = require('./server');

app = server();
var test = request(app);

test.get("/")
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res){
    if (err) throw err;
    if (!res.body.description) throw "Needs a description";
    if (!res.body.data) throw "Needs some data";
    if (res.body.data.foods.indexOf("fruits") === -1) throw "Needs data in that data";
    if (!res.body.data["words/literature"].length) throw "Should handle sub-nesting";
  });

test.get("/bork")
  .expect('Content-Type', /json/)
  .expect(404)
  .end(function(err, res){
    if (err) throw err;
    if (res.body.error !== "404 Not Found") throw "Needs an error description";
  });


test.get("/foods/fruits")
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res){
    if (err) throw err;
    if (!res.body.data) throw "Needs some data";
    if (res.body.data.fruits.indexOf("apple") === -1) throw "Needs an apple a day in that data";
  });

test.get("/words/literature/shakespeare_words")
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res){
    if (err) throw err;
    if (!res.body.data) throw "Needs some data";
    if (res.body.data.words.indexOf("abstemious") === -1) throw "not self-indulgent, especially when eating and drinking.";
  });