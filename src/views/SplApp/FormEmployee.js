import React from "react";
import InForm from "./InForm";
import InforEmployee from "./InforEmployee";
import { withRouter } from "react-router";
import { connect } from 'react-redux';

class FormEmployee extends React.Component {
    state = {
        Employee: []
    }

    AddEmployee = (item) => {

        this.setState({
            Employee: [...this.state.Employee, item]
        })
    }

    Logout = () => {
        this.props.logOut()
        this.props.history.push('/')
    }

    handleOnClickReturnLogin = () => {
        this.props.history.push('/')
    }

    render() {
        //console.log('>>> Check props: ', this.props.match.params.name)
        let userName = this.props.userName
        return (
            <>
                {userName && this.props.match.params.name === userName ?
                    <>
                        <div>Hello {userName}</div>
                        <InForm AddEmployee={this.AddEmployee} Logout={this.Logout} />
                        <InforEmployee Employee={this.state.Employee} />


                    </>
                    :
                    <>
                        <div>You have to Login first</div>
                        <button onClick={() => this.handleOnClickReturnLogin()}>Login</button>
                    </>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.recentAccount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch({ type: 'LOG_OUT' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FormEmployee));