const initState = {
    employee: [],
    account: [
        { user: 'admin', pass: '123' },
        { user: 'duy', pass: '6969' }
    ],
    recentAccount: '',
    edit: {},
    auth: true
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'SET_RECENT_ACCOUNT':
            let recentAccount = action.payload
            let auth = true
            return {
                ...state, recentAccount, auth
            }
            break;
        case 'LOG_OUT':
            state.recentAccount = '';
            state.auth = false;
            if (state.edit)
                state.edit = {}
            return state
            break;
        case 'ADD_EMPLOYEE':
            let employees = action.payload
            return {
                ...state, employee: [...state.employee, employees]
            }
            break;
        case 'EDIT_EMPLOYEE':
            let edit = action.payload
            console.log('>>> check edit from redux: ', edit)
            let isEmptyEdit = Object.keys(state.edit).length === 0;
            if (!isEmptyEdit && state.edit.key === edit.key) {
                let employeeCopy = [...state.employee]
                let objIndex = employeeCopy.findIndex((item => item.key === edit.key))

                employeeCopy[objIndex].id = edit.id
                employeeCopy[objIndex].name = edit.name
                employeeCopy[objIndex].age = edit.age
                employeeCopy[objIndex].sex = edit.sex

                // employee[objIndex] = edit

                state.employee = employeeCopy
                edit = {}

                return {
                    ...state, edit
                }

            }
            else {
                return {
                    ...state, edit
                }
            }

            break;
        case 'DELETE_EMPLOYEE':
            let employee = state.employee
            employee = employee.filter(item => item.key !== action.payload.key)
            return {
                ...state, employee
            }
            break;
        default:
            return state;
    }
}

export default rootReducer;