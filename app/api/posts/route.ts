import { NextResponse } from "next/server";
import { posts } from "./posts";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get('q') // any another what you put in request url
  return NextResponse.json(posts);
}

export const POST = async (req: Request) => {
  const body = await req.json();

  console.log(body);

  return NextResponse.json(body);
  
}