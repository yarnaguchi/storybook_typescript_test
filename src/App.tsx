import React, { useState } from 'react';
import { MyButton } from './components/MyButton';
import { PassPropState } from './components/PassPropState';
import { Graph } from './components/Graph';

const App: React.VFC = () => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <MyButton
        variant="contained"
        color="primary"
        label="Primary Button"
        onClick={() => {
          console.log('Primary Button');
        }}
      />
      <PassPropState defaultValue={''} />

      <Graph />
    </>
  );
};

export default App;
