import Store from '../AppState/store'
import { XMLHttpRequest } from 'xmlhttprequest';
global.XMLHttpRequest = XMLHttpRequest;

const state = new Store()

it('handleChange should change input from empty string to alavert', () => {
    state.handleInput('alavert')
    expect(state.input).toEqual('alavert') 
})

it('fetch should search for alavert and populate results with three medications', () => {
    state.fetch()
    if(!state.isLoading) expect(state.getResults.length).toEqual(3) 
})

it('should fetch a medication that does not exist', () => {
    state.handleInput('foo')
    state.fetch()
    if(!state.isLoading) expect(state.drugNotFound).toEqual(true)
})
