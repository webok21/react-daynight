import React, { Component } from 'react';

class DayNight extends Component {
    state = {
        title: true,
        isDay: true,
        button: true
    }
    handleDay = () => {
        this.setState({ isDay: !this.state.isDay });
        this.setState({ title: !this.state.title });
        this.setState({ button: !this.state.button });
    }
    render() {
        return (
            <div className="wrapper" style={this.state.isDay ? {
                background: "white"
            } : {
                background: "black",
                color: "white"
            }}>

                <h1>{this.state.title ? "Day" : "Night"}</h1>
                <button onClick={this.handleDay} style={this.state.isDay ? {
                    background: "white"
                } : {
                    background: "black", color: "white"
                }}>
                    {this.state.button ? "Change to Night" : "Change to Day"}</button>
            </div>
        );
    }
}

export default DayNight;