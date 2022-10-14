import './App.css';
// import Dashboard from './pages/Dashboard';
import { BrowserRouter,Routes,Route} from "react-router-dom";
// import UserList from './pages/UserList';
import MainLayout from './layout/MainLayout';
import * as React from 'react';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <MainLayout />
          <Routes>
              {/* <Route path='/' element={<UserList />} /> */}
              {/* <Route path='/user/:id' element={<Dashboard />} /> */}
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
