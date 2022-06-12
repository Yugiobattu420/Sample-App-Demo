import React from 'react'
import './InforEmployee.css'

class InforEmployee extends React.Component {
    render() {
        let { Employee } = this.props
        let isEmpty = Object.keys(Employee).length === 0
        return (
            <>
                <div className='Infor'>
                    <div className='Infor__title'>Information of Employee</div>
                    <div className='Infor_content'>
                        {Employee && Employee.length > 0 && Employee.map((item, index) => {
                            return (
                                <>
                                    <div>
                                        ID: {item.id} - Name: {item.name} - Age: {item.age} - Sex: {item.sex}
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