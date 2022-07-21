import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

function Modal(props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("modal")}>
        <div className={cx("modal-header")}>
          <button className={cx("close")} onClick={()=>{props.parentCallback(false)}}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className={cx("modal-body")}>
          <div className={cx("content")}>
            <div className={cx("info")}>
              <h3>Đăng ký để được tư vấn đặt chỗ</h3>
              <p>Hoặc liên hệ nhận tư vấn:</p>
              <p className={cx("phone")}>0931781880</p>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              className={cx("input")}
            />
            <input
              type="email"
              name="name"
              placeholder="Email"
              className={cx("input")}
            />
            <input
              type="text"
              name="name"
              placeholder="Số điện thoại"
              className={cx("input")}
            />
            <button type="submit" className={cx("button")}>
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
