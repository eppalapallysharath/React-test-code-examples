import React, { useRef, useState } from "react";

function UncontrolledForm() {
  const usernameRef = useRef();
  const ageRef = useRef();
  const [formError, setFormError] = useState("");

  const isOnlyAlphabets = (str) => {
    for (let char of str) {
      if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
        continue;
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
    const username = usernameRef.current.value;
    const age = ageRef.current.value;

    if (!username || !age) {
      setFormError("All fields are required");
      return;
    }

    if (isOnlyAlphabets(username) === false) {
      setFormError("Username must contain only alphabets");
      return;
    }

    if (!isOnlyNumbers(age)) {
      setFormError("Age must contain only numbers");
      return;
    }

    setFormError("");
    alert(`Submitted: Username - ${username}, Age - ${age}`);
    usernameRef.current.value = "";
    ageRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="Username" ref={usernameRef} />
      </div>
      <div>
        <input type="text" placeholder="Age" ref={ageRef} />
      </div>

      {formError && <div style={{ color: "red" }}>{formError}</div>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
