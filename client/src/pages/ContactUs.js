import React, { useRef } from "react";
import DefaultLayout from "../components/DefaultLayout";
import {Row , Col,Form,Input} from 'antd'
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser';

import { message } from "antd";


function Contact  ()  {
   

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_kq0kn2a', 'template_tlxrnwm', form.current, {
            publicKey: 'GaeihzAmGrD7YeANz',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
          message.success("Your message sent successfully")
      };

    return (
        
    <DefaultLayout>
        
        
               <Row justify='center mt-5'>
                   <Col lg={13} sm={24} xs={24} className='p-2'>
                       <form ref={form} onSubmit={sendEmail} className='bs1 p-4' layout='vertical' >
                           <h3>Contact Us</h3>
                           <hr />
                        
                           <Form.Item label='Enter Your Name'>
                           <Input type="text"
                           placeholder="User Name"
                           name="user_name" required/>
                           </Form.Item>

                           <Form.Item  label='Enter Your Email'>
                           <Input type="email"
                           placeholder="Email"
                           name="user_email" required/>
                           </Form.Item>

                           <Form.Item  label='Enter Your Subject'>
                           <Input type="text"
                           placeholder="Subject" 
                           name="subject" required/>
                           </Form.Item>

                           <Form.Item  label='Enter Your Message'>
                           <textarea name="message" cols={90} rows={3}></textarea>
                           </Form.Item>

                           <div className='text-center'>
                           <button type="submit" className='btn1'>Send Message</button>
                           </div>

                       </form>
                   </Col>
               </Row>
  
        
        
    </DefaultLayout>
    );
  };
  
  export default Contact;