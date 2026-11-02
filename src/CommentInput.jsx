function CommentInput({ text, onTextChange, onPost }) 
{

    
    return(
        <>

        <input placeholder="Write a comment..." size="40" value={text} onChange={onTextChange} />
        <button className ="postbutton" onClick={onPost}>
            Post
        </button>

        </>

    );
}

export default CommentInput