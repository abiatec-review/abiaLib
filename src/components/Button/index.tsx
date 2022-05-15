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
  FABPosition?: string;
  FABPositionClassNames?: string;
}

const Button: React.FC<IButton> = ({ className, iconClassName, children, type = 'contained', disabled, onClick, icon, FABPosition, FABPositionClassNames }) => {

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
  const FABPositionClasses = FABPosition ?  `abi-button_position abi-button_position__${FABPosition} ${FABPositionClassNames}` : ''

  return (
      <button 
        onClick={clickButton} 
        className={`abi-button abi-button__${type} ${disabled && 'abi-button_disabled'} ${FABPositionClasses} ${className}` } 
        disabled={disabled}
      >
        <span className={`abi-button_icon ${iconClassName}`}>{icon}</span>
        { children }
      </button>
  );
}

export default Button;
