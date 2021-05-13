import React, {Component} from 'react'

class Cell extends Component {
    constructor(prop) {
        super()
        this.state = {
            color: prop.value
        }
    }

    changeColor = () => this.setState({color: '#333'})

    render() {
        return (
            <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
        )
    }
}

export default Cell