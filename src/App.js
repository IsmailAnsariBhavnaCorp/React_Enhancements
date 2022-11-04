import React from 'react';
import './App.css';
import EmployeesList from './EmployeesList';
import ManageEmployeeForm from './ManageEmployeeForm';


function App(){
  return(
  <>
  <div>
     <h1 style={{margin:'15px'}}>Manage Employees</h1>
     <EmployeesList/>
     {/* <ManageEmployeeForm/> */}
   </div>
  </>
  )
}


export default App;
