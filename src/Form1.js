import React, { useState } from "react";

export default function Form1() {
  const [formData, setFormData] = useState({
    roll: "",
    name: "",
    gender: "",
    city: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.roll) newErrors.roll = "Roll Number is required.";
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.gender) newErrors.gender = "Please select a gender.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    return newErrors;
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.title}>User Information Form</h2>
        <form onSubmit={formSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Roll Number:</label>
            <input
              type="text"
              name="roll"
              value={formData.roll}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.roll && <p style={styles.error}>{errors.roll}</p>}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.name && <p style={styles.error}>{errors.name}</p>}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p style={styles.error}>{errors.gender}</p>}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.city && <p style={styles.error}>{errors.city}</p>}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.phone && <p style={styles.error}>{errors.phone}</p>}
          </div>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>

      <div style={styles.dataWrapper}>
        <h2 style={styles.title}>Form Data:</h2>
        <p>Roll Number: {formData.roll}</p>
        <p>Name: {formData.name}</p>
        <p>Gender: {formData.gender}</p>
        <p>City: {formData.city}</p>
        <p>Phone: {formData.phone}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
    padding: "20px",
  },
  formWrapper: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    textAlign: "left",
  },
  title: {
    fontSize: "24px",
    color: "#333333",
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#555555",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #cccccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#ffffff",
    borderRadius: "4px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  },
  dataWrapper: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
};
