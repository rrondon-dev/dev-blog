/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

function ReadMoreLink(props) {
  return (
    <Link to={props.slug} sx={{ textDecoration: 'none', color: 'primary' }}>
      Read More ›
    </Link>
  );
}

ReadMoreLink.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default ReadMoreLink;
