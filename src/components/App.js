// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
    const [randomImage, setRandomImage] = useState("");
    const [stateAs, setAsState] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message)
                setRandomImage(data.message)
                setAsState(true)

            })
    }, [])

    if (!stateAs) return <p>Loading...</p>

    return (
        <div>
            <img src={randomImage} alt="A Random Dog"></img>
        </div>
    )
}

export default App
