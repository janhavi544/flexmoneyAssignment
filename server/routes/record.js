const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");

 
// This section will help to update a record by email.
recordRoutes.route("/record/update").post(function (req, response) {
 let db_connect = dbo.getDb("");



 db_connect
 .collection("flexmoney").updateOne(
  {email:req.body.email}, // query i.e. find if current email is present or not
  {$set: {name:req.body.name,
    age:req.body.age,
    email:req.body.email,
    number:req.body.number,
    radio:req.body.radio,
    payment_for:req.body.payment_for}},
      { upsert: true},
  );

});
 
 
module.exports = recordRoutes;