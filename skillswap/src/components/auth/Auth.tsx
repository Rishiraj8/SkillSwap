
import { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import { ArrowLeftRight } from 'lucide-react';

export default function Auth() {
	const [swapauth, setswap] = useState(true);

	return (
		<div className='h-screen flex flex-col justify-center items-center text-xl font-sans bg-custom-blue rounded-lg'>
			<div className='flex flex-col gap-6 bg-custom shadow-lg p-6 rounded-lg'>
			<div className='flex flex-row justify-center items-center w-full h-full gap-2'>
			<div className='flex flex-row gap-2 items-center'>
				<ArrowLeftRight size={32} strokeWidth={2} className='bg-gray-950 text-white rounded-full p-1' />
				<h2 className="text-lg font-bold max-[500px]:hidden">
					SkillSwap
				</h2>

			</div>

				</div>
				
				{swapauth ?   <Login />:<Signup />}

				<div className='grid grid-cols-2 w-full h-full gap-2'>
					{!swapauth?
					<button  onClick={() => setswap(true)} className='text-sm'>Already have acount?</button>:
					<button  onClick={() => setswap( false)} className='text-sm'>Don't have a acount?</button>}
				</div>
			</div>
		</div>
	);
}
