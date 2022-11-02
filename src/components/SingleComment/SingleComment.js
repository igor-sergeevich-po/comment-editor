import { useState, useEffect } from 'react';
import { commentUpdate } from '../../redux/actions.js';
import { useDispatch } from 'react-redux';

function SingleComment({data}) {
    const [commentText, setCommentText] = useState('');

    const { text, id } = data;
    const dispatch = useDispatch();
    const handleUpdate = (e) => {
        e.preventDefault();
 
        dispatch(commentUpdate(commentText, id))
    }

    useEffect(() => {
        if (text) {
            setCommentText(text)
        }
    }, [text]);

    const handleInput = (e) => {
        setCommentText(e.target.value)
    }
    return (
        
            <form onSubmit={handleUpdate} className="comments-item">
                <div key={id} className="comments-item-delete">&times;</div>
                <input type='text' value={commentText} onChange={handleInput} />
                <input type='submit' hidden />
            </form>
        
        
    )
}

export default SingleComment;