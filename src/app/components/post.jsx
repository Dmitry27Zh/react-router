import React from 'react'

const Post = (props) => {
  let { posts, id } = props
  const { label } = posts.find((post) => String(post.id) === String(id)) ?? {}

  return <div>{label}</div>
}

export default Post
