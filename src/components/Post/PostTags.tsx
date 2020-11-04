/** @jsx jsx */
import { jsx } from 'theme-ui';
import { TagLink } from '../Link';

interface IPostTagsProps {
  tags: string[];
}

const PostTags: React.FC<IPostTagsProps> = (props) => {
  return (
    <div sx={{ display: 'flex', alignItems: 'center' }}>
      {props.tags.map((tag, index) => {
        const parsedTag = tag.trim().toLowerCase();

        return (
          <TagLink key={parsedTag} tag={parsedTag} position={index}>
            {tag}
          </TagLink>
        );
      })}
    </div>
  );
};

export default PostTags;
