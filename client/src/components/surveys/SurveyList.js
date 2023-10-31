import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

const SurveyList = ({ surveys, fetchSurveys }) => {
  useEffect(() => {
    fetchSurveys();
  }, []);

  return (
    <div>
      {surveys.reverse().map((survey) => (
        <div className="card blue-grey darken-1" key={survey._id}>
          <div className="card-content white-text">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>

          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

const mapDispatchToProps = {
  fetchSurveys,
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);
