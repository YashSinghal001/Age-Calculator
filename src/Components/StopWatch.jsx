import React,{useState} from 'react'

export const StopWatch = () => {
const [age, setAge] = useState(0)
const [birthdate, setBirthdate] = useState('')



function inputdate(event){
setBirthdate(event.target.value);
}

const Age=()=>{
    //Today's Date
const today=new Date();
//Birth Date written in input field
const birthDate=new Date(birthdate);

let age=today.getFullYear()-birthDate.getFullYear();
let month=today.getMonth()-birthDate.getMonth();
//For Extact Birth date
if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate()  ))
{
    age--;
}
setAge(age)



}

const Reset=()=>{
   setBirthdate('') 
   setAge(0)
}
  return (
    <>
<div className="cntr">

<h1>Age Calculator</h1>
<p>The Age Calculator can Calculatae your age</p>
</div>
<div className="container">

<div className="date">
<h2 className='birth'>Date of Birth</h2>
<input type="date" name="" id="" value={birthdate} onChange={inputdate}/>

<div className="btns">
{/* <button onClick={Age} >Calculator Age</button> &nbsp; */}
<button  onClick={Age}>
  <span className="transition"></span>
  <span className="gradient"></span>
  <span className="label">Calculator</span>
</button> &nbsp;


{/* <button onClick={Reset} >Reset</button> */}
<button onClick={Reset}>
  <span className="transition"></span>
  <span className="gradient"></span>
  <span className="label">Reset</span>
</button>

</div>

</div>

<div className="age">
<div className="containerRight">
    <h1 className='agee'>Your Age Is</h1>
    <h1 className='actualage'>{age > 0 ? `${age}`:''}</h1>
</div>
{/* <h1>{age > 0 ? `${age}`:''}</h1> */}

</div>



</div>







    </>
  )
}
