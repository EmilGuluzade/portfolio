import React,{useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setDone(false)
        setNotDone(false)
    }

    const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formData.user_name || !formData.user_email ||!formData.user_message ){
      setNotDone(true)
    } else {
      
      
    emailjs
      .sendForm(
       'service_kihpqq4', 'template_g0m1t05', form.current, 'YwBxsj-wvbTZC-e_v'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
    };
    

    return(
        <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 >Get in Touch</h1>
            <h1 className="yellow">Contact me</h1>
            </Col>
            <Col md={6} className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user"  placeholder="Name" onChange={handleChange}/>
                <input type="email" name="user_email" className="user" placeholder="Email" onChange={handleChange} />
                <input type="tel" name="user_phone" className="user" placeholder="Phone" onChange={handleChange} />
                <textarea name="user_message" className="user" placeholder="Message" onChange={handleChange} />
                <span className='not-done' >{notDone && "Please, fill all the input field"}</span>
                <Button type="submit" className="button" disabled={done}>Send</Button>
                <span className='done'>{done && "Thanks for contacting me and be sure i have recieved your mail. If you have any serious query then i will reply. Also if you need me, you can conatct me on Linkedin."}</span>
                </form>
            </Col>
            </Row>
        </Container>
    )
}

export default Contact