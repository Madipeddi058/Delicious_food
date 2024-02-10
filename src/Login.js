import React from 'react';
import { Link } from 'react-router-dom';
import img12 from './images/tom-y-jerry-jerry.gif';


function Login(props) {
  return (
    <div>
        <center style={{display:"flex"}} >
            <form style={{backgroundColor:"#c38282", height:"250px", width:"360px", borderRadius:"5px",  marginTop:"30px",marginLeft:"350px"}}>
                <p style={{marginTop:"30px", color:"white", fontSize:"20px"}}><b>Login</b></p>
                <label style={{fontSize:"13px",marginRight:"10px", color:"white"}}><b>Username:</b></label>
                <input type='text' name='username' style={{height:"23px",width:"220px"}}></input><br/>
                <label style={{fontSize:"13px",marginRight:"14px", color:"white"}}><b>Password:</b></label>
                <input type='password' name='password' style={{height:"23px",width:"220px",marginTop:"10px"}}></input><br/>
                <button style={{marginTop:"18px", backgroundColor:"white",border:"none",borderRadius:"5px",height:"25px",width:"80px"}}><b>Submit</b></button>
                <p style={{fontSize:"10px", color:"white", marginLeft:"180px"}}><u>Not registerd  <Link to="/Signup"><b style={{color:"Yellow", fontSize:"12px"}}>Signup</b></Link></u></p>
            </form>
            <img src={img12}style={{height:"150px",width:"150px", marginTop:"150px"}} alt="jerry" />
        </center>
      
    </div>
  )
}

Login.propTypes = {

}

export default Login


