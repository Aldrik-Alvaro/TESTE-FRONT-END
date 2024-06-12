import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
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
import axios from 'axios';

const register = () => {
  const username = document.getElementById('formRegisterUsername').value;
  const nome = document.getElementById('formRegisterNome').value;
  const email = document.getElementById('formRegisterEmail').value;
  const password = document.getElementById('formRegisterPassword').value;

  axios.post('http://localhost:8080/usuario', {
    username: username,
    senha: password,
    nome: nome,
    email: email,
    role: 'user'
  })
  .then(response => {
    console.log(response);
    if (response.status === 200) {
      // Se o registro for bem-sucedido
      alert('Cadastrado com sucesso, Realize o Login');
      window.location.href = 'http://localhost:3000/#/login';
    } else {
      // Se o registro falhar
      alert('Ocorreu um erro durante o registro!');
    }
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
    alert('Ocorreu um erro durante o registro!');
  });
}

const Register = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Registro</h1>
                  <p className="text-body-secondary">Crie sua conta</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" autoComplete="username" id="formRegisterUsername"/>
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      id="formRegisterPassword"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Nome" autoComplete="nome" id="formRegisterNome"/>
                  </CInputGroup>


                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" id="formRegisterEmail"/>
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton color="success"  onClick={register}>Registrar</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
