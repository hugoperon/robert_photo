export const getBasePath = (): string => {
  // Vérifie si nous sommes déjà sur une URL contenant robert_photo
  if (typeof window !== 'undefined' && window.location.pathname.includes('/robert_photo')) {
    return '';
  }
  return process.env.NODE_ENV === 'production' ? '/robert_photo' : '';
};

export const getImagePath = (path: string): string => {
  return `${getBasePath()}${path}`;
};

export const getPagePath = (path: string): string => {
  // Retire le slash initial si on a un basePath
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const basePath = getBasePath();
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}; 