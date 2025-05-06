import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    index("routes/Home/Home.tsx"),
    route("submit-entry", "routes/SubmitEntry/SubmitEntry.tsx"),
    route("view-entries", "routes/ViewEntries/ViewEntries.tsx")

] satisfies RouteConfig;
