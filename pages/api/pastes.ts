import type { NextApiRequest, NextApiResponse } from 'next';
import { Paste } from '../../app/types/paste';

const pastes: Paste[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(pastes);
    return;
  }
  if (req.method === 'POST') {
    const newPaste: Omit<Paste, 'id' | 'createdAt'> = req.body;

    const createdPaste: Paste = {
      ...newPaste,
      id: `paste-${pastes.length + 1}`,
      createdAt: Date.now(),
    };

    pastes.push(createdPaste);
    res.status(201).json(createdPaste);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
