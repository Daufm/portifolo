import React from 'react';
import styled from 'styled-components';

const Form = () => {
    function SendEmail(e) {
        e.preventDefault();
        const myEmail = "fuadmohammed368@gmail.com"
        const name = e.target.elements[0].value;
        const email = e.target.elements[1].value;
        const message = e.target.elements[2].value;
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=Contact from ${name}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
        window.open(mailtoLink, '_blank');
}


  return (
   
    <StyledWrapper>
      <form className="form" onSubmit={SendEmail}>
        <input className="input" type="text" placeholder="Name" />
        <input className="input" type="text" placeholder="Email" />
        <textarea className="textarea" placeholder="Enter message" defaultValue={""} /> 
        <center><button type='submit' className="button">Submit</button></center>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    background-image: linear-gradient(45deg, #330808, 
    #3a2c09);
    border-radius: 2.5em;
    padding: 30px;
    width: 500px;
    height: fit-content;
  }

  .form::before {
    content: '';
    background-image: linear-gradient(45deg, #ff0000, 
    #ffb700);
    height: 358px;
    width: 309px;
    position: absolute;
    margin-top: -34px;
    margin-left: px;
    z-index: -1;
    border-radius: 2.7em;
  }

  .button {
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
    background: #ff5900;
    color: black;
    padding: 0.7em 5.5em;
    display: flex;
    align-items: center;
    border: 2px solid #66da4300;
    border-radius: 5em;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
  }

  .button:hover {
    border: 2px solid #ff5900;
    background: #00000000;
    color: #ff5900;
  }

  .button:active {
    border: 2px solid #66da4300;
    background: #ff5900;
    color: black;
  }

  .input {
    width: calc(100% - 10px);
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #66da4300;
    border-bottom: 1px solid #ff5900;
    outline: none;
    background-color: transparent;
    color: #ff5900;
    font-family: Arial, Helvetica, sans-serif;
    transition: 0.2s;
  }

  .input:focus {
    border: 1px solid #66da4300;
    border-bottom: 1px solid #ff5900;
    background-color: transparent;
    color: white;
  }

  .input::placeholder {
    color: #9b725b;
  }

  .textarea {
    font-family: Arial, Helvetica, sans-serif;
    width: calc(100% - 10px);
    padding: 8px;
    height: 100px;
    margin-bottom: 20px;
    border: 1px solid #66da4300;
    border-bottom: 1px solid #ff5900;
    outline: none;
    background-color: transparent;
    color: #ff5900;
  }

  .textarea::placeholder {
    color: #9b725b;
  }

  .textarea:focus {
    border: 1px solid #66da4300;
    border-bottom: 1px solid #ff5900;
    background-color: transparent;
    color: white;
  }`;

export default Form;
