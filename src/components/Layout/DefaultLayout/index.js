import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

import Header from "./Header";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("banner")}>
        <div className={cx("text")}>
          <h3 className={cx("title")}>Quách Văn Chí Thanh</h3>
          <p className={cx("line")}></p>
          <p className={cx("des")}>
             THE VENICE CITY VỊ THANH<br />Liên hệ: 0931781880
          </p>
        </div>
      </div>
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
