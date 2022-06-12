const initState = {
    employee: [],
    account: [
        { user: 'admin', pass: '123' },
        { user: 'duy', pass: '6969' }
    ],
    recentAccount: ''
}

const rootReducer = (state = initState, action) => {

    return state
}

export default rootReducer;