import React from 'react'
import './InforEmployee.css'

class InforEmployee extends React.Component {

    state = {
        editEmployee: {}
    }

    handleOnClickDelete = (item) => {
        this.props.DeleteEmployee(item)
    }

    handleOnClickEdit = (item) => {
        this.setState({
            editEmployee: item
        })

        let isEmptyEdit = Object.keys(this.state.editEmployee).length === 0
        if (isEmptyEdit) {
            this.props.EditEmployee(item)
        }
        else {
            this.props.EditEmployee(this.state.editEmployee)
        }

    }

    handleOnChangeID = (event) => {
        let editEmployeeCopy = { ...this.state.editEmployee }
        editEmployeeCopy.id = event.target.value
        this.setState({
            editEmployee: editEmployeeCopy
        })
    }

    handleOnChangeName = (event) => {
        let editEmployeeCopy = { ...this.state.editEmployee }
        editEmployeeCopy.name = event.target.value
        this.setState({
            editEmployee: editEmployeeCopy
        })
    }

    handleOnChangeAge = (event) => {
        let editEmployeeCopy = { ...this.state.editEmployee }
        editEmployeeCopy.age = event.target.value
        this.setState({
            editEmployee: editEmployeeCopy
        })
    }

    handleOnChangeSex = (event) => {
        let editEmployeeCopy = { ...this.state.editEmployee }
        editEmployeeCopy.sex = event.target.value
        this.setState({
            editEmployee: editEmployeeCopy
        })
    }

    render() {
        let { Employee, Edit } = this.props
        // console.log('>>> Check editEmployee: ', this.state.editEmployee)
        // console.log('>>> check edit from form: ', Edit)
        let isEmpty = Object.keys(Employee).length === 0
        let isEmptyEdit = Object.keys(Edit).length === 0
        return (
            <>
                <div className='Infor'>
                    <div className='Infor__title'>Information of Employee</div>
                    <div className='Infor_content'>
                        {Employee && Employee.length > 0 && Employee.map((item, index) => {
                            return (
                                <>
                                    <div className='Content' key={item.key}>
                                        {!isEmptyEdit && item.key === Edit.key ?
                                            <span>{index + 1} -
                                                ID: <input value={this.state.editEmployee.id} onChange={(event) => this.handleOnChangeID(event)} />
                                                Name: <input value={this.state.editEmployee.name} onChange={(event) => this.handleOnChangeName(event)} />
                                                Age: <input value={this.state.editEmployee.age} onChange={(event) => this.handleOnChangeAge(event)} />
                                                Sex: <input value={this.state.editEmployee.sex} onChange={(event) => this.handleOnChangeSex(event)} />
                                            </span>
                                            :
                                            <span>{index + 1} - ID: {item.id} - Name: {item.name} - Age: {item.age} - Sex: {item.sex}</span>
                                        }

                                        <button className='edit' onClick={() => this.handleOnClickEdit(item)}>
                                            {!isEmptyEdit && item.key === Edit.key ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className='delete' onClick={() => this.handleOnClickDelete(item)}>Delete</button>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default InforEmployee;