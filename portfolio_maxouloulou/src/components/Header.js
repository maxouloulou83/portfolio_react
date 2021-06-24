import React from 'react';
import Typewriter from "typewriter-effect";


export default function Header() {

    return (
        <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-12 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-50 sm:text-4xl">

                            <div className="App">
                                <Typewriter

                                    onInit={(typewriter)=> {

                                        typewriter

                                            .typeString("Maxence Joly")

                                            .pauseFor(2000)
                                            .deleteAll()
                                            .typeString("Bienvenue sur mon portfolio 2.0")
                                            .start();
                                    }}
                                />

                        </div>
                    </h2>
            </div>
        </div>
    )
}
