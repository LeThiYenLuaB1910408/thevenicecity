import {DefaultLayout} from '~/components/Layout'

import Home from "~/pages/Home";

const PublicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout }
];

const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
