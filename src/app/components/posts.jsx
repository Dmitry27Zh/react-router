import React from 'react'
import Post from './post'
import { useLocation, useParams } from 'react-router-dom'
import PostsList from './postsList'
import queryString from 'query-string'

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
  const { search } = useLocation()

  if (id) {
    return <Post id={id} posts={posts} />
  }

  const { count = posts.length } = queryString.parse(search)
  const postsToRender = posts.slice().splice(0, count)

  return <PostsList posts={postsToRender} />
}

export default Posts
