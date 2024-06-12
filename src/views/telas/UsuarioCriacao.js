import React, { useEffect, useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CFormFeedback, CFormLabel, CFormSelect, CRow } from '@coreui/react'
import axios from 'axios';


const HelloWorldView = () => {
    const [validated, setValidated] = useState(false)
    const [radioButtonsEnabled, setRadioButtonsEnabled] = useState(true); 
 
    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        const userRole = sessionStorage.getItem('userRole');
        if (!userId || !userRole) {
          window.location.href = "http://localhost:3000/#/login";
        }
      }, []); 
      
    const handleSubmitQuestao = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            reloadPage(event)         
        }else{
            reloadPage(event)
            const formInputusername = document.getElementById('formInputusername').value;
            const formInputpassword = document.getElementById('formInputpassword').value;
            const formInputnome = document.getElementById('formInputnome').value;
            const formInputemail = document.getElementById('formInputemail').value;
            const formSelectrole = document.getElementById('formSelectrole').value;
            
            axios.post('http://localhost:8080/usuario', {
                username: formInputusername,
                senha: formInputpassword,
                nome: formInputnome,
                email: formInputemail,
                role: formSelectrole
            })
            .then(response => {
                //console.log(response);
                envioSucesso();
            })
            .catch(error => {
                console.error('Ocorreu um erro:', error);
                alert('Ocorreu um erro');
            });
  

      }
      setValidated(true)
    }

    const reloadPage = (event) => {
        event.preventDefault()
        event.stopPropagation()
    };

    const envioSucesso = () => {
        alert('Usuario cadastrado com sucesso.');
        window.location.reload(); 
    };

    const limparCampos = () => {
        document.getElementById('formInputusername').value = '';
        document.getElementById('formInputpassword').value = '';
        document.getElementById('formInputnome').value = '';
        document.getElementById('formInputemail').value = '';
        document.getElementById('formSelectrole').value = 'user';
    };

    const toggleRadioButtons = () => {
        setRadioButtonsEnabled(!radioButtonsEnabled); // Inverte o estado de habilitação dos botões de rádio
    };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <small>Criação de Questões:</small>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmitQuestao}>
                <CCol md={6}>
                    <CFormLabel htmlFor="validationCustom03">Username</CFormLabel>
                    <CFormInput type="text" id="formInputusername" required />
                    <CFormFeedback invalid>Informe o username.</CFormFeedback>
                </CCol>
                <CCol md={6}>
                    <CFormLabel htmlFor="validationCustom03">Senha</CFormLabel>
                    <CFormInput type="password" id="formInputpassword" required />
                    <CFormFeedback invalid>Informe a senha.</CFormFeedback>
                </CCol>
                <CCol md={5}>
                    <CFormLabel htmlFor="validationCustom03">Nome</CFormLabel>
                    <CFormInput type="text" id="formInputnome" required />
                    <CFormFeedback invalid>Informe o Nome.</CFormFeedback>
                </CCol>
                <CCol md={4}>
                    <CFormLabel htmlFor="validationCustom03">Email</CFormLabel>
                    <CFormInput type="text" id="formInputemail" required />
                    <CFormFeedback invalid>Informe o Email.</CFormFeedback>
                </CCol>

                <CCol md={3}>
                    <CFormLabel htmlFor="validationCustom04">Tipo da Role</CFormLabel>
                    <CFormSelect 
                        id="formSelectrole"
                        aria-label="Escolha..."
                        options={[
                            { label: 'Usuario', value: 'user' },
                            { label: 'Administrador', value: 'admin' }
                        ]}
                        />
                    <CFormFeedback invalid>Informe o tipo da Role.</CFormFeedback>
                </CCol>

                <CCol xs={12}>
                    <CButton color="primary" type="submit" style={{ marginRight: '10px' }}>
                        Criar
                    </CButton>
                    <CButton color="primary" onClick={limparCampos}>
                        Cancelar
                    </CButton>
                </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
 
  )
}

export default HelloWorldView
