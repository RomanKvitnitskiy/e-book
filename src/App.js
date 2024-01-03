import React from 'react'
import Container from '@mui/material/Container'

import { Layout } from './components/Layout.jsx'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { AddBookPage } from './components/AddBookPage/index.jsx'
import { EditBookPage } from './components/EditBookPage/index.jsx'

function App() {
    return (
        <Layout>
            <Container maxWidth="lg" sx={{ marginTop: '120px' }}>
                <Routes>
                    <Route path='/'  element={<MainPage />}></Route>
                    <Route path='/addBook' element={<AddBookPage />}></Route>
                    <Route path='/editBook/:bookId' element={<EditBookPage />}></Route>
                </Routes>
            </Container>
        </Layout>
    )
}

export default App
