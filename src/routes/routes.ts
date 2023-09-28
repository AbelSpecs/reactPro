import { LazyExoticComponent, lazy } from "react";
import { LazyPage4, LazyPage5 } from "../01-lazyload/layout";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

interface Route {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>;
    name: string
}

type JSXComponent = () => JSX.Element;

const lazy1 = lazy(() => import(/* webpackChunkName: "LazyLoadPage1" */'../01-lazyload/pages/LazyPage1'));
const lazy2 = lazy(() => import(/* webpackChunkName: "LazyLoadPage2" */'../01-lazyload/pages/LazyPage2'));
const lazy3 = lazy(() => import(/* webpackChunkName: "LazyLoadPage3" */'../01-lazyload/pages/LazyPage3'));
const lazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayoutPage" */'../01-lazyload/layout/layout'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: lazy3,
        name: 'Lazy-3'
    },
    {
        to: '/lazyloadlayout/',
        path: '/lazyloadlayout/*',
        Component: lazyLayout,
        name: 'Layout'
    },
    {
        to: '/nolazy',
        path: 'nolazy',
        Component: NoLazy,
        name: 'No-Lazy'
    }
];

export const childRoutes: Route[] = [
    {
        to: 'lazy4',
        path: 'lazy4',
        Component: LazyPage4,
        name: 'Lazy4'
    },
    {
        to: 'lazy5',
        path: 'lazy5',
        Component: LazyPage5,
        name: 'Lazy5'
    }
]