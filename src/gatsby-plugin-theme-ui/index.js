export default {
  fonts: {
    heading:
      'Noto Serif, Open Sans, Helvetica Neue, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, sans-serif',
    body:
      'Open Sans, Helvetica Neue, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, sans-serif',
  },
  colors: {
    // text: '#212121',
    text: '#283237',
    textDemp: 'rgba(0,0,0,.5)',
    bgGray: '#ccc',
    background: '#fff',
    primary: 'hsl(346, 100%, 40%)',
    secondary: 'hsl(198, 84%, 76%)',
    // 198°, 84%, 43%
    // #1292ca
  },
  fontWeights: {
    body: 400,
    bodyH: 500,
    heading: 600,
    bold: 600,
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64],
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  space: [4, 8, 12, 16, 24, 32, 48],
  sizes: [400, 750, 960, 1200],
  radii: [4, 8, 12, 16],
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
    },
    h1: {
      fontSize: 7,
      fontFamily: 'heading',
      fontWeight: 'bodyH',
      color: 'heading',
      mt: '0px',
      mb: 1,
    },
    h2: {
      fontSize: 5,
      fontFamily: 'body',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'heading',
      mt: 4,
      mb: 4,
    },
    p: {
      fontSize: 3,
      fontFamily: 'body',
      fontWeight: 'body',
      color: 'text',
      mt: '0px',
      mb: 4,
    },
  },
};
