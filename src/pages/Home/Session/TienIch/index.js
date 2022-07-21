import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./TienIch.module.scss";

const cx = classNames.bind(styles);
function TienIch() {
  const listImg = [
    {
      src:
        "https://thitruongcanho.vn/wp-content/uploads/2022/06/the-venice-city-ho-canh-quan.jpg",
    },
    { src: "https://thitruongcanho.vn/wp-content/uploads/2022/06/tien-ich-Vi-Thanh-New-City-Hau-Giang.jpg" },
    { src: "https://thitruongcanho.vn/wp-content/uploads/2022/05/z3441214092183_81b54cc8f56b38564ba2ec0700e69e69.jpg.webp" },
    { src: "https://thitruongcanho.vn/wp-content/uploads/2022/05/z3441214091021_0d293067e911b0c22bfe28bcbded9e0e.jpg" },
    { src: "https://thitruongcanho.vn/wp-content/uploads/2022/05/z3441214121316_d42a6ac29d3020a3d9747a6c2defbe3d.jpg" },
  ];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>TIỆN ÍCH The Venice City</Title>

        <div className={cx("content")}>
          <p>
            <strong>Tiện ích khu đô thị The Venice City </strong>mang đến
            nhiều&nbsp;tổ hợp hiện đại và hữu ích không chỉ với cư dân sống
            trong khu đô thị mà còn cho cả người dân xung quanh. Khách hàng
            trong nước và quốc tế thực sự bị thu hút với những tòa nhà sang
            trọng được bao quanh bởi hàng loạt những tiện ích đẳng cấp. Ngoài sở
            hữu vị trí đắc địa,<strong> The Venice Ciy Vị Thanh</strong>
            &nbsp;còn mang đến cộng đồng dân cư một hệ sinh thái hoàn chỉnh, sẵn
            sàng đáp ứng mọi nhu cầu về thương mại – dịch vụ, giáo dục, y tế,
            vui chơi, giải trí, nghỉ dưỡng ngay trong khuôn viên dự án. Chẳng
            cần di chuyển xa xôi, chỉ cách vài bước chân từ căn nhà phố là tới:
          </p>
          <ul style={{ marginLeft: "3rem" }}>
            <li>Thác nước cảnh quan</li>
            <li>Biểu tượng dự án</li>
            <li>Trun tâm thương mại</li>
            <li>
              Tiện ích thuộc trung tâm thương mại : nhà hàng, coffee, game
              center,…
            </li>
            <li>Đường dạo bộ</li>
            <li>Ghế nghỉ ngoài trời</li>
            <li>Bức tường xanh check in</li>
            <li>Tượng trang trí nghệ thuật</li>
            <li>Trường mẫu giáo quốc tế</li>
            <li>Vườn thực hành nhà trẻ</li>
            <li>Hệ thống shophouse</li>
            <li>Vườn nướng BQQ ngoài trời</li>
            <li>Khu chăm sóc sắc đẹp và spa</li>
            <li>Khu thư giãn ngoài trời</li>
            <li>…….</li>
          </ul>
        </div>
        <div className={cx("image")}>
          {listImg.map((img, index) => (<div className={cx("info-images")} key={index}>
            <img src={img.src} alt="" />
          </div>))}
        </div>

      </div>
    </div>
  );
}

export default TienIch;
