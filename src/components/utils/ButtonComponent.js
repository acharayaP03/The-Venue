import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';


export default function ButtonComponent(props) {  
    const { text, bck, color, link} = props;
    return (
        <Button
            href={link}
            variant="contained"
            size="small"
            style={{
                background: bck,
                color
            }}
        >
            <img 
            src={TicketIcon}
            className="iconImage"
            alt="click on this"
            />
            {text}
        </Button>
    )
}
