"use client"
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { LoginComponent } from '../templates/login'
import { RegisterComponent } from '../templates/register'

export const AuthComponent = () => {
    const [register, setRegister] = useState(false)
    const handleRegisterForm = () => setRegister((prev) => !(prev));

    return (
        <div className='grid grid-cols-2 justify-items-center min-h-screen w-full items-center '>
            <section className='w-96 h-64'>
                <h1 className="text-8xl bg-clip-text bg-gradient-to-br from-blue-500 via-blue-300 to-blue-600 text-transparent">
                    Sone
                </h1>
                <span className='text-xs flex-wrap text-neutral-400'>
                    Welcome to SONE, we're here for your improve Lorem ipsum dolor, sitasperiores perspiciatis, giat? Ipsum tenetur fugit repellat nobis, aliquid voluptas quo?
                </span>
            </section>
            <Card className='max-w-96 w-96'>
                {register ? (
                    <RegisterComponent isRegister={handleRegisterForm} />
                ) : (
                    <LoginComponent isRegister={handleRegisterForm} />
                )}
            </Card>
        </div>
    )
}

