export default function NavBar() {
  return (
    <div className='relative z-10 mt-16 flex justify-between'>
      <div className='flex items-center'>
        <div className='w-52 border border-black p-0 m-0'>
          <div className='flex gap-x-3.5'>
            <img src='../../logo.svg' alt='holadok logo' />
            <p className='text-lg font-bold text-dark-blue'>Holadok</p>
          </div>
        </div>
        <div>
          <ul className='flex gap-x-12'>
            <li className='text-dark-blue font-bold'>Home</li>
            <li>Features</li>
            <li>Blogs</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <div className='flex items-center gap-x-3.5 text-dark-blue'>
        <div>Login</div>
        <div className='border font-bold py-2 px-5'>Book Now</div>
      </div>
    </div>
  );
}
