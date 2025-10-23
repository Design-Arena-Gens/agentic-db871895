import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const required = ['name', 'email', 'message'];
    for (const key of required) {
      if (!data[key] || String(data[key]).trim().length === 0) {
        return NextResponse.json({ error: `${key} is required` }, { status: 400 });
      }
    }

    // In real deployment, integrate email/provider here.
    console.log('New inquiry', {
      name: data.name,
      email: data.email,
      company: data.company,
      service: data.service,
      budget: data.budget,
      message: data.message,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
