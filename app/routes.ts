import { type RouteConfig, route, index, layout } from "@react-router/dev/routes";

export default [
  index("routes/landing.tsx"),
  route("auth/register", "routes/auth/register.tsx"),
  route("auth/login", "routes/auth/login.tsx"),
  route("app", "routes/app/root.tsx", [
    route("dashboard", "routes/app/dashboard.tsx"),
    route("discussions", "routes/app/discussions/discussions.tsx"),
    route("discussions/:discussionId", "routes/app/discussions/discussion.tsx"),
    route("users", "routes/app/users.tsx"),
    route("profile", "routes/app/profile.tsx"),
  ]),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;