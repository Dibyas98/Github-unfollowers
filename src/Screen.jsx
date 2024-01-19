import React, { useContext, useState } from 'react'
import InputData from './component/inputData/InputData'
import StoreContext, { Data } from './component/inputData/StoreContext/StoreContext'
import Displayul from './component/DisplayList/Displayul'

export default function Screen() {
    
    
    return (
        <div className='screen'>
            <StoreContext>
                <InputData></InputData>
                <Displayul>

                </Displayul>
            </StoreContext>
        </div>
    )
}
