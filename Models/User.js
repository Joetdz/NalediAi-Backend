const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    nom: {
      type: String,
    },
    prenom: {
      type: String,
    },

    tel: {
      type: Number,
    },
    email: {
      type: String,
    },

    password: { type: String },
    profil: { type: String },
    promoCode: { type: String },
  },

  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = { User };
