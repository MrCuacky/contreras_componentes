import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  height:100px;
  width:200px;

`;

function App() {
  return (
    <div className="App">
      <div className='links'>
      <a href='https://utd.edu.mx'>
        <Button name='utd'> UTD</Button>
      </a>  
     
        <a href='https://github.com/MrCuacky'>
        <Button name='git'>GitHub</Button>
        </a>  
        
        <a href='https://twitter.com/MrCuacky12'>
        <Button name='twitter'>Twitter</Button >
        </a>
       
        </div>
      </div>
  );
}

export default App;
