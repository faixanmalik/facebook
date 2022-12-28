import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

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

      <div className="container flex-col md:flex-row md:mt-44 mx-auto">




        {/* Left page */}
        <div className="left  md:ml-28 md:w-1/3">
            <div>
              <img className='h-10' src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/cvj8rfO8RgU.png" alt="" />
              <h1>Get Facebook for Android and browse faster.</h1>
            </div>
            <img className="mx-auto mt-14 w-28 md:w-80" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt=""/>
            <p className=" text-sm  md:text-3xl md:ml-8 md:w-full hidden md:visible">Facebook helps you connect and share with the people in your life.</p>

        </div>





        {/* Right Page */}
        {/* <div className="right h-1/3 -mt-10 w-96 rounded-lg md:bg-white mx-auto relative shadow-xl">
            <div className="flex flex-col p-4">


                <input className="p-3 bg-gray-100 border border-1 border-grey-300 text-lg rounded-lg outline-blue-300" type="text" placeholder="Email address or phone number"/>
                <input className="p-3 bg-gray-100 mt-4  border border-1 border-grey-300 text-lg rounded-lg outline-blue-300" type="password" placeholder="Password"/>



                <button className="bg-blue-500 text-xl text-white py-3 rounded-lg mt-4 font-semibold hover:bg-blue-600">Log In</button>
                <span className="mx-auto text-blue-600 text-sm my-2 cursor-pointer hover:underline">Forgotten password?</span>
                <hr className="my-2"/>
                <button className="bg-green-500 w-48 mx-auto text-lg text-white py-2 rounded-lg my-4 font-semibold hover:bg-green-600">Create New Account</button>
                <span className="absolute -bottom-11 text-center text-sm ml-7"><span className="font-bold hover:underline hover:cursor-pointer">Create a Page </span>for a celebrity, brand or business.</span>
            </div>
        </div> */}



      </div>


</main>








    </>
  )
}
