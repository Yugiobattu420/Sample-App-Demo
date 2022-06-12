import React from 'react';
import './Inform.css'

class InForm extends React.Component {
    state = {
        id: '',
        name: '',
        age: '',
        sex: '',
    }

    handleOnChangeID = (event) => {
        this.setState({
            id: event.target.value
        })
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

    handleOnClickAdd = (userName) => {
        if (!this.state.id || !this.state.name || !this.state.age || !this.state.sex) {
            alert('Valid input')
            return;
        }

        this.props.AddEmployee({
            owner: userName,
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            sex: this.state.sex
        })

        this.setState({
            id: '',
            name: '',
            age: '',
            sex: ''
        })
    }

    handleOnClickLogout = () => {
        this.props.Logout()
    }

    render() {
        //console.log(this.props.UserName)
        let userName = this.props.UserName
        return (
            <>
                <div className='Form'>
                    <div className='ID'>Enter ID of employee</div>
                    <input type="text" value={this.state.id} onChange={(event) => this.handleOnChangeID(event)} />
                    <div className='Name'>Enter name of employee</div>
                    <input type="text" value={this.state.name} onChange={(event) => this.handleOnChangeName(event)} />
                    <div className='Age'>Enter age of employee</div>
                    <input type="text" value={this.state.age} onChange={(event) => this.handleOnChangeAge(event)} />
                    <div className='Sex'>Enter sex of employee</div>
                    <input type="text" value={this.state.sex} onChange={(event) => this.handleOnChangeSex(event)} /> <br />
                    <button onClick={() => this.handleOnClickAdd(userName)}>Add</button>
                    <button onClick={() => this.handleOnClickLogout()}>Logout</button>
                </div>
            </>
        )
    }
}

export default InForm;