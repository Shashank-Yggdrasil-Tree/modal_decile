'use client';

import Link from 'next/link';
import MediaQuery from 'react-responsive';
import { DrawerDemo } from './drawer';

const Header = () => {
	const tabs = [
		{
			name: 'Contact Us',
			path: '#contact',
		},
		{
			name: 'Our Services',
			path: '#services',
		},
		{
			name: 'About Us',
			path: '#profile',
		},
		{
			name: 'Home',
			path: '#home',
		},
	];

	return (
		<>
			<div className="bg-black text-white sticky top-0 p-2 flex flex-row-reverse gap-x-8 w-100 font-medium bg-[#050a30]">
				<DrawerDemo />
			</div>
			<MediaQuery minWidth={1224}>
				<div className="bg-black text-white sticky top-0 p-2 flex flex-row-reverse gap-x-8 w-100 font-medium">
					{tabs.map((item) => (
						<Link key={item.name} href={item.path}>
							{item.name}
						</Link>
					))}
				</div>
			</MediaQuery>
		</>
	);
};

export default Header;
