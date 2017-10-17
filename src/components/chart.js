import React from 'react';
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';
function average(data){
    return _.round(_.sum(data)/data.length);
}
const Chart = ({data,unit})=>{
    return(
        <div>
            <Sparklines data={data} limit={5} width={300} height={200} margin={5}>
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <div>{average(data)}{unit}</div>
        </div>
    );
};

export default Chart;