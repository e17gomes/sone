import { zodResolver } from '@hookform/resolvers/zod';
import { type registerFormTypes, registerSchema } from './../schemas/registerSchema';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { type loginFormType, loginSchema } from '@/schemas/loginSchema';



export const useAuthForm = () => {
    const [visible, setVisible] = useState(false)
    const formRegister = useForm<registerFormTypes>({resolver: zodResolver(registerSchema), mode: "all", criteriaMode:'firstError'});
    const formLogin = useForm<loginFormType>({resolver: zodResolver(loginSchema), mode: "all", criteriaMode:'firstError'});
    
    const handleVisibilityPassword = () => setVisible((prev)=>!(prev));

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const handleSubmitFormRegister = (a:any) => {
        console.log(a)
    }
    
    return{
        visible,
        setVisible,
        handleVisibilityPassword,
        formRegister,
        formLogin,
        handleSubmitFormRegister
    }
}