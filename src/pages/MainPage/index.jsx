import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'

import { getAllBooks, deleteBook } from '../../redux/slices/bookSlice'


export const MainPage = () => {
    const dispatch = useDispatch()
    const { books } = useSelector((state) => state.book)

    useEffect(() => {
        dispatch(getAllBooks())
    }, [dispatch])

    const handleDelete = (bookId) => {
        dispatch(deleteBook(bookId))
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: '10%' }}>#</TableCell>
                        <TableCell sx={{ width: '20%' }}>Title</TableCell>
                        <TableCell sx={{ width: '20%' }}>Author</TableCell>
                        <TableCell sx={{ width: '20%' }}>Year</TableCell>
                        <TableCell sx={{ width: '20%' }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {books.map((book, index) => (
                    <TableRow
                        key={book._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell>{index+1}</TableCell>
                        <TableCell>{book.title}</TableCell>
                        <TableCell>{book.author}</TableCell>
                        <TableCell>{book.year}</TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary" sx={{ marginRight: '15px' }} component={Link} to={`/editBook/${book._id}`}>
                                Edit
                            </Button>
                            <Button variant="contained" color="error" onClick={() => handleDelete(book._id)}>
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )


}