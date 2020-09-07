import React, { Component } from 'react'
import Button from '../utils/ButtonComponent';
import Zoom from 'react-reveal/Zoom';

export default class Pricing extends Component {
    constructor(props){
        super(props);
        this.state={
            prices: [100, 150, 250],
            positions: ['Balcony', 'Medium', 'Start'],
            description: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis suscipit sed at a vero quidem nesciunt officia temporibus repudiandae doloremque?',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis suscipit sed at a vero quidem nesciunt officia temporibus repudiandae doloremque?',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis suscipit sed at a vero quidem nesciunt officia temporibus repudiandae doloremque?'
            ],
            linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
            delay: [500, 0, 700]
        }
    }

    showBoxes = () =>(
        this.state.prices.map((box, i) =>(
            <Zoom key={i} delay={this.state.delay[i]}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.description[i]}
                        </div>
                        <div className="pricing_buttons">
                            <Button
                                text="Purchase Now"
                                bck="#ffa800"
                                color="#fff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}
