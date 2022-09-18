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
  ChevronDownIcon,
  ClockIcon,
  GiftIcon,
  MenuAlt2Icon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline';
import { Fragment, useState } from 'react';

import Sidebar from '@/components/Sidebar';
import { AddNewProperty } from '@/services/properties';

import country_codes from '../components/country_codes.json';

const userNavigation = [
  { name: 'Your Profile', href: '/underConst' },
  { name: 'Settings', href: '/underConst' },
  { name: 'Sign out', href: '/underConst' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [paymentTerms, setPaymentTerms] = useState({
    english: '',
    german: '',
    italian: '',
  });

  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    bank: '',
    bic: '',
    iban: '',
    cre: '',
    taxId: '',
    md: '',
  });
  const [propertyCode, setPropertyCode] = useState('');
  const [propertyName, setPropertyName] = useState({
    english: '',
    german: '',
    italian: '',
  });
  const [propertyDescription, setPropertyDescription] = useState({
    english: '',
    german: '',
    italian: '',
  });
  const [propertyAddress, setPropertyAddress] = useState({
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    pin: '',
    currencyCode: '',
    checkin: '',
    checkout: '',
    timezone: '',
  });

  const handlePropertySubmit = async () => {
    const propertyData = {
      propertyCode,
      englishName: propertyName.english,
      englishDesc: propertyDescription.english,
      germanName: propertyName.german,
      germanDesc: propertyDescription.german,
      italianName: propertyName.italian,
      italianDesc: propertyDescription.italian,
      address1: propertyAddress.address1,
      address2: propertyAddress.address2,
      country: propertyAddress.country,
      state: propertyAddress.state,
      city: propertyAddress.city,
      postalCode: propertyAddress.pin,
      timeZone: propertyAddress.timezone,
      currencyCode: propertyAddress.currencyCode,
      checkIn: propertyAddress.checkin,
      checkOut: propertyAddress.checkout,
      companyName: companyDetails.name,
      bank: companyDetails.bank,
      BIC: companyDetails.bic,
      IBAN: companyDetails.iban,
      commRegister: companyDetails.cre,
      taxID: companyDetails.taxId,
      managingDirectory: companyDetails.md,
      englishPaymentTerms: paymentTerms.english,
      germanPaymentTerms: paymentTerms.german,
      italianPaymentTerms: paymentTerms.italian,
    };
    await AddNewProperty(propertyData);
  };

  return (
    <Sidebar activePath="/properties">
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
                Create new Property
              </h1>
              <div className="p-3">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-3 py-2 text-sm font-medium leading-4 text-black shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <QuestionMarkCircleIcon
                    className="-ml-0.5 mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Help
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              {
                // property
                <div
                  className="mx-auto flex px-4"
                  style={{ flexDirection: 'column' }}
                >
                  <div>
                    <div className="ml-10 pt-8">
                      <div>
                        <div>
                          <h3 className="text-lg font-medium leading-6 text-gray-900">
                            General
                          </h3>
                        </div>
                        <div className="py-4">
                          <div className="width flex justify-between">
                            <label
                              htmlFor="propertyCode"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Property Code
                            </label>
                            <span
                              className="text-sm text-gray-500"
                              id="email-optional"
                            ></span>
                          </div>
                          <div className="mt-1" style={{ width: '180px' }}>
                            <input
                              required
                              type="text"
                              value={propertyCode}
                              onChange={(e) => {
                                setPropertyCode(e.target.value);
                              }}
                              name="propertyCode"
                              id="propertyCode"
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder=""
                              aria-describedby="propertyCode-mandatory"
                            />
                          </div>
                        </div>
                        <div className="py-2">
                          <div>
                            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                              <div
                                className="card -space-y-px rounded-md p-2 shadow-sm"
                                style={{ backgroundColor: 'white' }}
                              >
                                <h6
                                  className="p-2"
                                  style={{ textAlign: 'center' }}
                                >
                                  English
                                </h6>
                                <fieldset>
                                  <div>
                                    <div>
                                      <label
                                        htmlFor="card-number"
                                        className="sr-only"
                                      >
                                        Name
                                      </label>
                                      <input
                                        type="text"
                                        name="Name"
                                        value={propertyName.english}
                                        onChange={(e) => {
                                          setPropertyName({
                                            ...propertyName,
                                            english: e.target.value,
                                          });
                                        }}
                                        id="Name"
                                        className="h-10 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Name"
                                      />
                                    </div>
                                  </div>
                                </fieldset>
                                <fieldset className="mt-3 pt-4">
                                  <div>
                                    <div>
                                      <label
                                        htmlFor="card-number"
                                        className="sr-only"
                                      >
                                        Description
                                      </label>
                                      <textarea
                                        name="Description"
                                        id="Description"
                                        rows={4}
                                        value={propertyDescription.english}
                                        onChange={(e) => {
                                          setPropertyDescription({
                                            ...propertyDescription,
                                            english: e.target.value,
                                          });
                                        }}
                                        className="h-40 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Description"
                                      />
                                    </div>
                                  </div>
                                </fieldset>
                              </div>

                              <div
                                className="mx-2 -space-y-px rounded-md p-2 shadow-sm"
                                style={{ backgroundColor: 'white' }}
                              >
                                <h6
                                  className="p-2"
                                  style={{ textAlign: 'center' }}
                                >
                                  German
                                </h6>
                                <fieldset>
                                  <div>
                                    <div>
                                      <label
                                        htmlFor="card-number"
                                        className="sr-only"
                                      >
                                        Name
                                      </label>
                                      <input
                                        type="text"
                                        name="Name"
                                        id="Name"
                                        value={propertyName.german}
                                        onChange={(e) => {
                                          setPropertyName({
                                            ...propertyName,
                                            german: e.target.value,
                                          });
                                        }}
                                        className="h-10 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Name"
                                      />
                                    </div>
                                  </div>
                                </fieldset>
                                <fieldset className="mt-3 pt-4">
                                  <div>
                                    <div>
                                      <label
                                        htmlFor="card-number"
                                        className="sr-only"
                                      >
                                        Description
                                      </label>
                                      <textarea
                                        name="Description"
                                        id="Description"
                                        rows={4}
                                        value={propertyDescription.german}
                                        onChange={(e) => {
                                          setPropertyDescription({
                                            ...propertyDescription,
                                            german: e.target.value,
                                          });
                                        }}
                                        className="h-40 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Description"
                                      />
                                    </div>
                                  </div>
                                </fieldset>
                              </div>

                              <div
                                className="mx-2 -space-y-px rounded-md p-2 shadow-sm"
                                style={{ backgroundColor: 'white' }}
                              >
                                <h6
                                  className="p-2"
                                  style={{ textAlign: 'center' }}
                                >
                                  Italian
                                </h6>
                                <fieldset>
                                  <div>
                                    <div>
                                      <label
                                        htmlFor="card-number"
                                        className="sr-only"
                                      >
                                        Name
                                      </label>
                                      <input
                                        type="text"
                                        name="Name"
                                        id="Name"
                                        value={propertyName.italian}
                                        onChange={(e) => {
                                          setPropertyName({
                                            ...propertyName,
                                            italian: e.target.value,
                                          });
                                        }}
                                        className="h-10 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Name"
                                      />
                                    </div>
                                  </div>
                                </fieldset>
                                <fieldset className="mt-3 pt-4">
                                  <div>
                                    <div>
                                      <label
                                        htmlFor="card-number"
                                        className="sr-only"
                                      >
                                        Description
                                      </label>
                                      <textarea
                                        name="Description"
                                        id="Description"
                                        rows={4}
                                        value={propertyDescription.italian}
                                        onChange={(e) => {
                                          setPropertyDescription({
                                            ...propertyDescription,
                                            italian: e.target.value,
                                          });
                                        }}
                                        className="h-40 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Description"
                                      />
                                    </div>
                                  </div>
                                </fieldset>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Location
                        </h3>
                        {/* <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p> */}
                      </div>
                      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Address 1
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="Address1"
                              value={propertyAddress.address1}
                              onChange={(e) => {
                                setPropertyAddress({
                                  ...propertyAddress,
                                  address1: e.target.value,
                                });
                              }}
                              id="Address1"
                              autoComplete="given-name"
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="last_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Address 2
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="Address2"
                              id="Address2"
                              value={propertyAddress.address2}
                              onChange={(e) => {
                                setPropertyAddress({
                                  ...propertyAddress,
                                  address2: e.target.value,
                                });
                              }}
                              autoComplete="family-name"
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Country / Region
                          </label>
                          <div className="mt-1">
                            <select
                              id="country"
                              name="country"
                              value={propertyAddress.country}
                              onChange={(e) => {
                                setPropertyAddress({
                                  ...propertyAddress,
                                  country: e.target.value,
                                });
                              }}
                              autoComplete="country"
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="state"
                            className="block text-sm font-medium text-gray-700"
                          >
                            State / Province
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="state"
                              value={propertyAddress.state}
                              onChange={(e) => {
                                setPropertyAddress({
                                  ...propertyAddress,
                                  state: e.target.value,
                                });
                              }}
                              id="state"
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="city"
                              value={propertyAddress.city}
                              onChange={(e) => {
                                setPropertyAddress({
                                  ...propertyAddress,
                                  city: e.target.value,
                                });
                              }}
                              id="city"
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="zip"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ZIP / Postal
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="zip"
                              value={propertyAddress.pin}
                              onChange={(e) => {
                                setPropertyAddress({
                                  ...propertyAddress,
                                  pin: e.target.value,
                                });
                              }}
                              id="zip"
                              autoComplete="postal-code"
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="timezone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            TimeZone
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="timezone"
                              id="timezone"
                              value={propertyAddress.timezone}
                              onChange={(e) => {
                                setPropertyAddress({
                                  ...propertyAddress,
                                  timezone: e.target.value,
                                });
                              }}
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Currency Code
                          </label>
                          <div className="mt-1">
                            <select
                              id="country"
                              name="country"
                              value={propertyAddress.country}
                              onChange={(e) => {
                                setPropertyAddress({
                                  ...propertyAddress,
                                  currencyCode: e.target.value,
                                });
                              }}
                              autoComplete="country"
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                              {country_codes.map((country) => (
                                <option key={country} value={country}>
                                  {country}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Default Check-in Time
                          </label>
                          <div className="mt-1">
                            <input
                              type="time"
                              name="checkin"
                              value={propertyAddress.checkin}
                              onChange={(e) => {
                                setPropertyAddress({
                                  ...propertyAddress,
                                  checkin: e.target.value,
                                });
                              }}
                              id="checkin"
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="zip"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Default Check-out Time
                          </label>
                          <div className="mt-1">
                            <input
                              type="time"
                              name="checkout"
                              value={propertyAddress.checkout}
                              onChange={(e) => {
                                setPropertyAddress({
                                  ...propertyAddress,
                                  checkout: e.target.value,
                                });
                              }}
                              id="checkout"
                              autoComplete="check-out"
                              className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="mt-10 pt-8">
                          <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                              Company Details
                            </h3>
                            {/* <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p> */}
                          </div>
                          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-6 ">
                              <label
                                htmlFor="first_name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Company Name
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="companyName"
                                  id="companyName"
                                  value={companyDetails.name}
                                  onChange={(e) => {
                                    setCompanyDetails({
                                      ...companyDetails,
                                      name: e.target.value,
                                    });
                                  }}
                                  autoComplete="companyName"
                                  className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="last_name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Bank
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="bank"
                                  value={companyDetails.bank}
                                  onChange={(e) => {
                                    setCompanyDetails({
                                      ...companyDetails,
                                      bank: e.target.value,
                                    });
                                  }}
                                  id="bank"
                                  autoComplete="bank"
                                  className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="state"
                                className="block text-sm font-medium text-gray-700"
                              >
                                BIC
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="bic"
                                  value={companyDetails.bic}
                                  onChange={(e) => {
                                    setCompanyDetails({
                                      ...companyDetails,
                                      bic: e.target.value,
                                    });
                                  }}
                                  id="bic"
                                  className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-700"
                              >
                                IBAN
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="iban"
                                  id="iban"
                                  value={companyDetails.iban}
                                  onChange={(e) => {
                                    setCompanyDetails({
                                      ...companyDetails,
                                      iban: e.target.value,
                                    });
                                  }}
                                  className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-2">
                              <label
                                htmlFor="last_name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Commercial register entry
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="bank"
                                  value={companyDetails.cre}
                                  onChange={(e) => {
                                    setCompanyDetails({
                                      ...companyDetails,
                                      cre: e.target.value,
                                    });
                                  }}
                                  id="bank"
                                  autoComplete="bank"
                                  className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="state"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Tax ID
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="bic"
                                  id="bic"
                                  value={companyDetails.taxId}
                                  onChange={(e) => {
                                    setCompanyDetails({
                                      ...companyDetails,
                                      taxId: e.target.value,
                                    });
                                  }}
                                  className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Managing directories
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="iban"
                                  value={companyDetails.md}
                                  onChange={(e) => {
                                    setCompanyDetails({
                                      ...companyDetails,
                                      md: e.target.value,
                                    });
                                  }}
                                  id="iban"
                                  className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="py-2 pt-6">
                            <div>
                              <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                <div
                                  className="card -space-y-px rounded-md p-2 shadow-sm"
                                  style={{ backgroundColor: 'white' }}
                                >
                                  <h6
                                    className="p-2"
                                    style={{ textAlign: 'center' }}
                                  >
                                    English
                                  </h6>

                                  <fieldset className="mt-3 pt-4">
                                    <div>
                                      <div>
                                        <label
                                          htmlFor="card-number"
                                          className="sr-only"
                                        >
                                          Payment terms
                                        </label>
                                        <textarea
                                          name="Description"
                                          id="Description"
                                          value={paymentTerms.english}
                                          onChange={(e) => {
                                            setPaymentTerms({
                                              ...paymentTerms,
                                              english: e.target.value,
                                            });
                                          }}
                                          rows={4}
                                          className="h-40 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                          placeholder="Payment terms"
                                        />
                                      </div>
                                    </div>
                                  </fieldset>
                                </div>

                                <div
                                  className="mx-2 -space-y-px rounded-md p-2 shadow-sm"
                                  style={{ backgroundColor: 'white' }}
                                >
                                  <h6
                                    className="p-2"
                                    style={{ textAlign: 'center' }}
                                  >
                                    German
                                  </h6>

                                  <fieldset className="mt-3 pt-4">
                                    <div>
                                      <div>
                                        <label
                                          htmlFor="card-number"
                                          className="sr-only"
                                        >
                                          Payment terms
                                        </label>
                                        <textarea
                                          name="Description"
                                          id="Description"
                                          value={paymentTerms.german}
                                          onChange={(e) => {
                                            setPaymentTerms({
                                              ...paymentTerms,
                                              german: e.target.value,
                                            });
                                          }}
                                          rows={4}
                                          className="h-40 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                          placeholder="Payment terms"
                                        />
                                      </div>
                                    </div>
                                  </fieldset>
                                </div>

                                <div
                                  className="mx-2 -space-y-px rounded-md p-2 shadow-sm"
                                  style={{ backgroundColor: 'white' }}
                                >
                                  <h6
                                    className="p-2"
                                    style={{ textAlign: 'center' }}
                                  >
                                    Italian
                                  </h6>

                                  <fieldset className="mt-3 pt-4">
                                    <div>
                                      <div>
                                        <label
                                          htmlFor="card-number"
                                          className="sr-only"
                                        >
                                          Payment terms
                                        </label>
                                        <textarea
                                          name="Description"
                                          id="Description"
                                          value={paymentTerms.italian}
                                          onChange={(e) => {
                                            setPaymentTerms({
                                              ...paymentTerms,
                                              italian: e.target.value,
                                            });
                                          }}
                                          rows={4}
                                          className="h-40 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                          placeholder="Payment terms"
                                        />
                                      </div>
                                    </div>
                                  </fieldset>
                                </div>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          onClick={handlePropertySubmit}
                          className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              }
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </Sidebar>
  );
}
