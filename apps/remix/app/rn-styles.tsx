import { createContext, Fragment, useContext } from "react";

export const ReactNativeStylesContext = createContext<
  React.ReactElement<unknown>
>(<Fragment />);

export function useReactNativeStyles() {
  return useContext(ReactNativeStylesContext);
}