const uuid = require('uuid/v4');

class Device {
  constructor({ id = null, serial }) {
    this.id = id;
    this.serial = serial;
  }
}

module.exports = Device;
