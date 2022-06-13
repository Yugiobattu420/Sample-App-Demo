const initState = {
    employee: [],
    account: [
        { user: 'admin', pass: '123' },
        { user: 'duy', pass: '6969' }
    ],
    recentAccount: ''
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'SET_RECENT_ACCOUNT':
            let recentAccount = action.payload
            return {
                ...state, recentAccount
            }
            break;
        case 'LOG_OUT':
            state.recentAccount = ''
            return state
            break;
        case 'ADD_EMPLOYEE':
            let employees = action.payload
            return {
                ...state, employee: [...state.employee, employees]
            }
            break;
        case 'DELETE_EMPLOYEE':
            let employee = state.employee
            employee = employee.filter(item => item.id !== action.payload.id)
            return {
                ...state, employee
            }
            // console.log('>>> check before delete: ', state.employee)
            // state.employee = state.employee.filter(item => item.key !== action.payload.key)
            // console.log('>>> check after delete: ', state.employee)
            // console.log('>>> check payload from redux: ', action.payload)
            // return state
            break;
        default:
            return state;
    }
}

export default rootReducer;