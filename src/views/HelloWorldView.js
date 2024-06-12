import React, { useEffect } from 'react';

const HelloWorldView = () => {

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    const userRole = sessionStorage.getItem('userRole');
    if (!userId || !userRole) {
      window.location.href = "http://localhost:3000/#/login";
    }
  }, []); 


  return (
    <div>
 
    </div>
  );
};

export default HelloWorldView;
