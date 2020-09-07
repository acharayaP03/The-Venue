import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';
export default class TimeUntill extends Component {
    constructor(props){
        super(props)
        this.state={
            deadline: 'Dec, 24, 2020',
            days: '0',
            hours: '0',
            minutes: '0',
            seconds: '0'
        }
    }

    getTimeUntil(deadline){
       const time = Date.parse(deadline) - Date.parse(new Date());
       if(time < 0){
           console.log('Event is closed');
       }else{
           const seconds = Math.floor((time / 1000) %60 ),
                 minutes = Math.floor((time/ 1000/ 60 ) % 60),
                 hours   = Math.floor((time/(1000 * 60 * 60)) % 24),
                 days    = Math.floor(time/ (1000 * 60 * 60 * 24));

                 this.setState({
                     days,
                     hours,
                     minutes,
                     seconds
                 })
       }
    }

    componentDidMount(){
        setInterval(()=> this.getTimeUntil(this.state.deadline), 1000)
    }
    render() {
        return (
            <div>
                <Slide left delay={1000}>    
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event Starts in
                    </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                               { this.state.days}
                            </div>
                            <div className="countdown_tag">
                                days
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.hours}
                            </div>
                            <div className="countdown_tag">
                                Hs
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.minutes}
                            </div>
                            <div className="countdown_tag">
                                min
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                               {this.state.seconds}
                            </div>
                            <div className="countdown_tag">
                                sec
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
        )
    }
}
