import logo from "./logo.svg";
import styles from "./App.module.css";
import Card from "./components/UI/Card";
import NewUser from "./components/User/NewUser";
import { useState } from "react/cjs/react.development";
import UsersList from "./components/User/UsersList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const AddNewUserHandler = (enteredUser) => {
    if (!enteredUser.name && !enteredUser.age) {
      setErrMsg("Please enter a valid name and age(non empty values)");
    } else if (!enteredUser.name) {
      setErrMsg("Please enter name");
    } else if (!enteredUser.age) {
      setErrMsg("Please enter age");
    } else {
      setUsers((prev) => {
        let updatedUsers = [enteredUser, ...prev];
        return updatedUsers;
      });
    }

    console.log("err:", errMsg);
  };

  return (
    <div className={styles.App}>
      <NewUser onAddNewUser={AddNewUserHandler} />
      {errMsg ? <ErrorModal errorMsg={errMsg} /> : <UsersList users={users} />}
    </div>
  );
}

export default App;
