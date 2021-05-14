import React, { Dispatch, SetStateAction, useEffect } from 'react';

interface Props {
  state: [string, Dispatch<SetStateAction<string>>];
}

export const PassPropState2: React.VFC<Props> = ({ state }) => {
  const [value, setValue] = state;

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
