import React from 'react'
import './Login.css'
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged } from "firebase/auth";
import GoogleButton from 'react-google-button';
import { authentication } from '../auth/FirebaseConfig';

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
        let check = false
        account && account.length > 0 && account.map((item, index) => {
            if (item.user === this.state.user && item.pass === this.state.pass) {
                check = true
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

    SignInGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then(res => {
                this.props.setRecentAccount(res.user.displayName)
                this.props.history.push(`/${res.user.displayName}`)
            })
    }

    componentDidMount = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.props.history.push(`/${user.displayName}`)
            }
        })
    }

    render() {

        // console.log('>>> Check props: ', this.props)
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
                <div><GoogleButton className='gg_button' type="dark" onClick={() => this.SignInGoogle()} /></div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.account
        //userName: state.recentAccount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRecentAccount: (recentAccount) => dispatch({ type: 'SET_RECENT_ACCOUNT', payload: recentAccount })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));