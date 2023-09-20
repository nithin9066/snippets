'use client';
import React from 'react'
import { RiDeleteBin3Fill } from 'react-icons/ri'
import { Toast, Toaster } from '../layout';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';


export default function DeleteButton({id}) {

    var router = useRouter();

    const deleteSnippet = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await fetch('http://localhost:3000/api/snippets', {
                method: "DELETE",
                body: JSON.stringify({id})
                }).then(async (response) => {
                    if(response.ok) {
                        const {message} = await response.json();
                        Toaster(message,'success');
                        router.refresh()
                    }
                }).catch(() => {
                    Toaster('SomeThing went wrong!','error')
                })
            }
          })
    }

  return (
    <>
        <button onClick={deleteSnippet}><RiDeleteBin3Fill color='red' size={20} /></button>
    </>
  )
}
