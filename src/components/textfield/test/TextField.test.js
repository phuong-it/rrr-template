import { render } from '@testing-library/react';
import { TextField } from '../';

describe('TextField', () => {
  test('Render TextField component', () => {

    let tree = render(<TextField />);

    expect(tree).toBeTruthy();
  })
});
