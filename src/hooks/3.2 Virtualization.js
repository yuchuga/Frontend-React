import React, { useCallback } from "react"
import { FixedSizeList } from "react-window"

const Row = React.memo(({ index, style }) => {
  return (
    <div style={style}>
      Row {index}
    </div>
  )
});

const VirtualizationList = () => {

  const renderRow = useCallback(({ index, style }) => {
    return <Row index={index} style={style} />
  }, []);

  return (
    <FixedSizeList
      height={1500}
      itemCount={10000}
      itemSize={35}
      width={500}
    >
      {renderRow}
    </FixedSizeList>
  )
};

export default VirtualizationList