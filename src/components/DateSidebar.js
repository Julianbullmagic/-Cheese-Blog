import React from 'react'

import { useGlobalContext } from '../context'

const DateSidebar= () => {


  var splitDates=[]
  const {cheeses} = useGlobalContext()
  console.log("cheeses")
  console.log(cheeses)
  const dates=cheeses.map((item) => {
      var itemToSplit=item['date']
  return itemToSplit
  })
  console.log(dates)
var dateSet=new Set(dates)
console.log(dateSet)
var cheese=Array.from(dateSet)

const dateMap=cheese.map((item) => {
return <h5>{item}</h5>
})

    return (
      <aside className='sidebar show-sidebar'>
        <div className='sidebar-header'>
        <ul className='links'>
        {dateMap}
        </ul>
        </div>
        </aside>


    );
  };

  export default DateSidebar;
