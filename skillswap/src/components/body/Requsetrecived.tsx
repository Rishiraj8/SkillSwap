import React from 'react'
import ReqChart from './ReqChart'

import Usefetch from '../hook/Usefetch'
import { Requsetrecived } from '../../schema structure/Schema'
import { username_context } from '../../App'
import Loader from '../Loader/Loader'
export default function RequsetSend() {
	const {user_id}=React.useContext(username_context)
	const {data,loading} =  Usefetch({url: `https://skill-api.penneithendral.workers.dev/requests/${user_id}`})
	// const renderdata=data.results[0]
	console.log(data,"===========")

  return (
	<>{loading?  <div className='flex flex-col h-screen justify-center items-center'><Loader/></div> 
		:
	
	<div className='box-border flex flex-col gap-4 m-3'>

		<h2 className='flex flex-row justify-center w-full font-bold text-3xl text-white ' >Request </h2>
		<div className='flex flex-col flex-wrap gap-3 items-center justify-center  w-full'>
		    {
				data?.results.map((person:Requsetrecived, index: React.Key | null | undefined) => <ReqChart key={index} name={person.requester_name} skill={person.requester_skills} message={person.message} skill_id={person.skill_id} requester_id={person.requester_id} />) 
			}
		</div>
		

	  
	</div>
	}</>

  )
}
