/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Global } from '@emotion/core';

import useSiteMetadata from '../hooks/use-sitemetadata';

import Header from './header';
// import './layout.css';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={theme => ({
          '*': {
            boxSizing: 'border-box',
          },
        })}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header siteTitle={title} />
      <div
        sx={{
          margin: `2rem auto 4rem`,
          maxWidth: `90vw`,
          width: 1,
          // padding: 3,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
