/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { PostDate, PostTags, PostTitle } from './index';
import { formatESLongMonth } from '../../utils/dateFormatter';
import { IPost } from '../../types';

interface PostCard {
  post: IPost;
}

const PostCard: React.FC<PostCard> = ({ post }) => {
  const tags = post.tags ? post.tags.split(',') : [];

  return (
    <article
      key={post.slug}
      sx={{
        width: '320px',
        margin: 4,
        marginBottom: 6,
      }}
    >
      <header>
        <Link to={post.slug}>
          <Image
            fluid={post.image.fluid}
            alt="square forms"
            sx={{
              borderTopLeftRadius: 1,
              borderTopRightRadius: 1,
            }}
          />
        </Link>
      </header>
      <section>
        <div sx={{ marginY: 2 }}>
          <PostDate date={post.date} formatter={formatESLongMonth} />
        </div>
        <div sx={{ mb: 1 }}>
          <PostTitle>
            <Link to={post.slug}>{post.title}</Link>
          </PostTitle>
        </div>
        <div sx={{ mb: 2 }}>{post.description || post.excerpt}</div>
        <PostTags tags={tags} />
      </section>
    </article>
  );
};

export default PostCard;
