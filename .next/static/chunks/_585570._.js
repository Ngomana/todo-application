(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_585570._.js", {

"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/.pnpm/@tanstack+react-query@5.64.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "HydrationBoundary": (()=>HydrationBoundary)
});
// src/HydrationBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$64$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.64.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$64$2e$2$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.64.2/node_modules/@tanstack/query-core/build/modern/hydration.js [app-client] (ecmascript)");
"use client";
;
;
;
var HydrationBoundary = ({ children, options = {}, state, queryClient })=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$64$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const [hydrationQueue, setHydrationQueue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState();
    const optionsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(options);
    optionsRef.current = options;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "HydrationBoundary.useMemo": ()=>{
            if (state) {
                if (typeof state !== "object") {
                    return;
                }
                const queryCache = client.getQueryCache();
                const queries = state.queries || [];
                const newQueries = [];
                const existingQueries = [];
                for (const dehydratedQuery of queries){
                    const existingQuery = queryCache.get(dehydratedQuery.queryHash);
                    if (!existingQuery) {
                        newQueries.push(dehydratedQuery);
                    } else {
                        const hydrationIsNewer = dehydratedQuery.state.dataUpdatedAt > existingQuery.state.dataUpdatedAt;
                        const queryAlreadyQueued = hydrationQueue?.find({
                            "HydrationBoundary.useMemo": (query)=>query.queryHash === dehydratedQuery.queryHash
                        }["HydrationBoundary.useMemo"]);
                        if (hydrationIsNewer && (!queryAlreadyQueued || dehydratedQuery.state.dataUpdatedAt > queryAlreadyQueued.state.dataUpdatedAt)) {
                            existingQueries.push(dehydratedQuery);
                        }
                    }
                }
                if (newQueries.length > 0) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$64$2e$2$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrate"])(client, {
                        queries: newQueries
                    }, optionsRef.current);
                }
                if (existingQueries.length > 0) {
                    setHydrationQueue({
                        "HydrationBoundary.useMemo": (prev)=>prev ? [
                                ...prev,
                                ...existingQueries
                            ] : existingQueries
                    }["HydrationBoundary.useMemo"]);
                }
            }
        }
    }["HydrationBoundary.useMemo"], [
        client,
        hydrationQueue,
        state
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "HydrationBoundary.useEffect": ()=>{
            if (hydrationQueue) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$64$2e$2$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrate"])(client, {
                    queries: hydrationQueue
                }, optionsRef.current);
                setHydrationQueue(void 0);
            }
        }
    }["HydrationBoundary.useEffect"], [
        client,
        hydrationQueue
    ]);
    return children;
};
;
 //# sourceMappingURL=HydrationBoundary.js.map
}}),
}]);

//# sourceMappingURL=_585570._.js.map