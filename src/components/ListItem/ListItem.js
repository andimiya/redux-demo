const React = require('react');
const PropTypes = require('prop-types');

function ListItem(props) {
  const { children } = props;

  return <li>{children}</li>;
}

ListItem.propTypes = {
  children: PropTypes.node,
};

module.exports = ListItem;
