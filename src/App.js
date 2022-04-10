import './App.css';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Users from './Users';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from './CreateUser';
import UserView from './UserView';


function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar/>
        <div class="container-fluid">
        <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/user-create" element={<CreateUser />}/>
        <Route path="/user-view/:id" element={<UserView/>}></Route>
        </Routes>
         </div>
        </div> 
      </div>
    </div>
    </BrowserRouter> 
  );
}

export default App;