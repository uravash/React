const initialData = {
    li: []
}

const thingstodoReducer = (state = initialData, action) => {
    switch (action.type) {
        case "added":
            const { id, data } = action.payload;
            return {
                ...state,
                li: [
                    ...state.li,
                    {
                        id: id,
                        data: data,
                        createdAt: new Date()
                    }]
            }

        case "removed":

            return {
                ...state,
                li: []
            }
        default:
            return state;
    }

}
export default thingstodoReducer;