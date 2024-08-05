const Mail=require('./mail');

exports.routesInit = (app) =>{
    
    app.use('/mail',Mail);

    app.all('*',(req,res)=>{ 
    console.log("wrong endpoint");
    res.status(404).json({Msg:"wrong endpoint"});
    });

}