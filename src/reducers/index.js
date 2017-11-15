const { combineReducers } = require('redux');

const { reducer: devicesReducer } = require('./devices');

const reducers = combineReducers({
  devices: devicesReducer,
});

module.exports = reducers;
