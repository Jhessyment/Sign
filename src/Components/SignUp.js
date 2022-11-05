import "../style/SignUp.css"
import {useState} from 'react'



const SignUp = (props)=> {

    const [password,setPassword]= useState("")
    const [confrimPassword,confirmPassword]= useState("")

     const changePassword = (event)=>{
        setPassword(event.target.value)
     }

     const changeConfirmPassword = (event)=>{
        setConfirmPassword(event.target.value)
     }
const validatePasswords =(event)=>{

    const validatedPasswords = ()=> {
if (password=== confirmPassword){

props.userAuthChanged()
} 

else{ alert("They dont match :(")



}
    }

}

  return (

    <div>
<h1>Sign Up</h1>

    
<form onSubmit={validatePasswords} className="sign-Up"> 
    <label>Name</label>
    
    <input type="text"/>
    <input type="password" onChange={changePassword} value={password}/>
    <input type="password" onChange={changeConfirmPassword} value={confirmPassword}/>
    <input type="submit"/>

</form>
</div>





)
}
export default SignUp