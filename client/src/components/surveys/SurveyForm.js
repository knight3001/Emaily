import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

const SurveyForm = ({ handleSubmit, onSurveySubmit }) => {
  const onSubmit = (values) => {
    onSurveySubmit();
  };

  const renderFields = () => {
    return (
      <div>
        {formFields.map(({ label, name }) => (
          <Field
            key={name}
            component={SurveyField}
            type="text"
            name={name}
            label={label}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderFields()}
        <Link to="/surveys" className="red btn-flat left white-text">
          Cancle
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must enter a ${name}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
