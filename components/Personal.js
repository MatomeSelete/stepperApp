// PersonalForm.js
import React from 'react';

function PersonalForm() {
  return (
    <div className="list-group-item" id="step-1">
      <h2 className="mb-3">Step 1: Personal Information</h2>
      <div className="mb-3">
        <label htmlFor="first-name" className="form-label">
          First Name:
        </label>
        <input type="text" className="form-control" id="first-name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="last-name" className="form-label">
          Last Name:
        </label>
        <input type="text" className="form-control" id="last-name" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Gender:</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="male"
            required
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="female"
            required
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </div>
    </div>
  );
}

export default PersonalForm;
