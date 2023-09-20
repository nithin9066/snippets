'use client';
import React from 'react'
import { useForm } from 'react-hook-form';
import {Toaster } from '../layout';
import { useRouter } from 'next/navigation';


export default function AddSnippet() {
    const {register, handleSubmit, formState: {isValid}} = useForm();
    const router = useRouter();
    const formHandler = function(data) {
        fetch('http://localhost:3000/api/snippets',{
            method: "POST",
            body: JSON.stringify(data)
        }).then(async (response) => {
            if(response.ok) {
                const {message} = await response.json();
                Toaster(message, 'success')
                router.push('/');
            }
        }).catch(() => {
            Toaster("Something went wrong!", 'error')
        })
    }
  return (
    <div className='bg-black h-screen w-full pt-5'>
        <form className='lg:w-1/2 p-5 m-auto' onSubmit={handleSubmit(formHandler)}>
            <h1 className='p-3 bg-white text-xl font-extrabold my-1'>Add Snippet</h1>
            <input {...register('title', {required: true})} className='p-2 border my-1 w-full' type="text" name='title' placeholder='Enter Snippet Name' />
            <input {...register('language', {required: true})} className='p-2 border my-1 w-full' type="text" name='language' placeholder='Enter Snippet Language' />
            <textarea {...register('code', {required: true})} rows={5} className='p-2 border my-1 w-full' type="text" name='code' placeholder='Enter Snippet Code'></textarea>
            <button disabled={!isValid} className='bg-white px-3 py-2 text-black'>Submit</button>
        </form>
    </div>
  )
}
