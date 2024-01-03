import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBook } from '../../redux/slices/bookSlice'

import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const AddBookPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [formData, setFormData] = useState({
        title: '',
        author: '',
        year: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addBook(formData))
        navigate('/')
    }

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '450px', margin: 'auto' }}>
            <h2>Add Book</h2>
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
                    Add Book
                </Button>
            </form>
        </Paper>
    )
};
