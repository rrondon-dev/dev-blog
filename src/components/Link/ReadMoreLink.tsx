/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

interface IReadMoreLinkProps {
  slug: string;
}

const ReadMoreLink: React.FC<IReadMoreLinkProps> = (props) => {
  return (
    <Link to={props.slug} sx={{ textDecoration: 'none', color: 'primary' }}>
      Read More ›
    </Link>
  );
};

export default ReadMoreLink;
