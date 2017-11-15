const initialState = [];

function devicesReducer(devices = initialState, action = {}) {
  switch (action.type) {
    case 'ADD_DEVICE':
      return devices.concat(action.device);
    default:
      return devices;
  }
}

module.exports = devicesReducer;
