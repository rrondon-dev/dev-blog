/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SEO from '../components/seo';
import Layout from '../components/layout';
import { PostDate } from '../components/Post';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        description
      }
      excerpt
      body
    }
  }
`;

const Post = ({ data: { mdx: post } }) => (
  <Layout>
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
    <article>
      <header>
        <div sx={{ textAlign: 'center', mb: 4 }}>
          <Styled.h1>{post.frontmatter.title}</Styled.h1>
          <PostDate date={post.frontmatter.date} />
        </div>
      </header>
      <section
        sx={{
          h2: {
            fontSize: 5,
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
            color: 'heading',
            mt: 4,
            mb: 4,
          },
          p: {
            fontSize: 2,
            fontFamily: 'body',
            fontWeight: 'body',
            color: 'text',
            mt: '0px',
            mb: 4,
          },
        }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
    </article>
  </Layout>
);

export default Post;
