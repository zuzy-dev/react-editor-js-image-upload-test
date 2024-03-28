import ReactDOM from "react-dom";
import React from "react";

import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";

const ReactEditorJS = createReactEditorJS();

const blocks = [
  {
    type: "paragraph",
    data: {
      text: "Hello, Editor.js!",
    },
  },
];

export default function App() {
  return (
    <>
      <h1>React EditorJS Example</h1>
      <ReactEditorJS data={{ blocks }} tools={EDITOR_JS_TOOLS} holder="custom">
        <div id="custom" />
      </ReactEditorJS>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
