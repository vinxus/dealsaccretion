import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders Dashboard', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Mission', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Mission/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Vision', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Vision/i);
  expect(linkElement).toBeInTheDocument();
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
