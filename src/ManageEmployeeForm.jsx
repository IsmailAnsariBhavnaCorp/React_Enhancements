import React from 'react';
import { useState } from 'react';
import './App.css';


// const ManageEmployeeForm= () =>{
//     const [fields,setfields]=useState( {
//         Code:'',
//         Name:'',
//         Designation:'',
//     });

    const ManageEmployeeForm= () =>{
        const [fields,setfields]=useState( [{
            Code:'',
            Name:'',
            Designation:'',
        }]);

    const SetValueInHeading= (event) => {

        const value=event.target.value;
        const name=event.target.name;
        
        setfields ((preValue) =>{
            return{
                ...preValue,
                [name]:value,
            
            }
        })
        }



const SetValueInHeadingAfterSubmit= (eventSetValueInHeadingAfterSubmit) => {
    eventSetValueInHeadingAfterSubmit.preventDefault();
    console.log(fields);
    alert(fields.Code + ' ' +fields.Name + ' ' + fields.Designation);
}


return(
<>
<div className='Red-background'>
<form onSubmit={SetValueInHeadingAfterSubmit}> 
  <h2>Manage Employees</h2>
  <input type="text" name='Code' onChange={SetValueInHeading} placeholder="Enter employee code" required/>  <br/> <br/>
  <input type="text" name='Name' onChange={SetValueInHeading} placeholder="Enter employee name" required/>  <br/> <br/>
  <input type="text" name='Designation' onChange={SetValueInHeading} placeholder="Enter employee designation" required/>  <br/> <br/>
  <br/> <br/>
  <button type='submit' className='button-1' role="button">Submit</button>
</form>
<br/> <br/>
</div>
</>
);
}

export default ManageEmployeeForm;