import React from 'react';

const DesignAgency = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div class="hero  bg-base-100">
                    <div class="container mx-auto grid lg:grid-cols-2 gap-5 ">

                        <div className='w-5/6 mt-24'>
                            <div className=''>
                                <p className='text-primary font-bold'>Our Services</p>
                                <h1 class="text-3xl font-bold mt-6  ">Experience design agency in kabbo </h1>
                                <button type="button" class=" my-6 inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Load More</button>
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-2 gap-5  '>

                            <div class="card w-72 h-48 bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">Card title!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div class="card w-72 h-48 backdrop:bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">Card title!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div class="card w-72 h-48 bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">Card title!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>
                            <div class="card w-72 h-48 bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">Card title!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignAgency;