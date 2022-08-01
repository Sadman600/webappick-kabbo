import React from 'react';

const Blog = () => {
    return (
        <div className='container my-24 px-6 mx-auto'>
            <h1 className='text-3xl text-center w-96 mx-auto p-6'>Our Blog Post</h1>
            <div className='grid lg:grid-cols-3 gap-4'>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img class="rounded-t-lg" src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">New movie is released!</h5>
                            <p class="text-gray-700 text-base mb-4">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img class="rounded-t-lg" src="https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">Box Office News!</h5>
                            <p class="text-gray-700 text-base mb-4">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img class="rounded-t-lg" src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">New movie is released!</h5>
                            <p class="text-gray-700 text-base mb-4">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;