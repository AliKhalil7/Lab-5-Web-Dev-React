import { useState } from 'react'
import userimage from './user.jpg' 

function UserComment({ name, text, likes }) {
  const [likeCount, setLikeCount] = useState(likes)

  function handleLike() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className="usercomment">
    <img src={userimage} alt="User" width="20" height="20" />
      <b>{name}</b>
      <p>{text}</p>

      <button onClick={handleLike}>Like</button>
      <input value={likeCount} readOnly size="2" />
    </div>
  )
}

export default UserComment