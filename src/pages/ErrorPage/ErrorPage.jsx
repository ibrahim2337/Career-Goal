import React from 'react';

const ErrorPage = () => {
        return (
            <section className="flex items-center h-screen p-16">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">
                            Sorry, we couldn't find this page.
                        </p>
                        <p className="mt-4 mb-8">
                            But dont worry, you can find plenty of other things
                            on our homepage.
                        </p>
                        <a
                            rel="noopener noreferrer"
                            href="/"
                            className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-blue-500 bg-gradient-to-r from-purple-500 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500  delay-75 duration-100 transition-all"
                        >
                            Back to homepage
                        </a>
                    </div>
                </div>
            </section>
        );
};

export default ErrorPage;