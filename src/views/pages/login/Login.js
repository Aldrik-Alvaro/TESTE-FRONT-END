import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import dbsnoopLogo from 'src/assets/images/1.png';
import axios from 'axios';
import background from 'src/assets/images/hmzfundo.jpg';

const login = () => {
  const email = document.getElementById('formLoginEmail').value;
  const password = document.getElementById('formLoginPassword').value;

  axios.post('http://localhost:8080/usuario/login', {
    email: email,
    senha: password
  })
  .then(response => {
    if (response.status === 200) {
      // Se o login for bem-sucedido
      //console.log(response);
      const userData = response.data;
      
      sessionStorage.setItem('userId', userData.id);
      sessionStorage.setItem('userRole', userData.role);
    
      window.location.href = 'http://localhost:3000/#/inicio';
    } else {
      // Se o login falhar
      console.error('Login incorreto');
      alert('Login incorreto');
    }
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
    alert('Login incorreto');
  });
}




const Login = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`, 
      height: '100vh', 
      width: '100vw',
      margin: 0,
      padding: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      
      <CContainer style={{ border: '0px solid red' }}>
      
        {/* <CRow className="justify-content-center"> */}
        <CRow className="">
          <CCol md={12}>

            <CCardGroup>

              <CCard className="text-white py-6" style={{  width: '100%', borderRight: '1px solid white' }}>
                <CCardBody className="text-center d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                    <img className="sidebar-brand-full" src={dbsnoopLogo} alt="Logo" height={110} />
                </CCardBody>
              </CCard>


              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Faça login em sua conta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Email" autoComplete="email" id="formLoginEmail"/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        id="formLoginPassword"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={12}>
                   
                        <CButton color="info" className="mt-3" style={{ color: 'white', marginRight: '10px' }}  onClick={login}>
                          Login
                        </CButton>
                     
                         <Link to="/register">
                          <CButton color="info" className="mt-3"  style={{ color: 'white', marginRight: '10px' }} >
                            Register  
                          </CButton>
                        </Link> 

                      </CCol>

                      <CCol xs={6}>
                        
                      </CCol>
                      
                      {/* <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>



            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
















    </div>
  )
}

export default Login
