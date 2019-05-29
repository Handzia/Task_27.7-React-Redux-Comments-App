import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment}) => 
{ let newText = '';
return (
    <li>{text} 
        <span> votes: {votes}</span>
        <div className="Buttons">
            <button onClick={() => thumbUpComment(id)}>Thumb up!</button>
            <button onClick={() => thumbDownComment(id)}>Thumb down!</button>
            <button onClick={() => removeComment(id)}>Remove</button>
            <input type="text" onChange={(e) => {newText += e.target.value;}} value={newText}/>
            <button className="Edit-button" onClick={() => editComment(id, newText)}>Edit</button>
        </div>
    </li>)
}

export default Comment;