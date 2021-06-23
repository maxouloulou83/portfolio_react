import React from 'react';


export default function Abouts() {
    return (
        <div>
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-50 sm:text-4xl pb-4">
                        <span className="block">About my</span>
                    </h2>
                    <div className="py-10 px-6 bg-gray-200  text-center rounded-lg xl:px-10 xl:text-left">
                        <p className="mt-4 text-lg leading-6 text-black text-center">
                            <p>
                                My name is Maxence, I am 23 years old.
                            </p>
                            <p className="mt-2">
                                I am currently training as a developer / integrator at the
                                <a href="https://www.webacademie.org/"
                                   className="font-semibold cursor-pointer">Web@Acédemie</a> by
                                <a href="https://epitech.eu" className="font-semibold cursor-pointer">
                                    Epitech
                                </a>.
                            </p>
                            <p className="mt-2">
                                I'm a big fan of computer hardware and software but especially of
                                web development.
                            </p>
                            <p className="mt-2">
                                In this portfolio, I present my skills, my background and my main training projects.
                                as well as my main projects realized in training.
                            </p>
                        </p>
                    </div>

                </div>
            </div>
    )
}
