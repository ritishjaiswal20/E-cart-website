// const functions = require("firebase-functions");
// const express=require("express");   
// const cors=require("cors");
// const stripe=require("stripe")
// ('sk_test_51Knjl3SHIIKfM7quFGrwtkQpi4vcenJqfHL6LhI5WZdJfLDApnWPCiFai1tH3CrZOh4uNPxI7Bd8GFdp7B2eG6gc006KlYo1Lu');


// const app=express();

// app.use(cors({origin:true}));
// app.use(express.json());
// app.get('/',(request,response)=>res.status(200).send('hello world'))

// export.api=function.https.onRequest(app);
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Knjl3SHIIKfM7quFGrwtkQpi4vcenJqfHL6LhI5WZdJfLDApnWPCiFai1tH3CrZOh4uNPxI7Bd8GFdp7B2eG6gc006KlYo1Lu"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
        
// - Listen command
exports.api = functions.https.onRequest(app);
