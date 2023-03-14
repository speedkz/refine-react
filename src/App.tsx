import React from "react";

import { Refine, GitHubBanner } from "@pankod/refine-core";
import {
  notificationProvider,
  ChakraProvider,
  refineTheme,
  ReadyPage,
  ErrorComponent,
  Layout,
} from "@pankod/refine-chakra-ui";

import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";

function App() {
  return (
    <>
      <GitHubBanner />
      <ChakraProvider theme={refineTheme}>
        <Refine
          notificationProvider={notificationProvider()}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          Layout={Layout}
          routerProvider={routerProvider}
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          resources={[
            {
              name: "products",
              list: ChakraUIInferencer,
              show: ChakraUIInferencer,
              create: ChakraUIInferencer,
              edit: ChakraUIInferencer,
            },
          ]}
        />
      </ChakraProvider>
    </>
  );
}

export default App;
