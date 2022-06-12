import React from 'react';
import './Inform.css'

class InForm extends React.Component {
    state = {
        name: '',
        age: '',
        sex: '',
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnChangeSex = (event) => {
        this.setState({
            sex: event.target.value
        })
    }

    handleOnClickAdd = () => {
        if (!this.state.name || !this.state.age || !this.state.sex) {
            alert('Valid input')
            return;
        }

        this.props.AddEmployee({
            name: this.state.name,
            age: this.state.age,
            sex: this.state.sex
        })

        this.setState({
            name: '',
            age: '',
            sex: ''
        })
    }

    render() {
        return (
            <>
                <div className='Form'>
                    <div className='Name'>Enter name of employee</div>
                    <input type="text" value={this.state.name} onChange={(event) => this.handleOnChangeName(event)} />
                    <div className='Age'>Enter age of employee</div>
                    <input type="text" value={this.state.age} onChange={(event) => this.handleOnChangeAge(event)} />
                    <div className='Sex'>Enter sex of employee</div>
                    <input type="text" value={this.state.sex} onChange={(event) => this.handleOnChangeSex(event)} /> <br />
                    <button onClick={() => this.handleOnClickAdd()}>Add</button>
                </div>
            </>
        )
    }
}

export default InForm;