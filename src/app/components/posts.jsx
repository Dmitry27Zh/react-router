import React from 'react'
import Post from './post'
import { useParams } from 'react-router-dom'
import PostsList from './postsList'

const posts = [
  {
    id: 1,
    label: 'Post 1',
  },
  {
    id: 2,
    label: 'Post 2',
  },
  {
    id: 3,
    label: 'Post 3',
  },
]

const Posts = () => {
  const { id } = useParams()

  if (id) {
    return <Post id={id} posts={posts} />
  }

  return <PostsList posts={posts} />
}

export default Posts
