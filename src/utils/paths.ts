const getBasePath = (): string => {
  return process.env.NODE_ENV === 'production' ? '/robert_photo' : '';
};

export const getImagePath = (path: string): string => {
  const basePath = getBasePath();
  // Retire le slash initial du chemin si nécessaire
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
};

export const getPagePath = (path: string): string => {
  // Pour les chemins de pages, on utilise des chemins relatifs
  // Next.js s'occupera d'ajouter le basePath automatiquement
  return path;
}; 