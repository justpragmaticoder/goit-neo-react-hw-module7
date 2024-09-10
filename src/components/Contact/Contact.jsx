import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

const Contact = ({ name, phoneNumber, id, handleDelete }) => {
  return (
    <div className={css.contactItem}>
      <div>
        <p className={css.contactText}>
          <FaUser className={css.contactIcon} />
          {name}
        </p>
        <p className={css.contactText}>
          <FaPhone className={css.contactIcon} />
          {phoneNumber}
        </p>
      </div>
      <button
        onClick={() => {
            handleDelete(id);
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
