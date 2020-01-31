module.exports.sign_up= function(req,res){
    return res.render('sign-in_out',{
        title:"school sign-up/sign-in"
    } );
}

module.exports.sign_in = function(req, res){
    return res.render('sign-in_out', {
        title:"school sign-up/sign-in"
    })
}
