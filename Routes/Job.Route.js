const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JobModel }= require("../Models/Job.model");

const jobRoutes = express.Router();

jobRoutes.post("/posting",async(req, res)=>{
    const { company, city, location, role, level,contract,position, language } = req.body;

    const postedAt = new Date();
        const job = new JobModel({company, city, postedAt, location, role, level,contract,position, language});
        console.log(job);
        job.save();
        return res.send("Job Posted Successfully!");
});

jobRoutes.get("/listing", async(req, res)=>{
    const jobs = await JobModel.find()
    console.log(jobs[0].postedAt)
    res.send(jobs);
})

module.exports = jobRoutes;