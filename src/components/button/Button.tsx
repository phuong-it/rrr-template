import React from 'react';

export interface ButtonProps {
  onClick?: any;
  isPrimary?: boolean;
  disabled?: boolean;
}

function Button(props: React.PropsWithChildren<ButtonProps>) {
  return (
    <button disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export { Button };
