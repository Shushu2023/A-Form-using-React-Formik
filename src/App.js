//import logo from './logo.svg';
//import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
//TODO: improt useFormik form fromik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
   
    initialValues:{
        emailField:'',
        pswField: '',
        address:'',
        address2:'',
        city:'',
        state:'',
        zip:'',
        checkMeOut:false
      }, 
     
   
      onSubmit: values =>{
      
      console.log('form', values);//log submitted values to console
      alert("Login Successful"); // display alert upon successfful submision
      
    },
    validate: values =>{
      let errors = {};
     //validate email 
      if (!values.emailField) {
        errors.emailField = "Email is required"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)){
        errors.emailField = "Username should be an email"
      } 
      //validate password
      if(!values.pswField) errors.pswField = 'Field Required';
      if(!values.address) errors.address = 'Required';
      if(!values.address2) errors.address2 = 'Required';
      if(!values.city) errors.city = 'Required';
      if(!values.state) errors.state = 'Required';
      if(!values.zip) errors.zip= 'Required';
      if(!values.checkMeOut) errors.checkMeOut= 'Required';
      return errors;
    }  
  });

  return (
 <div>
  <form onSubmit={formik.handleSubmit} className="row g-3" >
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input 
          type="email"
          className="form-control"
          id="inputEmail4" 
          name="emailField"
          onChange={formik.handleChange}
          value={formik.values.emailField}
    />
    {formik.errors.emailField? <div id="emailError" style={{color:'red'}}>
        {formik.errors.emailField}
        </div>:null
    }
  </div>
  
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input 
        type="password"
        className="form-control" 
        id="inputPassword4"
        name="pswField"
        onChange={formik.handleChange}
        value={formik.values.pswField}
    />
     {formik.errors.pswField? <div id="pswError" style={{color:'red'}}>
        {formik.errors.pswField}
        </div>:null
     }
  </div>

  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input 
        type="text" 
        className="form-control"
        id="inputAddress"
        placeholder="1234 Main St"
        name="address"
        onChange={formik.handleChange}
        value={formik.values.address}
    />
     {formik.errors.address? 
        <div style={{color:'red'}}>{formik.errors.address}</div>:null
     }
  </div>
  
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input 
        type="text" 
        className="form-control" 
        id="inputAddress2" 
        placeholder="Apartment, studio, or floor"
        name="address2"
        onChange={formik.handleChange}
        value={formik.values.address2}
    />
    {formik.errors.address2? 
        <div style={{color:'red'}}>{formik.errors.address2}</div>:null
    }
  </div>

  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input 
        type="text" 
        className="form-control"
        id="inputCity"
        name="city"
        onChange={formik.handleChange}
        value={formik.values.city}
    />
    {formik.errors.city? 
        <div style={{color:'red'}}>{formik.errors.city}</div>:null
    }
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select
       id="inputState"
       className="form-select"
       name="state"
       onChange={formik.handleChange}
       value={formik.values.state}
    >
      <option selected>select one</option>
      <option value="AL">Alabama</option>
      <option value="AK">Alaska</option>
      <option value="AZ">Arizona</option>
      <option value="AR">Arkansas</option>
      <option value="CA">California</option>
      <option value="CO">Colorado</option>
      <option value="CT">Connecticut</option>
      <option value="DE">Delaware</option>
      <option value="DC">Dist of Columbia</option>
      <option value="FL">Florida</option>
      <option value="GA">Georgia</option>
      <option value="HI">Hawaii</option>
      <option value="ID">Idaho</option>
      <option value="IL">Illinois</option>
      <option value="IN">Indiana</option>
      <option value="IA">Iowa</option>
      <option value="KS">Kansas</option>
      <option value="KY">Kentucky</option>
      <option value="LA">Louisiana</option>
      <option value="ME">Maine</option>
      <option value="MD">Maryland</option>
      <option value="MA">Massachusetts</option>
      <option value="MI">Michigan</option>
      <option value="MN">Minnesota</option>
      <option value="MS">Mississippi</option>
      <option value="MO">Missouri</option>
      <option value="MT">Montana</option>
      <option value="NE">Nebraska</option>
      <option value="NV">Nevada</option>
      <option value="NH">New Hampshire</option>
      <option value="NJ">New Jersey</option>
      <option value="NM">New Mexico</option>
      <option value="NY">New York</option>
      <option value="NC">North Carolina</option>
      <option value="ND">North Dakota</option>
      <option value="OH">Ohio</option>
      <option value="OK">Oklahoma</option>
      <option value="OR">Oregon</option>
      <option value="PA">Pennsylvania</option>
      <option value="RI">Rhode Island</option>
      <option value="SC">South Carolina</option>
      <option value="SD">South Dakota</option>
      <option value="TN">Tennessee</option>
      <option value="TX">Texas</option>
      <option value="UT">Utah</option>
      <option value="VT">Vermont</option>
      <option value="VA">Virginia</option>
      <option value="WA">Washington</option>
      <option value="WV">West Virginia</option>
      <option value="WI">Wisconsin</option>
      <option value="WY">Wyoming</option>
    </select>
    {formik.errors.state? 
        <div style={{color:'red'}}>{formik.errors.state}</div>:null
    }
  </div>

  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input 
        type="text"
        className="form-control" 
        id="inputZip"
        name="zip"
        onChange={formik.handleChange}
        value={formik.values.zip}
    />
    {formik.errors.zip? 
        <div style={{color:'red'}}>{formik.errors.zip}</div>:null
    }
  </div>

  <div className="col-12">
    <div className="form-check">
      <input 
         className="form-check-input" 
         type="checkbox" id="gridCheck"
         name="checkMeOut"
         onChange={formik.handleChange}
         value={formik.values.checkMeOut}

      />
       {formik.errors.checkMeOut? 
        <div style={{color:'red'}}>{formik.errors.checkMeOut}</div>:null
    }
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-primary" id="submitBtn">sign in</button>
  </div>
</form>
</div>
  );
}

export default App;
