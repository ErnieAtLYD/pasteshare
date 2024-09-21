import { NextRequest, NextResponse } from 'next/server';
import { Paste } from '../../types/paste';

const pastes: Paste[] = [];

export async function GET(req: NextRequest) {
  return NextResponse.json(pastes);
}

export async function POST(req: NextRequest) {
  const newPaste: Omit<Paste, 'id' | 'createdAt' | 'expiration'> = await req.json();

  const createdPaste: Paste = {
    ...newPaste,
    id: `paste-${pastes.length + 1}`,
    createdAt: Date.now(),
    expiration: newPaste.expiration || null, // Set expiration if provided
  };

  pastes.push(createdPaste);
  return NextResponse.json(createdPaste, { status: 201 });
}
