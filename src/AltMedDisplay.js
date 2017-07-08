import React from 'react'
import {inject, observer} from 'mobx-react'
import BadgeComponent from './BadgeComponent'
import {Button, Card} from 'antd'

const AltMedDisplay = inject("store")(observer (({store}) => {
    const Text = {
        body: 'Alternative(s) found'
    }
    const InfoStyle = {
        color: '#424242',
        fontWeight: 'bold'
    }
    const renderAlternatives = store.getAlternatives.map((med, index) => {
        return (
            <Card style={{margin: 5}} key={index}>
                <p>#{index+1}</p>
                <p><span style={InfoStyle}>rxcui:</span> {med.rxcui}</p>
                <p><span style={InfoStyle}>name:</span> {med.name}</p>
                <p><span style={InfoStyle}>synonym:</span> {med.synonym}</p>
            </Card>
            )
    })
    return (
        <div>
            <div className="alt-dashboard">
                <BadgeComponent
                    props={store.alternatives.length}
                    text={Text}
                />
                <Button
                    style={{float: 'right'}}
                    onClick={() => store.handleReturnToRef()}
                >return
                </Button>
            </div><br/><hr/>
            <div>
                {renderAlternatives}
            </div>
        </div>
    )
}))

export default AltMedDisplay