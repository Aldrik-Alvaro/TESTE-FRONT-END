// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {CCard ,CTable, CButton, CCardBody, CCardHeader, CCol, CForm, CFormInput, CFormFeedback, CFormLabel, CFormTextarea, CRow } from '@coreui/react'

// const HelloWorldView = () => {
//   const [questoes, setQuestoes] = useState([]);
//   const [questaoSelecionada, setQuestaoSelecionada] = useState(null);
//   const [formValues, setFormValues] = useState({
//     examinador: '',
//     titulo: '',
//     enunciado: '',
//     tipo: '',
//     resposta: '',
//     correta: 0
//   });

//   useEffect(() => {
//     const userId = sessionStorage.getItem('userId');
//     const userRole = sessionStorage.getItem('userRole');
//     if (!userId || !userRole) {
//       window.location.href = "http://localhost:3000/#/login";
//     }
//   }, []); 

//   const fetchData = async () => {
//     try {
//       const config = {
//         headers: {
//           'Authorization': 'Bearer a7340da9-8d17-40aa-a183-177e6b033a33'
//         }
//       };

//       const response = await axios.get('http://localhost/api/questoes/listar', config);
//       if (response.data && response.data.tipo === 'sucesso') {
//         setQuestoes(response.data.resposta);
//       }
//     } catch (error) {
//       console.error('Erro ao buscar dados:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       const config = {
//         headers: {
//           'Authorization': 'Bearer a7340da9-8d17-40aa-a183-177e6b033a33'
//         }
//       };

//       await axios.delete(`http://localhost/api/questoes/deletar/${id}`, config);
//       fetchData();
//     } catch (error) {
//       console.error('Erro ao excluir questão:', error);
//     }
//   };

