import { action } from '@storybook/addon-actions';
import { TextField, TextFieldProps } from '../';
import { storiesOf } from '@storybook/react';

storiesOf('TextField', module)
  .add(
    'Default',
    () => render({})
  );

function render(props: TextFieldProps) {
  return (
    <TextField {...props} onChange={action('onChange')} />
  );
}
