import { connect } from 'react-redux'

function Likes (props) {
    console.log('render >', props);
    
    return (
        <div className="button-controls">
            <button>❤️ {props.likes}</button>
            <button>Dislike</button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log( 'mapStateToProps >', state);
    return {
        likes: state.likes
    }
}

export default connect(mapStateToProps)(Likes);