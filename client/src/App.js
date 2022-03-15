
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepg } from './pages/Homepg'
import { LogIn } from './layout/LogIn';
import { Signin } from './layout/Signin';
import { Chart } from './layout/Chart';
import { Sidebar } from './pages/Sidebar';
import { Orders } from './layout/Orders';
import { useState } from 'react';
import { Mycontext } from './context/Mycontext';
import { Menuclient } from './pages/Menuclient';
import { Dispatch } from './layout/Dispatch';

import {AuthProvider} from './context/UseAuth';
import {RequireAuth} from './layout/RequireAuth';
import { Reservation } from './pages/Reservation';
import { Contact } from './pages/Contact';




function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="App">

      <BrowserRouter>
      <AuthProvider>
      <Mycontext>
        
      
        <Routes>

          <Route path='/' element={<Homepg />} />
          <Route path='login' element={<LogIn />} />
          <Route path='signin' element={<Signin />} />
          {/* <Route path='logged' element={<Sidebar/>}/> */}
          
          <Route path='/reservations' element={<Reservation/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/client' element={<Menuclient/>}/>
          <Route path='chart' element={<RequireAuth><Chart /></RequireAuth>} />
          <Route path='orders' element={<RequireAuth><Orders /></RequireAuth>} />          
          <Route path='dispatch' element={<RequireAuth><Dispatch/></RequireAuth>}/>
          
        </Routes>


        </Mycontext>
        </AuthProvider>
      </BrowserRouter>





    </div>
  );
}

export default App;
