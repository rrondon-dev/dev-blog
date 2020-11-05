/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx } from 'theme-ui';
import usePosts from '../hooks/use-posts';
import Layout from '../components/Layout';
import { PostCard } from '../components/Post';

function Blog() {
  const posts = usePosts();
  // console.log(posts);
  return (
    <Layout>
      <section
        sx={{
          marginTop: 5,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </Layout>
  );
}

export default Blog;
