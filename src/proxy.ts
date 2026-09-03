import { NextResponse, type NextRequest } from "next/server";

function unauthorized() {
  return new NextResponse("Доступ только для преподавателя.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Teacher area", charset="UTF-8"',
    },
  });
}

export function proxy(request: NextRequest) {
  // nginx performs Basic Auth in production and adds this header only after
  // successful authentication. The app itself listens on localhost there.
  if (request.headers.get("x-teacher-access") === "verified") {
    return NextResponse.next();
  }

  const password = process.env.TEACHER_ACCESS_PASSWORD;
  const username = process.env.TEACHER_ACCESS_USERNAME ?? "teacher";

  // Closed by default: a deployment without a configured password never exposes notes.
  if (!password) {
    return new NextResponse("Преподавательский раздел не настроен.", { status: 503 });
  }

  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Basic ")) return unauthorized();

  try {
    const credentials = atob(authorization.slice(6));
    const separator = credentials.indexOf(":");
    const suppliedUsername = credentials.slice(0, separator);
    const suppliedPassword = credentials.slice(separator + 1);

    if (separator < 0 || suppliedUsername !== username || suppliedPassword !== password) {
      return unauthorized();
    }
  } catch {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/teacher", "/teacher/:path*"],
};
