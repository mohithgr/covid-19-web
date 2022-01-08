import React from "react";

import './HeadingNames.css'

export default function Header(){
    return(
        <span className="Header">
            <p className="Heading information">Country</p>
            <p className="Heading information">Cases</p>
            <p className="Heading information">Deaths</p>
            <p className="Heading information">Recovered</p>
        </span>
    )
}