import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const response = await fetch(`http://3.110.64.51/workflow_API/api/GetFiles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const jsonResponse = await response.json();
  res.status(200).json(jsonResponse);
}
