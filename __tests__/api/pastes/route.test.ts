import { NextRequest, NextResponse } from 'next/server';
import { GET, POST } from '../../../app/api/pastes/route';

jest.mock('next/server', () => ({
  NextRequest: jest.fn().mockImplementation(() => ({
    json: jest.fn().mockResolvedValue({}),
  })),
  NextResponse: {
    json: jest.fn((data, { status } = { status: 200 }) => ({
      status,
      json: async () => data,
    })),
  },
}));

describe('API /api/pastes', () => {
  it('should return an empty array initially with GET', async () => {
    const req = new NextRequest('http://localhost/api/pastes');
    const res = await GET(req);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data).toEqual([]);
  });

  it('should create a new paste with POST', async () => {
    const newPaste = {
      title: 'Test Paste',
      content: 'This is a test paste.',
      language: 'plaintext',
    };

    const req = new NextRequest('http://localhost/api/pastes', {
      method: 'POST',
      body: JSON.stringify(newPaste),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(201);
    expect(data).toMatchObject({
      title: 'Test Paste',
      content: 'This is a test paste.',
      language: 'plaintext',
      id: expect.any(String),
      createdAt: expect.any(Number),
    });
  });
});
