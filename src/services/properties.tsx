import toast from 'react-hot-toast';

export function toastDispatcher(
  promise: Promise<unknown>,
  loadingMessage: string,
  successMessage: string,
  errorMessage: string
): void {
  toast.promise(
    promise,
    {
      loading: loadingMessage,
      success: () => successMessage,
      error: () => errorMessage,
    },
    {
      style: {
        minWidth: '250px',
      },
      success: {
        duration: 3000,
      },
    }
  );
}

export async function AddNewProperty(propertyBody: any) {
  const responsePromise = fetch('/api/create-new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(propertyBody),
  });
  toastDispatcher(
    responsePromise,
    'Creating new Property...',
    'Property Created Successfully',
    'Error Creating Property'
  );
  const response = await responsePromise;
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse;
}

export async function GetAllProperties() {
  const responsePromise = fetch('/api/get-all-properties', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  toastDispatcher(
    responsePromise,
    'Fetching Properties...',
    'Properties Fetched Successfully',
    'Error Fetching Properties'
  );
  const response = await responsePromise;
  const jsonResponse = await response.json();
  return jsonResponse;
}

export async function GetPropertyDetails(propertyId: string) {
  const responsePromise = fetch('/api/get-property-details', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ propertyId }),
  });

  toastDispatcher(
    responsePromise,
    ' Fetching Property Details...',
    'Property Details Fetched Successfully',
    'Error Fetching Property Details'
  );
  const response = await responsePromise;
  const jsonResponse = await response.json();
  return jsonResponse;
}

export async function GetPropertyImages() {
  const responsePromise = fetch('/api/get-property-images', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  toastDispatcher(
    responsePromise,
    'Fetching Property Images...',
    'Property Images Fetched Successfully',
    'Error Fetching Property Images'
  );
  const response = await responsePromise;
  const jsonResponse = await response.json();
  return jsonResponse;
}
