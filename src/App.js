import './App.css';
import Likes from './components/Likes/Likes.js';


function App() {
  return (
    <div className="App">
      <div className='wrap'>
        <div className='card'>
          <div className='card-image'>
            <img src='./minimalizm.jpg' alt='nebo oblaka'/>
            <Likes/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
