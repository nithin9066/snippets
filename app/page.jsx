import Link from 'next/link'
import {FaEdit} from 'react-icons/fa'
import DeleteButton from './components/DeleteButton';


const getSnippets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/snippets',{
      cache: "no-cache"
    });
    
    if(res.ok) {
      return await res.json();
    } else {
      throw new Error('Failed to Fetch Data!')
    }
  } catch (error) {
    console.log(error);
  }
}



export default async function Home() {

  const {snippets} = await getSnippets();


  return (
    <div className='bg-black h-screen w-full pt-5'>
      <div className='bg-white text-black lg:w-1/2 lg:m-auto'>
        <div className='bg-gray-200 p-3 flex items-center justify-between'>
          <h1 className='font-extrabold text-xl'>HEXA</h1>
          <Link href={'/addSnippet'} className='px-3 py-2 bg-black text-white font-bold'>Add Snippet</Link>
        </div>
        <div className=''>
          <ul>
            {
              snippets.map(snippet => {
                return (
                  <li className='font-semibold border-b p-4 flex justify-between'>
                    <span>{snippet.title}</span>
                    <div className='space-x-2'>
                      <DeleteButton id={snippet._id} />
                      <button><FaEdit className='text-sky-600' size={20} /></button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
