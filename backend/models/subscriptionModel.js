const sql = require("./db.js");

const Subscription = function(subscriber) {
  this.email = subscriber.email;
  this.first_name = subscriber.firstName;
  this.last_name = subscriber.lastName;
};

Subscription.create = (newSubscription, result) => {
  sql.query("INSERT INTO subscriptions SET ?", newSubscription, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created subscriptions: ", {...newSubscription });
  });
};

Subscription.getAll = result => {
  sql.query("SELECT * FROM subscriptions", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};


module.exports = Subscription;