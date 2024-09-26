import React from 'react'

class AddComponent extends React.Component {

    state = {
        name: '',
        room: ''
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    handleChangeRoom = (event) => {
        this.setState({
            room: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.name || !this.state.room) {
            alert('Mrp')
            return;
        }
        console.log('>>> check data input: ', this.state);
        this.props.addNewClass({
            id: Math.floor(Math.random() * 100),
            name: this.state.name,
            room: this.state.room
        })
        this.setState({
            room: '',
            name: ''
        })
    };

    render() {
        return (
            <form>
                <label htmlFor="name">Name class:</label><br />
                <input type="text" value={this.state.name}
                    onChange={this.handleChangeName} /><br />
                <label htmlFor="room">Room class:</label><br />
                <input type="text" value={this.state.room}
                    onChange={this.handleChangeRoom} />
                <br /><br />
                <input type="submit"
                    onClick={this.handleSubmit} />
            </form>
        )
    }
}

export default AddComponent;