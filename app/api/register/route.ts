// app/api/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const users: Record<string, any> = {};

// Secret key for JWT from ENV
const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET || "qodeways";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validation
    const errors: Record<string, string> = {};
    if (!data.username) errors.username = "Username is required";
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email))
      errors.email = "Valid email is required";
    if (
      !data.password ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(data.password)
    )
      errors.password =
        "Password must be 8+ chars with uppercase, lowercase, and number";
    if (!data.firstName) errors.firstName = "First name is required";
    if (!data.secondName) errors.secondName = "Second name is required";
    if (!data.phoneNumber || !/^\d{10}$/.test(data.phoneNumber))
      errors.phoneNumber = "Phone number must be 10 digits";
    if (!data.role) errors.role = "Role is required";
    if (!data.organisation?.name)
      errors["organisation.name"] = "Organisation name is required";
    if (!data.organisation?.address)
      errors["organisation.address"] = "Organisation address is required";

    // Check for existing username or email (for demo purposes)
    if (users[data.username]) errors.username = "Username already taken";
    if (Object.values(users).some((u: any) => u.email === data.email))
      errors.email = "Email already registered";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { message: "Validation failed", ...errors },
        { status: 400 }
      );
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    // Store user data
    const userData = {
      username: data.username,
      email: data.email,
      password: hashedPassword,
      firstName: data.firstName,
      secondName: data.secondName,
      phoneNumber: data.phoneNumber,
      role: data.role,
      organisation: {
        name: data.organisation.name,
        phone: data.organisation.phone || "",
        address: data.organisation.address,
      },
    };

    users[data.username] = userData;

    // Generate JWT token
    
    const tokenPayload = {
      username: data.username,
      email: data.email,
      role: data.role,
    };
    

    const accessToken = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: "1h" });

    

    // Return success response
    return NextResponse.json(
      {
        message: "Registration successful",
        accessToken,
        user: {
          username: data.username,
          email: data.email,
          firstName: data.firstName,
          secondName: data.secondName,
          phoneNumber: data.phoneNumber,
          role: data.role,
          organisation: data.organisation,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
