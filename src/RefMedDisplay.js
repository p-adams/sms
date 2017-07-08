import React from 'react'
import {inject, observer} from 'mobx-react'
import BadgeComponent from './BadgeComponent'
import {Button, Collapse} from 'antd'
const Panel = Collapse.Panel

const RefMedDisplay = inject("store")(observer (({store}) => {
    const Text = {
        body: 'Reference(s) found'
    }
    const PanelStyle = {
        background: '#f7f7f7',
        borderRadius: 4,
        marginBottom: 24,
        border: 0,
    }
    const InfoStyle = {
        color: '#424242',
        fontWeight: 'bold'
    }
    const renderResults = store.getResults.map((med, index) => {
        return (
            <Panel
                key={index}
                header={med.name}
                style={PanelStyle}
            >
            <p>#{index+1}</p>
            <p><span style={InfoStyle}>rxcui:</span> {med.rxcui}</p>
            <p><span style={InfoStyle}>name:</span> {med.name}</p>
            <p><span style={InfoStyle}>synonym:</span> {med.synonym}</p>
            <p><span style={InfoStyle}>language:</span> {med.language}</p><br/>
            <Button
                type="primary"
                onClick={() => store.handleViewAlternatives(med.rxcui)}
                >view alternatives</Button>
            </Panel>
        )
    })
    return (
        <div>
            <div style={{margin: '5px'}}>
                {store.hasResults ?
                    <BadgeComponent
                        props={store.results.length}
                        text={Text}
                    />
                    : <h4>No medications to display</h4>
                }
            </div>
            <Collapse bordered={false}>
                {renderResults}
            </Collapse>
        </div>
    )
}))

export default RefMedDisplay