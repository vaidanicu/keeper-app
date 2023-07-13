import { Footer } from "./Footer";
import { Header } from "./Header";
import { Note } from "./Note";

import CreateArea from "./CreateArea";
export function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}
