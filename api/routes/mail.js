const router=require('express').Router();

const {
    Send,
}=require('../controller/mail');

//------- endpoint for sending email ------- 
router.post('/send',Send); //  POST -->  https://localhost:<process.env.PORT>/mail/send

//----- export ------
module.exports=router; 