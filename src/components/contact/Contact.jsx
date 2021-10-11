import React, { useContext, useRef, useState } from 'react';
import "./contact.css";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleSubmit =(e) =>{
        e.preventDefault();

        emailjs.sendForm(
            'service_b91tnuv', 
            'template_vvkd34m', 
            formRef.current, 
            'user_ZSnwDWQrabAe0qeEWxPda')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <div className="c" style={{backgroundColor: darkMode && "#222"}}>
            <div className="c-bg"></div>
                <div className="c-wrapper" >
                    <div className="c-left">
                        <h1 className="c-title">Lets discuss your projcects</h1>
                        <div className="c-info">

                            <div className="c-info-item">
                                <img src={Phone} 
                                alt="" 
                                className="c-icon"
                                />
                                +27 74 059 1991
                            </div>

                            <div className="c-info-item">
                                <img src={Email} 
                                alt="" 
                                className="c-icon"
                                />
                                dietssk@gmail.com
                            </div>

                            <div className="c-info-item">
                                <img src={Address} 
                                alt="" 
                                className="c-icon"
                                />
                                4 Ferox Drive
                            </div>

                        </div>
                    </div>


                    <div className="c-right">
                        <p className="c-desc">
                            <b>What's your story</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vitae nisi maiores est laboriosam in distinctio dolorum. Necessitatibus tempore ad dolores voluptates voluptas assumenda praesentium pariatur, maiores temporibus, exercitationem ipsa.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                            <textarea style={{backgroundColor: darkMode && "#333"}} rows="6" placeholder="Message" name="message"></textarea>
                            <button>Submit</button>
                            {done && "Thank you email sent succesfully"}
                        </form>

                    </div>
                </div>
            
        </div>
    )
}

export default Contact
