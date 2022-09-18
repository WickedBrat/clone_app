/* eslint-disable @typescript-eslint/no-shadow */
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
import { Menu, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  CogIcon,
  CursorClickIcon,
  GiftIcon,
  HomeIcon,
  MenuAlt2Icon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import { Fragment } from 'react';

import Sidebar from '@/components/Sidebar';

const userNavigation = [
  { name: 'Your Profile', href: '/underConst' },
  { name: 'Settings', href: '/underConst' },
  { name: 'Sign out', href: '/underConst' },
];

const stats = [
  {
    id: 1,
    stat: 'Properties',
    icon: HomeIcon,
    desc: 'Create new properties & Update the information of existing properties',
    d: 'View properties',
    href: '/properties',
  },
  {
    id: 2,
    stat: 'Reservations',
    icon: CalendarIcon,
    desc: 'Create a new booking across properties',
    d: 'Create new booking',
    href: '/underConst',
  },
  {
    id: 3,
    stat: 'Product insights',
    icon: CursorClickIcon,
    desc: 'Find out about all the enhancements we have added in recent releases, see what we are working on right now and take a look at the exciting new features we are planning. You can even vote on them!',
    d: 'Go to product insights',
    href: '/underConst',
  },

  {
    id: 4,
    stat: 'Account settings',
    icon: CogIcon,
    desc: 'Update descriptive and address information for the account & Manage languages, set default and mandatory languages for using workflow',
    d: 'Manage settings',
    href: '/underConst',
  },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function HomePage() {
  return (
    <Sidebar activePath={'/'}>
      <div className="flex w-0 flex-1 flex-col overflow-hidden">
        <div className="relative z-10 flex h-16 shrink-0 bg-white shadow">
          <button
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="ml-4 flex items-center md:ml-6">
              {/* <button className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="sr-only">View notifications</span>
                <BellIcon className="w-6 h-6" aria-hidden="true" />
              </button> */}
              <Menu as="div" className="relative text-left">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="inline-flex bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        English
                        <ChevronDownIcon
                          className="ml-2 -mr-1 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                English
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Spanish
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Portugese
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>{' '}
              <Menu as="div" className="relative ml-3">
                {() => (
                  <>
                    <div className="p-1">
                      <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none ">
                        <span className="sr-only">View notifications</span>
                        <QuestionMarkCircleIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    {/* <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        {userNav.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition> */}
                  </>
                )}
              </Menu>
              <Menu as="div" className="relative ml-3">
                {() => (
                  <>
                    <div className="p-1">
                      <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none ">
                        <span className="sr-only">View notifications</span>
                        <GiftIcon className="h-6 w-6" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    {/* <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        {userNav.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition> */}
                  </>
                )}
              </Menu>
              <Menu as="div" className="relative ml-3">
                {() => (
                  <>
                    <div className="p-1">
                      <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none ">
                        <span className="sr-only">View notifications</span>
                        <ClockIcon className="h-6 w-6" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    {/* <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        {userNav.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition> */}
                  </>
                )}
              </Menu>
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>

        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                <div>
                  <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {stats.map((item) => (
                      <div
                        key={item.id}
                        className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
                      >
                        <div>
                          <dt>
                            <div className="absolute rounded-md bg-indigo-500 p-2">
                              <item.icon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </div>
                          </dt>
                          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                            <p className="text-xl font-semibold text-gray-900">
                              {item.stat}
                            </p>
                          </dd>
                        </div>
                        <div className="ml-16 flex items-baseline pb-6 sm:pb-7">
                          <p className="mt-1">{item.desc}</p>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 bg-gray-50 p-4 sm:px-6">
                          <div className="flex items-center justify-between text-sm">
                            <button
                              type="button"
                              className="inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              <a
                                href={item.href}
                                className="font-medium text-white hover:text-indigo-200"
                              >
                                {' '}
                                {item.d}
                                <span className="sr-only">
                                  {' '}
                                  {item.stat} stats
                                </span>
                              </a>
                            </button>
                            {item.id === 1 && (
                              <Link href="/create">Create new Property</Link>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </Sidebar>
  );
}
