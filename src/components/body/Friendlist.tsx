import React from 'react'

import Usefetch from '../hook/Usefetch'
import { Requsetrecived } from '../../schema structure/Schema'
import { username_context } from '../../App'
import FriendCard from './FriendCard'
import Loader from '../Loader/Loader'
export default function RequsetSend() {
	const { user_id } = React.useContext(username_context)
	const { data, loading } = Usefetch({ url: `https://skill-api.penneithendral.workers.dev/requestsfriend/${user_id}` })
	// const renderdata=data.results[0]
	console.log("Friend _list", data)
	return (

		<div className='box-border flex flex-col gap-4 m-3'>

			<h2 className='flex flex-row justify-center items-center font-bold  text-3xl text-white' >Friend List</h2>

			{loading ? <div className='flex flex-col h-screen justify-center items-center'><Loader /></div> :
				<div className='flex flex-row flex-wrap gap-3 px-10 justify-center'>
					{
						data?.results.map((person: Requsetrecived, index: React.Key | null | undefined) => <FriendCard key={index}
							name={person.requester_name}
							skill={person.requester_skills}
							message={person.message}
							skill_id={person.skill_id}
							requester_id={person.requester_id}
						/>)
					}
				</div>
			}



		</div>

	)
}
// const uniqueResults = data?.results.filter((value, index, self) =>
//   self.map(x => x.requester_name).indexOf(value.requester_name) === index
// );