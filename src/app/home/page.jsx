import TweetList from '../../Components/TweetList'
import AddTweet from '../../Components/AddTweet'


import RegisterForm from "../../Components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Register() {
  const session = await getServerSession(authOptions);

  // if (session) redirect("/home/addtweet");
  if (session) return (<>
    <div className='bg-gray-300 p-5 mb-5 rounded'>
      <AddTweet />
    </div>
    <div className='bg-gray-300 p-5 rounded'>
      <TweetList />
    </div>

  </>
  )
  return <RegisterForm />;
}


