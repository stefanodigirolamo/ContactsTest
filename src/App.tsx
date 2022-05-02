import { useEffect, useRef } from "react";
import "./App.css";
import { customTheme } from "./utils";
import { useContacts } from "./hooks";
import { ThemeProvider } from "@mui/material";
import { SearchContactCard } from "./components";
import { Contact } from "./components";

function App() {
  const { contacts, handleFetchList } = useContacts();
  const listInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleFetchList();
  }, []);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        handleFetchList();
      }
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <div className="container">
          <div
            onScroll={onScroll}
            ref={listInnerRef}
            style={{
              height: "100vh",
              width: "100%",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {contacts.map((contact: Contact) => (
              <SearchContactCard
                id={contact.id}
                firstName={contact.first_name}
                lastName={contact.last_name}
                source={contact.avatar}
              />
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
