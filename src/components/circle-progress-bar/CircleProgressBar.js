import React, { useEffect, useState, useRef } from 'react';

import './CircleProgressBar.css';

const CircleProgressBar = props => {
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    const { progress } = props;

    const center = 68 / 2;
    const radius = 68 / 2 - 5 / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
        circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out;';
    }, [setOffset, circumference, progress, offset]);

    return (
        <>
            <svg className="circle-progress-bar">
                <circle
                    className="base-circle"
                    cx={center}
                    cy={center}
                    r={radius}
                />
                <circle
                    className="progress-circle"
                    ref={circleRef}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
                <text x={center} 
                    y="40" 
                    className="progress-value">
                        {progress}%
                </text>
            </svg>
        </>
    )
}

export default CircleProgressBar;