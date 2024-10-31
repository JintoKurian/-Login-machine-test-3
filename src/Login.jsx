import React from 'react';

const Login = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-lg shadow-lg overflow-hidden bg-white">
                {/* Left Side - Form */}
                <div className="w-full md:w-1/2 p-10 flex flex-col items-center text-center">
                    {/* Conditionally render the image on smaller screens */}
                    <div className="md:hidden w-full mb-6">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/0466/f088/1d8240a02bdb06cc5673365a2bd22685?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rl~FHehi2ta~x2iNOioJD80FiNyyhKEoGcFa56Rk1wcWVniMTQg5eNrS6eTJ6Qv4spSXrb3kew~TNmTfn4rBZrKfJJGZjADV63yx8zUFESUt6mxtEyxon8ioznDnA2zP2N1M-PyQ3vgvKiazFbAGw3mOGtCvvdnOCdeAKZsOQK6i4C9LKO~aj0oJ63iwPNjhlTWl38AamvckjJqpfyuYWHVMGraZ9IuTMPtl9QcRhKGueAEWPr67pIyG-KMIyk5MiUesTmO0fDbhiDyrFjbNDGiRKyX8ZMQn5Zl3FxY~8~tcV4kS1sIMalvI0Z5SOTkid4jxzOsLaIALJ8Fvp08tVQ__"
                            alt="Login Visual"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                    </div>
                    <h2 className="text-3xl font-semibold text-gray-800">Welcome Back 👋</h2>
                    <p className="mt-2 text-gray-600 w-[388px]">Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</p>
                    <form className="mt-8 flex flex-col items-center">
                        <div className="w-[388px]">
                            <label className="block text-gray-700 text-left">Email</label>
                            <input
                                type="email"
                                placeholder="Example@email.com"
                                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mt-4 w-[388px]">
                            <label className="block text-gray-700 text-left">Password</label>
                            <input
                                type="password"
                                placeholder="At least 8 characters"
                                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mt-4 w-[388px] text-right">
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-[388px] mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                        >
                            Sign in
                        </button>
                    </form>
                    <div className="flex items-center w-[388px] mt-6">
                        <hr className="flex-grow border-gray-300" />
                        <p className="px-4 text-gray-600">Or</p>
                        <hr className="flex-grow border-gray-300" />
                    </div>
                    <div className="w-[388px]">
                        <button className="flex items-center justify-center w-full mt-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
                            <img
                                src="https://img.icons8.com/color/16/000000/google-logo.png"
                                alt="Google icon"
                                className="mr-2"
                            />
                            Sign in with Google
                        </button>
                        <button className="flex items-center justify-center w-full mt-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
                            <img
                                src="https://img.icons8.com/color/16/000000/facebook-new.png"
                                alt="Facebook icon"
                                className="mr-2"
                            />
                            Sign in with Facebook
                        </button>
                    </div>
                    <p className="mt-8 text-gray-600 w-[388px]">
                        Don't you have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
                    </p>
                    <p className='mt-8 text-gray-600 w-[388px]'>© 2023 ALL RIGHTS ARE RESERVED</p>
                </div>
                
                {/* Right Side - Image */}
                <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/0466/f088/1d8240a02bdb06cc5673365a2bd22685?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rl~FHehi2ta~x2iNOioJD80FiNyyhKEoGcFa56Rk1wcWVniMTQg5eNrS6eTJ6Qv4spSXrb3kew~TNmTfn4rBZrKfJJGZjADV63yx8zUFESUt6mxtEyxon8ioznDnA2zP2N1M-PyQ3vgvKiazFbAGw3mOGtCvvdnOCdeAKZsOQK6i4C9LKO~aj0oJ63iwPNjhlTWl38AamvckjJqpfyuYWHVMGraZ9IuTMPtl9QcRhKGueAEWPr67pIyG-KMIyk5MiUesTmO0fDbhiDyrFjbNDGiRKyX8ZMQn5Zl3FxY~8~tcV4kS1sIMalvI0Z5SOTkid4jxzOsLaIALJ8Fvp08tVQ__)' }} />
            </div>
        </div>
    );
};

export default Login;
