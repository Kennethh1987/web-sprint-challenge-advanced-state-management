import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf, deletePosting } from "../actions";

const SmurfForm = props => {
  const [smurfer, setSmurfer] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });


  const handleDelete = e => {
    props.deletePosting(smurfer)
    console.log(smurfer)
  };


  const handleSubmit = e => {
    props.postSmurf(smurfer);
    e.preventDefault();
    console.log(` SMURF FORM `, smurfer);
  };

  const handleChanges = e => {
    let name = e.target.name;
    setSmurfer({ ...smurfer, [name]: e.target.value });
  };

  return (
    <div>
      <form>
        <input
          placeholder="Name"
          name="name"
          type="text"
          value={props.name}
          onChange={handleChanges}
        />
        <input
          placeholder="Age"
          name="age"
          type="text"
          value={props.age}
          onChange={handleChanges}
        />
        <input
          placeholder="Height"
          name="height"
          type="text"
          value={props.height}
          onChange={handleChanges}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default connect(null, { postSmurf })(SmurfForm);