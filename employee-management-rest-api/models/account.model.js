// importing mongo connection stuff
const mongoose = require("./mongo");
const jwt = require('jsonwebtoken');
const crypto = require("crypto");

const Account = new mongoose.Schema(
  {
    fullName: String,
    email: {
      type: String,
      unique: true,
    },
    salt: String,
    hash: String,
    ceatedBy: String,
    createdOn: { type: Date, default: Date.now },
    updatedBy: String,
    updatedOn: { type: Date, default: Date.now },
  },
  {
    strict: true, // when true anything other than the above mentioned fields will not be saved.
  }
);

// define a util function to get the salt and hash out of the password
Account.methods.setPassword = function (password) {
  // convert password into salt and hash
  // Let's encrypt -- using crypto
  this.salt = crypto.randomBytes(32).toString("hex");
  console.log(this.salt);
  // using the salt and with enc algo - we will get hash generated
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 777, 462, "sha512")
    .toString("hex");
  console.log(this.hash);
};

// validate password
Account.methods.validatePassword = function(password) {
  // do not write arrow fn-- if so -- 'this' context will differ.
  console.log(password);
  // accessing the already saved salt
  console.log(this.salt);
  // accessing the already saved hash
  console.log(this.hash);
  // newly generating hash from entered password
  const hash = crypto.pbkdf2Sync(password, this.salt, 777, 462, "sha512").toString("hex");
  return this.hash === hash;
}

Account.methods.generateJWT = function() {
  const today = new Date();
  const tokenExpirationDate = new Date(today);
  tokenExpirationDate.setDate(today.getDate() + 60);

  // signing the payload with secret 
  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(tokenExpirationDate.getTime() / 1000, 10),
  }, 'DenoJS is better than Node JS');
}

module.exports = mongoose.model("Account", Account);
