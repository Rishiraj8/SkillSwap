import React, { useState } from "react"
import { username_context } from "../../App"
import { CircleUser } from "lucide-react"

type Requst = {
	name: string,
	skill: string,

	message: string,
	skill_id: string,
	requester_id: string
}

type send = {
	skill_id: string,
	requester_id: string,
	receiver_id: string,
	rating: Number,
}

export default function ReqChart({ name, skill, skill_id, requester_id }: Requst) {
	const [rating, setrating] = useState(0)

	

	const [remove, setremove] = useState(false)

	const [buttonstatus, buttonsetstatus] = useState(true)


	const { user_id } = React.useContext(username_context)
	function apicall() {
		if (rating > 5 || rating < 0 || !rating) {
			alert('Rating should be between 0 and 5')
			return
		}
		const senddata: send = {
			requester_id: user_id,
			skill_id: skill_id,
			receiver_id: requester_id,
			rating: rating,

		}
		setremove(true)
		fetch('https://skill-api.penneithendral.workers.dev/requests/respond', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(senddata)
		}).then(res => res.json()).then(data => console.log(data))
	}

	return (

		<>
			{
				remove ? null :


					<div className='flex flex-col gap-3 bg-custom w-56 p-3 rounded-md  hover:scale-105 hover:duration-500 '>

						<div className="flex flex-row justify-center">
							<CircleUser size={40} />
						</div>

						<div className="flex flex-col justify-evenly h-40">

							<h2> <span className="font-bold">User Name </span>: {name}</h2>

							<p><span className="font-bold">Skill</span> : {skill}</p>

							<div className="flex flex-row justify-between">


								{buttonstatus ?
									<button onClick={() => buttonsetstatus(false)} className="bg-red-500 px-2 py-2 text-white max-w-fit rounded-xl" >Rating</button>

									:

									<div>

										<input type='Number' className='w-20 rounded-full' min='0' max='5' onChange={(e) => setrating(Number(e.target.value))} />

										<button onClick={() => {
											apicall();
											buttonsetstatus(true)
										}} className="bg-red-500 px-2 py-2 text-white max-w-fit rounded-xl" >Send</button>
									</div>
								}

							</div>



						</div>
					</div>
			}

		</>


	)
}
