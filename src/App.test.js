import React from 'react';
import ReactDOM from 'react-dom';
//import { render, screen } from '@testing-library/react';
import App from './App';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
 expect(linkElement).toBeInTheDocument();
});*/ // comando que veio automatic0
it('renders withou crashing', ()=>{
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}) // comando do professor