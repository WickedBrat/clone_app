import {
  CalendarIcon,
  CogIcon,
  CursorClickIcon,
  HomeIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';

import Sidebar from '@/components/Sidebar';

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

export default function HomePage() {
  return (
    <Sidebar activePath={'/'}>
      <main className="relative flex-1 overflow-y-auto focus:outline-none">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
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
    </Sidebar>
  );
}
