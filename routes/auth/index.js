const logger = require('@logger')(__filename)
const DB = require('@DB')

module.exports = (Router) => {
  Router.use((req, res, next) => { 
    logger.info('API %s request to %s', req.method, req.path);
  
    next()
  })

  Router.get('/auth', async (req, res, next) => {
    const response = {
      authenticated: false,
      error: false
    }
    res.status(200).json(response)
  })

  return this
}
