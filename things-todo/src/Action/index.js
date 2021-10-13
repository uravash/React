export const addthingtodo = (data) => {

    return {
        type: "added",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const removethingtodo = () => {

    return {
        type: "removed",

    }
}