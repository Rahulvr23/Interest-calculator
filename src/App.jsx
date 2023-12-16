
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
function App()


{

  const[Amount,setAmount]=useState(0)
  const[Rate,setRate]=useState(0)
  const[Year,setYear]=useState(0)
  const[interset,setinterset]=useState(0)
  console.log(Amount,Rate,Year);
const calculate=(e)=>{
const Output =Amount*Year*Rate/100 
console.log(Output);
setinterset(Output)

}
const Reset=(e)=>{
setYear(0)
setAmount(0)
  setRate(0)
  
  }

  return (
    <div className="App">
 <div className="container">
  <div className="header">
    <h1>Simple Intereset Calculator</h1>
    <p>Calculate your simple insterest with us ❤️</p>
  </div>
  <div className="total">
    <h2>&#8377;{interset} </h2>
    <p>Your Total amount</p></div>
    <div className="input">
    <TextField id="standard-basic"value={Amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="standard" />
    <TextField id="standard-basic"value={Rate||""} onChange={(e)=>setRate(e.target.value)} label="Rate" variant="standard" />
    <TextField id="standard-basic"value={Year||""}onChange={(e)=>setYear(e.target.value)} label="Year" variant="standard" />
    <div className="button">
    <Button variant="contained" onClick={e=>calculate(e)} >Calculate</Button>
<Button variant="outlined" onClick={e=>Reset(e)}>Reset</Button>
    
    
    </div>
  </div>
 </div>
    </div>
  );
}

export default App;
