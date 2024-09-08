import React from 'react';

interface ButtonComponentProps {
  label: string;
  onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ label, onClick }) => {
  return (
    <button
      className="btn btn-light me-2"
      onClick={onClick}
      style={{ borderRadius: '5px', padding: '5px 10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
