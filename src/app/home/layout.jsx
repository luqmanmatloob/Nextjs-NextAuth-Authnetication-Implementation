import { Inter } from 'next/font/google'
import { AuthProvider } from '../Providers'
import NextTopLoader from 'nextjs-toploader'
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import RegisterForm from "../../Components/RegisterForm";

// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Social App',
    description: ''
}

export default async function RootLayout({ children }) {


    const session = await getServerSession(authOptions);

    // if (session) redirect("/home/addtweet");
    if (session) 
     
    return (
        <html lang='en'>
            <body className={inter.className}>
                <NextTopLoader
                    color='#FF0000'
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={false}
                    easing='ease'
                    speed={200}
                    shadow='0 0 10px #2299DD,0 0 5px #2299DD'
                />

                <AuthProvider>
                    <div className='flex justify-center'>
                        <div className='flex max-w-[1100px] justify-center m-5 rounded-sm'>

                            <div className='min-w-[250px] bg-blue-100 rounded-md max-h-[400px] p-10'>
                               profile info sidebar
                            </div>

                            <div className='max-w-[600px] min-w-[600px] mx-5 mt-2'>
                                {children}
                            </div>

                            <div className='min-w-[250px] bg-blue-100 rounded-md min-h-[600px] p-10'>
                                other options sidebar
                            </div>
                        </div>
                    </div>
                </AuthProvider>
            </body>
        </html>
    )
    return <RegisterForm />



}
