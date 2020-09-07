import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Button from '../utils/ButtonComponent';


export default class Discount extends Component {
    constructor(props){
        super(props)
        this.state={
            discount: 0,
            discountEnd: 30
        }
    }
    percentage = ()=>{
        const { discount, discountEnd } = this.state;

        if(discount < discountEnd){ 
            this.setState({ 
                discount: discount + 1
            })
        }
         
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage();
        }, 30)
    }
    render() {
        const { discount } = this.state;
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={()=> this.percentage()}
                    >

                        <div className="discount_porcentage">
                            <span>{discount}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>

                        <div className="discount_description">
                            <h3>Purchase it before 20th November.</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti illo quasi aut tempora. Expedita minima tempore a eum. Molestias sequi natus.</p>

                            <Button
                                text="Purchase Now"
                                bck="#ffa800"
                                color="#fff"
                                link="/:#"
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}
