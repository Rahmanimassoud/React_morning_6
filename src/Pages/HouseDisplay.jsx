
import React from 'react';


const HouseDisplay = ({ houses }) => {
    return (
        <>
        <div className='house-card'>
            <h2>House Name: {houses.name}</h2>
            <p>Address: {houses.address}</p>
            <p>Price: {houses.price}</p>
            <p>Status: {houses.isSold ? "Sold" : "For Sale"}</p>
        </div>
        </>
    )
}

export default HouseDisplay

