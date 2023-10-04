import {BsSearch} from "react-icons/bs"
const Navbar = () => {
  return (
    <div className="container hidden lg:block">
        <div className="flex justify-between items-center pt-8">
            <h1 className="text-4xl font-medium">Logo </h1>

            <div className="relative w-full max-w-[500px]" >
                <input type="text" placeholder="Search Products..." className="bg-[#f2f3f5] borer-none outline-none px-6 py-3 rounded-[30px] w-full" />

                <BsSearch className="absolute top-0 right-0 mt-4 mr-5 text-grey-400" size={20}/>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar
