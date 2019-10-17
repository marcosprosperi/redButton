import React, {useState} from "react"
import CanvasDraw from "react-canvas-draw";


const Drawer = () => {
    
    const [color, setColor] = useState("#ffc600")
    const [brushRadius, setBrushRadius] = useState(10)

    return (
        [
        <div >
            <div>
                <label>Brush-Radius:</label>
                <input type="number" value={brushRadius} onChange={e => setBrushRadius(parseInt(e.target.value, 10))} />
            </div>
        </div>,
        <CanvasDraw brushColor={color} brushRadius={brushRadius} lazyRadius={1} canvasWidth={400} canvasHeight={400} />
    ]
    )
}

export default Drawer