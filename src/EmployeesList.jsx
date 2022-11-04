import React from 'react';
import { useState } from 'react';


const EmployeesList= () =>{

    const [fields,setfields]=useState( {
        Code:'',
        Name:'',
        Designation:'',
    });

    const [fieldsArr,setfieldsArr]=useState( [{
        Code:'',
        Name:'',
        Designation:'',
    }]);

//Setting Values Of Input Fileds Start
 function SetValueInHeading(event)  {

    const value=event.target.value;
    const name=event.target.name;
    
    setfields ((preValue) =>{
        return{
            ...preValue,
            [name]:value, 
        }
    })
    }
//Setting Values Of Input Fileds Start


//After Submit Data Fill In a Table Start
function SetValueInHeadingAfterSubmit(eventSetValueInHeadingAfterSubmit) {

eventSetValueInHeadingAfterSubmit.preventDefault();
const code= document.getElementsByClassName("code")[0].value;

if(fieldsArr.filter(item => item.Code === code).length === 0 ) 
     {
    setfieldsArr(fieldsArr => fieldsArr.concat(fields))
   console.log(fieldsArr);
}
else{

    for (var i=0; i < fieldsArr.length ; i++) {
        debugger
        if(fieldsArr[i].Code === code){
            debugger
            fieldsArr[i].Name= fields.Name;
            fieldsArr[i].Designation= fields.Designation;

       
        }
    }
    debugger
    setfieldsArr([...fieldsArr])
}

FormReset();

}
//After Submit Data Fill In a Table End

function FormReset(){
    document.getElementById("employeeForm").reset();
    document.getElementById('formheading_1').textContent = 'Create Employees';
}


//Delete record Start
function DeleteRecord(event){
const fieldsArr_new = fieldsArr.filter(item => item.Code !== event.target.getAttribute('data-Code'));
setfieldsArr(fieldsArr_new);
}
//Delete record End

///Updated record Start
function UpdateRecord(event){
    const fieldsArr_new = fieldsArr.filter(item => item.Code === event.target.getAttribute('data-Code'));
    document.getElementsByClassName("code")[0].value = fieldsArr_new[0].Code;
    document.getElementsByClassName("name")[0].value = fieldsArr_new[0].Name;
    document.getElementsByClassName("designation")[0].value = fieldsArr_new[0].Designation;
    document.getElementById('formheading_1').textContent = 'Update Employees';
    console.log(fieldsArr);

    }
///Updated record End

return(
<>
<table className='styled-table'>
    <thead>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {
            fieldsArr.map((employee,index)=>{
                if(employee.Code != null && employee.Code != ''){
                return(
                <>
               <tr>
                <td>{employee.Code}</td>
                <td>{employee.Name}</td>
                <td>{employee.Designation}</td>
                <td>
                    <a href='#'  data-Code={employee.Code} onClick={UpdateRecord}>Update</a><span>  </span>
                    <a href='#' data-Code={employee.Code} onClick={DeleteRecord} >delete</a>
                    </td>
                </tr>
                </>
                )
            }
            })
        }
       

    </tbody>
</table>

<hr className="new1" style={{borderTop:'1px solid red'}}/>
<hr className="new1" style={{borderTop:'1px solid red'}}/>


<div className='Red-background' style={{margin:'15px'}}>
<form style={{margin:'15px'}} onSubmit={SetValueInHeadingAfterSubmit} id='employeeForm'> 
  <h2 id='formheading_1'>Create Employees</h2>
  <input type="text" name='Code' className='code' onChange={SetValueInHeading} placeholder="Enter employee code" required/>  <br/> <br/>
  <input type="text" name='Name' className='name' onChange={SetValueInHeading} placeholder="Enter employee name" required/>  <br/> <br/>
  <input type="text" name='Designation' className='designation' onChange={SetValueInHeading} placeholder="Enter employee designation" required/>  <br/> <br/>
  <br/> <br/>
  <button type='submit' className='button-1' role="button">Submit</button>
  <button type='button' onClick={FormReset} className='button-1' style={{backgroundColor:'red',marginLeft:'15px'}} role="button">Cancel</button>
</form>
<br/> <br/>
</div>
</>
    )
}


export default EmployeesList;