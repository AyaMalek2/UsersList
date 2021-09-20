import Card from "../UI/Card";
import styles from "./UsersList.module.css";
import { useState } from "react";
import User from "./User";

const UsersList = (props) => {
  //   const [users, setUsers] = useState([]);
  console.log("New Users props:", props.users);

  return (
    <Card>
      {props.users &&
        props.users.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
    </Card>
  );
};

export default UsersList;
