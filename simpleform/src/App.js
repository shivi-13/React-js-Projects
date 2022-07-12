import React, { useState } from "react";
import './App.css';

function App()
{
    const [form,setForm] = useState({
      name:'',
      email:'',
      pass:'',
    })

    function handleChange(e)
    {
      const {name, value} = e.target
      setForm({...form,
        [name]: value,
        })
    }
    console.log(form);
  return (
  <div className="App">
    <div className="container">
  	    <div className="card">
	    	    <div className="card-image">	
			        <h1>
			      	GET STARTED..
		          </h1>
             <h3>Let us create your account</h3>
		        </div>
	  	    <form className="card-form">
    		    <div className="input">
              <label className="input-label">Full name</label>
     	  	    <input type="text" className="input-field"
              placeholder="name plz"
               value={form.name}  
               name="name"
               onChange={(e) => handleChange(e)}
               required/>
		        </div>
    
				  	<div className="input">
              <label className="input-label">Email</label>
  				    <input type="email" className="input-field"
              placeholder="email plz"
              value={form.email}  
              name="email"
              onChange={(e) => handleChange(e)}
              required/> 
			  	  </div>

  			    <div className="input">
              <label className="input-label">Password</label>
			  	    <input type="password" className="input-field" 
              placeholder="valid password plz"
              value={form.pass}  
              name="pass"
              onChange={(e) => handleChange(e)}
              required/>
				    </div>
		
        	  <div className="action">
			    	  <button className="action-button">Submit</button>
		    	  </div>
	  	    </form>
	
            <div >
			        <p>By signing up you are agreeing to our Terms and Conditions</p>
		        </div>
	      </div>
    </div>
  </div>
  );
}

export default App;
