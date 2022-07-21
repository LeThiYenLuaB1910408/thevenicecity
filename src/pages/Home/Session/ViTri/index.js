import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./ViTri.module.scss";

const cx = classNames.bind(styles);
function ViTri() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>VỊ TRÍ DỰ ÁN</Title>
        <div className={cx("info-images")}>
          <img
            src="https://thitruongcanho.vn/wp-content/uploads/2022/06/z3515794424500_a321ea0c66d2e0fd5d7ae23f19cb1ef5.jpg.webp"
            alt=""
          />
        </div>
        <div className={cx("content")}>
          <p>
            Vị trí khu đô thị <strong>The Venice City</strong> Hậu Giang sở hữu
            vị trí chiến lược, tọa lạc tại Đường 19 Tháng 8, Vị Tân, Vị Thanh,
            Hậu Giang Với quy mô 35 ha, dự án được kỳ vọng trở thành khu đô thị
            hiện đại, tâm điểm mới của TP. Vị Thanh, nắm giữ vị trí chiến lược,
            tiếp giáp với nhiều tuyến giao thông quan trọng như Lê Hồng Phong,
            Võ Nguyên Giáp vì nằm ở vị trí trắc địa nên dự án là tâm điểm của
            thành phố.
          </p>
          <p>
            Thành phố Vị Thanh đang được xem là “điểm sáng” của Hậu Giang. Khu
            vực này có tốc độ đô thị hóa nhanh, hạ tầng giao thông phát triển và
            được nhận định là thành phố sở hữu vị trí bất động sản đẹp bậc nhất
            tỉnh. Vị Thanh còn là thành phố trung tâm của tiểu vùng Tây sông Hậu
            – cửa ngõ Bắc bán đảo Cà Mau, đô thị vệ tinh của TP. Cần Thơ.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViTri;
