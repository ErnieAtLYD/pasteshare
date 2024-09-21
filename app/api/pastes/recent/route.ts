import { NextRequest, NextResponse } from 'next/server';
import { Paste } from '../../../types/paste';

const pastes: Paste[] = []; // This should be shared or managed in a more persistent way

export async function GET(req: NextRequest) {
  const sortedPastes = [...pastes].sort((a, b) => b.createdAt - a.createdAt);
  return NextResponse.json(sortedPastes);
}
