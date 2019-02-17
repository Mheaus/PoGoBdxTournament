import React, { Fragment } from 'react';

import { Subscribe, News } from '../components';

const App = () => (
  <Fragment>
    <Subscribe />
    <News>
      <h3>Dernières News :</h3>
    </News>
  </Fragment>
);

export default App;
