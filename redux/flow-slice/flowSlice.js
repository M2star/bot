const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    nodes: []
}

const flowSlice = createSlice({
    name: "flow",
    initialState,
    reducers: {
        setNodes: (state, action) => {
            state.nodes = action.payload
        },
        removeNodes: (state, action) => {
            state.nodes = state.nodes.filter((item) => item.id !== action.payload)
        }
    }
})

export const { setNodes, removeNodes } = flowSlice.actions
export default flowSlice.reducer