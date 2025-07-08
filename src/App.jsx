import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddJobs from './pages/AddJobs';
import EditJob from './pages/EditJob';
import Stats from './pages/Stats';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
function App(){
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login/>}></Route>
        
        <Route element={<ProtectedRoute/>}>
          <Route element={<Layout/>}>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/add-jobs' element={<AddJobs/>}></Route>
            <Route path='/edit-job/:id' element={<EditJob/>}></Route>
            <Route path='/stats' element ={<Stats/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
          </Route>
        </Route>

        <Route path="/*" element={<NotFound/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;