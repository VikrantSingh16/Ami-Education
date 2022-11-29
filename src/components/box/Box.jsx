import React from 'react'
import './box.scss'

const Box = props => {
    const className = {
        box: 'box',
        purple: props.purple && 'box-purple',
        fullheight: props.fullheight && 'box-fullheight'
    }

    return (
        // <div className={Object.values(className).join(' ')}>
        <div className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-purple-500 rounded-xl text-black font-bold text-lg">
            {props.children}
        </div>
    )
}

export default Box
