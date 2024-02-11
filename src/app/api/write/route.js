import connectMongoDB from "../../../db/connect";
import User from "../../../models/user";

import { NextResponse } from "next/server";

export async function POST(request) {
  await connectMongoDB();

  // Extracting name and email from request JSON
  const { name, email } = await request.json();

  // Creating a new user record with title and description
  await User.create({ name, email });

  // Returning a JSON response indicating successful record creation with status code 201
  console.log("write successfull")
  return NextResponse.json({ message: "Record Created" }, { status: 201 });
}

// export async function GET() {
//   await connectMongoDB();
//   const msgs = await Msg.find();
//   return NextResponse.json({ msgs });
// }
