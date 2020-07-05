/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
// import React from "react"

const NavLink = props => {
  return (
    <Link
      {...props}
      sx={{
        color: 'bgGray',
        fontSize: 3,
        fontWeight: 'body',
        lineHeight: 'heading',
        margin: '0 0.5rem 0 0',
        padding: 0,
        textDecoration: 'none',
        transition: 'color .3s',
        '&.current-page': {
          borderBottomWidth: '2px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'primary',
          color: 'text',
        },
        '&:hover': {
          color: 'primary',
        },
        '&:last-of-type': {
          marginRight: '0px',
        },
      }}
    >
      {props.children}
    </Link>
  );
};

const Header = ({ siteTitle }) => (
  <header
    sx={{
      mb: 6,
    }}
  >
    <div
      sx={{
        margin: `0 auto`,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1.5rem calc((100vw - 960px - 0.5rem) / 2)',
        backgroundColor: 'background',
      }}
    >
      <span>
        <Link
          to="/"
          sx={{
            color: `text`,
            textDecoration: `none`,
            fontSize: 4,
          }}
        >
          {siteTitle}
        </Link>
      </span>
      <nav>
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        {` `}
        <NavLink to="/blog/" activeClassName="current-page">
          Blog
        </NavLink>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
