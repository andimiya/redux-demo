const React = require('react');

const DeviceForm = require('../DeviceForm');
const DeviceList = require('../DeviceList');
const List = require('../List');
const ListItem = require('../ListItem');
const Page = require('../Page');

const { Device } = require('../../models');

const App = () => (
  <Page>
    <h1>To Do</h1>
    <List ordered>
      <ListItem>Create device list container</ListItem>
      <ListItem>Create devices</ListItem>
      <ListItem>Update devices</ListItem>
      <ListItem>Remove devices</ListItem>
    </List>

    <hr />

    <h1>Create Device</h1>
    <DeviceForm method="POST" />

    <hr />

    <h1>Devices</h1>
    <DeviceList
      filterable
      devices={[
        new Device({ id: 1, serial: 'foo' }),
        new Device({ id: 2, serial: 'bar' }),
        new Device({ id: 3, serial: 'baz' }),
      ]}
    />
  </Page>
);

module.exports = App;
