import React from 'react'

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        borderRadius: "50%",
        background: "white",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        padding: "4px",
      }}
      onClick={onClick}
    />
  );
}

export default PrevArrow
