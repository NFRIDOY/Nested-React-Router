import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function SignUpIn() {
    return (
        <div>
            SignUpIn
            <Outlet></Outlet>
            <NavLink
                to="/signupin/Signup"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Sign Up
            </NavLink>
        </div>
    )
}
