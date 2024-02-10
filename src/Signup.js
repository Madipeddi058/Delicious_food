import React,{useState}  from 'react';
import img13 from './images/tom-y-jerry-jerry (1).gif'
import { Link } from 'react-router-dom';



export default function Signup() {
    const[data,setData]= useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: '',

    })
    const {username,email,password,confirmpassword}=data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e =>{
        e.preventDefault();
        if(password === confirmpassword){
            console.log(data);
        }
        else{
            console.log("password not matching")
        }
       
    }
  return (
    <div style={{display:"flex"}}>
        {/* <img src={img12}style={{height:"150px",width:"150px", marginTop:"150px"}} alt="jerry" /> */}
        <center style={{display:"flex"}}> 
        
            <img src={img13}style={{height:"150px",width:"150px", marginTop:"230px",marginLeft:"300px"}} alt="jerry" />
            <form style={{backgroundColor:"#c38282", height:"350px", width:"300px", borderRadius:"5px", marginLeft:"0px", marginTop:"30px"}}> 
                <p style={{marginTop:"10px", color:"white",fontSize:"25px"}}><b>Signup</b></p>
                <label style={{fontSize:"13px",marginRight:"120px", color:"white"}}><b>Username:</b></label><br/>
                <input style={{height:"20px", width:"200px"}} type="text" name="username" value={username} onChange={changeHandler} /><br/>
                <label style={{fontSize:"13px",marginRight:"150px", color:"white"}}><b>Email:</b></label><br/>
                <input style={{height:"20px", width:"200px"}} type="email" name="email" value={email} onChange={changeHandler}  /><br/>
                <label style={{fontSize:"13px",marginRight:"125px", color:"white"}}><b>Password:</b></label><br/>
                <input style={{height:"20px", width:"200px"}} type="password" name="password" value={password} onChange={changeHandler} /><br/>
                <label style={{fontSize:"13px",marginRight:"75px", color:"white"}}><b>Confirmpassword:</b></label><br/>
                <input style={{height:"20px", width:"200px"}} type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler} /><br/>
                <input  style={{marginTop:"20px",border:"none",borderRadius:"8px", height:"25px",width:"80px", fontWeight:"bold"}} type="submit" name="submit" onChange={submitHandler} /><br/>
                <p style={{fontSize:"10px", color:"white", marginLeft:"140px"}}><u>Already registerd  <Link to="/Login"><b style={{color:"yellow", fontSize:"12px"}}>Login</b></Link></u></p>
                
            </form>
            
        </center>
      
    </div>
  )
}
