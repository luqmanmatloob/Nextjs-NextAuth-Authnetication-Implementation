import connectMongoDB from "../../../db/connect";
import Tweet from "../../../models/tweet";
import { NextResponse } from "next/server";






export const POST = async (request) => {
    const tweet = await request.json();
  
    const newtweet = new Tweet(tweet);
  
    try {
      await connectMongoDB();
  
      await newtweet.save();
  
      return new NextResponse("tweet has been created", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };



  
export async function GET() {
  await connectMongoDB();
  const tweet = await Tweet.find();
  return NextResponse.json({ tweet });
}
