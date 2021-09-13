import React from 'react';

export interface TextFieldProps {
  onChange?: any;
}

function TextField(props: TextFieldProps) {
  return <input {...props}></input>;
}

export { TextField };
