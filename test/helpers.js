const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Coco Ellis',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Coco Ellis',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Coco Ellis',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Coco Ellis',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Coco Ellis',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
