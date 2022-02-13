import { RemixBrowser } from "remix";
import { hydrate } from "react-dom";
import { AppRegistry } from "react-native-web";
import { ReactNativeStylesContext } from "./rn-styles";

const App = () => <RemixBrowser />;

AppRegistry.registerComponent("App", () => App);

// @ts-ignore
const { getStyleElement } = AppRegistry.getApplication("App");

hydrate(
  <ReactNativeStylesContext.Provider value={getStyleElement()}>
    <App />
  </ReactNativeStylesContext.Provider>,
  document
);