import React from 'react'
import {Row , Col , Form , Input} from 'antd'
import { Link } from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import {adminLogin} from '../redux/actions/userActions'
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

AOS.init();
function AdminLogin() {
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)
    function onFinish(values) {
        dispatch(adminLogin(values))
        console.log(values)

 }
 return (
        <div className='login'>
            {loading && (<Spinner />)}
            <Row gutter={16} className='d-flex align-items-center' >

                <Col lg={16} style={{position: 'relative'}}>
                    <img 
                    className='w-100'
                    data-aos='slide-right'
                    data-aos-duration='800'
                    src="https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                     <h1 className='login-logo'>RunVista</h1>
                </Col>
                <Col lg={8} className='text-left p-6'>
                    <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
                         <h1>Admin Login</h1>
                         <hr />
                         <Form.Item name='username' label='Username' rules={[{required: true}]}>
                             <Input/>
                         </Form.Item>
                         <Form.Item name='password' label='Password' rules={[{required: true}]}>
                             <Input type='password'/>
                         </Form.Item>

                         <button className='btn1 mt-2 mb-3'>Admin Login</button>
                         <br />

                        <Link to="/login">Click Here to Login</Link>

                         <hr />

                    </Form>
                </Col>

            </Row>

        </div>
    )
}

export default AdminLogin