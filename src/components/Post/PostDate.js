/** @jsx jsx */
// import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { formatESLongMonth } from '../../utils/dateFormatter';

function PostDate({ date }) {
  return (
    <time>
      <span sx={{ color: 'textDemp', fontSize: 1 }}>
        {formatESLongMonth(date)}
      </span>
    </time>
  );
}

export default PostDate;
