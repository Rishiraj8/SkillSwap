import { CircleUser, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import useFetch from '../hook/Usefetch'
import { SendHorizontal } from 'lucide-react';
import { username_context } from '../../App'
import {  useNavigate } from 'react-router-dom';



type skill_type = {
	user_name: string;
	skill_name: string,
}

export default function Profile() {

	const nav = useNavigate()



	const [user_name, setname] = useState('')
	const { user_id } = React.useContext(username_context)



	const [userskill, setuserskill] = React.useState('')
	const [skilllist, setskilllist] = React.useState<string[]>([])


	const { data } = useFetch({ url: `https://skill-api.penneithendral.workers.dev/getskills/${user_id}` })

	useEffect(() => {
		setskilllist(data?.results.map((skill: skill_type) => skill.skill_name))
		console.log(user_name, data?.results[0]?.user_name)

		setname(data?.results[0]?.user_name)
		console.log(data, skilllist)
	}, [data])
	console.log(skilllist)
	console.log(userskill)
	function apicall(skill: string) {

		console.log({ name: skill })
		fetch('https://skill-api.penneithendral.workers.dev/skills', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name: skill, user_id: user_id })
		}).then(res => res.json()).then(data => console.log(data))
	}


	return (
		<div className=' flex-col text-white flex gap-6 p-3 max-w-full my-7 mx-10 max-md:mx-7 max-md:4'>
			<div className='font-bold text-2xl flex flex-row justify-between max-w-full'>
				<h2>User Detials</h2>
				<button className='hover:bg-gray-300 rounded-full ' onClick={() => nav(-1)}><X /></button>

			</div>
			<div className='flex flex-row  gap-3'>
				<CircleUser size={200} />
			</div>
			<div className='flex flex-col gap-3 px-6'>
				<div className='flex fle-row gap-3'>
					<span className='font-bold'>Userid  :</span> <span> {user_id} </span>
				</div>
				<div className='flex fle-row gap-3'><span className='font-bold'>Username  :</span>  <span> {user_name}</span></div>

			</div>
			<div className='flex flex-col gap-3 '>
				<h1 className='font-bold text-2xl'>Your Skill</h1>

				<div className='flex flex-col px-4 gap-7'>

					<div className="flex flex-row items-center gap-3 ">

						<input type="text" id='skill' value={userskill} onChange={(e) => setuserskill(e.target.value)} className='bg-gray-900 rounded-xl border-2 border-white' />
						<button onClick={() => {
							const temp = userskill.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
							if (!skilllist.includes(temp)) {
								setskilllist([...skilllist, temp])
								apicall(temp)
							}
							setuserskill('')
						}

						}><SendHorizontal size={32} /></button>


					</div>
					<ul className='flex flex-col gap-3   max-w-fit mx-4'>
						{skilllist && skilllist.map((skill, index) => <li key={index} className='list-disc mx-3' > {skill} </li>)}

					</ul>
				</div>
			</div>




		</div>



	)
}
