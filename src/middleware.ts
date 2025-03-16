import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Évite la duplication de /robert_photo dans l'URL
  if (pathname.includes('/robert_photo/robert_photo')) {
    return NextResponse.redirect(
      new URL(pathname.replace('/robert_photo/robert_photo', '/robert_photo'), request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*'
} 