import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";

import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "RemixExpo" }
};

import { useReactNativeStyles } from "./rn-styles";
import { View } from "react-native-web";
import globalStyles from "./styles/globals.css"

export function links() {
  return [
    { rel: "stylesheet", href: globalStyles }
  ]
}

export default function App() {
  const stylesElement = useReactNativeStyles();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover" />
        <Meta />
        <Links />
        {stylesElement}
      </head>
      <body>
        <View pointerEvents="box-none" style={{flex: 1 }}>
          <Outlet />
        </View>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
