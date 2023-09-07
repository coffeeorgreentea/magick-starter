import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export const config = { matcher: ["/quiz"] };

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  if (!token) {
    return NextResponse.redirect('/');
  }
}
