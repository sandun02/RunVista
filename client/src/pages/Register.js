import React, { useState } from "react";
import { Row, Col, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from "../redux/actions/userActions";
import AOS from 'aos';
import Spinner from '../components/Spinner';

import 'aos/dist/aos.css'; 
// ..
AOS.init()

function Register() {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.alertsReducer)

  const [form] = Form.useForm(); 


  const onFinish = (values) => {
  
    if (values.password !== values.cpassword) { // Password validation
      message.error('Passwords do not match');
      return;
    }


   if(!/\S+@\S+\.\S+/.test(values.username)){
    message.error ('username is not valid')
    return;
    }

    if(values.password.length < 6){
    message.error('password should be at least 6 char')
    return;
  }

    dispatch(userRegister(values)); 
    console.log(values);
  }
 

  return (
    <div className="login">
      {loading && (<Spinner />)}
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <img
            className='w-100'
            data-aos='slide-left'
            data-aos-duration='800'
            src="https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background" />
          <h1 className="login-logo">RunVista</h1>
        </Col>
        <Col lg={8} className="text-left p-6">
          <Form layout="vertical" form={form} className="login-form p-5" onFinish={onFinish}>
            <h1>Register</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username (input your Gmail)"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password (password should be at least 6 char)"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="cpassword"
              label="Confirm Password"
              rules={[{ required: true, message: 'Please confirm your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <button type="submit" className="btn1 mt-2 mb-3">Register</button>
            <br />
            <Link to="/login">Click Here to Login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;

