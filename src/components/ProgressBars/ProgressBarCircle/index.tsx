import React, { useEffect, useState } from 'react';

import './index.scss';

interface IProgressBarCircle {
  size: number,
  progress: number,
  strokeWidth: number,
  circleOneStrokeColor: string,
  circleTwoStrokeColor: string,
  isBackground: boolean,
  isText: boolean,
  textFontSize: string,
  textClassName: string
}

const ProgressBarCircle: React.FC<IProgressBarCircle> = (props) => {
  const {
    size,
    progress,
    strokeWidth,
    circleOneStrokeColor,
    circleTwoStrokeColor,
    isText,
    isBackground,
    textFontSize,
    textClassName
  } = props;

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, progress, offset]);

  return (
      <>
        <svg className="abi-circle-progress-bar" width={size} height={size}>
          {isBackground && <circle
              className="abi-circle-progress-bar__bg "
              stroke={circleOneStrokeColor || 'rgba(80, 97, 255, 0.12)'}
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
          />}
          <circle
              className="abi-circle-progress-bar__filler"
              stroke={circleTwoStrokeColor || '#5061FF'}
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              strokeDashoffset={offset}
              strokeDasharray={circumference}
          />
          {isText && <text className={`abi-circle-progress-bar__text ${textClassName}`} fill={circleTwoStrokeColor || '#5061FF'} x={center}  y={center} fontSize={textFontSize}>
            {progress}%
          </text>}
        </svg>
      </>
  )
};

export default ProgressBarCircle;
