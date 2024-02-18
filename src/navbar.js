import React from 'react';
import { Disclosure } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navigation = [
    { name: 'À propos de moi', href: '/about' },
    { name: 'Activités', href: '/activities' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const location = useLocation();
    const [path, setPath] = useState(location.pathname);

    useEffect(() => {
        setPath(location.pathname);
    }, [location]);

    return (
        <Disclosure as="nav" className="bg-beigeNav shadow-lg shadow-beigeNav-800/50">
            {({ open }) => (
                <>
                    <div className="">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white-100 hover:bg-beigeBackground hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.href}
                                                className={
                                                    item.href === path
                                                    ? 'text-gray-800 hover:bg-beigeBackground hover:text-white rounded-md px-3 py-2 text-sm font-medium bg-beigeBackground'
                                                    : 'text-gray-800 hover:bg-beigeBackground hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
}
