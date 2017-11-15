const uuid = require('uuid/v4');

/**
 * These are all mocked ajax requests that simulate saving to the database.
 */

const create = payload => {
  return Object.assign({}, payload, {
    id: uuid(),
    createdAt: Date.now(),
    updatedAt: null,
  });
};

const update = (original, payload) => {
  return Object.assign({}, payload, { id: original.id, updatedAt: Date.now() });
};

module.exports = {
  create,
  update,
};
