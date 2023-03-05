export default function Box() {
  return (
    <div className='w-full p-10 flex gap-8 bg-dark-blue border text-white'>
      <div className='flex gap-6 w-[359px]'>
        <img
          src='./src/assets/schedule.png'
          alt='schedule'
          className='w-10 h-10'
        />
        <div>
          <h3 className='font-medium'>Online appointment scheduling</h3>
          <p className='text-s text-white/80 mt-2'>
            Allows users to schedule appointments with their healthcare provider
            through the app.
          </p>
        </div>
      </div>

      <div className='flex gap-6 w-[359px]'>
        <img
          src='./src/assets/notification.png'
          alt='schedule'
          className='w-10 h-10'
        />
        <div>
          <h3 className='font-medium'>Medication reminders</h3>
          <p className='text-s text-white/80 mt-2'>
            Allows users to schedule appointments with their healthcare provider
            through the app.
          </p>
        </div>
      </div>

      <div className='flex gap-6 w-[359px]'>
        <img
          src='./src/assets/consultation.png'
          alt='schedule'
          className='w-10 h-10'
        />
        <div>
          <h3 className='font-medium'>Virtual consultations</h3>
          <p className='text-s text-white/80 mt-2'>
            Allows users to schedule appointments with their healthcare provider
            through the app.
          </p>
        </div>
      </div>
    </div>
  );
}
