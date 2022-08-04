import React from 'react';
import dots from '../../Assets/images/dots-1.jpg';
const Archive = () => {
    const divStyle = {
        borderRadius: '250px',
        padding: '20px',
        width: '200px',
        height: '200px',
    };
    return (
        <div >
            <div className='container my-24 px-6 mx-auto '>
                <div className='grid lg:grid-cols-2 gap-5 px-10'>

                    <div className='m-14 ' style={{ backgroundImage: `url(${dots})`, }}>
                        <div className=' flex justify-between'>
                            <div className='-translate-y-16 -translate-x-6 bg-primary flex flex-col justify-center items-center' style={divStyle}>
                                <p className='font-bold'>Customers</p>
                                <h1 className='text-5xl font-bold text-white'>200+</h1>
                            </div>
                            <div className='translate-y-0 translate-x-6 bg-accent flex flex-col justify-center items-center' style={divStyle}>
                                <p className='font-bold'>Customers</p>
                                <h1 className='text-5xl font-bold text-white'>200+</h1>
                            </div>
                        </div>
                        <div className=' flex  justify-between  '>
                            <div className='translate-y-1 -translate-x-6 shadow-2xl bg-secondary flex flex-col justify-center items-center' style={divStyle}>
                                <p className='font-bold'>Customers</p>
                                <h1 className='text-5xl font-bold text-white'>200+</h1>
                            </div>
                            <div className='translate-y-20 shadow-2xl translate-x-6 bg-primary flex flex-col justify-center items-center' style={divStyle}>
                                <p className='font-bold'>Customers</p>
                                <h1 className='text-5xl font-bold text-white'>200+</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-primary'>Archive</p>
                        <h1 className='text-5xl mb-5'>Create plan and innovate collaborate</h1>
                        <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam blandit viverra lacus a facilisis. Curabitur
                            consequat turpis lorem, in facilisis lectus tempor vel.
                            Vivamus euismod, ligula eu vehicula scelerisque, nisi urna
                            finibus diam, eu mollis nisl leo eget velit. Duis lacus sapien,
                            convallis sit amet ullamcorper vitae, tempor quis lorem. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla est,
                            mattis vel augue sit amet, eleifend consequat nibh. Sed et arcu eget
                            ipsum pharetra ultricies nec ac mi.
                        </p>
                        <div className='flex justify-between mb-10'>
                            <p className='uppercase font-semibold'><span className='text-primary'>112K+</span> Daily Standups</p>
                            <p className='uppercase font-semibold'><span className='text-primary'>112K+</span> Daily Standups</p>
                            <p className='uppercase font-semibold'><span className='text-primary'>112K+</span> Daily Standups</p>
                        </div>
                        <div>
                            <button type="button" class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Archive More..</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Archive;