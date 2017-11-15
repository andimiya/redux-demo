module.exports = {
  addDevice: data => ({
    type: 'ADD_DEVICE',
    device: new Device(data),
  }),
  updateDevice: (device, data) => ({
    type: 'UPDATE_DEVICE',
    original: device,
    revision: new Device(data),
  }),
};
