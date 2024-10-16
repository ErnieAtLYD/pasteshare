import { NextRequest, NextResponse } from 'next/server';
import { Paste } from '../../../types/paste';

const pastes: Paste[] = []; // This should be shared or managed in a more persistent way

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = req.nextUrl.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  const paste = pastes.find((p) => p.id === id);

  if (!paste) {
    return NextResponse.json({ error: 'Paste not found' }, { status: 404 });
  }

  const key = searchParams.get('key');

  if (key && key in paste) {
    return NextResponse.json({ [key]: paste[key as keyof Paste] });
  }

  return NextResponse.json(paste);
}
