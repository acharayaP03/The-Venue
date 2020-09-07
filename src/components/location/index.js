import React from 'react'

export default function Location() {
    return (
        <div className="location_wrapper">
            <iframe 
                title="Venue loaction"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.8197131465713!2d151.22455336570712!3d-33.89429673064931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1fdfb9eb395%3A0x5a7d99e7c3302d6d!2sEntertainment%20Quarter%2C%20New%20South%20Wales%202021!5e0!3m2!1sen!2sau!4v1599461665719!5m2!1sen!2sau" 
                width="100%" 
                height="450" 
                frameBorder="0" 
               
                allowFullScreen="" 
                ></iframe>

                <div className="location_tag">
                    <div>Location</div>
                </div>
        </div>
    )
}
