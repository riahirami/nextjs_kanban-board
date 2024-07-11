import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {}

// applies this middleware only to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
