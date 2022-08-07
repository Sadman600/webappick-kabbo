import React from 'react';
import '../../Assets/styles/imgstyle.css';
const TeamMembers = () => {

    return (
        <div>

            <div className="container my-24 px-6 mx-auto">


                <section className="mb-32 text-gray-800 text-center">

                    <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
                        <div className="mb-6 lg:mb-0">
                            <div className="bg-white block rounded-lg shadow-lg">
                                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                    <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt='' className="imgStyle w-full rounded-t-lg" />
                                    <a href="#!">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                    </a>

                                </div>
                                <div className="p-6">
                                    <h5 className="text-lg font-bold mb-4">Maria Smith</h5>
                                    <p className="text-gray-500 mb-4">Frontend Developer</p>

                                </div>
                            </div>
                        </div>

                        <div className="mb-6 lg:mb-0">
                            <div className="bg-white block rounded-lg shadow-lg">
                                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                    <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" className=" imgStyle w-full rounded-t-lg" alt='' />
                                    <a href="#!">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                    </a>

                                </div>
                                <div className="p-6">
                                    <h5 className="text-lg font-bold mb-4">Darren Randolph</h5>
                                    <p className="text-gray-500 mb-4">Marketing expert</p>

                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="bg-white block rounded-lg shadow-lg">
                                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                    <img src="https://mdbootstrap.com/img/new/avatars/15.jpg" className="imgStyle w-full rounded-t-lg" alt='' />
                                    <a href="#!">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                    </a>

                                </div>
                                <div className="p-6">
                                    <h5 className="text-lg font-bold mb-4">Ayat Black</h5>
                                    <p className="text-gray-500 mb-4">Web designer</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

        </div>
    );
};

export default TeamMembers;