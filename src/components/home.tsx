import React from 'react';
import LandingSection from './section/page1';
import ProfileSection from './section/profile';
import ServiceSection from './section/services';
import { DrawerDemo } from './drawer';

const HomePage = () => {
	return (
		<>
			<div className="h-screen md:bg-cover md:bg-center bg-hero-pattern bg-no-repeat bg-[center_right_-23rem] ">
				<LandingSection />
			</div>
			<div className="h-screen flex text-center justify-center items-center">
				<ProfileSection />
			</div>
			<div className="h-screen flex text-center justify-center items-center">
				<ServiceSection />
			</div>
		</>
	);
};

export default HomePage;
