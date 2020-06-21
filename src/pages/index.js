import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import usePosts from '../hooks/use-posts';
import { PostPreview } from '../components/Post';

const IndexPage = () => {
  const posts = usePosts();
  console.log(posts);

  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default IndexPage;
