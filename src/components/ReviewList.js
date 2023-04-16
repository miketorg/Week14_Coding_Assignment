import React, { Component } from 'react'
import Review from '../components/Review'


export default class ReviewList extends Component {
    constructor(props) {
        super(props) 
            this.reviews = props.movie       
    }

    render() {
    return (
        <div>
            {this.reviews.map((review, index) => (
                <Review key={index} review={review} />
            ))}
        </div>
    )
    }
}
