import { render } from '@testing-library/react';
import { Router } from 'react-router';
import AuthenticatedApp from '../authenticated-app';
import history from '../utils/history';

test('Render AuthenticatedApp component', () => {
  render(
    <Router history={history}>
      <AuthenticatedApp />
    </Router>
  );
});
