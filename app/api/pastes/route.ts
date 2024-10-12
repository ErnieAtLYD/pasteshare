import { NextRequest, NextResponse } from 'next/server';
import { Paste } from '../../types/paste';

const pastes: Paste[] = [];

export async function GET(req: NextRequest) {
  return NextResponse.json(pastes);
}

export async function POST(req: NextRequest) {
  const newPaste: Omit<Paste, 'id' | 'createdAt'> = await req.json();

  const expiresAt = newPaste.expiresAt ? new Date(newPaste.expiresAt).getTime() : null;

  const createdPaste: Paste = {
    ...newPaste,
    id: `paste-${pastes.length + 1}`,
    createdAt: Date.now(),
    expiresAt, // Set expiresAt if provided
  };

  pastes.push(createdPaste);
  return NextResponse.json(createdPaste, { status: 201 });
}
