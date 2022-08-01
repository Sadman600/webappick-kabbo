import React from 'react';
import AgencyTask from '../../Components/Home/AgencyTask';
import Blog from '../../Components/Home/Blog';
import ClientsSay from '../../Components/Home/ClientsSay';
import DesignAgency from '../../Components/Home/DesignAgency';
import Fantasy from '../../Components/Home/Fantasy';
import MainBanner from '../../Components/Home/MainBanner';
import Workplace from '../../Components/Home/Workplace';

const Home = () => {
    return (
        <div className=''>
            <MainBanner />
            <Fantasy />
            <Workplace />
            <DesignAgency />
            <Blog />
            <ClientsSay />
            <AgencyTask />
        </div>
    );
};

export default Home;