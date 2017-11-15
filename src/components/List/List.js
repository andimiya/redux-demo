const React = require('react');
const PropTypes = require('prop-types');

const ListItem = require('../ListItem');

function List({ children, ordered }) {
  if (ordered) {
    return <ol>{children}</ol>;
  } else {
    return <ul>{children}</ul>;
  }
}

List.propTypes = {
  children: PropTypes.arrayOf(ListItem),
  ordered: PropTypes.bool,
};

module.exports = List;
