import React from 'react';
import Comment from './CommentContainer';


const CommentsList = ({comments, addComment}) => {
return (
    <>
        <ul>{comments.map(comment => <Comment key={comment.id} {...comment} />)}</ul>
        <button onClick={() => addComment(prompt('Your comment:'))}>Add comment</button>
    </>
)
};



export default CommentsList;