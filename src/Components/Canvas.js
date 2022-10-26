import React from 'react';
import PropTypes from 'prop-types';
import App from '../App';


const Canvas = ({draw, height, width}) => {
    console.log("Canvas loaded")
  const canvas = React.useRef();
  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    draw(context);
  }, []);
return (
    <canvas id="Canvas" ref={canvas} height={height} width={width} />
  );
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export {Canvas};