const express = require('express');
const router = express.Router();


// Load Profile model
const Profile = require('../model/index');



// @route GET api/profile
// @description Get all profile
router.get('/allprofiles', async (req, res, next) => {
    try{
        const profile = await Profile.find()
        return res.status(200).json({ message: "Profiles Available Listed Below", profile });
    } catch (error) {
        return res.status(400).json({ message: "Something went Wrong! Try Again!", error });
    }
    next()
});


// @route GET api/profile/:id
// @description Get single Profile by id
router.get('/:id', async (req, res, next) => {
try{
    const profile = await Profile.findById(req.params.id)
    return res.status(200).json({ message: `Profile with ${req.params.id} Successful`, profile });
} catch (error) {
    return res.status(400).json({ message: "Something went Wrong! Cannot Update", error });
}
next()
})

// @route POST api/profile
// @description add/save Profile
router.post('/create', async (req, res, next) => {
    try {
    const nProfile = { institution, localGovtArea, address, phoneNo, creation_date } = req.body
    const profile = await Profile.create(nProfile)
        return res.status(200).json({ message: "Profile Created Successful", profile });
    } catch (error) {
        return res.status(400).json({ message: " Something went Wrong! Cannot Add Profile", error });
    }
    next()
})

// @route GET api/profile
// @description update Profile
router.put('/update/:id', async (req, res, next) => {
    try{
    const profile = await Profile.findByIdAndUpdate(req.params.id, req.body)
    return res.status(200).json({ message: "Profile Updated Successful" });
} catch (error) {
    return res.status(400).json({ message: "Something went Wrong! Cannot Update", error });
}
next()
})

// @route GET api/profile
// @description delete Profile by id
router.delete('/delete/:id', async (req, res, next) => {
    try{
    const profile = await Profile.findByIdAndRemove(req.params.id, req.body)
    return res.status(200).json({ message: "Profile Deleted Successful" });
    } catch (error) {
        return res.status(400).json({ message: "Something went Wrong! Cannot Update", error });
    }
    next()
})

module.exports = router
