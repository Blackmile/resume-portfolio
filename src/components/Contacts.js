import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import mobilepng from '../assets/img/mobile.png'

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...')
        let response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json;charset=utf-8'
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText('Send');
        let result = response.json();
        setFormDetails(formInitialDetails);
        if(result.code === 200){
            setStatus({ success: true, message: 'message done send' })
        }else {
            setStatus({ success: false, message: 'Something don happen for back oo, try later sha.' })
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={mobilepng} alt='Contact Us' />
                    </Col>
                    <Col md={6}>
                        <h2> Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.lastName} placeholder="last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                <input type='email' value={formDetails.email} placeholder="Email address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                <input type='tel' value={formDetails.phone} placeholder="phone number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row='6' value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.message }</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}