//   const handleEdit = (questao) => {
//     console.log(questao)
//     setQuestaoSelecionada(questao);
//     setFormValues({
//       id_questao: questao.id_questao,
//       id_resposta: questao.id_resposta,
//       examinador: questao.examinador,
//       titulo: questao.titulo,
//       enunciado: questao.enunciado,
//       tipo: questao.tipo,
//       resposta: questao.resposta,
//       correta: questao.correta
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const config = {
//         headers: {
//           'Authorization': 'Bearer a7340da9-8d17-40aa-a183-177e6b033a33'
//         }
//       };

      
//       await axios.put(`http://localhost/api/questoes/atualizar/${formValues.id_questao}`, formValues, config);
//       setQuestaoSelecionada(null);
//       setFormValues({
//         examinador: '',
//         titulo: '',
//         enunciado: '',
//         tipo: '',
//         resposta: '',
//         correta: 0
//       });
//       fetchData();
//     } catch (error) {
//       console.error('Erro ao editar questão:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const columns = [
//     // {
//     //   key: 'id',
//     //   label: '#',
//     //   _props: { scope: 'col' },
//     // },
//     {
//       key: 'examinador',
//       label: 'Examinador',
//       _props: { scope: 'col' },
//     },
//     {
//       key: 'titulo',
//       label: 'Titulo',
//       _props: { scope: 'col' },
//     },
//     {
//       key: 'enunciado',
//       label: 'Enunciado',
//       _props: { scope: 'col' },
//     },
//     {
//         key: 'tipo',
//         label: 'Tipo',
//         _props: { scope: 'col' },
//       },
//       {
//         key: 'resposta',
//         label: 'Resposta',
//         _props: { scope: 'col' },
//       },
//       {
//         key: 'correta',
//         label: 'Correta',
//         _props: { scope: 'col' },
//       },
//       {
//         key: 'ação',
//         label: 'Ação',
//         _props: { scope: 'col' },
//       }
//   ]
//   return (

    
//     <div>







// <CCard>
// <CTable columns={columns}>
// <tbody>
// {questoes.map((questao) => (
//             <tr key={questao.id}>
//               {/* <td>{questao.id}</td> */}
//               <td style={{ textAlign: 'justify', paddingLeft: '10px', paddingRight: '10px', fontSize: 'smaller' }}>{questao.examinador}</td>
//               <td style={{ textAlign: 'justify', paddingLeft: '10px', paddingRight: '10px', fontSize: 'smaller' }}>{questao.titulo}</td>
//               <td style={{  paddingLeft: '10px', paddingRight: '10px', fontSize: 'smaller' }}>{questao.enunciado}</td>
//               <td style={{ textAlign: 'justify', paddingLeft: '10px', paddingRight: '10px', fontSize: 'smaller' }}d>{questao.tipo}</td>
//               <td style={{ textAlign: 'justify', paddingLeft: '10px', paddingRight: '10px', fontSize: 'smaller' }}>{questao.resposta}</td>
//               <td style={{ textAlign: 'justify', paddingLeft: '10px', paddingRight: '10px', fontSize: 'smaller' }}>{questao.correta === 1 ? 'Sim' : 'Não'}</td>
//               <td>
//                 <CButton color="primary" className="mt-3" onClick={() => handleDelete(questao.id_questao)} style={{ marginRight: '10px' }}>Excluir</CButton>
//                 <CButton color="primary" className="mt-3" onClick={() => handleEdit(questao)}>Editar</CButton>
//               </td>
//             </tr>
//           ))}
// </tbody>


// </CTable>
// </CCard>

//       {questaoSelecionada && (
//     <CRow>
      
//     <CCol xs={12}>
//       <CCard className="mb-4">
//         <CCardHeader>
//           <small>Edição de Questões:</small>
//         </CCardHeader>
//         <CCardBody>
//           <CForm className="row g-3 needs-validation"   onSubmit={handleSubmit}>
//               <CCol md={8}>
//                   <CFormLabel htmlFor="validationCustom03">Examinador</CFormLabel>
//                   <CFormInput type="text" name="examinador" value={formValues.examinador} onChange={handleChange} placeholder="Examinador" disabled/>
//                   <CFormFeedback invalid>Informe o examinador.</CFormFeedback>
//               </CCol>

//               {/* <CCol md={3}>
//                   <CFormLabel htmlFor="validationCustom03">Correta</CFormLabel>
//                   <CFormInput type="text" name="correta" value={formValues.correta} onChange={handleChange} placeholder="Correta" disabled/>
//                   <CFormFeedback invalid>Informe o correta.</CFormFeedback>
//               </CCol> */}
              
//               <CCol md={4}>
//                   <CFormLabel htmlFor="validationCustom03">Titulo</CFormLabel>
//                   <CFormInput type="text" name="titulo" value={formValues.titulo} onChange={handleChange} placeholder="Título" />
//                   <CFormFeedback invalid>Informe o titulo.</CFormFeedback>
//               </CCol>

//               {/* <CCol md={4}>
//                   <CFormLabel htmlFor="validationCustom03">Tipo</CFormLabel>
//                   <CFormInput type="text" name="tipo" value={formValues.tipo} onChange={handleChange} placeholder="Tipo" disabled />
//                   <CFormFeedback invalid>Informe o tipo.</CFormFeedback>
//               </CCol> */}

//               <CCol md={12}>
//                   <CFormLabel htmlFor="validationCustom03">Enunciado</CFormLabel>
//                   <CFormInput type="text" name="enunciado" value={formValues.enunciado} onChange={handleChange} placeholder="Enunciado" />
//                   <CFormFeedback invalid>Informe o enunciado.</CFormFeedback>
//               </CCol>


 
            
//               <CCol md={12}>
//                   <CFormLabel htmlFor="validationCustom03">Resposta</CFormLabel>
//                   <CFormTextarea rows={3} type="text" name="resposta" value={formValues.resposta} onChange={handleChange} placeholder="Resposta" />
//                   <CFormFeedback invalid>Informe o resposta.</CFormFeedback>
//               </CCol>
             

//               <CCol xs={12}>
//                   <CButton color="primary" type="submit" style={{ marginRight: '10px' }}>
//                   Editar
//                   </CButton>
//                   <CButton color="primary" onClick={() => window.location.reload()}>
//                     Cancelar
//                 </CButton>

//               </CCol>
//           </CForm>
//         </CCardBody>
//       </CCard>
//     </CCol>
//   </CRow>
    


       
//       )}
//     </div>
//   );
// };

// export default HelloWorldView;
