/** @jsx jsx */
import { jsx } from 'theme-ui';

interface IPostDateProps {
  date: string;
  formatter: (date: string) => string | undefined;
}

const PostDate: React.FC<IPostDateProps> = ({ date, formatter }) => {
  return (
    <time>
      <span sx={{ color: 'textDemp', fontSize: 1 }}>
        {formatter ? formatter(date) : date}
      </span>
    </time>
  );
};

export default PostDate;
