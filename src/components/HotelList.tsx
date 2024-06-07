import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const darkStyle = {
    color: '#FFFFFF',
    background: '#333e50'
};

function HotelList(){
    return (
        <div style={darkStyle}>
            <div className="container p-4">
        {/* <!--Grid row--> */}
                <div className="row">
        {/*<!--Grid column-->*/}
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase" style={{textAlign: "left"}}>Отели</h5>
                    </div>
                </div>
                <p> </p>
                <div style={{textAlign: "left"}}>
                <h6 >Санкт-Петербург:</h6>
                <p>
                    <Link to="/HotelBM" style={darkStyle}>Отель Chebebe Bolshaya Morskaya (4*)</Link><br />
                    <Link to="/" style={darkStyle}>Отель Chebebe Gastello (COMING SOON)</Link>
                </p>
                <h6>Омск:</h6>
                <p><a style={darkStyle}>(COMING SOON)</a></p>
                </div>
            </div>
        </div>
    )
}

export default HotelList;