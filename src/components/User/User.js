import styles from "./User.module.css";

const User = (props) => {
  return (
    <div className={styles["user-box"]}>
      <div className={styles.user}>{`${props.name} (${props.age})`}</div>
      {/* <input type="text" value={`${props.name} (${props.age})`} /> */}
    </div>
  );
};

export default User;
