import './SeasonDisplay.css';
import React from 'react';


const SeasonConfig={
    summer:{
        iconName:'sun',
        text:"Lets hit the beach"
    },
    winter:{
        iconName:'snowflake',
        text:"Burr, it is chilly"
    }
}

const getSeason=(lat,month)=>{
if(month>2&& month<9){
    return lat>0 ? 'summer': 'winter';
}
else{
    return lat>0 ? 'summer': 'winter';
}
};
const SeasonDisplay=props=>{
    const season =getSeason(props.latitude,new Date().getMonth());
    const {iconName,text}=SeasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`right-icon massive ${iconName} icon`}/>
            <h1>{text} </h1>
            <i className={`left-icon massive ${iconName} icon`}/>
        </div>
    );
};

export default SeasonDisplay;