/* eslint-disable @typescript-eslint/no-shadow */
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Sidebar from '@/components/Sidebar';
import { GetPropertyDetails } from '@/services/properties';

// eslint-disable-next-line @typescript-eslint/naming-convention
export type PROPERTY_SETTING_TYPE = {
  propertyCode: string;
  propertyDescription: {
    english: string;
    german: string;
    italian: string;
  };
  propertyName: {
    english: string;
    german: string;
    italian: string;
  };
  propertyAddress: {
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    pin: string;
    checkin: string;
    checkout: string;
    timezone: string;
    currencyCode: string;
  };
  companyDetails: {
    name: string;
    bank: string;
    bic: string;
    iban: string;
    cre: string;
    taxId: string;
    md: string;
  };
  paymentTerms: {
    english: string;
    german: string;
    italian: string;
  };
};
export const dummyProperty: PROPERTY_SETTING_TYPE = {
  propertyCode: 'HOTEL-BERLIN',
  propertyDescription: {
    english: 'Hotel Berlin',
    german: 'Hotel Berlin',
    italian: 'Hotel Berlin',
  },
  propertyName: {
    english: 'Hotel Berlin',
    german: 'Hotel Berlin',
    italian: 'Hotel Berlin',
  },
  propertyAddress: {
    address1: 'Address 1',
    address2: 'Address 2',
    city: 'City',
    state: 'State',
    country: 'Country',
    pin: 'Pin',
    checkin: 'Checkin',
    checkout: 'Checkout',
    timezone: 'Timezone',
    currencyCode: 'Currency Code',
  },
  companyDetails: {
    name: 'Company Name',
    bank: 'Bank',
    bic: 'BIC',
    iban: 'IBAN',
    cre: 'CRE',
    taxId: 'Tax Id',
    md: 'MD',
  },
  paymentTerms: {
    english: 'Payment Terms',
    german: 'Payment Terms',
    italian: 'Payment Terms',
  },
};
export default function Example() {
  const router = useRouter();

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

  useEffect(() => {
    (async () => {
      const response = await GetPropertyDetails(
        router.query.propertyId?.toString() || ''
      );
      setPropertyDetails(assignPropertyDetails(response.data));
    })();
  }, [router.query.propertyId]);

  return (
    <Sidebar activePath="/properties">
      <main className="relative flex-1 overflow-y-auto focus:outline-none">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Property</h1>
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
                        <div className="flex justify-between">
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
                            name="propertyCode"
                            value={propertyDetails?.propertyCode}
                            onChange={(e) => {
                              setPropertyDetails({
                                ...propertyDetails,
                                propertyCode: e.target.value,
                              });
                            }}
                            id="propertyCode"
                            className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder={propertyDetails?.propertyCode}
                            aria-describedby="propertyCode-mandatory"
                          />
                        </div>
                      </div>
                      <div className="py-2">
                        <div>
                          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <div
                              className="-space-y-px rounded-md p-2 shadow-sm"
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
                                      id="Name"
                                      value={
                                        propertyDetails?.propertyName.english
                                      }
                                      onChange={(e) => {
                                        setPropertyDetails({
                                          ...propertyDetails,
                                          propertyName: {
                                            ...propertyDetails.propertyName,
                                            english: e.target.value,
                                          },
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
                                      value={
                                        propertyDetails?.propertyDescription
                                          .english
                                      }
                                      onChange={(e) => {
                                        setPropertyDetails({
                                          ...propertyDetails,
                                          propertyDescription: {
                                            ...propertyDetails.propertyDescription,
                                            english: e.target.value,
                                          },
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
                                      value={
                                        propertyDetails?.propertyName.german
                                      }
                                      onChange={(e) => {
                                        setPropertyDetails({
                                          ...propertyDetails,
                                          propertyName: {
                                            ...propertyDetails.propertyName,
                                            german: e.target.value,
                                          },
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
                                      value={
                                        propertyDetails?.propertyDescription
                                          .german
                                      }
                                      onChange={(e) => {
                                        setPropertyDetails({
                                          ...propertyDetails,
                                          propertyDescription: {
                                            ...propertyDetails.propertyDescription,
                                            german: e.target.value,
                                          },
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
                                      value={
                                        propertyDetails?.propertyName.italian
                                      }
                                      onChange={(e) => {
                                        setPropertyDetails({
                                          ...propertyDetails,
                                          propertyName: {
                                            ...propertyDetails.propertyName,
                                            italian: e.target.value,
                                          },
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
                                      value={
                                        propertyDetails?.propertyDescription
                                          .italian
                                      }
                                      onChange={(e) => {
                                        setPropertyDetails({
                                          ...propertyDetails,
                                          propertyDescription: {
                                            ...propertyDetails.propertyDescription,
                                            italian: e.target.value,
                                          },
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
                            id="Address1"
                            value={propertyDetails?.propertyAddress.address1}
                            onChange={(e) => {
                              setPropertyDetails({
                                ...propertyDetails,
                                propertyAddress: {
                                  ...propertyDetails.propertyAddress,
                                  address1: e.target.value,
                                },
                              });
                            }}
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
                            value={propertyDetails?.propertyAddress.address2}
                            onChange={(e) => {
                              setPropertyDetails({
                                ...propertyDetails,
                                propertyAddress: {
                                  ...propertyDetails.propertyAddress,
                                  address2: e.target.value,
                                },
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
                            id="state"
                            value={propertyDetails?.propertyAddress.state}
                            onChange={(e) => {
                              setPropertyDetails({
                                ...propertyDetails,
                                propertyAddress: {
                                  ...propertyDetails.propertyAddress,
                                  state: e.target.value,
                                },
                              });
                            }}
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
                            id="city"
                            value={propertyDetails?.propertyAddress.city}
                            onChange={(e) => {
                              setPropertyDetails({
                                ...propertyDetails,
                                propertyAddress: {
                                  ...propertyDetails.propertyAddress,
                                  city: e.target.value,
                                },
                              });
                            }}
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
                            id="zip"
                            value={propertyDetails?.propertyAddress.pin}
                            onChange={(e) => {
                              setPropertyDetails({
                                ...propertyDetails,
                                propertyAddress: {
                                  ...propertyDetails.propertyAddress,
                                  pin: e.target.value,
                                },
                              });
                            }}
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
                            value={propertyDetails?.propertyAddress.timezone}
                            onChange={(e) => {
                              setPropertyDetails({
                                ...propertyDetails,
                                propertyAddress: {
                                  ...propertyDetails.propertyAddress,
                                  timezone: e.target.value,
                                },
                              });
                            }}
                            id="timezone"
                            className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="zip"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Currency Code
                        </label>
                        <div className="mt-1">
                          <input
                            type="number"
                            name="currencycode"
                            id="currencycode"
                            value={propertyDetails.propertyAddress.currencyCode}
                            onChange={(e) => {
                              setPropertyDetails({
                                ...propertyDetails,
                                propertyAddress: {
                                  ...propertyDetails.propertyAddress,
                                  currencyCode: e.target.value,
                                },
                              });
                            }}
                            autoComplete="CurrencyCode"
                            className="h-10 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
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
                            value={propertyDetails?.propertyAddress.checkin}
                            onChange={(e) => {
                              setPropertyDetails({
                                ...propertyDetails,
                                propertyAddress: {
                                  ...propertyDetails.propertyAddress,
                                  checkin: e.target.value,
                                },
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
                            value={propertyDetails?.propertyAddress.checkout}
                            onChange={(e) => {
                              setPropertyDetails({
                                ...propertyDetails,
                                propertyAddress: {
                                  ...propertyDetails.propertyAddress,
                                  checkout: e.target.value,
                                },
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
                                value={propertyDetails?.companyDetails.name}
                                onChange={(e) => {
                                  setPropertyDetails({
                                    ...propertyDetails,
                                    companyDetails: {
                                      ...propertyDetails.companyDetails,
                                      name: e.target.value,
                                    },
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
                                value={propertyDetails?.companyDetails.bank}
                                onChange={(e) => {
                                  setPropertyDetails({
                                    ...propertyDetails,
                                    companyDetails: {
                                      ...propertyDetails.companyDetails,
                                      bank: e.target.value,
                                    },
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
                                value={propertyDetails?.companyDetails.bic}
                                onChange={(e) => {
                                  setPropertyDetails({
                                    ...propertyDetails,
                                    companyDetails: {
                                      ...propertyDetails.companyDetails,
                                      bic: e.target.value,
                                    },
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
                                value={propertyDetails?.companyDetails.iban}
                                onChange={(e) => {
                                  setPropertyDetails({
                                    ...propertyDetails,
                                    companyDetails: {
                                      ...propertyDetails.companyDetails,
                                      iban: e.target.value,
                                    },
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
                                id="bank"
                                value={propertyDetails?.companyDetails.cre}
                                onChange={(e) => {
                                  setPropertyDetails({
                                    ...propertyDetails,
                                    companyDetails: {
                                      ...propertyDetails.companyDetails,
                                      cre: e.target.value,
                                    },
                                  });
                                }}
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
                                value={propertyDetails?.companyDetails.taxId}
                                onChange={(e) => {
                                  setPropertyDetails({
                                    ...propertyDetails,
                                    companyDetails: {
                                      ...propertyDetails.companyDetails,
                                      taxId: e.target.value,
                                    },
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
                              Managing directories
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="iban"
                                id="iban"
                                value={propertyDetails?.companyDetails.iban}
                                onChange={(e) => {
                                  setPropertyDetails({
                                    ...propertyDetails,
                                    companyDetails: {
                                      ...propertyDetails.companyDetails,
                                      iban: e.target.value,
                                    },
                                  });
                                }}
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
                                        rows={4}
                                        value={
                                          propertyDetails?.paymentTerms.english
                                        }
                                        onChange={(e) => {
                                          setPropertyDetails({
                                            ...propertyDetails,
                                            paymentTerms: {
                                              ...propertyDetails?.paymentTerms,
                                              english: e.target.value,
                                            },
                                          });
                                        }}
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
                                        rows={4}
                                        value={
                                          propertyDetails?.paymentTerms.german
                                        }
                                        onChange={(e) => {
                                          setPropertyDetails({
                                            ...propertyDetails,
                                            paymentTerms: {
                                              ...propertyDetails?.paymentTerms,
                                              german: e.target.value,
                                            },
                                          });
                                        }}
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
                                        rows={4}
                                        value={
                                          propertyDetails?.paymentTerms.italian
                                        }
                                        onChange={(e) => {
                                          setPropertyDetails({
                                            ...propertyDetails,
                                            paymentTerms: {
                                              ...propertyDetails?.paymentTerms,
                                              italian: e.target.value,
                                            },
                                          });
                                        }}
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
                        onClick={() => {
                          const allProperties = JSON.parse(
                            localStorage.getItem('properties') ?? '[]'
                          );
                          allProperties[
                            Number.parseInt(
                              router.query.propertyId?.toString() ?? '1',
                              10
                            ) - 1
                          ] = propertyDetails;
                          localStorage.setItem(
                            'properties',
                            JSON.stringify(allProperties)
                          );
                        }}
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </main>
    </Sidebar>
  );
}
