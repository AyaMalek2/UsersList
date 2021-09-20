import styles from "./NewUser.module.css";
import Card from "../UI/Card";
import { useState } from "react";

const NewUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const changeUserNameHandler = (event) => {
    setUserName(event.target.value);
    // console.log(event.target.value);
  };
  const changeUserAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newUser = { id: Math.random(), name: userName, age: userAge };
    props.onAddNewUser(newUser);
    setUserName("");
    setUserAge("");
  };

  return (
    <Card>
      <form className={styles.Form}>
        <div className={styles["form-group"]}>
          <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={changeUserNameHandler}
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Age</label>
          <input
            type="number"
            value={userAge}
            min="1"
            onChange={changeUserAgeHandler}
          />
        </div>

        <button type="submit" onClick={formSubmitHandler}>
          Add User
        </button>
      </form>
    </Card>
  );
};

export default NewUser;
