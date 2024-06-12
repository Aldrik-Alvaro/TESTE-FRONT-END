// import React, { useEffect, useState } from 'react'
// import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormCheck, CFormInput, CFormFeedback, CFormLabel, CFormSelect, CFormTextarea, CRow } from '@coreui/react'
// import axios from 'axios';


// const HelloWorldView = () => {
//     const [validated, setValidated] = useState(false)
//     const [radioButtonsEnabled, setRadioButtonsEnabled] = useState(true); 
//     const [headerRespostaTrueFalse,  setheaderRespostaTrueFalse] = useState(false); 
//     const [headerRespostaMultEscolha,  setheaderRespostaMultEscolha] = useState(false); 
//     const [headerRespostaDissertativa,  setheaderRespostaDissertativa] = useState(false); 

//     useEffect(() => {
//         const userId = sessionStorage.getItem('userId');
//         const userRole = sessionStorage.getItem('userRole');
//         if (!userId || !userRole) {
//           window.location.href = "http://localhost:3000/#/login";
//         }
//       }, []); 


//     const handleSubmitQuestao = (event) => {
//         const form = event.currentTarget
//         if (form.checkValidity() === false) {
//             reloadPage(event)         
//         }else{
//             reloadPage(event)
//             const tituloQuestao = document.getElementById('formInputTituloQuestao').value;
//             const tipoQuestao = document.getElementById('formSelectTipoQuestao').value;
//             const enunciadoQuestao = document.getElementById('formTextAreaEnunciadoQuestao').value;
  
//             if (tipoQuestao === 'dissertativa') {
//                 setheaderRespostaDissertativa(true);
//                 setheaderRespostaMultEscolha(false);
//                 setheaderRespostaTrueFalse(false);
//                 desativarCampos();
//             } else if (tipoQuestao === 'multipla_escolha') {
//                 setheaderRespostaMultEscolha(true);
//                 setheaderRespostaDissertativa(false);
//                 setheaderRespostaTrueFalse(false);
//                 desativarCampos();

//             } else if (tipoQuestao === 'verdadeiro_falso') {
//                 setheaderRespostaTrueFalse(true);
//                 setheaderRespostaMultEscolha(false);
//                 setheaderRespostaDissertativa(false);
//                 desativarCampos();
//             }
//       }
     
//     }

//     const handleSubmitRespostaTrueFalse = (event) => {
//         const form = event.currentTarget
//         if (form.checkValidity() === false) {
//             reloadPage(event)         
//         }else{
//             reloadPage(event)
//             const tituloQuestao = document.getElementById('formInputTituloQuestao').value;
//             const tipoQuestao = document.getElementById('formSelectTipoQuestao').value;
//             const enunciadoQuestao = document.getElementById('formTextAreaEnunciadoQuestao').value;
//             const respostaTrueFalse1 = document.getElementById('flexRadioRespostaTrueFalse1').checked;
//             const respostaTrueFalse2 = document.getElementById('flexRadioRespostaTrueFalse2').checked;
//             const campo1 = transformarBooleanoParaString(respostaTrueFalse1);
//             const campo2 = transformarBooleanoParaString(respostaTrueFalse2);
//             console.log({
//                 tituloQuestao: tituloQuestao,
//                 tipoQuestao: tipoQuestao,
//                 enunciadoQuestao: enunciadoQuestao,
//                 respostaTrueFalse1: campo1,
//                 respostaTrueFalse2: campo2
//             });
//             axios.post('http://localhost/api/questoes/cadastrar', {
//                 tituloQuestao: tituloQuestao,
//                 tipoQuestao: tipoQuestao,
//                 enunciadoQuestao: enunciadoQuestao,
//                 respostaTrueFalse1: campo1,
//                 respostaTrueFalse2: campo2
//             }, {
//                 headers: {
//                     'Authorization': 'Bearer a7340da9-8d17-40aa-a183-177e6b033a33'
//                 }
//             })
//             .then(response => {
//                 console.log(response);
//                 envioSucesso();
//             })
//             .catch(error => {
//                 console.error('Ocorreu um erro:', error);
//                 alert('Ocorreu um erro');
//             });
//         }

//       }
 
