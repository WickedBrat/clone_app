export async function AddNewProperty(propertyBody: any) {
  const response = await fetch('/api/create-new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(propertyBody),
  });
  const jsonResponse = response.json();
  return jsonResponse;
}

export async function GetAllProperties() {
  const response = await fetch('/api/get-all-properties', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
}

export async function GetPropertyDetails(propertyId: string) {
  const response = await fetch('/api/get-property-details', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ propertyId }),
  });
  const jsonResponse = await response.json();
  return jsonResponse;
}

export async function GetPropertyImages() {
  const response = await fetch('/api/get-property-images', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse;
}
