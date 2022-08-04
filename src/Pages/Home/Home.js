import React from 'react';
import AgencyTask from '../../Components/Home/AgencyTask';
import Archive from '../../Components/Home/Archive';
import Blog from '../../Components/Home/Blog';
import ClientsSay from '../../Components/Home/ClientsSay';
import DesignAgency from '../../Components/Home/DesignAgency';
import Fantasy from '../../Components/Home/Fantasy';
import MainBanner from '../../Components/Home/MainBanner';
import TeamMembers from '../../Components/Home/TeamMembers';
import Workplace from '../../Components/Home/Workplace';

const Home = () => {
    return (
        <div className=''>
            <MainBanner />
            <Archive />
            <Fantasy />
            <Workplace />
            <DesignAgency />
            <Blog />
            <ClientsSay />
            <TeamMembers />
            <AgencyTask />
        </div>
    );
};

export default Home;