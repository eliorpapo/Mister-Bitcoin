import React from 'react'
import { Sparklines,SparklinesLine } from 'react-sparklines';

export  function Chart({bitcoinData}) {
    return (
        <div>
            <h1>Chart</h1>
            <Sparklines data={bitcoinData} limit={bitcoinData.length} width={200} height={20} margin={5}>
                <SparklinesLine color="blue" />
            </Sparklines>
        </div>
    )
}
