const School = require('../models/school');

// rendering the sign-up page
module.exports.sign_up= function(req,res){
    return res.render('sign-up',{
        title:"school sign-up"
    } );
}

// rendering the sign-in page
module.exports.sign_in = function(req, res){
    return res.render('sign-in', {
        title:"school sign-in"
    })
}

// adding a new school to the database
module.exports.create= function(req, res){

    if(req.body.password != req.body.confirm_password){
        console.log("the password and the confirm-password are not matching");
        return res.redirect("/school/sign-up");
    }

    School.findOne({email:req.body.email}, function(err, schl){

        if(err){
            console.log("there was a error in finding the worker in database during create session");
            return res.redirect('back');
        }
        if(!schl){
            School.create(req.body, function(err, wrkr){
                if(err){
                    console.log("there was an error in registering the user");
                    res.redirect('back');
                }
                else {
                    console.log("The user has been created and added in the database");
                    return res.redirect('/school/sign-in');

                }


            })
        
            
        }
        else{
            console.log("A user with this email already exists");
            return res.redirect('/school/sign-up');
        }
    })

}