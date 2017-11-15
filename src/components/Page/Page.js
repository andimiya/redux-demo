const PropTypes = require('prop-types');
const React = require('react');

const Page = ({ children }) => {
  return <div>{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node,
};

module.exports = Page;
