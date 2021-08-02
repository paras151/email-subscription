var express = require("express");

var subscriptionsRouter = express.Router();

const {addSubscription, getAllSubscriptions} = require("../controllers/subscriptionController");

subscriptionsRouter
  .route("/subscriptions")
  .get(getAllSubscriptions)

  subscriptionsRouter
.route("/add-subscription")
.post(addSubscription)

module.exports = subscriptionsRouter;