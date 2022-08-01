import React from 'react';

const AgencyTask = () => {
    return (
        <div>
            <div className='container my-24 px-6 mx-auto'>
                <div className='flex justify-center text-center'>
                    <h1 className='text-3xl  w-96 mx-auto p-6'>We have done lot of Agency Task</h1>
                </div>
                <div className='grid lg:grid-cols-3 gap-4'>

                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img class="rounded-lg" src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            </a>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img class="rounded-lg" src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            </a>

                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img class="rounded-lg" src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            </a>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center my-5'>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize">Agency more task</button>
                </div>
            </div>
        </div>
    );
};

export default AgencyTask;