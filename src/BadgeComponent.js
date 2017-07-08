import React from 'react'
import {inject, observer} from 'mobx-react'
import {Badge} from 'antd'

const BadgeComponent = inject("store")(observer (({store, props, text})=> {
    return (
        <span>                 
            <Badge
                style={{marginLeft: 20}}
                count={props}
                >
                <h4>{text.body}</h4>
            </Badge>
        </span>
    )
}))

export default BadgeComponent