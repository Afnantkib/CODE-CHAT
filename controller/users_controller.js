const userModel = require('../userModel');
module.exports.signup = function (req, res) {
    return res.render('signup');
}
module.exports.signin = function (req, res) {
    return res.render('signin');
}
module.exports.create = function (req, res) {
    // return;

        let data = req.body;
        console.log('Reached here 16'+data)
        console.log(JSON.stringify(data));
        userModel.create((data), (err, newUser) => {
            console.log("hello11111"+newUser);
            res.json({
                data:newUser,
                message:"Data reveived"
            })
        });
        // res.end("data received");
    




    }
    module.exports.createsession = function (req, res) {

        userModel.findOne({ email: req.body.email }, function (err, user) {
            if (err) {
                console.log('Error in finding user signin');
                return;
            }
            if (!user) {
                return res.redirect('back');
            }
            else {
                if (req.body.password == user.password) {
                    res.cookie('user_id', user.id)
                    return res.redirect('/users/profile');
                }
            }




        })


    }
    module.exports.profile = function (req, res) {
        if (req.cookies.user_id) {

            userModel.findById(req.cookies.user_id, function (err, user) {

                if (user) {
                    return res.render('profile', {
                        user: user
                    });



                }


            })


        }
        else {
            return res.redirect('back');
        }









    }

    module.exports.signout = function (req, res) {

        res.cookie('user_id', '');
        return res.redirect('/users/sign-in');



    }


    module.exports.deleteAccount = function (req, res) {

        if (req.cookies.user_id) {
            userModel.findByIdAndDelete(req.cookies.user_id, function (err) {

                if (err) {
                    console.log('error finding user');
                }
                else {
                    return res.redirect('/users/sign-in');
                }



            })
        }
        else {
            return res.redirect('back');
        }





    }