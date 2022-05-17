import React from 'react';

import './index.scss';

interface IProgressBar {
  className?: string,
  bgColor?: string,
  containerBgColor?: string,
  completed: number,
  height?: number,
  borderRadius: number;
}

const ProgressBar: React.FC<IProgressBar> = ({ className, bgColor, containerBgColor, completed, height, borderRadius }) => {

  const containerStyles = {
    backgroundColor: containerBgColor,
    height: `${height}px`,
    borderRadius: `${borderRadius}px`
  }

  const fillerStyles = {
    width: `${completed}%`,
    backgroundColor: bgColor,
    borderRadius: `${borderRadius}px 0 0 ${borderRadius}px`
  }

  return (
      <div style={containerStyles} className={`abi-progress-bar ${className} `}>
        <div style={fillerStyles} className={`abi-progress-bar__filler`}/>
      </div>
  )
};

export default ProgressBar;
