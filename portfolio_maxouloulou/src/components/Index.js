import React from 'react';

const people = [
    {
        name: 'Joly Maxence',
        role: 'Dev junior',
        imageUrl:
            'https://avatars.githubusercontent.com/u/74191557?v=4',
        gitUrl: '#',
        linkedinUrl: '#',
    },
    // More people...
]
export default function Index() {

    return (
        <div className="bg-gradient-to-r from-gray-400 to-blue-300">
            <div className="mx-auto pb-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pb-24">
                <div className="">
                    <ul className=" flex justify-center w-full space-y-4">
                        {people.map((person) => (
                            <li  key={person.name}
                                className="py-10 px-6 bg-gray-200  text-center rounded-lg xl:px-10 xl:text-left">
                                <div className="space-y-6 xl:space-y-10">
                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                                         src={person.imageUrl} alt=""/>
                                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                        <div className="font-medium text-lg  leading-6 space-y-1">
                                            <h3 className="text-white">{person.name}</h3>
                                            <p className="text-indigo-400">{person.role}</p>
                                        </div>
                                        <ul className="flex justify-center space-x-5">
                                            <li>
                                                <a href={person.gitUrl} className="text-gray-400 hover:text-gray-300">
                                                    <span className="sr-only">Github</span>
                                                    <svg className="w-5 h-5 iconify iconify--mdi" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                                                    <span className="sr-only">LinkedIn</span>
                                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

