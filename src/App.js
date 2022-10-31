import './App.css';
import Likes from './components/Likes/Likes.js';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <div className='wrap'>
        <div className='card'>
          <div className='card-image'>
            <img src='./minimalizm.jpg' alt='nebo oblaka'/>
            <Title/>
            <Likes/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
