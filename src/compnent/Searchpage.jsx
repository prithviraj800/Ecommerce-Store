import {Link} from 'react-router-dom'
function Searchpage(){
    return(
        <div>
            <div className="p-5 bg-gray-100">
                <div className="flex justify-between py-4 ">
                <p className="text-2xl font-semibold font-sans">Search Products</p>
                <Link to='/'>
                    <img src="https://media.istockphoto.com/id/1143231613/es/vector/cierre-el-icono-del-vector-elimine-el-s%C3%ADmbolo-del-dise%C3%B1o-del-sitio-web-el-logotipo-la.jpg?s=170667a&w=0&k=20&c=K6kBnPT62VaqUYaBsVIbmAXfSHFmtAQo_NtPduX-w00=" alt=""  className="w-10 rounded-full"/>
                </Link>
                </div>
                <form action="" clas>
                    <input type="text" placeholder="Type here to search" className="w-full rounded-xl pl-5 " />
                    
                </form>
            </div>
            <div className='px-12'>
                <p className='py-5 text-2xl font-bold'>Explore by categories</p>
                <div className='flex justify-between'>
                   <Link> <div className='w-[12rem] h-[6rem] bg-green-500 text-center pt-8 text-[1.5rem] font-bold font-serif'>Man Fashion</div>   </Link>
                   <Link> <div className='w-[12rem] h-[6rem] bg-red-500 text-center pt-8 text-[1.5rem] font-bold font-serif'>Kid Were</div></Link>
                   <Link> <div className='w-[12rem] h-[6rem] bg-sky-500 text-center pt-8 text-[1.5rem] font-bold font-serif'>Electronics</div></Link>
                   <Link> <div className='w-[12rem] h-[6rem] bg-violet-700 text-center pt-8 text-[1.5rem] font-bold font-serif'>Furniture</div></Link>
                   <Link> <div className='w-[12rem] h-[6rem] bg-yellow-300 text-center pt-8 text-[1.5rem] font-bold font-serif'>Sports</div></Link>
                </div>
                <p className='py-5 text-2xl font-bold'>Trending Searches</p>
                <div className='flex flex-row justify-between text-lg text-gray-400 '>
                    <div className='flex flex-col gap-1  font-sans'>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Women Topwere Fashion</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Kids School Dresses</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Best Mobile in Samsung</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Top Selling Brands</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Man'Sports Watches</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Formal Shirts For Man</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Casual Pants For Man</p>
                    </div>
                    <div className='flex flex-col gap-1 text-lg  font-sans'>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Women Topwere Fashion</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Kids School Dresses</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Best Mobile in Samsung</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Top Selling Brands</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Man'Sports Watches</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Formal Shirts For Man</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Casual Pants For Man</p>
                    </div>
                    <div className='flex flex-col gap-1 text-lg  font-sans'>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Women Topwere Fashion</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Kids School Dresses</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Best Mobile in Samsung</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Top Selling Brands</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Man'Sports Watches</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Formal Shirts For Man</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Casual Pants For Man</p>
                    </div>
                    <div className='flex flex-col gap-1 text-lg  font-sans'>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Women Topwere Fashion</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Kids School Dresses</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Best Mobile in Samsung</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Top Selling Brands</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Man'Sports Watches</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Formal Shirts For Man</p>
                        <p className='cursor-pointer hover:bg-gray-100 py-2 px-2 border-b-[0.01rem] duration-300  '>. Casual Pants For Man</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Searchpage