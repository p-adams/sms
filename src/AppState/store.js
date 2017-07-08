import {action, computed, extendObservable} from 'mobx'

class Store {
    constructor(){
        extendObservable(this, {
            input: '',
            results: [],
            alternatives: [],
            isLoading: true,
            hasClicked: false,
            drugNotFound: false,
            viewAlternatives: false,
            handleInput: action(value => {
                this.input = value.trim()
                this.drugNotFound = false
                this.hasClicked = false
                this.clearArrays()
            }),
            handleReturnToRef: action(() => {
                this.viewAlternatives = false
            }),
            fetch: action(() => {
                // reset observable array
                this.clearArrays()
                this.viewAlternatives = false
                window.fetch(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${this.input}`)
                .then(res => res.json())
                .then(action(response => {
                    // validate incoming json response
                    if(!this.isInvalidMedication(response)){
                        const concepts = response.drugGroup.conceptGroup
                        concepts.forEach(med => {
                            if(med.tty === 'SBD') {
                                this.results.push(...med.conceptProperties)
                            }
                        })
                        this.isLoading = false
                    } else {
                        this.drugNotFound = true
                    }
                }))
                .catch(err => console.log(err))
                this.hasClicked = true
                this.input = ''
            }),
            handleViewAlternatives: action(alt => {
                this.viewAlternatives = true
                window.fetch(`https://rxnav.nlm.nih.gov/REST/rxcui/${alt}/related.json?tty=IN`)
                .then(res => res.json())
                .then(action(response => {
                    const conceptKey = response.relatedGroup.conceptGroup
                    conceptKey.forEach(key => {
                        //console.log(key.conceptProperties[0].rxcui)
                        const id = key.conceptProperties[0].rxcui
                        this.fetchAlternatives(id)
                    })
                }))
                .catch(err => console.log(err))
            }),
            fetchAlternatives: action(id => {
                 // reset observable array
                this.alternatives.clear()
                window.fetch(`https://rxnav.nlm.nih.gov/REST/rxcui/${id}/related.json?tty=SCD+SBD`)
                .then(res => res.json())
                .then(action(response => {
                    const altConcepts = response.relatedGroup.conceptGroup
                    altConcepts.forEach(med => {
                         this.alternatives.push(...med.conceptProperties)
                    })
                }))
                .catch(err => console.log(err))
            }),
            isInvalidMedication: action(response => {
                return !response.drugGroup.conceptGroup
            }),
            clearArrays: action(() => {
                this.results.clear()
                this.alternatives.clear()
            }),
            getResults: computed(() => {
                return this.results
            }),
            getAlternatives: computed(() => {
                return this.alternatives
            }),
            showLoading: computed(() => {
                return this.isLoading && this.hasClicked  && !this.drugNotFound
            }),
            hasResults: computed(() => {
                return this.isLoading === false && this.hasClicked === true && !this.drugNotFound
            })

        })
    }
}
export default Store