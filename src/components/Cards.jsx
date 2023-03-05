export default function Cards() {
  return (
    <div className='w-[292px] h-[182px] shadow-[0_15px_30px_0_rgba(0,0,0,0.1)] rounded-md p-[20px] z-10 bg-white mt-[123px] absolute right-[485px]'>
      <div className='flex justify-between h-7'>
        <div className='flex gap-2'>
          <img src='./src/assets/Ellipse.png' alt='cards image' />
          <p>Jane Doe</p>
        </div>
        <img src='./src/assets/colon.svg' alt='colon' />
      </div>
      <div className='mt-3 text-dark-blue text-xs leading-5 font-sans'>
        “The doctor appointment app has been great for me. Scheduling
        appointments and getting medication reminders is much easier, and I love
        the option for virtual consultations. I'd recommend this app to others.”
      </div>
    </div>
  );
}
