import React from 'react'
import SearchBar from './SearchBar'
import ResultDisplay from './ResultDisplay'
import {Row, Col} from 'antd'


const MainContent = () => {
    const SearchBarRow = {
        padding: '20px',
        border: '1px solid #fbe9e7',
        boxShadow: '5px 5px 5px #888888'
    }
    const ResDisplayRow = {
        border: '1px solid #fbe9e7',
        boxShadow: '5px 5px 5px #888888',
        padding: '10px',
        marginTop: '20px',
        minHeight: '500px'
    }
    return (
        <div className="main-content-style">
            <Row
                style={SearchBarRow}>
                <Col span={24}>
                    <SearchBar/>
                </Col>
            </Row>
                <Row style={ResDisplayRow}>
                <Col span={24}>
                    <ResultDisplay/>
                </Col>
            </Row>
        </div>
    )
}

export default MainContent