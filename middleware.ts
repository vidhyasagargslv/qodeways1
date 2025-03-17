import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { parseCookies } from 'nookies';

export function middleware(request: NextRequest) {
  const cookies = parseCookies({ req: request });
  const token = cookies.token;

  
  if (!token && request.nextUrl.pathname === '/profile') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  
  if (token && request.nextUrl.pathname === '/profile') {
    return NextResponse.next();
  }

  // For other routes, allow access
  return NextResponse.next();
}

    //? Remember:
    // In middle paths are case sensitive
    // For app directory: /profile
    // For pages directory: /Profile
export const config = {
  matcher: ['/profile'],
};