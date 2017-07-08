import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Button, Card, Input} from 'antd'

const SearchBar = inject("store")(observer (class SearchBar extends Component {
    constructor() {
        super()
        this.handleSearch = this.handleSearch.bind(this)
    }
    componentDidMount() {
        this.textInput.focus()
    }
    handleSearch(e) {
        if(e.key === 'Enter') {
            this.props.store.fetch()
        }
    }
    render(){
        const store = this.props.store
        const CardStyle = {
            display: 'table',
            minWidth: '200px',
            width: '50%',
            margin: '0 auto'
        }
        return (
            <div className="card-div">
                {store.drugNotFound ? 
                    <h4 style={{color: 'red'}}>*Cannot locate medication</h4>
                : null}

                <Card style={CardStyle}>
                    <Button
                        type="primary"
                        icon="search"
                        style={{float: 'right'}}
                        onClick={() => store.fetch()}
                        disabled={store.input.length === 0}
                    >Search</Button>
                    <div className="input-wrapper">
                        <Input
                            ref={input => this.textInput = input}
                            value={store.input}
                            onChange={e => store.handleInput(e.target.value)}
                            onKeyPress={this.handleSearch}
                            placeholder="enter medication name..."/>
                    </div>
                </Card>
            </div>
        )
    }
}))

export default SearchBar