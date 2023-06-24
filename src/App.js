// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <div className='box'>

        <div>
        <ul>
          <li className='box-logo'>
          <img className='logo' src='img/logo.png' alt='img'></img>
          <span className='title'>회사로고</span>
          </li>

          <li className='selected'>
          <img className='icon-select' src='img/icon-01.png' alt='img'></img>
          <span className='selected-title'>대시보드</span>
          </li>

          <li>
          <img className='icon' src='img/icon-02.png' alt='img'></img>
          <span className='text'>일정관리</span>
          </li>

          <li>
          <img className='icon' src='img/icon-03.png' alt='img'></img>
          <span className='text'>결제관리</span>
          </li>

          <li className='message'>
            <div className='message-box'>
          <img className='icon' src='img/icon-04.png' alt='img' ></img>
          <span className='text'>메시지</span>

          <span class="item_num"></span>

          </div>

          

          <div>
          <span className='number'>12</span>
          </div>
          </li>
          



          </ul>
          </div>

          <div>
           <ul>
          <li className='logout'>
          <img className='icon' src='img/icon-05.png' alt='img'></img>
          <span className='text'>로그아웃</span>
          </li>
          </ul>
        
          </div>

       


      </div>

    
      </header>

     
    </div>
  );
}

export default App;
