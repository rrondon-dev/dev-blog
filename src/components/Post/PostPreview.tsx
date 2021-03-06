/** @jsx jsx */
// import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

import { PostTitle, PostDate, PostTags } from './index';
import { ReadMoreLink } from '../Link';
import { formatESLongMonth } from '../../utils/dateFormatter';
import { IPost } from '../../types';

interface IPostPreviewProps {
  post: IPost;
}

const PostPreview: React.FC<IPostPreviewProps> = ({ post }) => {
  console.log(post);
  const tags = post.tags ? post.tags.split(',') : [];

  return (
    <article sx={{ marginBottom: 6 }}>
      <section>
        <header>
          <PostTitle>
            <Link to={`blog/${post.slug}`}>{post.title}</Link>
          </PostTitle>
          <PostDate date={post.date} formatter={formatESLongMonth} />
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.description || post.excerpt,
            }}
            sx={{ fontSize: 3, marginY: 1 }}
          />
          <div>
            <ReadMoreLink slug={`blog/${post.slug}`} />
          </div>
          <div sx={{ marginTop: 2 }}>
            <PostTags tags={tags} />
          </div>
        </section>
      </section>
    </article>
  );
};

export default PostPreview;
