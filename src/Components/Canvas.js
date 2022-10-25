import { render } from '@testing-library/react';
import { ctx, canvas } from 'react'
import Canvas from './canvas'
function DrawCanvas() {
    console.log("DrawCanvas() loaded")
    let canvas = document.querySelector('root');
    let ctx = canvas.getContext('2d');
    return {ctx, canvas};
    
}
export {DrawCanvas, ctx, canvas};
