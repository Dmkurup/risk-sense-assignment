import React from "react";
const InputBox = (props) => {
  const { name, label, onChange, value, onSubmit, type } = props;
  return (
    <form className="form-group" onSubmit={onSubmit}>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        id={name}
        type={type}
        className="form-control"
      />
    </form>
  );
};

export default InputBox;
