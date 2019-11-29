import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Post = (props) => (
  <div>
    <Card>
      <Card.Img variant="top" style={{ maxWidth: '300px' }} src={props.image} />
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
        <Card.Text dangerouslySetInnerHTML={{ __html: props.excerpt }} />


        <Button variant="primary" href={props.readMore}>Read more...</Button>
      </Card.Body>
    </Card>
  </div>
)

export default Post


