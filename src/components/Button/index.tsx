import React from 'react';

import './index.scss';

interface IButton {
  className: string,
  children: JSX.Element | string
}

const Button: React.FC<IButton> = ({ className, children }) => (
  <div className={`button ${className} `}>
    { children }
  </div>
);

export default Button;
