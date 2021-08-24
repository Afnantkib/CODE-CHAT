const User = require('../models/users');
module.exports.signup = function (req, res) {
    return res.render('signup');


}
module.exports.signin = function (req, res) {

    return res.render('signin');
}
module.exports.create = function (req, res) {

    if (req.body.password === req.body.confirm_password) {

        User.findOne({ email: req.body.email }, function (err, user) {

            if (err) {
                console.log('Error in finding user signuptime');
                return;
            }

            if (!user) {
                User.create(req.body, function (err, user) {
                    if (err) {
                        console.log('error in user signup');
                        return;
                    }

                    return res.redirect('/users/sign-in')
                })
            } else {
                return res.redirect('back');
            }

        })



    }
    else {
        return res.redirect('back');
    }



}
module.exports.createsession = function (req, res) {

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log('Error in finding user signin');
            return;
        }
        if (!user) {
            return res.redirect('back');
        }
        else {
            if ( req.body.password==user.password) {
                res.cookie('user_id', user.id)
                return res.redirect('/users/profile');
            }
        }




    })


}
module.exports.profile = function (req, res) {
    if (req.cookies.user_id) {

        User.findById(req.cookies.user_id, function (err, user) {

            if (user) {
                return res.render('profile', {
                    user: user
                });



            }


        })


    }
    else{
        return res.redirect('back');
    }









}

module.exports.signout=function(req,res){

res.cookie('user_id','');
return res.redirect('/users/sign-in');



}


module.exports.deleteAccount=function(req,res){

if(req.cookies.user_id){
User.findByIdAndDelete(req.cookies.user_id,function(err){

if(err){
    console.log('error finding user');
}
else{
    return res.redirect('/users/sign-in');
}



})
}
else{
    return res.redirect('back');
}





}