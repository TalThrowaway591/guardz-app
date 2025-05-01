import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("submit", "routes/submit.tsx"),
    route("data", "routes/data.tsx")

] satisfies RouteConfig;
