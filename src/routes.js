import React from 'react'

const Login = React.lazy(() => import('./views/pages/login/Login'))
const HelloWorldView = React.lazy(() => import('./views/HelloWorldView'))
const UsuarioCriacao = React.lazy(() => import('./views/telas/UsuarioCriacao'))
const UsuarioEdicao = React.lazy(() => import('./views/telas/UsuarioEdicao'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/login', name: 'Login', element: Login },
  { path: '/inicio', name: 'HelloWorld', element: HelloWorldView },
  { path: '/usuario/criacao', name: 'UsuarioCriacao', element: UsuarioCriacao },
  { path: '/usuario/edicao', name: 'UsuarioEdicao', element: UsuarioEdicao },

]

export default routes
