import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Gérer les redirections pour le développement local
  if (process.env.NODE_ENV === 'development') {
    if (pathname === '/robert_photo') {
      return NextResponse.redirect(new URL('/', request.url))
    }
    if (pathname.startsWith('/robert_photo/')) {
      return NextResponse.redirect(new URL(pathname.replace('/robert_photo', ''), request.url))
    }
  }

  return NextResponse.next()
} 