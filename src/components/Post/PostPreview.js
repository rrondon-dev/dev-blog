/** @jsx jsx */
// import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

import { PostTitle, PostDate, PostTags } from './index';
import { ReadMoreLink } from '../Link';

function PostPreview(props) {
  const { post } = props;
  const title = post.title;
  const tags = post.tags ? post.tags.split(',') : [];

  return (
    <article sx={{ marginBottom: 6 }}>
      <section>
        <header>
          <PostTitle>
            <Link to={`blog/${post.slug}`}>{title}</Link>
          </PostTitle>
          <PostDate date={post.date} />
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
}

export default PostPreview;
