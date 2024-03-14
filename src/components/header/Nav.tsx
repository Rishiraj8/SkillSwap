import { useState, useContext, useEffect } from 'react'
import { userContext } from '../../App';
import { Link } from 'react-router-dom';
import useFetch from '../hook/Usefetch';
import { ArrowLeftRight,  LogIn, LogOut, Menu } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { username_context } from '../../App';




type skill_type = {
	skill_id: string;
	name: string;
	description: string;
}

export default function Nav() {
	const [downdrop, setdowndrop] = useState(false)

	const { user_id } = useContext(username_context)
	const navigator = useNavigate()
	const [skilllist, setskill] = useState<skill_type[]>([])


	const { selectedSkill, setSelectedSkill } = useContext(userContext);
	const { setSearchPerson } = useContext(userContext);
	// const { Persons, filterPerson } = useContext(userContext);
	// console.log(searchPerson)
	const { data } = useFetch({ url: 'https://skill-api.penneithendral.workers.dev/getskills' })

	console.log(data?.results);

	useEffect(() => {
		setskill(data?.results)
		console.log("Skill", skilllist)
	}, [data])




	return (

		// hover:bg-gradient-to-r hover:from-[#C3438F] hover:to-[#64053E] hover:text-white transition duration-1000 cursor-pointer">
		<nav className=' bg-custom flex flex-row justify-around items-center sticky top-0 shadow-lg text-black py-1'>
			<div className='flex flex-row gap-2 items-center'>
				<ArrowLeftRight size={32} strokeWidth={2} className='bg-gray-950 text-white rounded-full p-1' />
				<h2 className="text-lg font-bold max-[500px]:hidden">
					SkillSwap
				</h2>

			</div>
			<div className='flex flex-row justify-center h-1/4 items-center'>
				<input
					type="text"
					placeholder="Search for a person"
					className="p-1 w-auto m-2 border-1 border-orange-100 rounded-full placeholder:text-sm px-1 placeholder:text-black text-normal placeholder:font-extralight"
					onChange={(e) => {
						setSearchPerson(e.target.value);
					}}
				/>
				<select className='display:none max-w-fit p-1 h-1/2 rounded-full  font-extralight text-sm text-black max-sm:w-5 max-sm:h-6  max-sm:text-center' id="skillSelect" value={selectedSkill} onChange={event => setSelectedSkill(event.target.value)}>
					<option value="" className=''>Skills</option>
					{skilllist && skilllist.map(skill => (
						<option key={skill.skill_id} value={skill.name} className='text-black'>{skill.name}</option>
					))}
					   
				</select>
			</div>
			<ul className='flex flex-row justify-between max-w-fit gap-6 max-[906px]:hidden text-lg font-bold'>
				<div className="rounded-xl max-w-fit px-2  transition duration-500 cursor-pointer hover:scale-105">
					<Link to='/'>Home</Link>
				</div>
				<div className="rounded-xl max-w-fit px- transition duration-500 cursor-pointer hover:scale-105">
					<Link to='/req'>Requests</Link>
				</div>
				<div className="rounded-xl max-w-fit px- transition duration-500 cursor-pointer hover:scale-105">
					<Link to='/friendlist'>Friend list</Link>
				</div>
				<div className="rounded-xl max-w-fit px- transition duration-500 cursor-pointer hover:scale-105">
					<Link to='/profile'>Profile</Link>
				</div>
				<div>{
					user_id.length == 0 ?  <button onClick={()=>navigator('/auth')}><LogIn /></button> : <button onClick={() => { localStorage.removeItem('user_id'); navigator('/auth') }}> <LogOut /></button>
				}

				</div>

			</ul>
			<div className="nav-bar  min-[906px]:relative hidden  max-[906px]:flex max-[906px]:flex-row max-[906px]:justify-center">

				< button className={downdrop ? 'text-custom-blue font-bold' : ''} onClick={() => { setdowndrop(!downdrop); console.log(downdrop); }}>
					<Menu />


				</button>
				{downdrop ?
					<nav className=' box-border flex flex-col justify-center items-center gap-2 py-2 w-36 shadow-lg absolute -right-2 top-9 z-index-3 bg-custom rounded-lg opacity-90
					' >
						<div className='flex flex-col gap-1'>
							<div className="rounded-xl max-w-fit px-2 hover:font-bold ">
								<Link to='/'>Home</Link>
							</div>
							<div className="rounded-xl max-w-fit px-2 hover:font-bold ">
								<Link to='/req'>Requests</Link>
							</div>
							<div className="rounded-xl max-w-fit px-2 hover:font-bold ">
								<Link to='/friendlist'>Friend list</Link>
							</div>
							<div className="rounded-xl max-w-fit px-2 hover:font-bold ">
								<Link to='/profile'>Profile</Link>
							</div>
							<div>{
								user_id.length == 0 ? <button className="rounded-xl max-w-fit px-2 hover:font-bold " onClick={()=>navigator('/auth')}><LogIn size={17}/></button> : <button className="rounded-xl max-w-fit px-2 hover:font-bold " onClick={() => { localStorage.removeItem('user_id'); navigator('/auth') }}> <LogOut size={17}  /></button>
							}

							</div>


						</div>
					</nav> : null}

			</div>


		</nav>
	);
}