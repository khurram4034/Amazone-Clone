const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { request, response } = require('express');
const stripe = require("stripe")('pk_test_51HeKIjLDjj4MM1DCtC4NbYMYTZRr7piQYEFtLpsGgXRoa40qMMaB9E5LEj38SmItgVly8nszpUj0rYjMcn43CYCI00IkEYwhdd')

// -API

// -App Config
const app = express();


// -Middlewares
app.use(cors({ origin: true}));
app.use(express.json());
// -API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!! for this amount >>>', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // subunits of the currency
        currency: 'usd'
    });

    // Ok Created
    response.status(201).send({
        clientSecret: paymentIntent
    })
})
// -Listen command

exports.api = functions.https.onRequest(app)


// Example End Point
//http://localhost:5001/e-project-48ad6/us-central1/api