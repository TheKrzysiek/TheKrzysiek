import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

type Props = {
  bname: string;
  action: (name: string) => void;
}

const WriteB = ({ bname, action }: Props) => {

  const [name, setName] = useState('');

  const onNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  function runAction() {
    console.log(name);
    if (name === '') return;
    action(name);
    setName('');
  }

  return (
    <>
      <input
        name="name"
        value={name}
        onChange={onNameChanged}
      />
      <Button name={bname} action={runAction} />
    </>
  );
}

WriteB.propTypes = {
  bname: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}

export default WriteB;