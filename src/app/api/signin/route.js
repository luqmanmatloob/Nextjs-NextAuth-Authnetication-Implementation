// import connectMongoDB from "../../../db/connect";
// import User from "../../../models/usersignup";

// import { NextResponse } from "next/server";

// export async function POST(request) {
//   await connectMongoDB();

//   // Extracting name and email from request JSON
//   const { email, password} = await request.json();

//   // Creating a new user record with title and description
//   console.log(`{email}${password}`)

//   // Returning a JSON response indicating successful record creation with status code 201
//   console.log("write successfull")
//   return NextResponse.json({ message: "Record Created" }, { status: 201 });
// }



// serach about bcrypt



import connectMongoDB from "../../../db/connect";
import User from "../../../models/usersignup";

import { NextResponse } from "next/server";

export async function POST(request) {
  await connectMongoDB();

  // Extracting email and password from request JSON
  const { email, password } = await request.json();

  try {
    // Search for user in the database
    const user = await User.findOne({ email });

    if (!user) {
      // If user not found, return an error response
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Compare provided password with password stored in the database
    if (user.password !== password) {
      // If password doesn't match, return an error response
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // If email and password match, return a success message
    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    // If an error occurs, return an internal server error response
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
