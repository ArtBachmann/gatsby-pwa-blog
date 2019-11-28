import React from "react"
import { Form, Button } from 'react-bootstrap'
import PrimaryLayout from '../layouts/PrimaryLayout'

const IndexPage = () => (
  <PrimaryLayout column='col-10' >
    <h2>Contact Us</h2>
    <Form>
      <Form.Group controlId="contactForm.Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
      </Form.Text>
      </Form.Group>

      <Form.Group controlId="contactForm.Subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Subject" />
      </Form.Group>
      <Form.Group controlId="contactForm.Message">
        <Form.Label>Text Area</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
  </PrimaryLayout>
)

export default IndexPage
