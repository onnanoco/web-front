import * as React from 'react';
import { Link } from 'react-router-dom';

import Title from '~/Components/Title';

const Page1 = () => {
  return (
    <div>
      <Link to="/">Top</Link>
      <Link to="/page2">Page 2</Link>
      <Title label="Page 1" />
    </div>
  );
};

export default Page1;