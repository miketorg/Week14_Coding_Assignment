import React, {Component} from 'react'
import {Rating} from '@mui/material'


export default class Review extends Component {
    constructor(props) {
        super(props)
        this.review = props.review
        console.log(props)
    }

    render() {
        return (
        <div>
            <h4>
              {this.review.name} <Rating readOnly value={this.review.rating} /> 
            </h4>
            <p>{this.review.text}</p>
        </div>
        )
    }
}

