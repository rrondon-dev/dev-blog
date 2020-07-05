/** @jsx jsx */
import { jsx } from 'theme-ui';

function PostTitle(props) {
  return (
    <h2
      sx={{
        fontFamily: 'body',
        fontWeight: 'heading',
        marginTop: '0px',
        marginBottom: '0px',
        fontSize: 5,
        '& a': {
          color: 'text',
          transition: 'color .3s',
          textDecoration: 'none',
        },
        '& a:hover': {
          color: 'primary',
        },
      }}
    >
      {props.children}
    </h2>
  );
}

export default PostTitle;
