/** @jsx jsx */
// import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';

function TagLink(props) {
  return (
    <>
      {!!props.position && (
        <span
          sx={{
            color: 'text',
            fontSize: 1,
            lineHeight: 'body',
            marginRight: 0,
          }}
        >
          /
        </span>
      )}
      <span
        to={props.tag}
        sx={{
          textDecoration: 'none',
          color: 'text',
          fontSize: 1,
          lineHeight: 'body',
          borderBottomWidth: '2px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'secondary',
          marginRight: 0,
        }}
      >
        {props.children}
      </span>
    </>
  );
}

TagLink.propTypes = {
  tag: PropTypes.string.isRequired,
  position: PropTypes.number,
};

export default TagLink;
