const increment = () => {
    return {
        type: 'INCREMENT',
        payload: 1
    }
    }

const decrement = () => {
    return {
        type: 'DECREMENT',
        payload: 1
    }
}

const reset = () => {
    return {
        type: 'RESET',
        payload: 0
    }
}

export { increment, decrement, reset }