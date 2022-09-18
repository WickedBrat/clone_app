import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const response = await fetch(
    'http://3.110.64.51/workflow_API/Api/NewProperty',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    }
  );
  const jsonResponse = response.json();
  console.log(jsonResponse);

  res.status(200).json({ name: 'John Doe' });
}
