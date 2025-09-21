export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },
  auth: {
    register: {
      path: '/auth/register',
      getHref: () => '/auth/register',
    },
    login: {
      path: '/auth/login', 
      getHref: () => '/auth/login',
    },
  },
  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    dashboard: {
      path: '/app/dashboard',
      getHref: () => '/app/dashboard',
    },
    discussions: {
      path: '/app/discussions',
      getHref: () => '/app/discussions',
    },
    discussion: {
      path: '/app/discussions/:discussionId',
      getHref: (discussionId: string) => `/app/discussions/${discussionId}`,
    },
    users: {
      path: '/app/users',
      getHref: () => '/app/users',
    },
    profile: {
      path: '/app/profile',
      getHref: () => '/app/profile',
    },
  },
} as const;
