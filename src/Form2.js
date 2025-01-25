// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setUsers } from "./slices/userSlice";

// export default function Form1() {
//   const dispatch = useDispatch();
//   const [input, setInput] = useState({
//     roll: '',
//     name: '',
//     city: '',
//   });

//   const adduser = (formdata) => {
//     formdata.preventDefault(); 
//     dispatch(setUsers(input)); 
//   };

//   function updateData(d) {
//     const variable = d.target.name; 
//     const value = d.target.value; 
//     console.log("Variable:", variable, "Value:", value);
//     setInput((data) => ({
//       ...data,
//       [variable]: value,
//     }));
//   }

//   return (
//     <>
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" onChange={updateData}></input>
//         </label>
//         <br />

//         <label>
//           Roll:
//           <input type="text" name="roll" onChange={updateData}></input>
//         </label>
//         <br />

//         <label>
//           City:
//           <input type="text" name="city" onChange={updateData}></input>
//         </label>
//         <br />

//         <input type="submit" onClick={adduser} value="Signup"></input>
//       </form>
//     </>
//   );
// }

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "./slices/userSlice";

export default function Form2() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    roll: '',
    name: '',
    city: '',
  });

  const adduser = (formdata) => {
    formdata.preventDefault(); // Prevent default form submission
    dispatch(setUsers(input)); // Dispatch the action to update the store
    console.log("User added:", input);
  };

  const updateData = (e) => {
    const { name, value } = e.target; // Extract name and value from event target
    console.log("Variable:", name, "Value:", value);
    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
    <div className="container">
      <form onSubmit={adduser}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={input.name}
            onChange={updateData}
          />
        </div>

        <div className="form-group">
          <label htmlFor="roll">Roll</label>
          <input
            type="text"
            className="form-control"
            id="roll"
            name="roll"
            placeholder="Enter your roll number"
            value={input.roll}
            onChange={updateData}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="Enter your city"
            value={input.city}
            onChange={updateData}
          />
        </div>

        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
     </div>
    </>
  );
}