import React from 'react'
import Post from './post'

const PostsList = (props) => {
  const { posts } = props

  return posts.map(({ id }) => <Post key={id} id={id} posts={posts} />)
}

export default PostsList
