import { useState, useEffect } from 'react';
import { commentUpdate, commentDelete } from '../../redux/actions.js';
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

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(commentDelete(id))
    }
    return (
        
            <form onSubmit={handleUpdate} className="comments-item">
                <div onClick={handleDelete} key={id} className="comments-item-delete" >&times;</div>
                <input type='text' value={commentText} onChange={handleInput} />
                <input type='submit' hidden />
            </form>
        
        
    )
}

export default SingleComment;