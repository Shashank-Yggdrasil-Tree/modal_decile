import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const ServiceSection = () => {
	const content = [
		{
			l1: 'Wealth Management',
			s1: 'We prepare everything you need for your tax return',
		},
		{
			l1: 'mutual fund',
			s1: 'We build financial models you can pitch to investors',
		},
		{
			l1: 'insurance',
			s1: 'We deliver thoughtful investment advisory services',
		},
		{
			l1: 'fixed deposits',
			s1: 'We build financial models you can pitch to investors',
		},
	];

	return (
		<div
			id="profile"
			className="h-screen flex md:flex-row flex-col gap-2 justify-center items-center pt-10 md:pt-0 overflow-hidden md:px-10 min-w-full overflow-y-auto px-2"
		>
			<div className="flex-1">
				<h2 className="text-left text-2xl md:text-6xl font-semibold pb-5 pl-2 md:pl-0">Our Services</h2>
				<Image
					src="/img/hand_shake.png"
					alt="profile"
					width="800"
					height="400"
					className="p-0 md:p-2 max-h-[40em]"
				></Image>
			</div>
			<div className="flex-1 px-2 md:px-4 md:p-0 justify-center flex-col flex-wrap content-center flex gap-y-8 md:gap-y-10">
				{content.map((list, index) => (
					<div key={list.l1} className="flex gap-x-3 md:gap-x-2">
						<p className="text-[#CAE8FF] text-xl md:text-4xl font-medium md:font-semibold">0{index + 1}</p>
						<div className="flex flex-col md:gap-y-2">
							<p className="uppercase tracking-wider text-lg md:text-4xl text-left font-medium text-[#f4f6fc]">
								{list.l1}
							</p>
							<p className="text-left text-sm md:text-md">{list.s1}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ServiceSection;
