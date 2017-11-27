import React from 'react'

const Header = (props) => {
    return(
        <div>
            <header className="top">
                <h1>
                    Catch
                    <span className="ofThe"> 
                        <span className="of">of</span> 
                        <span className="the">the</span>
                    </span>
                    day
                </h1>
                <h3 className="tagline"><span>{props.tagline}</span></h3>
            </header>
        </div>
    )
}

Header.propTypes ={
    tagline: React.PropTypes.string.isRequired
}

export default Header