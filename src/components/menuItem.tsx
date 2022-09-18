import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export default function MenuItem(props: { item: any; isActive: boolean }) {
  const [dropdown, setDropdown] = useState(false);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  function toggle() {
    setDropdown(!dropdown);
  }
  return (
    <div>
      {!props.item.submenu || props.item.submenu.length === 0 ? (
        <a
          href={props.item.href}
          className={classNames(
            props.isActive
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
          )}
        >
          <props.item.icon
            className={classNames(
              props.isActive
                ? 'text-gray-300'
                : 'text-gray-400 group-hover:text-gray-300',
              'mr-4 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden="true"
          />
          {props.item.name}
        </a>
      ) : (
        <>
          <div
            className={classNames(
              props.item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'group flex items-center px-2 py-2 text-base font-medium rounded-md'
            )}
            onClick={toggle}
          >
            <props.item.icon
              className={classNames(
                props.item.current
                  ? 'text-gray-300'
                  : 'text-gray-400 group-hover:text-gray-300',
                'mr-4 flex-shrink-0 h-6 w-6'
              )}
              aria-hidden="true"
            />
            <p className={classNames('mr-auto')}>{props.item.name}</p>

            {dropdown ? (
              <ChevronUpIcon className="h-4 w-4 justify-self-end text-gray-300" />
            ) : (
              <ChevronDownIcon className="h-4 w-4 justify-self-end text-gray-300" />
            )}
          </div>
          {dropdown ? (
            <div className={classNames('flex flex-col')}>
              {props.item.submenu.map((subItem: any) => (
                <a
                  key={subItem.name}
                  href={subItem.href}
                  className={classNames(
                    subItem.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'group flex items-center px-12 py-2 text-base font-medium rounded-md'
                  )}
                >
                  {' '}
                  {subItem.name}
                </a>
              ))}
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}
