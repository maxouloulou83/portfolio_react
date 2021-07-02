import React from 'react';


export default function Abouts() {
    return (
        <div>
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <div className="pb-4 flex justify-center">
                        <h2 className="text-3xl font-extrabold text-gray-50 sm:text-4xl ">
                            <span className="text-5xl text-center font-extrabold text-gray-100 sm:text-center"> A propos </span>
                        </h2>
                    </div>
                    <div className="py-10 px-6 bg-gray-200 text-center rounded-lg xl:px-10 xl:text-left">
                        <p className="mt-4 text-lg leading-6 text-black text-center">
                            <p>
                                Je m'appelle Maxence, j'ai 23 ans.
                            </p>
                            <p className="mt-2">
                                Je suis actuellement en formation de développeur / intégrateur à la
                                <a href="https://www.webacademie.org/"
                                   className="font-semibold cursor-pointer">&nbsp;Web@Acédemie</a> par
                                <a href="https://epitech.eu" className="font-semibold cursor-pointer">
                                    &nbsp;Epitech
                                </a>.
                            </p>
                            <p className="mt-2">
                                Je suis un grand passionné d'informatique hardware et software mais surtout de
                                développement web.
                            </p>
                            <p className="mt-2">
                                Dans ce portfolio que j'ai réalisé, je vous présente mes compétences, mon parcours ainsi
                                que mes principaux projets réalisés en formation.
                            </p>
                        </p>
                    </div>

                </div>
        </div>
    )
}
