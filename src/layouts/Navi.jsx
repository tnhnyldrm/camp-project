import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import {useNavigate } from "react-router-dom";

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const navigate = useNavigate()


    function handleSignedOut() {
        setIsAuthenticated(false)
        navigate('/')
    }

    function handleSignedIn() {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item name='home' />
                    <Menu.Item name='messages' />

                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthenticated?<SignedIn signOut={handleSignedOut} bisey="1"/>:<SignedOut signIn={handleSignedIn}/>}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
