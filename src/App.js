import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/Layout';
import AllEmployees from './pages/AllEmployees';
import AddEmployees from './pages/AddEmployees';
import EditEmployee from './pages/EditEmployee';

function App() {
  return (
   <>
   <Layout>
    <Routes>
      <Route path='/' element={<AllEmployees />} ></Route>
      <Route path='/add-employee' element={<AddEmployees />} ></Route>
      <Route path='/edit-employee/:id' element={<EditEmployee />} ></Route>
    </Routes>
   </Layout>
   </>
  );
}

export default App;
