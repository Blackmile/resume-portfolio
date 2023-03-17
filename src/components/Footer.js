import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import fb from '../assets/img/fb.svg'
import tw from '../assets/img/twe.svg'
import git from '../assets/img/git.svg'
import logo from '../assets/img/face_logo.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt='logo' />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className="social-icon">
                            <a href=""><img src={fb} alt='fb' /></a>
                            <a href=""><img src={tw} alt='tw' /></a>
                            <a href=""><img src={git} alt='git' /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}