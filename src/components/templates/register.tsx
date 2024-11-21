import { Label } from '@radix-ui/react-label'
import { PenBox, User, Mail, Eye, EyeClosed, LockIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardContent } from '../ui/card'
import { Input } from '../ui/input'
import { useAuthForm } from '@/hooks/useAuthForm'
import type { AuthInterFace } from "@/types/authTypes"

export const RegisterComponent = ({ isRegister }: AuthInterFace) => {

    const {
        visible,
        handleVisibilityPassword,
        formRegister,
        formRegister: { formState: { errors } },
        handleSubmitFormRegister
    } = useAuthForm()

    return (
        <Card>
            <CardHeader className='text-center'>
                <div className='flex items-center m-auto gap-2'>
                    <h3>Register</h3> <PenBox size={16} />
                </div>
            </CardHeader>
            <form onSubmit={formRegister.handleSubmit(handleSubmitFormRegister)}>
                <CardContent className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <Label className="text-sm flex items-center gap-2">
                            <User size={14} className="text-blue-400" /> Username
                        </Label>
                        <Input placeholder="Your username" {...formRegister.register("username")} />
                        {errors.username && (
                            <p className="text-red-500 text-xs">{errors.username.message as string}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className="text-sm flex items-center gap-2">
                            <Mail size={14} className="text-blue-400" /> E-mail
                        </Label>
                        <Input placeholder="example@email.com" {...formRegister.register("email")} />
                        {errors.email && (
                            <p className="text-red-500 text-xs">{errors.email.message as string}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className="text-sm flex items-center gap-2">
                            <LockIcon size={14} className="text-blue-400" /> Password
                        </Label>
                        <div className="relative flex items-center">
                            <Input
                                type={visible ? "text" : "password"}
                                maxLength={32}
                                className="px-2"
                                {...formRegister.register("password")}
                            />
                            <button
                                type="button"
                                className="cursor-pointer bg-background h-[100%] w-5 absolute right-[0%] border-y rounded-md mr-[5px]"
                                onClick={handleVisibilityPassword}
                            >
                                {visible ? <Eye size={16} /> : <EyeClosed size={16} />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs">{errors.password.message as string}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className="text-sm flex items-center gap-2">
                            <LockIcon size={14} className="text-blue-400" /> Confirm Password
                        </Label>
                        <Input
                            type="password"
                            maxLength={32}
                            className="px-2"
                            {...formRegister.register("confirmPass")}
                        />
                        {errors.confirmPass && (
                            <p className="text-red-500 text-xs">{errors.confirmPass.message as string}</p>
                        )}
                    </div>
                    <p className='text-xs text-gray-400 select-none text-end'>
                        Already have an account?{' '}
                        <button
                            type='button'
                            className='underline hover:decoration-wavy hover:decoration-[0.5px] ease-in-out duration-500 cursor-pointer text-blue-400'
                            onClick={isRegister}
                        >
                            Login
                        </button>
                    </p>
                    <Button type="submit" className="select-none">
                        Register
                    </Button>
                </CardContent>
            </form>


        </Card>
    )
}

