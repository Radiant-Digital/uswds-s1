import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ElementHomePage } from "./screens/ElementHomePage";
import { ElementHomePageB } from "./screens/ElementHomePageB";
import { ElementHomePageC } from "./screens/ElementHomePageC";
import { ElementDataSet } from "./screens/ElementDataSet";
import { ElementDataSetScreen } from "./screens/ElementDataSetScreen";
import { ElementReleaseNotes } from "./screens/ElementReleaseNotes";
import { ElementDataExplorer } from "./screens/ElementDataExplorer";
import { ElementContact } from "./screens/ElementContact";
import { ElementGlossary } from "./screens/ElementGlossary";
import { DivWrapper } from "./screens/DivWrapper";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ElementHomePage />,
  },
  {
    path: "/x01-u45-home-page",
    element: <ElementHomePage />,
  },
  {
    path: "/x01-u45-home-page-b",
    element: <ElementHomePageB />,
  },
  {
    path: "/x01-u45-home-page-c",
    element: <ElementHomePageC />,
  },
  {
    path: "/x02-u45-data-set",
    element: <ElementDataSet />,
  },
  {
    path: "/x03-u45-data-set-3",
    element: <ElementDataSetScreen />,
  },
  {
    path: "/x07-u45-release-notes",
    element: <ElementReleaseNotes />,
  },
  {
    path: "/x08-u45-data-explorer",
    element: <ElementDataExplorer />,
  },
  {
    path: "/x09-u45-contact",
    element: <ElementContact />,
  },
  {
    path: "/x10-u45-glossary",
    element: <ElementGlossary />,
  },
  {
    path: "/03-data-set-3",
    element: <DivWrapper />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
