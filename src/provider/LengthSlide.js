import React, { useContext, useState } from 'react'

const lengthSlideContext = React.createContext()
const lengthSlideContextDispatcher = React.createContext()

function LengthSlide({ children }) {

    const [slide, setSlide] = useState(0)

    return (
        <div>
            <lengthSlideContext.Provider value={slide}>
                <lengthSlideContextDispatcher.Provider value={setSlide}>
                    {children}
                </lengthSlideContextDispatcher.Provider>
            </lengthSlideContext.Provider>

        </div>
    )
}

export default LengthSlide


export const UseLengthSlide = () => useContext(lengthSlideContext)

export const UseLengthSlideAction = () => {
    const slide = useContext(lengthSlideContext)
    const setSlide = useContext(lengthSlideContextDispatcher)

    const changeLength = (slideId) => {
        setSlide(slideId)
    }

    return { changeLength }
}