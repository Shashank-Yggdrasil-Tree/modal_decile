import React from 'react';

const LandingSection = () => {
	const sub_title_one = [
		{ name: 'Wealth Management' },
		{ name: '| Mutual Fund' },
		{ name: '| Insurance' },
		{ name: '| Fixed Deposit' },
	];
	const sub_title_two = [{ name: 'Expertise.' }, { name: 'Commitment.' }, { name: 'Value.' }];

	return (
		<>
			<div className="absolute top-80 md:left-20 right-20 left-2 min-w-[95%] md:min-w-fit">
				<h2 className="text-4xl md:text-8xl font-semibold">Model Decile</h2>
				<div className="flex flex-row gap-x-1 flex-wrap md:w-fit">
					{sub_title_one.map((item) => (
						<p key={item.name} className="text-[#9B9B9B] text-nowrap text-xs md:text-2xl font-semibold tracking-wider">
							{item.name}
						</p>
					))}
				</div>
				<div className="flex flex-row gap-x-1 text-pretty">
					{sub_title_two.map((item) => (
						<p key={item.name} className="text-[#9B9B9B] text-nowrap text-xs md:text-2xl font-semibold tracking-wider">
							{item.name}
						</p>
					))}
				</div>
			</div>
		</>
	);
};

export default LandingSection;
