const initState = {
    employee: [],
    account: [
        { user: 'admin', pass: '123' },
        { user: 'duy', pass: '6969' }
    ],
    recentAccount: '',
    edit: {}
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
        case 'EDIT_EMPLOYEE':
            let edit = action.payload
            return {
                ...state, edit
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