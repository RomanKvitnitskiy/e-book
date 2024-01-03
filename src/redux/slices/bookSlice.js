import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

const initialState = {
    books: [],
    loading: false,
    selectedBook: null,
}

export const getAllBooks = createAsyncThunk('book/getAllBooks', async () => {
    try {
        const { data } = await axios.get('/book')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const getBookById = createAsyncThunk('book/getBookById', async (id) => {
    try {
        const { data } = await axios.get(`/book/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const addBook = createAsyncThunk('book/addBook', async (params) => {
    try {
        const { data } = await axios.post('/book', params)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const deleteBook = createAsyncThunk('book/deleteBook', async (id) => {
    try {
        const { data } = await axios.delete(`/book/${id}`, id)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const updateBook = createAsyncThunk('book/updateBook', async (updatedBook) => {
    try {
        const { data } = await axios.patch(`/book/${updatedBook._id}`, updatedBook)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBooks.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllBooks.fulfilled, (state, action) => {
                state.loading = false
                state.books = action.payload
            })
            .addCase(getAllBooks.rejected, (state) => {
                state.loading = false
            })

            .addCase(getBookById.pending, (state) => {
                state.loading = true
            })
            .addCase(getBookById.fulfilled, (state, action) => {
                state.loading = false
                state.selectedBook = action.payload
            })
            .addCase(getBookById.rejected, (state) => {
                state.loading = false
            })

            .addCase(addBook.pending, (state) => {
                state.loading = true
            })
            .addCase(addBook.fulfilled, (state, action) => {
                state.loading = false
                state.books.push(action.payload)
            })
            .addCase(addBook.rejected, (state) => {
                state.loading = false
            })

            .addCase(deleteBook.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteBook.fulfilled, (state, action) => {
                state.loading = false
                state.books = state.books.filter(
                    (book) => book._id !== action.payload._id,
                )            
            })
            .addCase(deleteBook.rejected, (state) => {
                state.loading = false
            })

            .addCase(updateBook.pending, (state) => {
                state.loading = true
            })
            .addCase(updateBook.fulfilled, (state, action) => {
                state.loading = false
                const index = state.books.findIndex(
                    (book) => book._id === action.payload._id,
                )
                state.books[index] = action.payload         
            })
            .addCase(updateBook.rejected, (state) => {
                state.loading = false
            })
    }
})

export default bookSlice.reducer