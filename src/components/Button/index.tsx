import React from 'react';

import './index.scss';

interface IButton {
  className?: string,
  iconClassName?: string,
  children?: JSX.Element | string,
  type?: string,
  disabled?: boolean,
  onClick: () => void,
  icon? : JSX.Element,
}

const Button: React.FC<IButton> = ({ className, iconClassName, children, type = 'contained', disabled, onClick, icon }) => {

    function clickButton(event: any) {
      const button = event.currentTarget;

      const circle = document.createElement("span");

      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
      circle.classList.add("ripple");

      const ripple = button.getElementsByClassName("ripple")[0];

      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);

      onClick()
  }

  return (
      <button 
        onClick={clickButton} 
        className={`abi-button abi-button__${type} ${className} ${disabled && 'abi-button_disabled'}` } 
        disabled={disabled}
      >
        <span className={`abi-button_icon ${iconClassName}`}>{icon}</span>
        { children }
      </button>
  );
}

export default Button;
