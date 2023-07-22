import React from 'react';
import './App.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm'
// import ReadOnlyDagComponent from './readonlydag/ReadOnlyDagComponent';

const markdown= `
### Templates, directives, and data binding

A template combines HTML with Angular markup that can modify HTML elements before they are displayed.
Template *directives* provide program logic, and *binding markup* connects your application data and the DOM.
There are two types of data binding:
| Data bindings    | Details |
|:---              |:---     |
| Event binding    | Lets your application respond to user input in the target environment by updating your application data. |
| Property binding | Lets you interpolate values that are computed from your application data into the HTML.                  |
`;

function App() {
  return (
      <>
        <div>
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}></ReactMarkdown>
        </div>
      </>
  );
}

export default App;
