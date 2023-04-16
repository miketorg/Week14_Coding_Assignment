import React, { Component } from "react"
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'


export default class Stars extends Component {
  constructor(props) {
    super(props)

    this.state = {
        value: 0,
    }
  }

  render() {
    return (
        <div className="star">
        <Box
            sx={{
                '& > legend': {mt: 2},
            }}
        >
            <Rating
                value={this.state.value}
                onChange={(event,newValue) => {
                    this.setState({value: newValue})
                    this.props.handleRating(newValue)
                }}
            />    
        </Box>
        </div>
    )
  }
}
