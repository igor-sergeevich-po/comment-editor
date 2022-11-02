import './App.css';
import Comments from './components/Comments/Comments.js';
import Likes from './components/Likes/Likes.js';
import Title from './components/Title/Title.js';


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
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
