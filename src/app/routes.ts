import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/landing.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;