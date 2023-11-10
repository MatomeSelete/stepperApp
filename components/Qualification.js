// QualificationForm.js
import React from 'react';

function QualificationForm({ qualification, linkedin, github, updateFields, qualificationData, logData }) {

  

  return (
    <div className="list-group-item" id="step-3">
      <h2 className="mb-3">Step 3: Qualifications</h2>
      <div className="mb-3">
        <label htmlFor="qualification" className="form-label">
          Highest Qualification:
        </label>
        <input type="text" className="form-control" id="qualification" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Select Your Qualification Level:</label>
        <select className="form-select" id="qualificationLevel" required>
          <option value="">Select</option>
          <option value="highschool">High School</option>
          <option value="diploma">Diploma</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
        </select>
      </div>
    </div>
  );
}

export default QualificationForm;
