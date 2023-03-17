import { useEffect, useState } from "react"
import { Alert, Col } from "react-bootstrap"

export const Newsletter = ({ onValidated, subscribe, status, message }) => {
    const [email, setEmail] = useState('')

    useEffect(() => {
        if(status === 'sucess') clearFields();
    }, [status])

    const handleSubmit = () => {
        e.preventDefault();
        email &&
        email.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email
        })
    }
    
    const clearFields = () => {
        setEmail('')
    }

    return (
        <Col lg={12}>
            <div className="news-letter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger" >Sending...</Alert>}
                        {status === 'success' && <Alert variant="success">Sending...</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
                                <button type='submit'> Submit </button> 
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}