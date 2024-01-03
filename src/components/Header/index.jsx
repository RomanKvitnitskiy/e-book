import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <AppBar className={`${styles.root}`}>
            <Container maxWidth="lg" className={`${styles.container}`}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" className={`${styles.logo}`}>
                            E-BOOK
                        </Link>
                    </Typography>
                    <Button color="inherit" variant="outlined" component={Link} to="/addBook">
                        Add Book
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
