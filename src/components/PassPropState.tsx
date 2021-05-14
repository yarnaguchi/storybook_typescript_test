import React, { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

interface Props {
  defaultValue: string;
}

export const PassPropState: React.VFC<Props> = ({ defaultValue = '' }) => {
  const [value, setValue] = useState<string>(defaultValue);

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
