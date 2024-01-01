import React from 'react'
import Card from './Card'

function Foreground() {
    return (
        <>
            <div className='w-full h-screen fixed z-[3]'></div>
            <Card />
        </>
    )
}

export default Foreground