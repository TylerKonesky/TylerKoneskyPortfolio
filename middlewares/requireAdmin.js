module.exports = (req, res, next) => {
    if(!req.user.isAdmin){
        return res.status(404).send({error: 'You must contact a system Admin to access this page'})
    }
    next();
}