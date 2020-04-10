import React, {useState, useImperativeHandle, forwardRef, useRef } from "react"
import CanvasDraw from "react-canvas-draw"
import { SketchPicker  } from 'react-color'
import { Popover, Button, Slider } from 'antd'
import styles from './Drawer.module.css'
import { RollbackOutlined, ClearOutlined, FormatPainterOutlined } from '@ant-design/icons'

const Drawer = (props,ref) => {
    const [color, setColor] = useState("#ffc600")
    const [brushRadius, setBrushRadius] = useState(10)
    const canvasDrawRef = useRef(null);

    useImperativeHandle(ref, () => ({
      getAvatarString: () => {
        return canvasDrawRef.current.getSaveData()
      }
    }))

    const handleSetBrush = event => {
      setBrushRadius(event)
    }

    return (
      <div className="drawerBoard">    
      <CanvasDraw ref={canvasDrawRef} className={styles.canvas} hideGrid={true} brushColor={color} brushRadius={brushRadius} lazyRadius={1} canvasWidth={250} canvasHeight={300} />
      <div className={styles.controls}>
        <Popover content={<SketchPicker  color={color} onChangeComplete={(x,y) => setColor(x.hex)} disableAlpha={true} />} title="Choose color" trigger="click">
          <Button shape="circle"><FormatPainterOutlined /></Button>
        </Popover>
        <Button shape="circle" onClick={() => props.avatar.clear()} >
          <ClearOutlined />
        </Button>
        <Button shape="circle" onClick={() => props.avatar.undo()}  > 
          <RollbackOutlined />
        </Button>
        <Slider defaultValue={brushRadius} onChange={handleSetBrush}  />
      </div>
    </div>
        
    )
}

export default forwardRef(Drawer); 
