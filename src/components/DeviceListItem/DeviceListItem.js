const PropTypes = require('prop-types');
const React = require('react');

const ListItem = require('../ListItem');

const { Device } = require('../../models');

const DeviceListItem = ({ device, ...props }) => {
  return <ListItem {...props}>{device.serial}</ListItem>;
};

DeviceListItem.propTypes = {
  device: PropTypes.instanceOf(Device).isRequired,
};

module.exports = DeviceListItem;
