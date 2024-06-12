import React, { useEffect, useState } from 'react';
import {
  CCard, CTable, CButton, CCardBody, CCardHeader, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CCol, CForm, CFormInput, CFormLabel, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CRow,
} from '@coreui/react';
import axios from 'axios';

const UsersView = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    nome: '',
    email: '',
    role: ''
  });
 
  const [modalVisible, setModalVisible] = useState(false);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    const userRole = sessionStorage.getItem('userRole');
    if (!userId || !userRole) {
      window.location.href = "http://localhost:3000/#/login";
    }
  }, []); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/usuario');
      if (response.data && response.status === 200) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar dados de usuários:', error);
    }
  };

  const handleDelete = async (id) => {
    try {

      await axios.delete(`http://localhost:8080/usuario/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setModalVisible(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/usuario/${editUser.id}`, editUser);
      fetchData();
      setModalVisible(false);
    } catch (error) {
      console.error('Erro ao salvar dados do usuário:', error);
    }
  };

  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const columns = [
    { key: 'id', label: '#' },
    { key: 'username', label: 'Username' },
    { key: 'nome', label: 'Nome' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'ação', label: 'Ação' },
  ];

  return (
    <div>
      <CCard>
        <CCardHeader>
          <h3>Usuários</h3>
        </CCardHeader>
        <CCardBody>
          <CTable columns={columns}>
            <CTableBody>
              {users.map((user) => (
                <CTableRow key={user.id}>
                  <CTableDataCell>{user.id}</CTableDataCell>
                  <CTableDataCell>{user.username}</CTableDataCell>
                  <CTableDataCell>{user.nome}</CTableDataCell>
                  <CTableDataCell>{user.email}</CTableDataCell>
                  <CTableDataCell>{user.role}</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary" onClick={() => handleEdit(user)} style={{ marginRight: '10px' }}> Editar </CButton>
                    <CButton color="primary" onClick={() => handleDelete(user.id)} style={{ marginRight: '10px' }}> Excluir </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {editUser && (
        <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
          <CModalHeader>
            <CModalTitle>Editar Usuário</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm>
              <CRow className="mb-3">
                <CCol md={6}>
                  <CFormLabel htmlFor="username">Username</CFormLabel>
                  <CFormInput
                    id="username"
                    name="username"
                    value={editUser.username}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="nome">Nome</CFormLabel>
                  <CFormInput
                    id="nome"
                    name="nome"
                    value={editUser.nome}
                    onChange={handleChange}
                  />
                </CCol>
              </CRow>
              
              <CRow>
                <CCol md={6}>
                  <CFormLabel htmlFor="email">Email</CFormLabel>
                  <CFormInput
                    id="email"
                    name="email"
                    value={editUser.email}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="role">Role</CFormLabel>
                  <CFormInput
                    id="role"
                    name="role"
                    value={editUser.role}
                    onChange={handleChange}
                  />
                </CCol>
              </CRow>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setModalVisible(false)}>
              Cancelar
            </CButton>
            <CButton color="primary" onClick={handleSave}>
              Salvar
            </CButton>
          </CModalFooter>
        </CModal>
      )}
    </div>
  );
};

export default UsersView;
