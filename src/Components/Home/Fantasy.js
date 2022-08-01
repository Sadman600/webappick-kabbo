import React from 'react';

const Fantasy = () => {
    return (
        <div className='container my-24 px-6 mx-auto'>
            <h1 className='text-3xl mb-6 w-96'>We are Fantacy We've got you covered on</h1>
            <div className='grid lg:grid-cols-3 gap-5'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Facility Management</h2>
                        <p>Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.</p>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Pixel Perfect</h2>
                        <p>Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.</p>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Creative web solution</h2>
                        <p>Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fantasy;