const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema({
    institution: { type: String, required: true },
    localGovtArea: { type: String, required: true },
    address: { type: String, required: true },
    phoneNo:{ type: Number, required: true },
    creation_date: { type: Date, default: Date.now }
})

const Profile = mongoose.model('Profile', emergencySchema)
module.exports = Profile;
