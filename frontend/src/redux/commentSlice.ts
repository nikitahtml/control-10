import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommentState {
    comments: any[];
}

const initialState: CommentState = {
    comments: [],
};

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setComments(state, action: PayloadAction<any[]>) {
            state.comments = action.payload;
        },
        addComment(state, action: PayloadAction<any>) {
            state.comments.push(action.payload);
        },
    },
});

export const { setComments, addComment } = commentSlice.actions;
export default commentSlice.reducer;
