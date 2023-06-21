import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <div className='box'>
        <ul>
          <li className='box-logo'>
          <img className='logo' src='img/logo.png'></img>
          <span className='title'>회사로고</span>
          </li>

          <li className='selected'>
          <img className='icon-select' src='img/icon-01.png'></img>
          <span className='select'>대시보드</span>
          </li>

          <li>
          <img className='icon' src='img/icon-02.png'></img>
          <span className='text'>일정관리</span>
          </li>

          <li>
          <img className='icon' src='img/icon-03.png'></img>
          <span className='text'>결제관리</span>
          </li>

          <li>
          <img className='icon' src='img/icon-04.png'></img>
          <span className='text'>메시지</span>
          <span className='number'>12</span>
          </li>

          <li className='logout'>
          <img className='icon' src='img/icon-05.png'></img>
          <span className='text'>로그아웃</span>
          </li>


        </ul>


      </div>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactddd
        </a> */}
      </header>

     
    </div>
  );
}

export default App;
