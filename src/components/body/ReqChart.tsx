import React, { useState } from 'react'
import {  username_context } from '../../App'
import { CircleUser } from 'lucide-react'

type Requst = {
	name: string,
	skill: string,

	message: string,
	skill_id: string,
	requester_id: string
}
type response = {
	requester_id: string
	status: Boolean
	receiver_id: string
	skill_id: string

}
export default function ReqChart({ name, skill, message, skill_id, requester_id }: Requst) {
	const { user_id } = React.useContext(username_context)
	console.log("user_id in req card", user_id)
	const [buttonstatus, buttonsetstatus] = useState(true)

	const [Accept, setAccept] = useState(false)


	function resposeHandler(res: Boolean) {

		const sender: response = {
			requester_id: requester_id,
			status: res,
			receiver_id: user_id,
			skill_id: skill_id
		}
		console.log(sender)

		fetch('https://skill-api.penneithendral.workers.dev/res', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(sender)
		}).then((res) => { console.log(res) }
		).catch((err) => { console.log(err) })

		if (res === true) {
			setAccept(true)

		}
		else {
			buttonsetstatus
				(false)
		}
	}
	return (
		<>

			{
				buttonstatus ? (
					<div className='grid grid-cols-4 gap-3 bg-gay-500  p-4 bg-custom rounded-md w-1/2  max-sm:flex max-sm:flex-col max-sm:gap-3 hover:scale-105 hover:duration-500 '>
						<div className='flex flex-col gap-3 col-span-3 max-sm:order-last'>
							<h2><span className='font-bold'>User Name</span> :{name}</h2>

							<p><span className='font-bold'>Skill</span>:{skill}</p>
							{/* <p>Rating:{ <span>Rating</span> }</p> */}
							<p><span className='font-bold'>Message</span>:{message}</p>
							{
								Accept ? (
									<button disabled={true} className='bg-green-300'>Accept</button>
								) : (
									<div className='flex flex-row gap-2 justify-between w-full '>
										<button onClick={() => resposeHandler(true)} className='bg-green-300 rounded-lg px-2 py-1'>Accept</button>
										<button onClick={() => resposeHandler(false)} className='bg-red-400 rounded-lg px-2 py-1' >Reject</button>
									</div>


								)

							}
						</div>
						<div className='flex flex-row justify-center items-center w-full '>
						<CircleUser size={70}  className='max-w-fit'/>
						</div>



					</div>
				)
					: true
			}

		</>



	)
}
