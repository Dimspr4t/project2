import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Data from API route", data: [1, 2, 3] });
}
