const models = require('./model.js');

module.exports = {
  getAll: (req, res) => {
    models
      .getAll()
      .then(data => {
        console.log('success controller');
        res.status(200).json(data);
      })
      .catch(err => {
        console.error('error controller', err);
        res.status(400).send(err);
      })
  }
}