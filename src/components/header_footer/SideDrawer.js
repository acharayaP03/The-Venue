import React from 'react';
import {scroller} from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListSubheader, ListItemIcon, ListItemText} from '@material-ui/core';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import FeaturedVideoOutlinedIcon from '@material-ui/icons/FeaturedVideoOutlined';

const SideDrawer = (props)=> {

    const scrollElement = (element)=>{
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        });
        //once its scrlled close the draw.
        props.onClose(false);
    }
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={ () => props.onClose(false)}
        >
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-sufbheader" style={{ fontSize:"1.5rem"}}>
                        Click on links to view all
                    </ListSubheader>
                }
            >

            <ListItem button className="fs" onClick={ ()=> scrollElement('eventStarts')} >
                <ListItemIcon>
                    <EventAvailableOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Event Starts In" />
            </ListItem>
            <ListItem button className="fs" onClick={ ()=> scrollElement('venueInfo')} >
                <ListItemIcon>
                    <FeaturedPlayListOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Venue Info" />
            </ListItem>
            <ListItem button className="fs" onClick={ ()=> scrollElement('highlights')}>
                <ListItemIcon>
                    <FeaturedVideoOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Highlights" />
            </ListItem>
            <ListItem button className="fs" onClick={ ()=> scrollElement('pricing')}>
                <ListItemIcon>
                    <AttachMoneyOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Pricing" />
            </ListItem>
            <ListItem button className="fs" onClick={ ()=> scrollElement('location')}>
                <ListItemIcon>
                    <RoomOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Location" />
            </ListItem>
            </List>
        </Drawer>
    )
}
export default SideDrawer;