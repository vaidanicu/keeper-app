import { Footer } from "./Footer";
import { Header } from "./Header";
import { Note } from "./Note";
import notes from "../notes";

function createNotes(noteItem) {
  return <Note title={noteItem.title} content={noteItem.content}></Note>;
}

export function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}
