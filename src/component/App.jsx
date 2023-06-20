import { Footer } from "./Footer";
import { Header } from "./Header";
import { Note } from "./Note";
import notes from "../notes";

export function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        ></Note>
      ))}
      <Footer />
    </div>
  );
}
