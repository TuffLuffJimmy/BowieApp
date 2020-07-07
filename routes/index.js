const router = require('express').Router()

router.use('/api', require('./songRoutes'))
router.use('/api', require('./deezerRoutes'))

module.exports = router
