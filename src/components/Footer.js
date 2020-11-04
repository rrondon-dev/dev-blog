/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

function FooterLink(props) {
  return (
    <Link
      to={props.to}
      sx={{
        fontSize: 2,
        lineHeight: 'body',
        textDecoration: 'none',
        color: 'text',
        transition: 'color .3s',
        '&:hover': {
          color: 'primary',
        },
      }}
    >
      {props.children}
    </Link>
  );
}

function Footer() {
  return (
    <footer
      sx={{
        paddingY: 5,
        backgroundColor: '#f6f6f4',
        // backgroundColor: '#ededed',
      }}
    >
      <div
        sx={{
          maxWidth: `90vw`,
          width: 1,
          margin: '0 auto',
        }}
      >
        <div>
          <nav>
            <ul style={{ listStyle: 'none', padding: '0px' }}>
              <li sx={{ mb: 0 }}>
                <FooterLink to="/">Home</FooterLink>
              </li>
              <li sx={{ mb: 0 }}>
                <FooterLink to="/blog/">Blog</FooterLink>
              </li>
            </ul>
          </nav>
        </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
