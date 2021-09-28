import { render, screen } from '@testing-library/react';
import App from './App';


test('should return total number of characters', () => {
  function totalCharsInName(name){
    return name.length
  }

  expect(totalCharsInName('Steve')).toEqual(5)
})
