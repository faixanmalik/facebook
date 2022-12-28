import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon"/>
        <title>Facebook - login or sign up</title>
      </Head>
     
  <main>

      <div className="container flex-col md:flex md:mt-44 mx-auto">



        {/* Left page */}
        <div className="left  md:ml-28 md:w-1/3">
          <div className='visible md:hidden'>
            <div className='flex container bg-yellow-100 bg-opacity-60 space-x-2 p-2 '>
              <img className='h-8 pl-2 rounded-sm object-bottom' src="bgfb.png" alt="" />
              <h1 className='text-blue-800 font-sans my-auto tracking-tight text-sm font-normal mt-1'>Get Facebook for Android and browse faster.</h1>
            </div>
          </div>
            <img className="mx-auto mt-2 w-28 md:w-80" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt=""/>
            <div className='hidden md:visible'>
              <p className=" text-sm md:text-3xl md:ml-8 md:w-full">Facebook helps you connect and share with the people in your life.</p>
            </div>
        </div>




        {/* Right Page */}
        <div className="right mt-2 rounded-lg md:bg-white mx-auto relative">
            <div className="container flex flex-col px-4">


                <input className="px-3 h-11 placeholder:text-gray-600 text-black bg-gray-100 border border-1 border-gray-300 text-sm rounded-sm outline-1 outline-orange-300" type="text" placeholder="Mobile number or email address"/>
                <input className="px-3 h-11 placeholder:text-gray-600 text-black bg-gray-100 mt-2  border border-1 border-gray-300 text-sm rounded-sm outline-1 outline-orange-300" type="password" placeholder="Password"/>



                <button className="bg-blue-600 bg-opacity-90 text-lg text-white py-2 rounded-md mt-2 font-bold hover:bg-blue-600">Log In</button>
                <span className="mx-auto text-blue-600 font-normal text-sm my-2 cursor-pointer hover:underline">Forgotten password?</span>
                <hr className="my-2"/>
                <button className="bg-green-600 w-44 text-center mx-auto text-sm text-white py-2 rounded-md my-7 font-bold hover:bg-green-600">Create New Account</button>


                {/* <span className="absolute -bottom-11 text-center text-sm ml-7"><span className="font-bold hover:underline hover:cursor-pointer">Create a Page </span>for a celebrity, brand or business.</span> */}

            </div>

          {/* languages */}
          <div className='container mt-24 w-9/12 mx-auto text-xs font-bold  flex space-x-16'>
              <div className='w-1/3 space-y-2 text-slate-400 text-center'>
                <h1>English (UK)</h1>
                <h1>English (US)</h1>
                <h1>Espanol</h1>
              </div>
              <div className='w-1/3 space-y-2 text-slate-400 text-center'>
                <h1>Purtagal</h1>
                <h1>Urdu</h1>
                <h1>Hindi</h1>
              </div>
          </div>

          {/* Footer */}
          <div className='text-xs text-slate-500'>
            <div className='flex justify-center my-4 space-x-3'>
                <h1>About</h1>
                <h1>Help</h1>
                <h1>More</h1>
            </div>
            <div className='text-center'>
              Meta © 2022
            </div>
          </div>

        </div>




      </div>


</main>








    </>
  )
}
