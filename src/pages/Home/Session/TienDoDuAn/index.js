import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import Title from "../components/Title";
import styles from "./TienDoDuAn.module.scss";

const cx = classNames.bind(styles);
function TienDoDuAn() {
  const listImg = [
    {
      src: "https://thitruongcanho.vn/wp-content/uploads/2022/06/z3515792876238_da8c039908472f8374a3c0374a447abb.jpg",
    },
    {
      src: "https://thitruongcanho.vn/wp-content/uploads/2022/06/z3515792876239_7494b976949b7a5218aff9fd26ee3afe.jpg",
    },
    {
      src: "https://thitruongcanho.vn/wp-content/uploads/2022/06/z3515792876240_1a0bb42d6b882751ccabb17073969ab4.jpg",
    },
    {
      src: "https://thitruongcanho.vn/wp-content/uploads/2022/06/z3515792876241_e287cfba1cd3a716315f0c0b957075d0.jpg",
    },
    {
      src: "https://thitruongcanho.vn/wp-content/uploads/2022/06/z3515792882466_580517d58fb9394f9124c9bb55a2af33.jpg",
    },
    {
      src: "https://thitruongcanho.vn/wp-content/uploads/2022/06/z3515792882467_432cea82fc547bf14c8ae95290275afa.jpg",
    },
    {
      src: "https://danhkhoireal.vn/wp-content/uploads/2022/06/Tien-do-thi-cong-The-Venice-City-Vi-Thanh-Hau-Giang-5-1536x864.jpg",
    },
  ];
  const [currentPos, setCurrentPos] = useState(0);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>Tiến độ dự án The Venice City</Title>
        <div className={cx("slider")}>
          <div className={cx("img-main")}>
            <img src={listImg[currentPos].src} alt="" />
            <div className={cx("prev-next")}>
              <button
                onClick={() => {
                  setCurrentPos((prev) =>
                    prev - 1 < 0 ? listImg.length - 1 : prev - 1
                  );
                }}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <button
                onClick={() => {
                  if (currentPos > listImg.length - 1) {
                    setCurrentPos(0);
                  } else
                    setCurrentPos((prev) =>
                      prev + 1 > listImg.length - 1 ? 0 : prev + 1
                    );
                }}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>
          <div className={cx("img-sub")}>
            {listImg.map((image, index) => (
              <div
                className={cx("images")}
                key={index}
                onClick={() => {
                  setCurrentPos(index);
                }}
              >
                <img src={image.src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TienDoDuAn;
