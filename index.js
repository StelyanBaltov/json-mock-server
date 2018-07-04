const user = require('./src/users.js')
const article = require('./src/config.js')
module.exports = () => ({
  users: user(),
  config: article
});