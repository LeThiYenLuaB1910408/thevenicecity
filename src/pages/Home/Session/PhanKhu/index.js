import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./PhanKhu.module.scss";

const cx = classNames.bind(styles);
function PhanKhu() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>Tiềm năng hạ tầng khu vực The Venice City</Title>
        <div className={cx("content")}>
          <p>
            Theo quy hoạch phát triển nhà ở địa bàn tỉnh Hậu Giang đến năm 2025,
            tầm nhìn 2030, nguồn vốn rót với đầu tư xây dựng nhà ở giai đoạn
            2021-2025 là 21.866 tỷ đồng, tương đường gần 1 tỷ USD.
          </p>
          <p>
            Trong đó, thành phố Vị Thanh, đặc biệt là khu vực trung tâm The
            Venice City tọa lạc là “đất lành” hàng đầu của dòng vốn nhờ thừa
            hưởng nhiều thể mạnh về hạ tầng phát triển kinh tế thương mại – dịch
            vụ và công nghiệp.
          </p>
          <div className={cx("info-images")}>
          <img
            src="https://thitruongcanho.vn/wp-content/uploads/2022/06/231019_cattuong_cover.jpg"
            alt=""
          />
        </div>
          <p>
            Ngoài ra, vị trí hoàn hảo ngay trung tâm Đồng bằng sông Cửu Long và
            TP. Vị Thanh, tỉnh Hậu Giang cũng là nơi có mật độ dân số tập trung
            đậm đặc, được nhiều đầu tàu hành chính lựa chọn làm nơi làm trụ sở.
          </p>
          <p>
            Định hướng tới năm 2040, thành phố Vị Thanh sẽ có vị thế là hạt nhân
            của các tỉnh tứ giác kinh tế trọng điểm gồm: Cần Thơ, Sóc Trang, Cà
            Mau và Rạch Giá. Về các dự án nổi bật, TP. Vị Thanh cũng như tỉnh
            Hậu Giang vừa đưa vào khai thác tuyến đường Quản Lộ – Phụng Hiệp,
            triển khai dự án mở rộng Quốc Lộ 61C,…
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default PhanKhu;
