import { useRef, useState } from "react";
import Input from "./components/Input";


const App = () => {

  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirm_password: '',
  });

  const inputs = [
    {
      id: 1,
      required: true,
      pattern: '^[A-Za-z0-9]{3,16}',
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      errorMessage: 'Username should be 3-15 characters and should not contain special characters'
    },
    {
      id: 2,
      required: true,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      errorMessage: 'It should be a valid email'
    },
    {
      id: 3,
      required: true,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
      errorMessage: ''
    },
    {
      id: 4,
      required: true,
      pattern: '^[A-Za-z0-9]{6,20}',
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      errorMessage: 'Password should be 8-20 characters '
    },
    {
      id: 5,
      required: true,
      pattern: values.password,
      name: 'confirm_password',
      type: 'password',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      errorMessage: 'Password don\'t Match'
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    console.log('e');
    setValues({...values, [e.target.name]: e.target.value });
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((item) => {
          return (
            <Input 
            key={item.id} 
            {...item}
            value={values[item.name]}
            onChange={onChange} />
          )
        })}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;