//     const handleSubmitRespostaMultEscolha = (event) => {
//         const form = event.currentTarget
//         if (form.checkValidity() === false) {
//             reloadPage(event)         
//         }else{
//             reloadPage(event)
//             const tituloQuestao = document.getElementById('formInputTituloQuestao').value;
//             const tipoQuestao = document.getElementById('formSelectTipoQuestao').value;
//             const enunciadoQuestao = document.getElementById('formTextAreaEnunciadoQuestao').value;
//             const formControlRespostaMultEscolha1 = document.getElementById('formControlRespostaMultEscolha1').value;
//             const formControlRespostaMultEscolha2 = document.getElementById('formControlRespostaMultEscolha2').value;
//             const formControlRespostaMultEscolha3 = document.getElementById('formControlRespostaMultEscolha3').value;
//             const formControlRespostaMultEscolha4 = document.getElementById('formControlRespostaMultEscolha4').value;
//             const flexRadioRespostaMultEscolha1 = document.getElementById('flexRadioRespostaMultEscolha1').checked;
//             const flexRadioRespostaMultEscolha2 = document.getElementById('flexRadioRespostaMultEscolha2').checked;
//             const flexRadioRespostaMultEscolha3 = document.getElementById('flexRadioRespostaMultEscolha3').checked;
//             const flexRadioRespostaMultEscolha4 = document.getElementById('flexRadioRespostaMultEscolha4').checked;
//             const campo1 = transformarBooleanoParaString(flexRadioRespostaMultEscolha1);
//             const campo2 = transformarBooleanoParaString(flexRadioRespostaMultEscolha2);
//             const campo3 = transformarBooleanoParaString(flexRadioRespostaMultEscolha3);
//             const campo4 = transformarBooleanoParaString(flexRadioRespostaMultEscolha4);

//             axios.post('http://localhost/api/questoes/cadastrar', {
//                 tituloQuestao: tituloQuestao,
//                 tipoQuestao: tipoQuestao,
//                 enunciadoQuestao: enunciadoQuestao,
//                 formControlRespostaMultEscolha1: formControlRespostaMultEscolha1,
//                 formControlRespostaMultEscolha2: formControlRespostaMultEscolha2,
//                 formControlRespostaMultEscolha3: formControlRespostaMultEscolha3,
//                 formControlRespostaMultEscolha4: formControlRespostaMultEscolha4,
//                 flexRadioRespostaMultEscolha1: campo1,
//                 flexRadioRespostaMultEscolha2: campo2,
//                 flexRadioRespostaMultEscolha3: campo3,
//                 flexRadioRespostaMultEscolha4: campo4
//             }, {
//                 headers: {
//                     'Authorization': 'Bearer a7340da9-8d17-40aa-a183-177e6b033a33'
//                 }
//             })
//             .then(response => {
//                 console.log(response);
//                 envioSucesso();
//             })
//             .catch(error => {
//                 console.error('Ocorreu um erro:', error);
//                 alert('Ocorreu um erro');
//             });
            
//         }


//     }

//     const handleSubmitRespostaDissertativa = (event) => {
//         const form = event.currentTarget
//         if (form.checkValidity() === false) {
//             reloadPage(event)         
//         }else{
//             reloadPage(event)
            
//             const tituloQuestao = document.getElementById('formInputTituloQuestao').value;
//             const tipoQuestao = document.getElementById('formSelectTipoQuestao').value;
//             const enunciadoQuestao = document.getElementById('formTextAreaEnunciadoQuestao').value;
//             const respostaDissertativa = document.getElementById('formTextAreaRespostaDissertativa').value;

//             axios.post('http://localhost/api/questoes/cadastrar', {
//                 tituloQuestao: tituloQuestao,
//                 tipoQuestao: tipoQuestao,
//                 enunciadoQuestao: enunciadoQuestao,
//                 respostaDissertativa: respostaDissertativa
//             }, {
//                 headers: {
//                     'Authorization': 'Bearer a7340da9-8d17-40aa-a183-177e6b033a33'
//                 }
//             })
//             .then(response => {
//                 console.log(response);
//                 envioSucesso();
//             })
//             .catch(error => {
//                 console.error('Ocorreu um erro:', error);
//                 alert('Ocorreu um erro');
//             });

          
//         }
        
//     }
      
//     const reloadPage = (event) => {
//         event.preventDefault()
//         event.stopPropagation()
//     };

//     const envioSucesso = () => {
//         alert('Questão cadastrada com sucesso');
//         window.location.reload(); 
//     };


//     const transformarBooleanoParaString = (valorBooleano) => {
//         return valorBooleano ? 'verdadeiro' : 'falso';
//     };

