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
            let employee = action.payload
            return {
                ...state, employee: [...state.employee, employee]
            }
            break;
        default:
            return state;
    }


}

export default rootReducer;