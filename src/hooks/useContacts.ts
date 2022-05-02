import { useState, useCallback } from "react";
import { Contact } from "../utils";

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleFetchList = useCallback(async () => {
    await fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((data) => data.json())
      .then((list) => setContacts((prevState) => prevState.concat(list)));
  }, []);

  return { contacts, handleFetchList };
};
