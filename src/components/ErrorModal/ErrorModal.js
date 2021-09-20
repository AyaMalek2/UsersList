import styles from "./ErrorModal.module.css";
import Card from "../UI/Card";

const ErrorModal = (props) => {
  return (
    <Card className={styles.modal}>
      {/* <div id="myModal" class="modal"> */}
      <h2> Invalid Input</h2>
      <div className={styles["modal-content"]}>
        <p>{props.errorMsg}</p>

        <button className={styles["button"]}>&times;</button>
      </div>

      {/* </div> */}
    </Card>
  );
};

export default ErrorModal;
