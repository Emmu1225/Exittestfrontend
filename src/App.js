
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Signin from './Components/Signin';
import Feedback from './Components/Feedback';

function App() {
  return (
    
    <div>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
      </Routes>
     </div>
   
  );
}

export default App;
