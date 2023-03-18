import React ,{ Component } from 'react';
import './App.css';
import Main from './Main';
import MyProvider from './MyProvider';

class App extends Component {
  render(){
    return (
      <MyProvider>
   
        <div className='app'>
          <Main />
        </div>
      </MyProvider>
  
    );
  }

}

export default App;
