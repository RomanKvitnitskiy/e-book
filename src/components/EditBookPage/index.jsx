import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getBookById, updateBook } from '../../redux/slices/bookSlice'

import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const EditBookPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { bookId } = useParams()

    const { selectedBook } = useSelector(state => state.book)

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        year: '',
    })

    useEffect(() => {
        dispatch(getBookById(bookId))
    }, [dispatch, bookId])

    useEffect(() => {
        if (selectedBook) {
            setFormData({
                title: selectedBook.title || '',
                author: selectedBook.author || '',
                year: selectedBook.year || '',
            })
        }
    }, [selectedBook])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedBook = {
            _id: bookId,
            ...formData,
        }
        dispatch(updateBook(updatedBook))
        navigate('/')
    }

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '450px', margin: 'auto' }}>
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Author"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Year"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="year"
                    type="number"
                    value={formData.year}
                    onChange={handleInputChange}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '10px' }}>
                    Submit
                </Button>
            </form>
        </Paper>
    )
};
