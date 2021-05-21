import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
  ReactDOM.render(<App />, document.createElement('div'));
});
