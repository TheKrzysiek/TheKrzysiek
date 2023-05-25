import React from 'react';

type Props = {
  name: string;
  action: () => void;
}

const Button = ({ name, action }: Props) => {
  return (
    <button onClick={action}>
      {name}
    </button>
  );
}

export default Button;