import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./MatBang.module.scss";

const cx = classNames.bind(styles);
function MatBang() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>MẶT BẰNG DỰ ÁN The Venice City</Title>
        <div className={cx("content")}>
          <p>
            <strong>Mặt bằng the venice city vị thanh</strong>&nbsp;với tổng
            diện tích quy hoạch 35ha chủ đầu tư đã dành gần 40% quỹ đất làm tiện
            ích nội khu, công trình thương mại dịch vụ, trường mầm non, công
            viên cây xanh. Đây chính là thế mạnh của một dự án mới được cấp phép
            trong định hướng quy hoạch Thành phố Vị Thanh, dự án quy hoạch và
            phân phối nhiều loại hình bất động sản như shophouse – nhà phố
            thương mại, biệt thự, nhà liên kế…với diện tích đa dạng, hạ tầng
            hoàn thiện.
          </p>
        </div>
        <div className={cx("info-images")}>
          <img
            src="https://thitruongcanho.vn/wp-content/uploads/2022/06/z3515990858779_c5dd50c9213dd523def7dd1d86ee59fe.jpg"
            alt=""
          />
        </div><div className={cx("info-images")}>
          <img
            src="  https://thitruongcanho.vn/wp-content/uploads/2022/06/vi-thanh-new-city-1-500.jpg"
            alt=""
          />
        </div>

      
      </div>
    </div>
  );
}

export default MatBang;
