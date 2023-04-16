import React, {Component} from 'react'
import Stars from './Star.js'
import ReviewList from './ReviewList.js'

export default class ReviewForm extends Component {
    constructor(props) {
        super(props)
        
        
        this.state = {
            rating: ' ',
            name: ' ',
            text: ' ',
            movie: this.props.movie,
        }
    }
   
    handleName(e) {
    this.setState({name: e.target.value})
    }

    handleText(e) {
    this.setState({text: e.target.value})
    }

    handleRating(newRating) {
    this.setState({rating: newRating})
    }

    handleSubmit(e) {
     e.preventDefault()
       
     const review = {
            ...this.state,
        }

        this.props.movie.push(review)
        this.setState({movie: [...this.props.movie]})
    }

    render() {
        return (
            <div className="row1">
                <br></br>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>Rating</label>
                <Stars handleRating={this.handleRating.bind(this)} />
                <label>Name</label>
                <textarea onChange={(e) => this.handleName(e)}></textarea>
                <label>Review</label>
                <textarea onChange={(e) => this.handleText(e)}></textarea>
                <button>Post Review</button><br></br>
                </form>
                <ReviewList movie={this.props.movie} />
                <br></br><br></br>
            </div>
            
    )
    }
 
}