//     const desativarCampos = () => {
//         document.getElementById('formInputTituloQuestao').disabled = true;
//         document.getElementById('formSelectTipoQuestao').disabled = true;
//         document.getElementById('formTextAreaEnunciadoQuestao').disabled = true;
//     };


//     const limparCampos = () => {
//         document.getElementById('formInputTituloQuestao').value = '';
//         document.getElementById('formSelectTipoQuestao').value = 'dissertativa';
//         document.getElementById('formTextAreaEnunciadoQuestao').value = '';
//         setheaderRespostaTrueFalse(false);
//         setheaderRespostaMultEscolha(false);
//         setheaderRespostaDissertativa(false);
//         document.getElementById('formInputTituloQuestao').disabled = false;
//         document.getElementById('formSelectTipoQuestao').disabled = false;
//         document.getElementById('formTextAreaEnunciadoQuestao').disabled = false;
//     };

//     const toggleRadioButtons = () => {
//         setRadioButtonsEnabled(!radioButtonsEnabled); // Inverte o estado de habilitação dos botões de rádio
//     };

//   return (
//     <CRow>


// {/* -------------------------------------------------------------------------------------------------------------------------------------- */}
// {/* -------------------------------------------------------------------------------------------------------------------------------------- */}
// {/* CRIACAO QUESTAO */}


//       <CCol xs={12}>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <small>Criação de Questões:</small>
//           </CCardHeader>
          
//           <CCardBody>
//             <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmitQuestao}>
//                 <CCol md={8}>
//                     <CFormLabel htmlFor="validationCustom03">Titulo da Questão</CFormLabel>
//                     <CFormInput type="text" id="formInputTituloQuestao" required />
//                     <CFormFeedback invalid>Informe o titulo da questão.</CFormFeedback>
//                 </CCol>
//                 <CCol md={4}>
//                     <CFormLabel htmlFor="validationCustom04">Tipo da Questão</CFormLabel>


//                     <CFormSelect 
//                         id="formSelectTipoQuestao"
//                         aria-label="Escolha..."
//                         options={[
//                             { label: 'Dissertativa', value: 'dissertativa' },
//                             { label: 'Multipla Escolha', value: 'multipla_escolha' },
//                             { label: 'Verdadeiro/Falso', value: 'verdadeiro_falso' }
//                         ]}
//                         />
//                     <CFormFeedback invalid>Informe o tipo da questão.</CFormFeedback>
//                 </CCol>
//                 <CCol md={12}>
//                     <CFormLabel htmlFor="validationCustom05">Enunciado da Questão</CFormLabel>
//                     <CFormTextarea id="formTextAreaEnunciadoQuestao" rows={5}  required ></CFormTextarea>
//                     <CFormFeedback invalid>Informe o enunciado da questao.</CFormFeedback>
//                 </CCol>
//                 <CCol xs={12}>
//                     <CButton color="primary" type="submit" style={{ marginRight: '10px' }}>
//                         Criar
//                     </CButton>
//                     <CButton color="primary" onClick={limparCampos}>
//                         Cancelar
//                     </CButton>
//                 </CCol>
//             </CForm>
//           </CCardBody>
//         </CCard>
//       </CCol>

// {/* -------------------------------------------------------------------------------------------------------------------------------------- */}
// {/* -------------------------------------------------------------------------------------------------------------------------------------- */}
// {/* RESPOSTA VERDADEIRO/FALSO */}

// {headerRespostaTrueFalse && (
// <CCol xs={12}>
//       <CCard className="mb-4">
      
//           <CCardHeader>
//             <small>Resposta Verdadeiro/Falso:</small>
//           </CCardHeader>
       
        
//         <CCardBody>
//           {/* <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmitRespostaTrueFalse}> */}
//           <CForm className="row g-3 needs-validation" onSubmit={handleSubmitRespostaTrueFalse}>
//               <CCol md={10}>
//                   <CFormLabel htmlFor="validationCustom03">Selecione a resposta correta</CFormLabel>
//                   <CFormCheck type="radio" name="flexRadioRespostaTrueFalse" id="flexRadioRespostaTrueFalse1" label="Verdadeira" disabled={!radioButtonsEnabled}/>
//                   <CFormCheck type="radio" name="flexRadioRespostaTrueFalse" id="flexRadioRespostaTrueFalse2" label="Falsa" defaultChecked disabled={!radioButtonsEnabled}/>
//               </CCol>
//               <CCol xs={12}>
//                   <CButton color="primary" type="submit">
//                       Cadastrar
//                   </CButton>
//               </CCol>
//           </CForm>
//         </CCardBody>
//       </CCard>
//     </CCol>
// )}

