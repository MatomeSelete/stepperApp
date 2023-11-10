import React, { useState } from 'react';
import PersonalForm from '../components/Personal'; // Import your components
import ContactsForm from '../components/Contacts';
import QualificationForm from '../components/Qualification';
// import EmploymentForm from '../components/EmploymentForm';

const INITIAL_DATA = {
  firstName: '',
  lastName: '',
  Id: '',
  age: '',
  gender: '',
  race: '',
  email: '',
  phone: '',
  town: '',
  province: '',
  qualification: '',
  linkedin: '',
  github: '',
  workHistory: [],
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [currentStep, setCurrentStep] = useState(1);

  function updateFields(fields) {
    setData((prev) => ({
      ...prev,
      ...fields,
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // This is the final step (Step 4)
      console.log('Data:', data);
      alert('Successful account creation');
    }
  }

  return (
    <div className="container mt-5">
      <form id="personal-form">
        {/* Render the appropriate component based on the current step */}
        {currentStep === 1 && (
          <PersonalForm {...data} updateFields={updateFields} />
        )}
        {currentStep === 2 && (
          <ContactsForm {...data} updateFields={updateFields} />
        )}
        {currentStep === 3 && (
          <QualificationForm {...data} updateFields={updateFields} />
        )}
        {/* {currentStep === 4 && (
          <EmploymentForm {...data} updateFields={updateFields} />
        )} */}

        {/* Display the "Submit" button only on the final step */}
        {currentStep < 4 && (
          <div>
            <button className="btn btn-secondary" id="prevBtn" onClick={() => setCurrentStep(currentStep - 1)}>
              Previous
            </button>
            <button className="btn btn-primary" id="nextBtn" onClick={onSubmit}>
              Next
            </button>
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <button className="btn btn-secondary" id="prevBtn" onClick={() => setCurrentStep(currentStep - 1)}>
              Previous
            </button>
            <button type="submit" className="btn btn-success" id="submitBtn" onClick={onSubmit}>
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
