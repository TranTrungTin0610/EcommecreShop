"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const SearchBar = () => {  
  const router = useRouter();
  const handleSearch = (e : React.FormEvent<HTMLFormElement>) => {   //Khai báo biến e thuộc loại e : React.FormEvent<HTMLFormElement> nó được kết hợp với phần tử HTML là <form> (HTMLFormElement).
  const formData = new FormData(e.currentTarget); //Lấy dữ liệu hiện tại 
  const name = formData.get("name") as string //Sau đó gán lại giá trị từ form và lấy được value từ input có name = "name"
  if(name){ 
      router.push(`/list?name=${name}`) //Nếu có giá trị trong ô input giá trị sẽ được nạp vào trang list đẩy hết giữ liệu vào
  }
}
  return (
    <form className='flex  ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1' onSubmit={handleSearch}>
        <input type="text" name="name" placeholder='Search' className='flex-1 bg-transparent outline-none'/> 
        <button className='cursor-pointer'> 
          <Image src="/search.png" alt='image search' width={16} height={16} />
        </button>
    </form>
  )
}

export default SearchBar
