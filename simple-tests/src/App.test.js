import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('should return total number of characters', () => {
  function totalCharsInName(name){
    return name.length
  }

  expect(totalCharsInName('Steve')).toEqual(5)
})
