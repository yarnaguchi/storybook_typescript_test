import React from 'react';
import { MyButton } from './components/MyButton';

const App: React.VFC = () => {
  return (
    <MyButton variant="contained" color="primary" label="Primary Button" onClick={ () => {console.log('Primary Button')}} />
  );
};

export default App;
