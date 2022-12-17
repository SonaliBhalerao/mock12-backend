const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const Schema = mongoose.Schema

const jobSchema = new mongoose.Schema({
        company: String,
		city: String,
        postedAt: String,
		location: String,
		role: String,
		level: String,
		contract: String,
		position: String,
		language: String,
})
const JobModel = mongoose.model("jobs", jobSchema);


module.exports = {
    JobModel
}