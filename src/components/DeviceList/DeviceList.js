const PropTypes = require('prop-types');
const React = require('react');

const DeviceListItem = require('../DeviceListItem');
const List = require('../List');

const { Device } = require('../../models');

function generateDeviceListItems(devices) {
  return devices.map(device => (
    <DeviceListItem key={device.id} device={device} />
  ));
}

const DeviceList = ({ devices }) => {
  return <List>{generateDeviceListItems(devices)}</List>;
};

DeviceList.propTypes = {
  devices: PropTypes.arrayOf(PropTypes.instanceOf(Device)),
};

DeviceList.defaultProps = {
  devices: [],
};

module.exports = DeviceList;
