import {
  CalendarIcon,
  CogIcon,
  CursorClickIcon,
  HomeIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Sidebar from '@/components/Sidebar';
import { GetPropertyDetails } from '@/services/properties';

import type { PROPERTY_SETTING_TYPE } from './settings';
import { dummyProperty } from './settings';

const stats = [
  {
    id: 1,
    stat: 'General Manager Report',
    icon: HomeIcon,
    desc: `Analyse key performance indicators for your property such as occupancy and RevPAR.
     Filter the results to show only data for a certain part of your business. You can, for example, exclude day-use business or complimentary rate plans.`,
    d: 'Check GM Report',
    href: '/properties',
  },
  {
    id: 2,
    stat: 'Revenue Reports',
    icon: CalendarIcon,
    desc: 'Create a new booking across properties',
    d: 'View Revenues',
    href: '/underConst',
  },
  {
    id: 3,
    stat: 'Cashier Reports',
    icon: CursorClickIcon,
    desc: 'Find out about all the enhancements we have added in recent releases, see what we are working on right now and take a look at the exciting new features we are planning. You can even vote on them!',
    d: '',
    href: '/underConst',
  },

  {
    id: 4,
    stat: 'Reservations',
    icon: CogIcon,
    desc: 'Update descriptive and address information for the account & Manage languages, set default and mandatory languages for using workflow',
    d: '',
    href: '/underConst',
  },

  {
    id: 5,
    stat: 'Room Rack',
    icon: CogIcon,
    desc: 'Calendar view of your rooms and reservations. See which guests are arriving or checked in, assign and change rooms, and schedule maintenances. ',
    d: '',
    href: '/underConst',
  },

  {
    id: 6,
    stat: 'Housekeeping',
    icon: CogIcon,
    desc: "View or print a list of all rooms for housekeeping. Update the room's condition and mark them as clean or dirty.",
    d: '',
    href: '/underConst',
  },
  {
    id: 7,
    stat: 'Financial Reports',
    icon: CogIcon,
    desc: 'For full financial reports, use the export functionality in the accounting section. Get a full log of all your transactions, or aggregated reports by day, week or month. Learn more in  Introduction to Accounting guide',
    d: '',
    href: '/underConst',
  },
  {
    id: 7,
    stat: 'Rate Plans',
    icon: CogIcon,
    desc: 'Manage the rate plans for your property, e.g. hourly, day or overnight plans. Define prices, booking periods, restrictions and promo codes. Manage the services and cancellation policies within your organization. Learn more in  Rate Plan guide',
    d: '',
    href: '/underConst',
  },
];

export default function PropertyDashboard() {
  // const [images, setImages] = useState([]);
  // const maxNumber = 69;
  // const uploadToServer = async (image) => {
  //   const body = new FormData();
  //   body.append('file', image);
  //   const response = await fetch('/api/imageupload', {
  //     method: 'POST',
  //     body,
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };
  // const onChange = (imageList, addUpdateIndex) => {
  //   console.log(imageList, addUpdateIndex);
  //   imageList.forEach(image => {
  //     uploadToServer(image.file);
  //   });
  //   setImages(imageList);
  // };

  function assignPropertyDetails(
    propertyDetailsFromBackend: any
  ): PROPERTY_SETTING_TYPE {
    const propertyDetails: PROPERTY_SETTING_TYPE = {
      propertyCode: propertyDetailsFromBackend?.appPropertyCode,
      propertyDescription: {
        english: propertyDetailsFromBackend?.appEnglishDesc,
        german: propertyDetailsFromBackend?.appGermanDesc,
        italian: propertyDetailsFromBackend?.appItalianDesc,
      },
      propertyName: {
        english: propertyDetailsFromBackend?.appEnglishName,
        german: propertyDetailsFromBackend?.appGermanName,
        italian: propertyDetailsFromBackend?.appItalianName,
      },
      propertyAddress: {
        address1: propertyDetailsFromBackend?.appAddress1,
        address2: propertyDetailsFromBackend?.appAddress2,
        city: propertyDetailsFromBackend?.appCity,
        state: propertyDetailsFromBackend?.appStateProvince,
        country: propertyDetailsFromBackend?.appCountryRegion,
        pin: propertyDetailsFromBackend?.appZipPostal,
        checkin: propertyDetailsFromBackend?.appCheckIn,
        checkout: propertyDetailsFromBackend?.appCheckOut,
        timezone: propertyDetailsFromBackend?.appTimeZone,
        currencyCode: propertyDetailsFromBackend?.appCurrencyCode,
      },
      companyDetails: {
        name: propertyDetailsFromBackend?.appCompanyName,
        bank: propertyDetailsFromBackend?.appBank,
        bic: propertyDetailsFromBackend?.appBIC,
        iban: propertyDetailsFromBackend?.appIBAN,
        cre: propertyDetailsFromBackend?.appCommRegister,
        taxId: propertyDetailsFromBackend?.appTaxID,
        md: propertyDetailsFromBackend?.appManagingDirectory,
      },
      paymentTerms: {
        english: propertyDetailsFromBackend?.appEnglishPaymentTerms,
        german: propertyDetailsFromBackend?.appGermanPaymentTerms,
        italian: propertyDetailsFromBackend?.appItalianPaymentTerms,
      },
    };
    return propertyDetails;
  }

  const [propertyDetails, setPropertyDetails] =
    useState<PROPERTY_SETTING_TYPE>(dummyProperty);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const response = await GetPropertyDetails(
        router.query.propertyId?.toString() || ''
      );
      setPropertyDetails(assignPropertyDetails(response.data));
    })();
  }, [router.query.propertyId]);

  return (
    <Sidebar activePath={'/properties'}>
      <main className="relative flex-1 overflow-y-auto focus:outline-none">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              {propertyDetails.propertyName.english} Dashboard
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
                      <div className="ml-0 flex items-baseline pb-6 sm:pb-7">
                        <p className="mt-1">{item.desc}</p>
                      </div>
                      {item.d !== '' && (
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
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </dl>
                {/* <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    <div className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
                      <div>
                        <dt>
                          <div className="absolute rounded-md bg-indigo-500 p-2">
                            <ZoomInIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </div>
                        </dt>
                        <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                          <p className="text-xl font-semibold text-gray-900">
                            Upload Image
                          </p>
                        </dd>
                      </div>
                      <div className="ml-0 flex items-baseline pb-6 sm:pb-7">
                        <p className="mt-1">
                          <div className="flex">
                            {imageList.map((image, index) => (
                              <div key={index}>
                                <img src={image.data_url} alt="" width="100" />
                                <div>
                                  <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    onClick={() => onImageUpdate(index)}
                                  >
                                    Update
                                  </button>
                                  <button
                                    onClick={() => onImageRemove(index)}
                                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </p>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 bg-gray-50 p-4 sm:px-6">
                        <div className="flex items-center justify-between text-sm">
                          <div>
                            <button
                              className="inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              style={isDragging ? { color: 'red' } : undefined}
                              onClick={onImageUpload}
                              {...dragProps}
                            >
                              Click or Drop here
                            </button>
                            &nbsp;
                            <button
                              onClick={onImageRemoveAll}
                              className="inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              Remove all images
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </ImageUploading> */}
              </div>
            </div>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </Sidebar>
  );
}
