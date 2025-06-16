import React, { useState } from "react";

function ControlledForm() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [formError, setFormError] = useState("");

  // Field validation as they type
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (!value) {
      setUsernameError("Username is required");
    } else if (!isOnlyAlphabets(value)) {
      setUsernameError("Only alphabets allowed");
    } else {
      setUsernameError("");
    }
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge(value);
    if (!value) {
      setAgeError("Age is required");
    } else if (!isOnlyNumbers(value)) {
      setAgeError("Only numbers allowed");
    } else {
      setAgeError("");
    }
  };

  const isOnlyAlphabets = (str) => {
    for (let char of str) {
      if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  };

  const isOnlyNumbers = (str) => {
    for (let char of str) {
      if (!(char >= "0" && char <= "9")) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !age) {
      setFormError("All fields are required");
      return;
    }
    if (usernameError || ageError) {
      setFormError("Please fix field errors before submitting");
      return;
    }
    setFormError("");
    alert(`Submitted: Username - ${username}, Age - ${age}`);
    setUsername("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        {usernameError && <div style={{ color: "red" }}>{usernameError}</div>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={handleAgeChange}
        />
        {ageError && <div style={{ color: "red" }}>{ageError}</div>}
      </div>

      {formError && <div style={{ color: "red" }}>{formError}</div>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
