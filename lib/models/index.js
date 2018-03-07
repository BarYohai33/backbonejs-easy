// Dependencies
const Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    'hello': 'salut',
    'world': 'world'
  }
});
