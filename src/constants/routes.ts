type RoutesType = {
  LOGIN: {
    TITLE: string
    PATH: string
  }
  HOME: {
    TITLE: string
    PATH: string
  }
  DOCS: {
    TITLE: string
    PATH: string
  }
}

export const ROUTES: RoutesType = {
  LOGIN: {
    TITLE: 'Login',
    PATH: '/',
  },
  HOME: {
    TITLE: 'Início',
    PATH: '/inicio',
  },
  DOCS: {
    TITLE: 'Meus documentos',
    PATH: '/documentos',
  },
}
