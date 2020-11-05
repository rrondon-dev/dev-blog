/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx } from 'theme-ui';
// import { Link } from 'gatsby';

interface ITagLinkProps {
  tag: string;
  position: number;
  children: React.ReactNode;
}

const TagLink: React.FC<ITagLinkProps> = (props) => {
  return (
    <>
      {!!props.position && (
        <span
          sx={{
            color: 'textDemp',
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
          color: 'textDemp',
          fontSize: 1,
          lineHeight: 'body',
          borderBottomWidth: '2px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'secondary',
          marginRight: 0,
          '&:hover': {
            color: 'text',
            cursor: 'pointer',
          },
        }}
      >
        {props.children}
      </span>
    </>
  );
};

export default TagLink;
