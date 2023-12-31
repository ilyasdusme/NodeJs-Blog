const express = require('express');
const router =express.Router();

//Routes

router.get('',(req,res) => {
    const locals = {
        title: "NodeJs Blog",
        description:"NodeJs,Express & MongoDb ile oluşturduğum Blog sitem"
    }
 
  res.render('index',{ locals });
});


router.get('/hakkinda',(req,res) => {
    res.render('hakkinda');
});



module.exports = router;
