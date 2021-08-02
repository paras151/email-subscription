const express = require("express");
var nodemailer = require('nodemailer');
const Subscription = require("../models/subscriptionModel");

const addSubscription = (req,res)=>{
    let first_name = req.body.firstName;
    let last_name = req.body.lastName;
    let email = req.body.email;
    res.send(req.body)
    Subscription.create({first_name, last_name, email});
}

const getAllSubscriptions = (req,res)=>{
    Subscription.getAll(function(err, subscriptions) {
        res.send(subscriptions)
      })
    
}

module.exports = {addSubscription, getAllSubscriptions}