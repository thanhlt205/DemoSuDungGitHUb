const express = require("express");
const router = express.Router();
const Disreibutor = require("../models/distributer");

// Thêm distributor
router.post("/add_distributor", async(req, res)=>{
    // const data = req.body;
    //Tạo đối tượng
    const model = new Disreibutor(req.body);
    console.log("check");
    // const newDistributor = new Disreibutor({
    //     name: data.name,
    //     address: data.address,
    // });
    // Lưu đối tượng vào database
    const result = await model.save();
    if(result){
        res.json({
            status: 200,
            message: "add suncessfull",
            data: result,
        });
    } else{
        res.json({
            status: 400,
            message: "add no suncessfull",
            data: "error",
        });
    }
});


router.get('/test', function(req, res, next) {
    res.render('index', { title: 'Thế Thanh' });
    res.render('index', { title: 'Thanh' });
  });
  

module.exports = router;