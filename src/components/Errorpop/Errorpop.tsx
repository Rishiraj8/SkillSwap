

type err = {
	err: any;
	open: boolean;
	changencomponent: (value: boolean) => void;
}

export default function Errorpop({err,open,changencomponent}:err) {
	
	
  return (
	<dialog className='flex flex-col gap-3 bg-gray-900 p-4 text-white transform:none' open={open}>
		<h1 className='flex flex-row '>Error Message</h1>
		<div>
			{err}
		</div>
		<div className='flex flex-row justify-end '>
		<button onClick={()=>changencomponent(false)} className='bg-red-500 p-2 rounded-lg' > cancel</button>
	    </div>
	</dialog>
  )
}
