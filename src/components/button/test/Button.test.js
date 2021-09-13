import { render } from '@testing-library/react';
import { Button } from '../';

describe('Button', () => {
  test('Render Button component', () => {

    let tree = render(<Button />);

    expect(tree).toBeTruthy();
  })
});
