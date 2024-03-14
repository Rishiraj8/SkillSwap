
import {  useNavigate } from 'react-router-dom'

export default function Errorpage() {
	const nav=useNavigate()
  return (
	<div className='flex flex-col gap-3 p-5' >
		<h1 className='text-3xl'>404 </h1>

		
	  <p className='text-3xl'>Page Not Found</p>


	  <button className='' onClick={()=>nav('/')}>Try to login</button>
		
	  
	</div>
  )
}
