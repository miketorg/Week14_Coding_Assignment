import React, {Component} from 'react'


export default class Movie extends Component {
    constructor(props) {
        super(props)
        
        this.id = props.id
        this.img = props.img
        this.title = props.title
        this.year = props.year
        this.info = props.info       
    }
    render() {
        return (
            <div className='row'>
                <br></br>
                <br></br>
                <img 
                    height="350px" 
                    src={this.img} 
                    alt={this.title}>
                </img>
                <h1>
                    {this.title} ({this.year})
                </h1>
                <p>{this.info}</p>
                
            </div>
            
            
        )
    }
}