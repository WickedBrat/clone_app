export function AddNewProperty(propertyBody: any) {
  fetch('/api/create-new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(propertyBody),
  });
}
