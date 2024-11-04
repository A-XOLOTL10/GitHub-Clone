exports.ensureAuthenticated = async(req, res, next) => {
    if(req.issAuthenticated){
        next();
    }

    res.redirect(process.env.CLIENT_BASE_URL + "/login");
} 