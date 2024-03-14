import React, { useState } from 'react'
import { username_context } from '../../App' 
import { useNavigate } from 'react-router-dom'
import Errorpop from '../Errorpop/Errorpop'

type Login={
	emailOrUsername:string,
	password:string

}





export default function Login() {
	const [login,setlogin]=useState<Login>({
		emailOrUsername:'',
		password:'',
		
	})
	
	const navigate =useNavigate()

	const[err,seterror]=useState(false)
	const [errormsg,setmsg]=useState('')

	const {setuser_id}=React.useContext(username_context)
	// const [logwithemail,setlogwithemail]=React.useState(false)
	

	function apilogin(){
		setlogin({...login,emailOrUsername:'',password:''})

		
		console.log(login)
		fetch('https://skill-api.penneithendral.workers.dev/login',{
			method:'POST',
			headers:{	
				'Content-Type':'application/json',
			},
			body:JSON.stringify(login)
			}).then(res=>res.json()).then( data=>{if(data.isCorrectPassword){
				setuser_id(data.username)
				localStorage.setItem('user_id',data.username)
				localStorage.setItem('emailOrUsername',login.emailOrUsername)
				localStorage.setItem('password',login.password)
				navigate('/')
			}
			else{
				setmsg("Please Enter Correct username and Password")
				seterror(true)
			}
		
		})
			
		}
		function changencomponent(err: boolean) {
			seterror(err);
		}
	
  return (
	<>{
		err?<Errorpop  err={errormsg} open={err} changencomponent={changencomponent} />:
	
	

		
		<div className='flex flex-col gap-5'>

			<div className="flex flex-col gap-3">
				<label htmlFor="" className='text-lg'>Username or Email :</label>
				<input type='text' value={login.emailOrUsername}  placeholder='username email ' required className='rounded-lg px-2'  onChange={(e)=>setlogin({...login,emailOrUsername:e.target.value})}/>
			</div>


			
			<div className="flex flex-col gap-3">
				<label htmlFor=""className='text-lg' >Password :</label>
				
			<input type='password' value={login.password} placeholder='password' required className='rounded-lg px-2' onChange={(e)=>setlogin({...login,password:e.target.value})} />
			</div>
			<button onClick={()=>apilogin()} >Login</button>

			
		</div>
}

		</>
	  
	
  )
  }
