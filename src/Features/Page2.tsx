import * as React from 'react';
import { Link } from 'react-router-dom';

import Title from '~/Components/Title';

const Page2 = () => {
  return (
    <div>
      <Link to="/">Top</Link>
      <Link to="/page1">Page 1</Link>
      <Title label="Page 2" />
    </div>
  );
};

export default Page2;