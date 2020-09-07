import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';


export default class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            drawOpen : false,
            headerShow: false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }


    handleScroll = () =>{
        if(window.scrollY > 0){
            this.setState({ headerShow : true});
        }else{
            this.setState({ headerShow : false});
        }
    }

    toggleDrawer =(value) =>{
        this.setState({
            drawOpen: value
        })
    }
    render() {
       const {drawOpen } = this.state;
        return (
            <div >
            <AppBar 
                position="fixed"
                className=""
                style={{
                    backgroundColor: this.state.headerShow ? "#333" : 'transparent',              
                }}
            >
              <Toolbar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">The Venue</div>
                    <div className="header_logo_title"> Musical Event</div>
                </div>
                <IconButton
                    aria-label="Menu"
                    color="inherit"
                    onClick={()=> this.toggleDrawer(true)}
                >
                    <MenuIcon></MenuIcon>
              </IconButton>
              <SideDrawer  
              open={drawOpen}
              onClose={(value) => this.toggleDrawer(value)}
              />
              </Toolbar>
            </AppBar>
          </div>
        )
    }
}
