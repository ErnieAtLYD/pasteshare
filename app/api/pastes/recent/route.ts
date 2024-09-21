import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { Paste } from '../../../types/paste';

export async function GET(req: NextRequest) {
  const limit = 10; // Set the limit for the number of pastes to retrieve
  const pastes = await kv.scan({ prefix: 'paste-', limit });

  // Sort pastes by createdAt in descending order
  const sortedPastes = pastes.sort((a, b) => b.createdAt - a.createdAt);

  return NextResponse.json(sortedPastes);
}
