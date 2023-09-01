import React from 'react'
import { Link } from 'react-router-dom'

const PostsList = (props) => {
  const { posts } = props

  return posts.map(({ id, label }) => (
    <Link key={id} to={`/posts/${id}`}>
      <h3>{label}</h3>
    </Link>
  ))
}

export default PostsList
