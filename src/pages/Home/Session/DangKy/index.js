import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./DangKy.module.scss";

const cx = classNames.bind(styles);
function DangKy() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
      <Title>Đăng ký để nhận báo giá, chính sách ưu đãi</Title>
        <div className={cx("body")}>
        <div className={cx("content")}>
          <div>Liên hệ trực tiếp để được tư vấn:</div>
          <p className={cx("phone")}>0931781880</p>
          <div>Hoặc để lại thông tin bên dưới:</div>
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
          <textarea
            name="description"
            placeholder="Để lại lời nhắn cho chúng tôi"
            className={cx("textarea")}
          />
          <button type="submit" className={cx("button")}>
            Tư vấn đặt chỗ
          </button>
        </div>
        <div className={cx("image")}>
          <img
            src="https://thitruongcanho.vn/wp-content/uploads/2022/06/Phoi-canh-du-an-Vi-Thanh-New-City-ve-dem.jpg"
            alt=""
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default DangKy;
