import React from 'react'

class AddFishForm extends React.Component{
    createFish(e){
        e.preventDefault();
        const fish = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            img: this.img.value
        }
        this.props.addFish(fish);
        this.fishForm.reset();
    }
    render(){
        return(
            <div>
                <form ref={(input) => { this.fishForm = input }} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
                    <input ref={(input) => { this.name = input }} type="text" placeholder="Fish Name" />
                    <input ref={(input) => { this.price = input }} type="text" placeholder="Fish Price" />
                    <select ref={(input) => { this.status = input }}>
                        <option value="available">Fresh!</option>
                        <option value="unavailable">Sold Out</option>
                    </select>
                    <textarea ref={(input) => { this.desc = input }} type="text" placeholder="Fish Desc"></textarea>
                    <input ref={(input) => { this.img = input }} type="text" placeholder="Fish Image" />
                    <button type="submit">Add Item</button>
                </form>
            </div>
        )
    }
}

AddFishForm.propTypes ={
    addFish: React.PropTypes.func.isRequired
}

export default AddFishForm