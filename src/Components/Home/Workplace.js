import React from 'react';
import work from '../../Assets/images/banner-2.png';
const Workplace = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={work} className="lg:max-w-3xl rounded-lg lg:max-h-full" alt='' />
                    </div>
                    <div>
                        <h6 className='mb-5 font-bold'>Creative Agency</h6>
                        <h1 className="text-3xl font-bold">Creating a workplace environment of transparency ownership</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button type="button" className=" inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize">Read Success Story</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workplace;