import React from 'react';
import kabbo from '../../Assets/images/main-banner.png';
const MainBanner = () => {
    return (
        <div>
            <div class="hero text-white bg-gradient-to-r from-primary to-violet-400">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={kabbo} className="lg:max-w-3xl rounded-lg lg:max-h-full" alt='' />
                    </div>
                    <div className='text-start mr-8'>
                        <h1 class="text-5xl font-bold">Easy Busineess Department Management in proper way</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-wide bg-white text-primary">Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;