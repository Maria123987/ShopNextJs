import React from 'react'

const Loading = () => {
    return (
        <div className="d-flex justify-content-center mt-4 mb-4">
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    )
}
export default Loading
