/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx } from 'theme-ui';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import usePosts from '../hooks/use-posts';
import { PostPreview } from '../components/Post';

function Hero() {
  return (
    <section
      sx={{
        marginTop: '-48px',
        paddingY: 5,
        backgroundColor: 'rgba(142, 214, 245, 0.1)',
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
          <h1 sx={{ fontFamily: 'heading', fontWeight: 'bodyH', fontSize: 6 }}>
            "A journey of a thousand miles starts beneath one's feet"
          </h1>
        </div>
      </div>
    </section>
  );
}

const IndexPage = () => {
  const posts = usePosts();
  // console.log(posts);

  return (
    <Layout hero={() => <Hero />}>
      <SEO title="Home" />
      <section sx={{ marginY: 6 }}>
        <h1
          sx={{
            fontSize: 6,
            marginTop: '0px',
            marginBottom: 5,
            fontFamily: 'heading',
            fontWeight: 'bodyH',
          }}
        >
          Recent Posts
        </h1>
        <div sx={{ paddingX: 3 }}>
          {posts.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
