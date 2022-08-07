import React from 'react';
import logo1 from '../../Assets/images/logo/logo1.png';
const Fantasy = () => {
    return (
        <div className='container my-24 px-6 mx-auto'>
            <h1 className='text-3xl mb-6 w-96'>We are Fantacy We've got you covered on</h1>
            <div className='grid lg:grid-cols-3 gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 mask mask-squircle">
                                <img src='https://webdesign-mallorca.biz/wp-content/uploads/2019/03/webdesign-mallorca-logo-250x250.png' alt='' />
                            </div>
                        </div>
                        <h2 className="card-title">Facility Management</h2>
                        <p className='mb-2'>Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.</p>

                        <div className='flex flex-col'>
                            <i className="fa fa-plus-circle mb-2" style={{ color: '#795AFB' }}> <span className='text-black font-normal ml-1'>Knowledge Base</span></i>
                            <i className="fa fa-plus-circle mb-2" style={{ color: '#795AFB' }}> <span className='text-black font-normal ml-1'>Knowledge Base</span></i>
                            <i className="fa fa-plus-circle mb-2" style={{ color: '#795AFB' }}> <span className='text-black font-normal ml-1'>Knowledge Base</span></i>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 mask mask-squircle">
                                <img src='https://webdesign-mallorca.biz/wp-content/uploads/2019/03/webdesign-mallorca-logo-250x250.png' alt='' />
                            </div>
                        </div>
                        <h2 className="card-title">Pixel Perfect</h2>
                        <p className='mb-2'>Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.</p>
                        <div className='flex flex-col'>
                            <i className="fa fa-plus-circle mb-2" style={{ color: '#795AFB' }}> <span className='text-black font-normal ml-1'>Knowledge Base</span></i>
                            <i className="fa fa-plus-circle mb-2" style={{ color: '#795AFB' }}> <span className='text-black font-normal ml-1'>Knowledge Base</span></i>
                            <i className="fa fa-plus-circle mb-2" style={{ color: '#795AFB' }}> <span className='text-black font-normal ml-1'>Knowledge Base</span></i>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 mask mask-squircle">
                                <img src='https://webdesign-mallorca.biz/wp-content/uploads/2019/03/webdesign-mallorca-logo-250x250.png' alt='' />
                            </div>
                        </div>
                        <h2 className="card-title">Creative web solution</h2>
                        <p className='mb-2'>Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.</p>
                        <div className='flex flex-col '>
                            <i className="fa fa-plus-circle mb-2" style={{ color: '#795AFB' }}> <span className='text-black font-normal ml-1'>Knowledge Base</span></i>
                            <i className="fa fa-plus-circle mb-2" style={{ color: '#795AFB' }}> <span className='text-black font-normal ml-1'>Knowledge Base</span></i>
                            <i className="fa fa-plus-circle mb-2" style={{ color: '#795AFB' }}> <span className='text-black font-normal ml-1'>Knowledge Base</span></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fantasy;