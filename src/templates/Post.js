/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Image from 'gatsby-image';

import SEO from '../components/seo';
import Layout from '../components/Layout';
import { PostDate } from '../components/Post';
import { formatESLongMonth } from '../utils/dateFormatter';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        description
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      excerpt
      body
    }
  }
`;

const Post = ({ data: { mdx: postData } }) => {
  const post = {
    title: postData.frontmatter.title,
    description: postData.frontmatter.description,
    excerpt: postData.excerpt,
    date: postData.frontmatter.date,
    image: postData.frontmatter.image.sharp.fluid,
    body: postData.body,
  };

  return (
    <Layout>
      <SEO title={post.title} description={post.description || post.excerpt} />
      <article>
        <header>
          <div sx={{ textAlign: 'center', mb: 4 }}>
            <Styled.h1>{post.title}</Styled.h1>
            <PostDate date={post.date} formatter={formatESLongMonth} />
          </div>
        </header>
        <div sx={{ marginY: 4 }}>
          <Image fluid={post.image} alt="square forms" />
        </div>
        <section
          sx={{
            h2: {
              fontSize: 5,
              fontFamily: 'body',
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
};

export default Post;
