/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-param-reassign */
import React, {
  JSXElementConstructor, ReactElement, /* RefObject, */
} from 'react';

import './index.scss';

type T = ReactElement<any, string | JSXElementConstructor<any>>

// type withAnim = T & { animate: (a: Array<Object>, b: Object)=>any}

const box: React.FC<T> = (children) => {
  // (children as HTMLDivElement).className = `${(children as HTMLDivElement).className || ''} animBlink`;
  // const ref = useRef();
  // useEffect(() => { console.log(ref.current); }, [ref.current]);
  const ret = React.cloneElement((children as T), {
    className: `${children.props.className} animBlink`,
    style: { '--custom-a': 'yellow' },
  });
  // @ts-ignore
  // ret.ref.current

  return ret;
};

export default box;
