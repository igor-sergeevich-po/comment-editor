import SingleComment from "../SingleComment/SingleComment";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { commentCreate } from '../../redux/actions.js';

function Comments(props) {
    const [ textComment, setTextComment ] = useState('');
    const comments = useSelector( state => {
        const { commentsReducer } = state;
        return commentsReducer.comments;
    })
    const dispatch = useDispatch();

    const handleInput = (e) => {

        setTextComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        if (textComment.length>0) {
            dispatch(commentCreate(textComment, id));
        } else {
            alert('Please press the letter keys')
        }
    }
    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type='text' value={textComment}  onChange={handleInput} />
                <input type='submit' hidden />
            </form>
            {!!comments.length &&  comments.map(comment => <SingleComment key={comment.id} data={comment}/>)}
        </div>
    )
}

export default Comments;