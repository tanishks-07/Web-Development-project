import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    course: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "",
      course: "",
      address: "",
    });
  };

  return (
    <div className="page">
      <div className="form-card">

        {/* Header */}
        <div className="form-header">
          <div className="logo">AF</div>

          <div>
            <h1>Application Form</h1>
            <p>Fill in your details to submit your application</p>
          </div>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="success-message">
            ✓ Application submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Personal Information */}
          <div className="section-title">
            <span>01</span>
            Personal Information
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label htmlFor="name">
                Full Name <span>*</span>
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address <span>*</span>
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-grid">

            <div className="form-group">
              <label htmlFor="phone">
                Phone Number <span>*</span>
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="10 digit mobile number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
            </div>

            <div className="form-group">
              <label>
                Gender <span>*</span>
              </label>

              <div className="gender-options">

                <label className="gender-option">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    required
                  />
                  <span>Male</span>
                </label>

                <label className="gender-option">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />
                  <span>Female</span>
                </label>

                <label className="gender-option">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === "Other"}
                    onChange={handleChange}
                  />
                  <span>Other</span>
                </label>

              </div>
            </div>

          </div>

          {/* Course Information */}
          <div className="section-title">
            <span>02</span>
            Course Information
          </div>

          <div className="form-group">
            <label htmlFor="course">
              Select Course <span>*</span>
            </label>

            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Choose your course</option>
              <option value="B.Tech">B.Tech</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="BBA">BBA</option>

            </select>
          </div>

          {/* Address */}
          <div className="section-title">
            <span>03</span>
            Contact Information
          </div>

          <div className="form-group">
            <label htmlFor="address">
              Address
            </label>

            <textarea
              id="address"
              name="address"
              placeholder="Enter your complete address"
              value={formData.address}
              onChange={handleChange}
              maxLength="200"
            />

            <div className="character-count">
              {formData.address.length}/200
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">
            Submit Application
            <span>→</span>
          </button>

          <p className="required-text">
            * Required fields
          </p>

        </form>
      </div>
    </div>
  );
}

export default App;