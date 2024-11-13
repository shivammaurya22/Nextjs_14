import Link from 'next/link';

const Navbar = () => (
  <nav className='m-4 flex justify-between text-center items-center border-2 border-purple-700 shadow-lg rounded px-2'><div>
    <h2 className='font-bold text-4xl text-blue-600'>Logo</h2>
  </div>
  <div className='text-center items-center flex flex-row gap-5 text-purple-600'>
  <Link href="/">Home</Link>
  <Link href="/create-post">Create Post</Link>
  </div>
    
  </nav>
);

export default Navbar;
