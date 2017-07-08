import React from 'react';
import MainContent from './MainContent'
import {Layout} from 'antd'
import './App.css';
const {Header, Footer, Content} = Layout


const App = () => {
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <div className="title">
              <h3>
                <a 
                  href="https://p-adams.github.io/sms"
                  style={{textDecoration: 'none', color: '#424242'}}
                >SMS
                </a>
              </h3>
              <h4 style={{color: '#ff7043'}}>similar medication search</h4>
            </div>
          </Header>
          <Content style={{padding: '0 70px'}}>
            <div className="content-style">
              <MainContent/>
            </div>
          </Content>
          <Footer/>
        </Layout>
      </div>
    );
}
export default App;
