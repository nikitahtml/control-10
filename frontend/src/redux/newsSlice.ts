import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsItem {
    title: string;
    content: string;
}

interface NewsState {
    news: NewsItem[];
}

const initialState: NewsState = {
    news: [],
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews(state, action: PayloadAction<NewsItem[]>) {
            state.news = action.payload;
        },
    },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
