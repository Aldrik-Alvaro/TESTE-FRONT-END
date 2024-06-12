import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import dbsnoopLogo from 'src/assets/images/2.png';
import dbsnoopLogo1 from 'src/assets/images/4.png';

// import { logo } from 'src/assets/brand/logo'
// import { sygnet } from 'src/assets/brand/sygnet'

// sidebar nav config
import navigation from '../_nav'
import { bottom } from '@popperjs/core'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const sair = () => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userRole');
    window.location.href = 'http://localhost:3000/#/login';
};


  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={true}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
       <div style={{ borderBottom: '1px solid #323a49', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CSidebarHeader>
      
        <CSidebarBrand to="/">
          <img className="sidebar-brand-full" src={dbsnoopLogo} alt="Logo" height={50} justify-content={'center'} align-items={'center'} />
          <img className="sidebar-brand-narrow" src={dbsnoopLogo1} alt="Logo" height={40} />
        </CSidebarBrand>

      </CSidebarHeader>
      </div>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          //onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
          
          onClick={sair}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
