import React from 'react'
import './Login.css'
import { connect } from 'react-redux';

class Login extends React.Component {
    state = {
        user: '',
        pass: ''
    }

    handleChangeUser = (event) => {
        this.setState({
            user: event.target.value
        })
    }

    handleChangePass = (event) => {
        this.setState({
            pass: event.target.value
        })
    }

    handleClickLogin = (account) => {
        let check = true
        account && account.length > 0 && account.map((item, index) => {
            if (item.user === this.state.user && item.pass === this.state.pass) {
                alert('Login success')
                return;
            }
        })
        if (check === false) {
            alert("Login fail")
        }

        this.setState({
            user: '',
            pass: ''
        })
    }

    render() {

        // console.log('check props: ', this.props.userData)
        let account = this.props.userData

        return (
            <>
                <div>Login the website</div>
                <div>User name</div>
                <input value={this.state.user} onChange={(event) => this.handleChangeUser(event)} />
                <div>Password</div>
                <input value={this.state.pass} onChange={(event) => this.handleChangePass(event)} />
                <button onClick={() => this.handleClickLogin(account)}>Login</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.account
    }
}

export default connect(mapStateToProps)(Login);