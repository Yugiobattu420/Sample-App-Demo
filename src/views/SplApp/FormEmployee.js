import React from "react";
import InForm from "./InForm";
import InforEmployee from "./InforEmployee";

class FormEmployee extends React.Component {
    state = {
        Employee: []
    }

    AddEmployee = (item) => {

        this.setState({
            Employee: [...this.state.Employee, item]
        })
    }

    render() {
        return (
            <>
                <InForm AddEmployee={this.AddEmployee} />
                <InforEmployee Employee={this.state.Employee} />
            </>
        )
    }
}

export default FormEmployee;