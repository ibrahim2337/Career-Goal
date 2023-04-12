import React from "react";

const Blog = () => {
    return (
        <section className="mt-20">
            <div className="container px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl text-center font-bold sm:text-4xl">
                    Welcome To Blog
                </h2>
                <p className="mt-4 mb-8 "></p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">
                            What is the purpose of react router?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                            ReactJS Router is mainly used for developing Single
                            Page Web Applications. React Router is used to
                            define multiple routes in the application. When a
                            user types a specific URL into the browser, and if
                            this URL path matches any 'route' inside the router
                            file, the user will be redirected to that particular
                            route.{" "}
                        </p>
                    </details>

                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">
                            How does Context API works?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                            The React Context API is a way for a React app to
                            effectively produce global variables that can be
                            passed around. This is the alternative to "prop
                            drilling" or moving props from grandparent to child
                            to parent, and so on. Context is also touted as an
                            easier, lighter approach to state management using
                            Redux. React.createContext() is all you need. It
                            returns a consumer and a provider. Provider is a
                            component that as it's names suggests provides the
                            state to its children. It will hold the "store" and
                            be the parent of all the components that might need
                            that store. Consumer as it so happens is a component
                            that consumes and uses the state.{" "}
                        </p>
                    </details>

                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">
                            What is useRef hook in react?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                            The useRef Hook allows us to persist values between
                            renders. It can be used to store a mutable value
                            that does not cause a re-render when updated. It can
                            be used to access a DOM element directly.{" "}
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;
