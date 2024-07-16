import { useState } from "react";

const App = (props) => {
  const [phoneBook, setPhoneBook] = useState(props.phoneBook);

  const [filter, setFilter] = useState(true);

  const [newName, setNewName] = useState("");
  const nameChange = (event) => {
    setNewName(event.target.value);
  };

  const [newNumber, setNewNumber] = useState("");
  const numberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const [search, setSearch] = useState("");
  const searchChange = (event) => {
    setSearch(event.target.value);
  };

  const allNames = [
    ...phoneBook.map((contact) => {
      return contact.name;
    }),
  ];

  const priorityContact = filter
    ? phoneBook
    : phoneBook.filter((contact) => contact.important === true);

  const addContact = (event) => {
    event.preventDefault();

    if (allNames.includes(newName)) {
      alert(`${newName} already exists. Make it unique`);
    } else if (!newName || !newNumber) {
      alert("A value must be entered in both inputs");
    } else {
      const newPerson = {
        name: newName,
        phone: newNumber,
        important: Math.random() > 0.5,
        id: phoneBook.length + 1,
      };

      setPhoneBook(phoneBook.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <>
      <div id="container">
        <div id="contactView">
          <h2>Contact List</h2>
          <div>
            {priorityContact
              .map((contact) => {
                return contact.name;
              })
              .filter((contact) => {
                return contact.includes(search);
              })
              .map((contact) => {
                return (
                  <p key={Math.random() * contact.length}>
                    <i>{contact.name} </i>- <strong>{contact}</strong>
                  </p>
                );
              })}
          </div>
          <button
            onClick={() => {
              setFilter(!filter);
            }}
          >
            Primary Contacts
            {filter === true ? (
              <i>
                <span id="PCoff"> OFF</span>
              </i>
            ) : (
              <i>
                <span id="PCon"> ON</span>
              </i>
            )}
          </button>
          <div id="searchPane">
            Search
            <input type="search" value={search} onChange={searchChange} />
          </div>
        </div>
        <div id="userPanel">
          <form onSubmit={addContact}>
            <h2>Create new contact</h2>
            Name:
            <input
              type="text"
              value={newName}
              onChange={nameChange}
              name="name"
            />
            Number:
            <input
              type="number"
              value={newNumber}
              onChange={numberChange}
              name="number"
            />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
