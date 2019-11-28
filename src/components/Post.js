import React from 'react'

import { Card, Button } from 'react-bootstrap'

const Post = (props) => (
  <div className='p-5'>
    <Card>
      <Card.Img variant="top" src="bella-donna.jpg" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
)

export default Post


