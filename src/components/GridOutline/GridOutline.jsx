import React from 'react';
import styles from './GridOutline.module.css';
import cn from 'classnames';
const GridOutline = ({ topic, isY=false }) => {
  
  return (

    <div className={cn(
      { [styles.gridOutlineY]: isY },
      { [styles.gridOutlineX]: !isY }      
    )}>
        {topic}

    </div>

      );
};

export default GridOutline;
