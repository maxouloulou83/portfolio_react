import React from 'react';
import { CheckIcon } from '@heroicons/react/solid'
import  cv from '../Asset/Maxence Joly.pdf'

const tiers = [
    {
        name: 'Mecanicien moto',
        href: '#',
        time: 3,
        date: '2014 - 2016',
        description: 'reception, diag, réparation',
        includedFeatures: [
            'CAP mécanique option moto',
            'reception',
            'diagnostique et réparation'
        ],
    },
    {
        name: 'Educateur sportif',
        href: '#',
        time: 4 ,
        date: '2016 - 2020',
        description: 'Animation sportif 3 - 99 an',
        includedFeatures: [
            'responçable club ados ',
            'animation sportif 3 - 99 an',
            'BPjeps APT',
            'BAPAAT randonnée',
            'BAPAAT tir à l\'arc',
            'BAPAAT vtt'
        ],
    },
    {
        name: 'Developpeur web',
        href: '#',
        time: '1',
        date: '2020 - 2022',
        description: 'Organisme de formation Epitech',
        includedFeatures: [
            'JAVASCRIPT',
            'HTML',
            'CSS',
            'TAILWIND CSS',
            'PHP',
            'BDD'
        ],
    },
]
export default function Pers() {
    return (
            <div className="">
                <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:flex-col sm:align-center">
                        <h1 className="text-5xl text-center font-extrabold text-gray-900 sm:text-center">Expérience professionnelle</h1>

                    </div>
                    <div className="md:flex justify-center mt-12 space-y-4 md:space-x-8 sm:mt-16 sm:space-y-0 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
                        {tiers.map((tier) => (
                            <div key={tier.name} className="bg-gray-300 bg-opacity-75 border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 ">
                                <div className="p-6">
                                    <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                                    <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                                    <p className="mt-8">
                                        <span className="text-4xl font-extrabold text-gray-900">{tier.time} ans</span>{' '}
                                    </p>
                                    <a
                                        className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                                    >
                                        {tier.date}
                                    </a>
                                </div>
                                <div className="pt-6 pb-8 px-6">
                                    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">Diplôme</h3>
                                    <ul className="mt-6 space-y-4">
                                        {tier.includedFeatures.map((feature) => (
                                            <li key={feature} className="flex space-x-3">
                                                <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                                                <span className="text-sm text-gray-500">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="relative border-1 border-gray-200 space-y-10">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="p-2 rounded-xl bg-gray-300 text-sm text-gray-500">
                                <a
                                    target="_blank"
                                    href={cv}
                                    className="flex justify-center">
                                    <img src="https://limg.app/i/DBB0sB.png" className="w-8 h-auto " />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
)
}