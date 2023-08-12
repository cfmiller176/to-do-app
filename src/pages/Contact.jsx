import { useState } from "react";



function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      return {
        ...currData,
        [changedField]: newValue,
      };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div className="FlexContainer">
    <div className = "ContactFormContainer">
      <label htmlFor="firstname"> First Name: </label>
      <input
        type="text"
        placeholder="First name"
        value={formData.firstName}
        onChange={handleChange}
        id="firstname"
        name="firstName"
      />

      <label htmlFor="lastname"> Last Name: </label>
      <input
        type="text"
        placeholder="Last name"
        value={formData.lastName}
        onChange={handleChange}
        id="lastname"
        name="lastName"
      />

      <label htmlFor="email"> Email: </label>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        id="email"
        name="email"
      />
      
      <label htmlFor="comments"> Comments: </label>
      <textarea
        type="textarea"
        placeholder="Comments"
        value={formData.email}
        onChange={handleChange}
        id="comments"
        name="textarea"
        rows = "5"
        col = "20"
      />
      <button className = "ContactButton" onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  );
}

export default Contact;























   