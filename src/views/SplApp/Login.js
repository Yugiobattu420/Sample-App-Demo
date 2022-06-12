import React from 'react'
import './Login.css'
import { withRouter } from "react-router";
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
        if (!this.state.user || !this.state.pass) {
            alert('Enter your user and pass')
            return;
        }
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
        else {
            this.setState({
                user: '',
                pass: ''
            })

            this.props.setRecentAccount(this.state.user)

            this.props.history.push(`/${this.state.user}`)
        }

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

const mapDispatchToProps = (dispatch) => {
    return {
        setRecentAccount: (recentAccount) => dispatch({ type: 'SET_RECENT_ACCOUNT', payload: recentAccount })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));