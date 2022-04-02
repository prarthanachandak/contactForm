import React from 'react';
import emailjs from 'emailjs-com'

const Mail = () => {

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_983zr4e', 'template_masvzf6', e.target,"9yF0zcaY1YQPLSHhT" ).then(res=>{
      console.log(res);
    }).catch(err=>console.log(err));
  }
  return (
    <div className = "container border" 
    style = {{marginTop: "50px",
    width:'50%',
    backgroundImage: "url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-31-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e1ee6e84fa2c584170bab2733ea5a1b0)",
    backgroundPosition: 'center',
    backgroundSize: 'cover'
    
    }}>
      <h1 style = {{marginTop: "25px"}}>Contact Form</h1>
        {/* trbl */}
        <form className = "row" style = {{margin: "25px 85px 75px 100px" }}
        onSubmit = {sendEmail}
        > 
          <label>name</label>
          <input type = "text" name = "name" className='form-control'></input>

          <label>Email</label>
          <input type = "email" name = "user_email" className='form-control'></input>

          <label>Message</label>
          <textarea name = "message" rows = '4' className='form-control'></textarea>
 
          <input type = "submit" value = "Send" className='form-control btn btn-primary' style = {{marginTop: "30px"}}></input>

        </form>
    </div>
   
  )
}

export default Mail