/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
// import React from "react"

interface IHeaderProps {
  siteTitle: string;
}

interface INavLinkProps {
  to: string;
  activeClassName: string;
  children: React.ReactNode;
}

const NavLink: React.FC<INavLinkProps> = (props) => {
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

const Header: React.FC<IHeaderProps> = ({ siteTitle }) => {
  return (
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
};

export default Header;
