import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const ProfileSection = () => {
	return (
		<div
			id="profile"
			className="h-screen flex md:flex-row flex-col gap-2 justify-center items-center py-20 md:pt-0 overflow-hidden min-h-screen"
		>
			<div className="flex-1">
				<Image src="/img/bldg.png" alt="profile" width="700" height="700" className="p-2 max-w-auto"></Image>
			</div>
			<div className="flex-1 px-2 md:px-4 md:p-0 ">
				<h2 className="font-semibold text-3xl md:text-5xl my-1 md:my-4 text-left">Profile</h2>
				<p className="text-pretty text-left font-semibold text-[0.6rem] lg:text-xl md:text-sm">
					Welcome to Model Decile, your premier destination for tailored financial services in Wealth Management, Mutual
					Funds, Insurance, and Fixed Deposits. At Model Decile, we pride ourselves on offering comprehensive solutions
					that cater to all your investment needs under one roof.
					<br />
					<br />
					Our approach revolves around providing personalized attention to each investor, ensuring they have seamless
					access to their investments through a dedicated representative. With our expert guidance, you can analyze your
					portfolio, execute transactions, and provide feedback, all with utmost convenience and efficiency.
					<br />
					<br />
					Whether you're looking to grow your wealth, safeguard your assets, or plan for the future, our team at Model
					Decile is here to design portfolios that align with your goals and aspirations. Experience the difference of a
					holistic financial service provider committed to your success.
				</p>
				<Button className="mt-4 md:mt-8 bg-blue-500">Learn More</Button>
			</div>
		</div>
	);
};

export default ProfileSection;
