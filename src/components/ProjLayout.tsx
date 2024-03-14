
import  { FC, ReactNode } from 'react'
import Nav from './header/Nav';

interface ProjLayoutProps {
	children: ReactNode;
}

export const ProjLayout: FC<ProjLayoutProps> = ({children}) => {
	return (
		<div>
			<Nav/>
			
			{children}
			
		</div>
	)
}
