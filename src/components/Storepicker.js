import React from 'react'
import { getFunName } from '../helpers'

class Storepicker extends React.Component{   
    goToStore(e){
        e.preventDefault();
        const storeId = this.storeInput.value
        this.context.router.transitionTo(`/store/${storeId}`)
    } 
    render(){
        return(
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                <h2>Please find a store</h2>
                <input type="text" required placeholder="Store name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }}/>
                <button type="submit">Vist Store</button>
            </form>
        )
    }
}

Storepicker.contextTypes = {
    router: React.PropTypes.object 
}

export default Storepicker