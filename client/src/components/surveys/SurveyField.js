import React from "react";

const SurveyField = ({ input, label, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <div className="red-text" style={{ marginBottom: "5px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
