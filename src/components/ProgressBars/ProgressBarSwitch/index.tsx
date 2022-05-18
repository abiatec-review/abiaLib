import React from 'react';

import Switch from "../../Switch";
import ProgressBarCircle from "../ProgressBarCircle";

import './index.scss';

interface IProgressBarSwitch {
  value: boolean;
  onChange: (value: boolean) => void;
  progress: number;
}

const ProgressBarSwitch: React.FC<IProgressBarSwitch> = ({value, onChange, progress}) => {

  const disabled = progress < 100;

  return (
      <div className="abi-circle-progress-bar-switch">
        {disabled && <div className="abi-circle-progress-bar-switch__switch">
            <ProgressBarCircle size={10} progress={progress} strokeWidth={1} />
        </div>}
        <Switch value={value} onChange={onChange} type='in' disabled={disabled}/>
      </div>
  )
};

export default ProgressBarSwitch;
