import React from 'react'
import {inject, observer} from 'mobx-react'
import RefMedDisplay from './RefMedDisplay'
import AltMedDisplay from './AltMedDisplay'

const ResultDisplay = inject("store")(observer(({store}) => {
    return (
        <div className="result-display">
             <div className="results">
                {store.showLoading ? <h5>Loading...</h5> :
                !store.viewAlternatives ?
                  <RefMedDisplay/>
                : <AltMedDisplay/>
                }
             </div>
        </div>
    )
}))

export default ResultDisplay