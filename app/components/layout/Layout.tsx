import { FC, ReactNode } from 'react'
import Header from './header/Header'
import CustomCursor from '../ui/custom-cursor/CustomCursor'

export interface ILayout {
	children: ReactNode
}

const Layout = ({ children }: ILayout): JSX.Element => {
	return (
		<div className='bg-bg h-full scroll-smooth '>
			<div className='container m-0-auto'>
				<div className='flex flex-col min-h-100vh'>{children}</div>
			</div>
		</div>
	)
}

export default Layout
