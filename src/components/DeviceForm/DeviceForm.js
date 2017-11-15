const React = require('react');
const PropTypes = require('prop-types');

const { Device } = require('../../models');

function DeviceForm({ device, ...props }) {
  return (
    <form {...props}>
      <input
        type="text"
        name="serial"
        defaultValue={device.serial}
        placeholder="Serial"
        required
      />
      <button type="submit">{getButtonText(props.method)}</button>
    </form>
  );
}

function getButtonText(methodType) {
  switch (methodType) {
    case 'POST':
      return 'Add Device';
    case 'GET':
      return 'Find Device';
    case 'PUT':
      return 'Update Device';
    case 'DELETE':
      return 'Remove Device';
    default:
      console.warn(`Invalid method type ${methodType}`);
      return 'Submit Device';
  }
}

DeviceForm.propTypes = {
  method: PropTypes.oneOf(['POST', 'GET', 'PUT', 'DELETE']),
  onSubmit: PropTypes.func,
  device: PropTypes.instanceOf(Device),
};

DeviceForm.defaultProps = {
  onSubmit: () => {},
  device: new Device({}),
};

module.exports = DeviceForm;
