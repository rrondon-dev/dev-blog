/** @jsx jsx */
// import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

import { PostDate } from './index';
import { ReadMoreLink, TagLink } from '../Link';

function PostItem(props) {
  const { post } = props;
  const title = post.title;
  const tags = post.tags ? post.tags.split(',') : [];
  console.log(post);

  return (
    <article sx={{ marginBottom: 6 }}>
      <section>
        <header>
          <h2
            sx={{
              marginTop: '0px',
              marginBottom: '0px',
              fontSize: 5,
              '& a': {
                textDecoration: 'none',
                color: 'text',
                transition: 'color .3s',
              },
              '& a:hover': {
                color: 'primary',
              },
            }}
          >
            <Link to={post.slug}>{title}</Link>
          </h2>
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
            <ReadMoreLink slug={post.slug} />
          </div>
          <div sx={{ marginTop: 3, display: 'flex' }}>
            <div
              sx={{
                borderRadius: '50%',
                height: '50px',
                width: '50px',
                backgroundColor: '#dedede',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 2,
              }}
            >
              JS
            </div>
            <div sx={{ display: 'flex', alignItems: 'center' }}>
              {tags.map((tag, index) => {
                const parsedTag = tag.trim().toLowerCase();
                return (
                  <TagLink key={parsedTag} tag={parsedTag} position={index}>
                    {tag}
                  </TagLink>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </article>
  );
}

export default PostItem;
