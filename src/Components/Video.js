import React from 'react'

import video from '../assets/video.mp4'

import '../App.css'
export default function Video() {
    return (
        <>
            <div className="container-fluid p-0 vidback">
                <video autoPlay loop muted >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </>
    )
}
