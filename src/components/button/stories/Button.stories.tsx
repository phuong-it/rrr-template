import { action } from '@storybook/addon-actions';
import { Button, ButtonProps } from '../';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('Default', () => render({}))
  .add('Disabled', () => render({ disabled: true }));

function render(props: ButtonProps) {
  return (
    <div>
      <Button {...props} onClick={action('onClick')}>
        Default Button
      </Button>
      <Button {...props} isPrimary onClick={action('onClick')}>
        Primary Button
      </Button>
    </div>
  );
}
