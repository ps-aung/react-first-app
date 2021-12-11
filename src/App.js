import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const saveUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random.toString(), name: userName, age: userAge },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={saveUserHandler} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
