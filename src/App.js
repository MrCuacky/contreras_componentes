import './App.css';
import styled from 'styled-components'
import GoogleMap from './GoogleMap';
import Carrusel from './Carrusel'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "purple" : "#e6e6e6"};
  color: ${props => props.primary ? "#555555 " : "purple"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  height:50px;
  width:100px;
  background-color:#de8ede;

`;

function App() {
  return (
    <div className="App">

    <div className='nomaps'>

    <div className='text'>
    <h1>Juan Pablo Contreras Vásquez</h1>
    <h2>Bienvenid@ a mi <span>LINKTREE</span> </h2>
    </div>

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

      <div className='carrusel'>
        <Carrusel></Carrusel>
      </div>

      <>
        <GoogleMap></GoogleMap>
      </>
      </div>
  );
}

export default App;
