import React from 'react'
import TypeIcon from './TypeIcon';

const OverviewItem = ({type, accounType, count, percentage, increasement}) => {
  if(count > 2000){
    count = count.toString().replace('000', 'k')
  }
  
  return (
    <div className="OverviewItem">
      <div className="OverviewItem__title">
        <h6 className="OverviewItem__title--type">{type}</h6>
        <TypeIcon className="OverviewItem__title--image-type" accountType={accounType}/>
      </div>
      <div className="OverviewItem__statadistics">
        <span className="OverviewItem__statadistics--count">{count}</span>
        <span className={`OverviewItem__statadistics--rage ${increasement? 'success' : 'danger'}`}>
          <img className="rageIcon" src={`../assets/images/icon-${increasement? 'up' : 'down'}.svg`} alt=""/>
          <span className="percentage">{percentage}</span>
        </span>
      </div>
    </div>
  )
}

export default OverviewItem;
