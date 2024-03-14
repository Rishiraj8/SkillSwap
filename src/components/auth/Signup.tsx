import React, { useState } from 'react'
import { Signin } from '../../schema structure/Schema';
import Errorpop from '../Errorpop/Errorpop';
import { username_context } from '../../App';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
	const navigate =useNavigate();

	const{setuser_id}=React.useContext(username_context)


	const[err,seterror]=useState(false)
	const [errormsg,setmsg]=useState('')
// Declare and initialize the 'userid' variable
	const email = ''; // Declare and initialize the 'email' variable
	const username = ''; // Declare and initialize the 'username' variable
	const password = ''; // Declare and initialize the 'password' variable
	


	const [signindata,setsigndata]=useState<Signin>({

		username,
		email,
		password,

	})
	

	
	const api = async()=>{
		console.log(signindata)
		setsigndata({...signindata,username:'',email:'',password:''})
		try {
			if ( signindata.email==='' || signindata.username==='' || signindata.password==='') {
				alert('please fill all the fields')
				return
			}
			fetch('https://skill-api.penneithendral.workers.dev/users',{
				method:'POST',
				headers:{
					'Content-Type':'application/json',
				},
				body:JSON.stringify(signindata)
			}).then(res=>res.json()).then(data=>
				{ console.log(data)
					if(data?.error)seterror(true)
			        setmsg(data?.error)
					if(data?.message){
						setuser_id(data?.random_id)
						localStorage.setItem('user_id',JSON.stringify(data?.random_id))
						navigate('/')
					}
				})
			.catch(err=>alert("error:"+err.message)) // eslint-disable-line no-useless-escape
		} catch (error:any) {
			seterror(true)
			setmsg(error.message)
			
		}
		
	}
	// changencomponent(err,seterror)
	function changencomponent(err: boolean) {
		seterror(err);
	}

	
  return (
	<>{
		err?<Errorpop err={(errormsg) } open={err} changencomponent={changencomponent}/>:
	
	

	
		<div
		 className='flex flex-col gap-5'>

			<div className='flex flex-col gap-3'>			
			<label htmlFor="" className='text-lg'>Username :</label>
			<input type='text' value ={signindata.username} className='rounded-lg px-2' placeholder='username' onChange={(e)=>{
				setsigndata({...signindata,username:e.target.value})
				}}  required/>

              </div>


             <div className='flex flex-col gap-3'>
			<label htmlFor="" className='text-lg'>Email :</label>
			<input type='email'value ={signindata.email} className='rounded-lg px-2'  placeholder='email' onChange={(e)=>{
				setsigndata({...signindata,email:e.target.value})
				}}    required />
			</div>

			<div className='flex flex-col gap-3'>

			<label htmlFor="" className='text-lg'>Password :</label>

			<input type='password' value={signindata.password} className='rounded-lg px-2' placeholder='password' onChange={(e)=>{
				setsigndata({...signindata,password:e.target.value})
				}}  required/>

             </div>
			<div className='flex flex-row justify-center'>
				<button onClick={()=>api()} className=' '>Sigin</button>
				
				{/* <Link to='/' className='text-sm'>forget password? </Link> */}
				
			</div>
			
			
		</div>
		}

		</>
	  
	
  )
}
