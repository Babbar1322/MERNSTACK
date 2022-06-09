const jwt = require('jsonwebtoken');
const User = require('../data/userSchema');

const verify = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const onVerify = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id: onVerify._id, 'tokens.token':token});

        if(!rootUser){throw new Error(`Can't Find User!`)}

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
    } catch (error) {
        res.status(401).send('Unauthorized Token!');
        console.log(error);
    }
}

module.exports = verify;