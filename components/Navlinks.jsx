import Link from "next/link"

const Navlinks = ({href, title}) => {
    return(
        <Link href={href} className='block py-2 pl-3 pr-4 text-black dark:text-[#ADB7BE] rounded sm:text-xl md:p-0 hover:text-blue-500 dark:hover:text-white'> {title} </Link>
    )
}

export default Navlinks;