import React from 'react';

import './index.scss';

interface ISwitch {
  value: boolean;
  onChange: (value: boolean) => void;
  type?: string;
  disabled?: boolean;
  label?: string;
  labelClassName?: string;
}

const Switch: React.FC<ISwitch> = (props) => {
  const {
    value,
    onChange,
    disabled,
    label,
    labelClassName,
    type = 'out'
  } = props;

  const onToggle = () => {
    if(!disabled) {
      onChange(!value)
    }
  };

  return (
      <div className={`abi-toggle-switch__block ${disabled && 'abi-toggle-switch__block_disabled'}`}>
        <span onClick={onToggle} className={`abi-toggle-switch__label ${labelClassName}`} >{label}</span>
        <label className={`abi-toggle-switch  abi-toggle-switch__${type} ${disabled && 'abi-toggle-switch__disabled'}`}>
          <input disabled={disabled} type="checkbox" checked={value} onChange={onToggle} />
          <span className="abi-toggle-switch__filler" />
        </label>
      </div>
  );
};

export default Switch;
