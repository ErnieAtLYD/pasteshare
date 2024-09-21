import type { NextApiRequest, NextApiResponse } from 'next';
import { Paste } from '../../app/types/paste';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const newPaste: Omit<Paste, 'id' | 'createdAt'> = req.body;

    // Here you would typically save the paste to a database
    // For now, we'll just return a success response with a mock ID
    const createdPaste = {
      ...newPaste,
      id: 'mock-id',
      createdAt: Date.now(),
    };

    res.status(201).json(createdPaste);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
