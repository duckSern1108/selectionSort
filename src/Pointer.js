import React from 'react'
export default function Pointer({target,bgrTargeted,pointer,style}) {
    return (
        <div
                className="pointer"
                style={{
                    background: target ? bgrTargeted : "white",
                    ...style
                }}
        >{target && pointer}</div>
    )
}