// {/* -------------------------------------------------------------------------------------------------------------------------------------- */}
// {/* -------------------------------------------------------------------------------------------------------------------------------------- */}
// {/* RESPOSTA MULTIPLA ESCOLHA */}


// {headerRespostaMultEscolha && (
//       <CCol xs={12}>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <small>Resposta Multipla Escolha:</small>
//           </CCardHeader>
          
//           <CCardBody>
//           {/* <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmitRespostaMultEscolha}> */}
//             <CForm className="row g-3 needs-validation"  onSubmit={handleSubmitRespostaMultEscolha}>
//                 <CCol md={12}>
//                     <CFormLabel htmlFor="validationCustom03">Informe a 1° resposta</CFormLabel>
//                     <CFormTextarea
//                             id="formControlRespostaMultEscolha1"
//                             rows={2}
//                             required
//                         ></CFormTextarea>
//                     <CFormFeedback invalid>Informe a resposta 1.</CFormFeedback>
//                     <CFormCheck type="radio" name="flexRadioRespostaMultEscolha" id="flexRadioRespostaMultEscolha1" label="A resposta 1° é a correta?" defaultChecked/>     
//                 </CCol>

//                 <CCol md={12}>
//                     <CFormLabel htmlFor="validationCustom03">Informe a 2° resposta</CFormLabel>
//                     <CFormTextarea
//                             id="formControlRespostaMultEscolha2"
//                             rows={2}
//                             required
//                         ></CFormTextarea>
//                     <CFormFeedback invalid>Informe a resposta 2.</CFormFeedback>
//                     <CFormCheck type="radio" name="flexRadioRespostaMultEscolha" id="flexRadioRespostaMultEscolha2" label="A resposta 2° é a correta?"/>

//                 </CCol>
//                 <CCol md={12}>
//                     <CFormLabel htmlFor="validationCustom03">Informe a 3° resposta</CFormLabel>
//                     <CFormTextarea
//                             id="formControlRespostaMultEscolha3"
//                             rows={2}
//                             required
//                         ></CFormTextarea>
//                     <CFormFeedback invalid>Informe a resposta 3.</CFormFeedback>
//                     <CFormCheck type="radio" name="flexRadioRespostaMultEscolha" id="flexRadioRespostaMultEscolha3" label="A resposta 3° é a correta?"/>

//                 </CCol>

//                 <CCol md={12}>
//                     <CFormLabel htmlFor="validationCustom03">Informe a 4° resposta</CFormLabel>
//                     <CFormTextarea
//                             id="formControlRespostaMultEscolha4"
//                             rows={2}
//                             required
//                         ></CFormTextarea>
//                     <CFormFeedback invalid>Informe a resposta 4.</CFormFeedback>
//                     <CFormCheck type="radio" name="flexRadioRespostaMultEscolha" id="flexRadioRespostaMultEscolha4" label="A resposta 4° é a correta?"/>
//                 </CCol>

//                 <CCol xs={12}>
//                     <CButton color="primary" type="submit">
//                         Cadastrar
//                     </CButton>
//                 </CCol>
//             </CForm>
//           </CCardBody>
//         </CCard>
//       </CCol>
// )}

// {/* -------------------------------------------------------------------------------------------------------------------------------------- */}
// {/* -------------------------------------------------------------------------------------------------------------------------------------- */}
// {/* RESPOSTA DISSERTATIVA */}


// {headerRespostaDissertativa && (
//       <CCol xs={12}>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <small>Resposta Dissertativa:</small>
//           </CCardHeader>
          
//           <CCardBody>
//           {/* <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmitRespostaDissertativa}> */}
//             <CForm className="row g-3 needs-validation"  onSubmit={handleSubmitRespostaDissertativa}>
//                 <CCol md={12}>
//                         <CFormLabel htmlFor="validationCustom05">Informe a resposta:</CFormLabel>
//                         <CFormTextarea
//                             id="formTextAreaRespostaDissertativa"
//                             rows={4}
//                             required
//                         ></CFormTextarea>
//                         <CFormFeedback invalid>Informe a resposta.</CFormFeedback>
//                 </CCol>
//                 <CCol xs={12}>
//                     <CButton color="primary" type="submit">
//                         Cadastrar
//                     </CButton>
//                 </CCol>
//             </CForm>
//           </CCardBody>
//         </CCard>
//       </CCol>
// )} 
//     </CRow>
 
//   )
// }

// export default HelloWorldView
