import React from 'react'

const TableDataCounter = ({
  id,
  count,
  handleCounter
}) => (
  <td className="nowrap">
    <button className="btn mr-2" onClick={e => handleCounter(id, 'decrement')}>-</button>
    {count}
    <button className="btn ml-2" onClick={e => handleCounter(id, 'increment')}>+</button>
  </td>
)

export default TableDataCounter