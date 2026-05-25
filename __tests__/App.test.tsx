import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

jest.useFakeTimers();

afterEach(() => {
  jest.clearAllTimers();
});

test('renders correctly', () => {
  let renderer: ReactTestRenderer.ReactTestRenderer | undefined;

  ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(<App />);
  });

  ReactTestRenderer.act(() => {
    renderer?.unmount();
  });
});
