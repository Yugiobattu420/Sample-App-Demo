import React from 'react'
import './InforEmployee.css'

class InforEmployee extends React.Component {

    handleOnClickDelete = (item) => {
        this.props.DeleteEmployee(item)
    }

    handleOnClickEdit = (item) => {
        this.props.EditEmployee(item)
    }

    render() {
        let { Employee, Edit } = this.props
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
                                        ID: {item.id} - Name: {item.name} - Age: {item.age} - Sex: {item.sex}
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