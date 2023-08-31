import React from 'react'
import Post from './post'

const Posts = (props) => {
  const { posts } = props

  return posts.map(({ id, label }) => <Post key={id} label={label} />)
}

export default Posts
