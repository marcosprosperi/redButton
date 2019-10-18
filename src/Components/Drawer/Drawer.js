import React, {useState} from "react"
import { Slider } from '@material-ui/core'
import CanvasDraw from "react-canvas-draw"
import Tooltip from '@material-ui/core/Tooltip'
import { SketchPicker  } from 'react-color'

function ValueLabelComponent(props) {
    const { children, open, value } = props
  
    const popperRef = React.useRef(null)
    React.useEffect(() => {
      if (popperRef.current) {
        popperRef.current.update()
      }
    })
  
    return (
      <Tooltip
        PopperProps={{
          popperRef,
        }}
        open={open}
        enterTouchDelay={0}
        placement="top"
        title={value}
      >
        {children}
      </Tooltip>
    )
  }

const Drawer = () => {
    
    const [color, setColor] = useState("#ffc600")
    const [brushRadius, setBrushRadius] = useState(10)

    return (
        [
        <Slider value={brushRadius} onChange={(x,y) => setBrushRadius(y)} ValueLabelComponent={ValueLabelComponent} aria-label="Brush radius" min={1} max={100} />,
        <CanvasDraw brushColor={color} brushRadius={brushRadius} lazyRadius={1} canvasWidth={400} canvasHeight={400} />,
        <SketchPicker color={color} onChangeComplete={(x,y) => setColor(x.hex)} disableAlpha={true} />
        ]
    )
}

export default Drawer