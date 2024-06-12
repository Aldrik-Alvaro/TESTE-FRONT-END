import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilPencil,
  cilChart,
  cilPlaylistAdd,
  cilNoteAdd,
  cilList,
  cilPlus,
  cilEyedropper
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const userRole = sessionStorage.getItem('userRole');
//alert(userRole);

let _nav = [];

_nav = [
  {
    component: CNavItem,
    name: 'Criação Usuarios',
    to: '/usuario/criacao',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Edição Usuarios',
    to: '/usuario/edicao',
    icon: <CIcon icon={cilEyedropper} customClassName="nav-icon" />,
    
  }
];

if (userRole === 'candidato') {
  _nav = [
    {
      component: CNavTitle,
      name: 'Candidato',
    },
    {
      component: CNavItem,
      name: 'Realização de Provas',
      to: '/',
      icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      disabled: true 
    }
  ];
} else if (userRole === 'examinador') {
  _nav = [
    {
      component: CNavTitle,
      name: 'Examinador',
    },
    {
      component: CNavItem,
      name: 'Criação de Questões',
      to: '/questao/criacao',
      icon:<CIcon icon={cilPlaylistAdd} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Edição de Questões',
      to: '/questao/edicao',
      icon:<CIcon icon={cilList} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Montagem de Provas',
      to: '/prova/criacao',
      icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
      disabled: true 
    },
    {
      component: CNavItem,
      name: 'Análise',
      to: '/dashboard',
      icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
      disabled: true 
    }
  ];
} else if (userRole === 'admin') {
  _nav = [
    {
      component: CNavTitle,
      name: 'Candidato',
    },
    {
      component: CNavItem,
      name: 'Realização de Provas',
      to: '/',
      icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      disabled: true 
    },
    {
      component: CNavTitle,
      name: 'Examinador',
    },
    {
      component: CNavItem,
      name: 'Criação de Questões',
      to: '/questao/criacao',
      icon:<CIcon icon={cilPlaylistAdd} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Edição de Questões',
      to: '/questao/edicao',
      icon:<CIcon icon={cilList} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Montagem de Provas',
      to: '/prova/criacao',
      icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
      disabled: true 
    },
    {
      component: CNavItem,
      name: 'Análise',
      to: '/dashboard',
      icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
      disabled: true 
    },
    {
      component: CNavTitle,
      name: 'Administrador',
    },
    {
      component: CNavItem,
      name: 'Criação Usuarios',
      to: '/usuario/criacao',
      icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Edição Usuarios',
      to: '/usuario/edicao',
      icon: <CIcon icon={cilEyedropper} customClassName="nav-icon" />,
      
    }
  ];
}

export default _nav;
