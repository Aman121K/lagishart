import React from 'react'
import {Row,Col, Container} from 'react-bootstrap';
export default function Footer () {
    return (
        <div className="footer2">
        <Container>
        <div className='foot'>
            <div className='social'>
            <img src="assests/facebook.png" alt='img'></img>
            <img src="assests/twitter.png" alt='img'></img>
            <img src="assests/instagram.png" alt='img'></img>
            </div>
            <div className='jksw'>
 <span>Inc. c 200022</span>
            </div>
            <div className='disclaimer'>
                <p><b>Disclaimer: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
        </div>
        </Container>
        </div>
    )
}