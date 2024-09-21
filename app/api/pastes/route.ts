import { NextRequest, NextResponse } from 'next/server';
import { Paste } from '../../types/paste';

const pastes: Paste[] = [];

export async function GET(req: NextRequest) {
  return NextResponse.json(pastes);
}

export async function POST(req: NextRequest) {
  const newPaste: Omit<Paste, 'id' | 'createdAt' | 'expiresAt'> = await req.json();

  const createdPaste: Paste = {
    ...newPaste,
    id: `paste-${pastes.length + 1}`,
    createdAt: Date.now(),
    expiresAt: newPaste.expiresAt || null, // Set expiresAt if provided
  };

  pastes.push(createdPaste);
  return NextResponse.json(createdPaste, { status: 201 });
}
