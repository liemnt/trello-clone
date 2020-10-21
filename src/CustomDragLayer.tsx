import { useDragLayer, XYCoord } from "react-dnd";
import { CustomDragLayerContainer } from "./styles";
import React from "react";
import { Column } from "./Column";

function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: "none"
    };
  }
  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform
  };
}

const CustomDragLayer = () => {
  const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }));
  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        <Column
          isPreview={isDragging}
          id={item.id}
          text={item.text}
          index={item.index}
        />
      </div>
    </CustomDragLayerContainer>
  ) : null;
};

export default CustomDragLayer;
