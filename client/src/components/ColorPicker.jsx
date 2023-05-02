import React from 'react';
import { SketchPicker} from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
      color = { snap.color}
      disableAlpha
      presetColors={[
        "#ccc",
        "#ff8a65",
        "#2CCCE4",
        "#C19277",
        "#80C670",
        "#726DE8"

      ]}
      onChange = {(color)=> state.color = color.hex}
      />
      ColorPicker</div>
  )
}

export default ColorPicker