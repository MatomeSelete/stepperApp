// ContactForm.js
import React from 'react';

function ContactForm() {
  return (
    <div className="list-group-item" id="step-2">
      <h2 className="mb-3">Step 2: Contact Information</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input type="email" className="form-control" id="email" required />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone:
        </label>
        <input type="tel" className="form-control" id="phone" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Notification Preferences:</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="emailPref"
            name="notificationPref"
            value="email"
          />
          <label className="form-check-label" htmlFor="emailPref">
            Receive notifications by email
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="smsPref"
            name="notificationPref"
            value="sms"
          />
          <label className="form-check-label" htmlFor="smsPref">
            Receive notifications by SMS
          </label>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
