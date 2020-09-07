import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/Venue_Info';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
function App() {
    return (
        <div>
            <Element name="eventStarts">
                <Header />
            </Element>
            <Element name="eventStarts">
                <Featured />
            </Element>
            <Element name="venueInfo">
                <VenueInfo/>
            </Element>
            <Element name="highlights">
                <Highlights />
            </Element>
            <Element name="pricing">
                <Pricing />
            </Element>
            <Element name="location">
                <Location />
            </Element>
            <Footer />
        </div>
    );
}

export default App;