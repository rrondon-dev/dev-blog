/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx } from 'theme-ui';
import Helmet from 'react-helmet';
import { Global } from '@emotion/core';
import useSiteMetadata from '../hooks/use-sitemetadata';
import 'typeface-open-sans';
import 'typeface-noto-serif';

import Header from './Header';
import Footer from './Footer';

interface ILayoutProps {
  hero: () => React.ReactNode;
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ hero, children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={(theme) => ({
          '*': {
            boxSizing: 'border-box',
          },
          body: {
            margin: 0,
          },
        })}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header siteTitle={title} />
      <>
        {hero && hero()}
        <main
          sx={{
            margin: `2rem auto 4rem`,
            maxWidth: `90vw`,
            width: 1,
            minHeight: '100vh',
          }}
        >
          {children}
        </main>
      </>
      <Footer />
    </>
  );
};

export default Layout;
