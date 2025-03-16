export const getBasePath = (): string => {
  return process.env.NODE_ENV === 'production' ? '/robert_photo' : '';
};

export const getImagePath = (path: string): string => {
  return `${getBasePath()}${path}`;
};

export const getPagePath = (path: string): string => {
  return `${getBasePath()}${path}`;
}; 