import React from "react";
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import {Link} from 'react-router-dom'



function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('user'))
  const menu = (
    <Menu>
        <Menu.Item>
        <a
         
          href="/"
        >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          
          href="/userbookings"
        >
          Bookings
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
         
          href="/admin"
        >
          Admin
        </a>
      </Menu.Item>
      <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>
          <li style={{color:'#03C03C'}}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1">
          <Row gutter={16} justify='center'>
              <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
             <h1 ><b><Link to='/' style={{color:'#03C03C'}}>RunVista</Link></b></h1>

          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>{user.username}</Button>
          </Dropdown>
        </div>
              </Col>
          </Row>
        
      </div>
      <div className="content">{props.children}</div>

      
      






      
      <Row>
           <footer className="footer">
        
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/" className=" d-flex align-items-justified gap-2">
                  
                  <span>
                    RunVista Car Rental Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            At Runvista, we're not just about renting cars; we're about creating unforgettable journeys. Founded on the principles of reliability, convenience, and exceptional service, we aim to redefine your car rental experience. Whether you're a solo traveler embarking on a road trip adventure or a family in need of spacious transportation, we've got you covered with our diverse fleet of vehicles.
Our commitment extends beyond just providing vehicles; it's about fostering trust and reliability. With Runvista, you can expect transparency in pricing, easy booking processes, and a seamless rental experience from start to finish. Our dedicated team is here to assist you every step of the way, ensuring that your travel plans unfold effortlessly.
At Runvista, we believe that the journey is just as important as the destination. Let us be your partner in exploration, making every mile memorable.
            </p>
          </Col>


          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">123 Gamunumawatha, Kelaniya, Sri Lanka</p>
              <p className="office__info">Phone: +765345875</p>

              <p className="office__info">Email: San@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
      
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright 2024, Developed by
                Sandun. All rights reserved.
              </p>
            </div>
          </Col>
       
    </footer>
</Row>
           



    
          
      </div>
    
  );
}

export default DefaultLayout;
