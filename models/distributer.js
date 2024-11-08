const mongoose = require("mongoose");
const DistributorSchema = mongoose.Schema;
const distributtor = new DistributorSchema(
    {
        name : {type: String},
        address: {type: String},
    },
    { timestamps: true}
);
module.exports = mongoose.model("distributtor", distributtor);