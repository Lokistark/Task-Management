import { useState } from "react";

function useTaskForm(initialState, onSubmit) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!values.title) errs.title = "Title required";
    if (!values.description) errs.description = "Description required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) onSubmit(values);
  };

  return { values, errors, handleChange, handleSubmit };
}

export default useTaskForm;
