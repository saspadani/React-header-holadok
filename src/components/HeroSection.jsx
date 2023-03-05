import Cards from './Cards';
import Parallelogram from './Parallelogram';

export default function HeroSection() {
  return (
    <div className='flex justify-between'>
      <div className='w-[457px] h-[391px] mt-36 flex flex-start flex-col gap-8'>
        <h2 className='text-dark-blue font-medium text-5xl'>
          Get the healthcare you need, when you need it.
        </h2>
        <p className='text-dark-blue text-lg'>
          Manage all of your healthcare needs in one convenient place - from
          booking appointments to tracking your health history.
        </p>
        <div className='w-[235px] h-[60px] py-[15px] px-[35px] bg-dark-blue'>
          <p className='text-white'>Book an Appointment</p>
        </div>
      </div>

      <div>
        <Cards />
        <Parallelogram />
        <img
          src='./src/assets/hero-image.png'
          alt='header'
          className='z-10 relative top-[-35px] right-6'
        />
      </div>
    </div>
  );
}
