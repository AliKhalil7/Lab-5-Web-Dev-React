import { useState } from 'react'
import './App.css'
import CommentInput from "./CommentInput.jsx"
import UserComment from "./UserComment.jsx"   
import userimage from './user.jpg' 
function App() {
 
  const [comments, setComments] = useState([
    { name: 'Ali', text: 'Bet7ebo FrontEnd?????', likes: 5 },
    { name: 'Omar', text: 'So2al Sa3bbbb!!!!!!!.', likes: 2 },
  ])

  const [text, setText] = useState('')

  function addComment() {
    setComments([...comments, { name: 'Anonymous', text: text , likes: 0 }])
    setText('')

  }

  return (
      <div>
         <h2>Comments ({comments.length})</h2>

        <CommentInput
          text={text}
          onTextChange={(e) => setText(e.target.value)}
          onPost={addComment}
        />
        {comments.map((user, i) => (
        <UserComment key={i} name={user.name} text={user.text} likes={user.likes} />
      ))}


      </div>
  );


}

export default App
