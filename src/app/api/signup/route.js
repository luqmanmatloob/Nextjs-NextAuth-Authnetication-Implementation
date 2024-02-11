import connectMongoDB from "../../../db/connect";
import User from "../../../models/usersignup";

import { NextResponse } from "next/server";

export async function POST(request) {
  await connectMongoDB();

  // Extracting name and email from request JSON
  const { name, email } = await request.json();

  // Creating a new user record with title and description
  await User.create({ firstname,lastname, email, password, id });

  // Returning a JSON response indicating successful record creation with status code 201
  console.log("write successfull")
  return NextResponse.json({ message: "Record Created" }, { status: 201 });
}