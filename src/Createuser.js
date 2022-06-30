import React from "react";
import { useFormik } from "formik";
import "./App.css";
function Createuser() {
  let formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Please enter your name";
      }
      if (!values.position) {
        errors.position = "Please enter your position";
      }
      return errors;
    },
    onSubmit: (values) => {
      // console.log(values)
      fetch("http//localhost:3000/user", {
        method: "POST",
        body: JSON.stringify(values),
      });
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control"
            />
            {formik.errors.name ? <span style={{color:"red"}}>Please enter your name</span> :null}
            
          </div>
          <div className="col-lg-6">
            <label>Position</label>
            <input
              type="position"
              name="position"
              onChange={formik.handleChange}
              value={formik.values.position}
              className="form-control"
            />
           
              {formik.errors.position ? <span style={{color:"red"}}>Please enter your position</span>:null}
            </div>
          <div className="col-lg-6">
            <label>Office</label>
            <input
              type="office"
              name="office"
              onChange={formik.handleChange}
              value={formik.values.office}
              className="form-control"
            />
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input
              type="text"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="form-control"
            />
          </div>
          <div className="col-lg-6">
            <label>StartDate</label>
            <input
              type="date"
              name="startDate"
              onChange={formik.handleChange}
              value={formik.values.startDate}
              className="form-control"
            />
          </div>
          <div className="col-lg-6">
            <label>Salary</label>
            <input
              type="text"
              name="salary"
              onChange={formik.handleChange}
              value={formik.values.salary}
              className="form-control"
            />
          </div>
          <div ClassName="col-lg-6">
            <input
              type={"submit"}
              value="Submit"
              className="btn btn-primary mt-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createuser;
