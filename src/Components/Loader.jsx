import React from 'react'
import { Puff } from 'react-loader-spinner'

function Loader() {
    return (
        <div>
            <Puff
                height="300"
                width="300"
                color="#a8a8a8"
                ariaLabel="Yükleniyor..."
            />
        </div>
    )
}

export default Loader