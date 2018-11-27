const data = require('./data.json');

function getAllEvents() {
  return Promise.resolve(data.events);
}

module.exports = {
  getAllEvents,
};
