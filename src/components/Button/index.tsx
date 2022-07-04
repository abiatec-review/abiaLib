/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { /* useEffect,  */useEffect, useRef } from 'react';

// import box from 'components/Box';

import './index.scss';
import { abTextDance } from 'ab-anim';

interface IButton {
  className?: string,
  children?: JSX.Element | string,
  style?: Object
}

const Button: React.FC<IButton> = ({ className, children, style }) => {
  const ref = useRef(null);

  const {
    setState: startAnim, config, setEndCallback, hardStop,
  } = abTextDance(ref);

  const mouseOver = () => {
    startAnim(true);
  };

  const mouseLeave = () => {
    hardStop();
  };

  const onMouseDown = () => {
    // startAnim(!config.isActive);
  };

  useEffect(() => {
    // startAnim(true);
    setEndCallback(() => console.log('defineCallback'));
  }, []);

  useEffect(() => {
    // console.log(config);
  }, [config]);

  return (
    <div onMouseDown={onMouseDown} className={`button ${className} `} style={style} ref={ref} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
      { children }
    </div>
  );
};

export default Button;
