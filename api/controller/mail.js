//----------------- export -------------------------
module.exports={
    // POST https://localhost:<process.env.PORT>/mail/send
    Send:async(req,res)=>{   
        if(req.body.To){
            try {
                require('../view/sendMail').SendEmail(req.body.To, req.body);
                return res.status(200).json(`emails send successfully to: ${req.body.To} with the Subject: ${req.body.Subject} and the Content: ${req.body.Content}`);
            } catch (error) {
                console.log("could NOT send the email, can't use the function SendEmail in the controller");
                return res.tatus(500).json({Msg:"could NOT send the email, can't use the function SendEmail in the controller"});
            }
        }
        else{
            return res.status(400).json("no Email address to whom you want to send");
        }
    }
}