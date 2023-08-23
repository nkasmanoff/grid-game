import React from 'react'
import GridContainer from '../components/GridContainer/GridContainer'


function GridGame(
    // props
) {
    return (
        <div>
            <h1>GeoGrid🌍 🌎 🌍</h1>
            <br />
            <GridContainer />
            <br />
            <br />
            <span>
            This is a basic implementation of the fun and popular grid guessing games, like  <a href="https://hoopgrids.com" target="_blank" rel="noopener noreferrer">hoopgrids</a>.
            </span>
            <br />
            <br />
            <span> 
             For example, pick a country that is in South America, and has the largest population.
             </span>

            <br />
            <br />
            <span>
            This is a work in progress, and I'll improve it over time.
            </span>
            <br />
            <br />
            <span>
                <a href="https://nkasmanoff.github.io/" target="_blank" rel="noopener noreferrer">Noah Kasmanoff</a>
            </span>
            <br />

        </div>
    )
}

export default GridGame
