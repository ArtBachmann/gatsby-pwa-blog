import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BlogpostLayout = ({ data }) => {
  const post = data.wordpressPost

  return (
    <div>
      <Header title='Ohhoijaahhh' />
      <div className='container'>
        <div className='row justify-content-md-center'>
          <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
          {/* <img src={post.image} alt="Bella" /> */}

          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default BlogpostLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPost (slug: { eq: $slug }) {      
        title
        content      
      }
    }  
`
