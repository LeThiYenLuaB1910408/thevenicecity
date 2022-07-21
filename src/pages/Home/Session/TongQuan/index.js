import classNames from "classnames/bind";
import styles from "./TongQuan.module.scss";
import Title from "~/pages/Home/Session/components/Title";
import { useEffect, useState } from "react";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function TongQuan() {
  const subImage = [
    "https://thitruongcanho.vn/wp-content/uploads/2022/05/z3441214084890_07391e9ade3718934229d3b8837e91f0.jpg",
    "https://thitruongcanho.vn/wp-content/uploads/2022/05/z3441214109611_db69e3d0572fbb7f923d55231a3b0411.jpg",
    "https://thitruongcanho.vn/wp-content/uploads/2022/06/the-venice-city-banner2.jpg",
    "https://thitruongcanho.vn/wp-content/uploads/2022/06/Phoi-canh-du-an-Vi-Thanh-New-City-ve-dem.jpg ",
    "https://danhkhoireal.vn/wp-content/uploads/2022/06/Ho-boi-Du-an-The-Venice-City-Vi-Thanh-Hau-Giang.jpg",
  ];

  const [currentPos, setCurrentPos] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCurrentPos((prev) => (prev - 1 < 0 ? 2 : prev - 1));
    }, 5000);
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>The Venice City Vị Thanh</Title>
        <div className={cx("content")}>
          <div className={cx("row")}>
            <div className={cx("slider")}>
              <div className={cx("main-slider")}>
                <img src={subImage[currentPos]} alt="" />
                <div className={cx("prev-next")}>
                  <button
                    onClick={() => {
                      setCurrentPos((prev) =>
                        prev - 1 < 0 ? subImage.length - 1 : prev - 1
                      );
                    }}
                  >
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </button>
                  <button
                    onClick={() => {
                      if (currentPos > subImage.length - 1) {
                        setCurrentPos(0);
                      } else
                        setCurrentPos((prev) =>
                          prev + 1 > subImage.length - 1 ? 0 : prev + 1
                        );
                    }}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </button>
                </div>
              </div>
              <div className={cx("sub-slider")}>
                {subImage.map((image, index) => (
                  <div
                    className={cx("sub-img")}
                    key={index}
                    onClick={() => {
                      setCurrentPos(index);
                    }}
                  >
                    <img src={image} alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div className={cx("info")}>
              <div className={cx("info-details")}>
                <ul style={{ listStyle: "none" }}>
                  <li className={cx("detail")}>
                    {" "}
                    <img src={images.kimcuong} alt="" />
                    <span className={cx("headline")}>Tên dự án: </span>{" "} The
                    Venice City
                  </li>
                  <li className={cx("detail")}>
                    {" "}
                    <img src={images.kimcuong} alt="" />
                    <span className={cx("headline")}>Vị trí: </span>{" "} Đường 19/8,
                    Vị Tân, Vị Thanh, Hậu Giang
                  </li>
                  <li className={cx("detail")}>
                    <img src={images.kimcuong} alt="" />
                    <span className={cx("headline")}>Chủ đầu tư:</span>{" "} Công ty
                    Cổ phần Liên Minh
                  </li>
                  <li className={cx("detail")}>
                    <img src={images.kimcuong} alt="" />
                    <span className={cx("headline")}>Quy mô: </span>{" "} 35 ha.
                  </li>
                  <li className={cx("detail")}>
                    <img src={images.kimcuong} alt="" />
                    <span className={cx("headline")}>Diện tích: </span>{" "} 80 - 135
                    m2
                  </li>
                  <li className={cx("detail")}>
                    <img src={images.kimcuong} alt="" />
                    <span className={cx("headline")}>
                      Số lượng sản phẩm:
                    </span>{" "}{" "}
                    1.375 m2
                  </li>
                  <li className={cx("detail")}>
                    <img src={images.kimcuong} alt="" />
                    <span className={cx("headline")}>Dân số dự kiến:</span>{" "}{" "}
                    10.000 người
                  </li>
                  <li className={cx("detail")}>
                    <img src={images.kimcuong} alt="" />
                    <span className={cx("headline")}>Hình thức sở hữu:</span>{" "} Sổ
                    đỏ từng lô
                  </li>
                  <li className={cx("detail")}>
                    <img src={images.kimcuong} alt="" />
                    <span className={cx("headline")}>Giá bán:</span>{" "} 14.5
                    triệu/m2
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cx("row")}>
            <div className={cx("info-details")}>
              <div className={cx("detail")}>
                <img src={images.kimcuong} alt="" />
                <span className={cx("headline")}>Tiện ích:</span>{" "}
              </div>
              <div style={{ marginLeft: "32px" }}>
                Khu thương mại và dịch vụ, khu cơ quan hành chính, trường học,
                cơ sở y tế, các loại hình nhà ở, công viên, cảnh quan xanh &
                khuôn viên thể dục thể thao, nhà hàng, trung tâm spa - gym, ...
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("video")}>
        <iframe
          className={cx("video-main")}
          src="https://www.youtube.com/embed/gCJYPuRpn9E?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay;"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default TongQuan;
