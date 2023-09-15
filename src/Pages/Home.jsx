import React from "react";
import HouseDisplay from "./HouseDisplay";

const Home = ({houses}) => {
    return (
            <>
            <h1>House Display Page</h1>
            {houses.map((houses, idx)=> { 
                return (
                    <HouseDisplay key={idx} houses={houses}/>
                )
            })}
        </>
    )

        
};

export default Home;
