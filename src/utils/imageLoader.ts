export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/robert_photo' : ''
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src
  return `${basePath}/${cleanSrc}`
} 