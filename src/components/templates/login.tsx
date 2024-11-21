import { Label } from "@radix-ui/react-label"
import { Mail, Eye, EyeClosed, Lock } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardHeader, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { useAuthForm } from "@/hooks/useAuthForm"
import type { AuthInterFace } from "@/types/authTypes"

export const LoginComponent = ({isRegister}: AuthInterFace) => {

    const { visible, handleVisibilityPassword, formLogin} = useAuthForm()

  return (
    <Card>
    <CardHeader className='text-center'>
        <div className='flex items-center m-auto gap-2'>
            <h3>Login</h3> <Lock size={16} />
        </div>
    </CardHeader>
    <CardContent className='flex flex-col gap-6'>
        <div className='flex flex-col gap-1'>
            <Label className='text-sm flex items-center gap-2 '>
                <Mail size={14} className='text-blue-400' /> E-mail
            </Label>
            <Input placeholder='example@email.com' {...formLogin.register("email")} />
            {formLogin.formState.errors && <span className="text-xs text-red-500">{formLogin.formState.errors.email?.message}</span>}

        </div>
        <div className='flex flex-col gap-1'>
            <Label className='text-sm flex items-center gap-2 '>
                <Lock size={14} className='text-blue-400' /> Password
            </Label>
            <div className='relative flex items-center'>
                <Input type={visible ? 'text' : 'password'} className='px-4' {...formLogin.register("password")} />
                <button type='button' className='cursor-pointer bg-background h-[100%] w-5 absolute right-[0%] border-y rounded-md mr-[5px]'
                    onClick={handleVisibilityPassword}>
                    {visible ? (<Eye size={16} />) : (<EyeClosed size={16} />)} 
                </button>
            </div>
            {formLogin.formState.errors && <span className="text-xs text-red-500">{formLogin.formState.errors.password?.message}</span>}
        </div>
        <p className='text-xs text-gray-400 select-none text-end'>
            Don't have an account?{' '}
            <button
            type='button'
            className='underline hover:decoration-wavy hover:decoration-[0.5px] ease-in-out duration-500 cursor-pointer text-blue-400'
            onClick={isRegister}
            >
                Register 
            </button>
        </p>
        <Button type='submit' className='select-none'>
            Login
        </Button>
    </CardContent>
</Card>
  )
}


