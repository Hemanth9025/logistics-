import React from 'react';

const GetQ = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '400px'
  };

  const messageStyle = {
    fontSize: '18px',
    color: '#333',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <div style={messageStyle}>Quotation Sent Successfully to Your Email!</div>
    </div>
  );
}

export default GetQ;