import React from 'react'
import { useNavigate } from 'react-router-dom'

const Post = (props) => {
  let { posts, id } = props
  const navigate = useNavigate()
  const { label } = posts.find((post) => String(post.id) === String(id)) ?? {}
  const handleSave = () => {
    navigate('/posts', { replace: true })
  }

  return (
    <div>
      <span>{label}</span>
      <button type="button" onClick={handleSave}>
        Save
      </button>
    </div>
  )
}

export default Post
