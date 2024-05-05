'use client';

import Image from 'next/image';
import React from 'react';

const Footer = () => {
	const content = [
		{
			l1: 'mailing address',
			s1: 'B-301, Gurudatta CHS, Om Nagar, Andheri East, Mumbai - 400059',
		},
		{
			l1: 'phone number',
			s1: <a href="tel:+917710085595">(+91) 77100 85595</a>,
		},
		{
			l1: 'email address',
			s1: <a href="mailto:modeldecile@yahoo.com">modeldecile@yahoo.com</a>,
		},
	];

	return (
		<>
			<div id="contact" className="h-screen flex flex-col justify-center px-2 md:flex-row md:gap-x-5 md:items-end">
				<div>
					<p className="font-semibold text-[#f4f6fc] pb-4 text-lg md:text-6xl">Let's work together.</p>
					<Image src="./img/team_table.png" alt="modal decile" height="800" width="800" className="pb-4"></Image>
				</div>
				<div className="flex flex-col gap-y-4 md:pb-4">
					{content.map((t) => (
						<div>
							<p className="text-[#CAE8FF] font-semibold uppercase">{t.l1}</p>
							<p className="text-[#f4f6fc] text-sm md:text-lg">{t.s1}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Footer;
