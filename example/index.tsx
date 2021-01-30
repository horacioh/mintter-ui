import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box } from '../src/box/box';

const App = () => {
  return <Box>hello example</Box>;
};

ReactDOM.render(<App />, document.getElementById('root'));
