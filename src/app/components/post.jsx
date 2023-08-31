import React from 'react'
import { useParams } from 'react-router-dom'

const Post = (props) => {
  let { posts, label } = props
  const { id } = useParams()

  if (posts) {
    const post = posts.find((post) => String(post.id) === id)
    label = post.label
  }

  return <div>{label}</div>
}

export default Post
