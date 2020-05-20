let isOffline = false

module.exports = function (req, res, next) {
    if (isOffline) {
        return res.render('maintenance')
    }

    next()
}
