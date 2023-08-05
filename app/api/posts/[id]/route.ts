import { NextResponse } from "next/server";

export const DELETE = async (req: Request, { params }: { params: { id: string }}) => {
  const id = params.id;

  // logic deleting post with database

  return NextResponse.json({ id });
} 