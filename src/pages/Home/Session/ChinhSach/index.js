import classNames from "classnames/bind";
import { useState } from "react";
import Modal from "../components/Modal";
import Title from "../components/Title";
import styles from "./ChinhSach.module.scss";

const cx = classNames.bind(styles);
function ChinhSach() {
  const [active, setActive] = useState(true);

  const setDisplay = (childData) => {
    setActive(childData);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Title>Chính sách bán hàng The Venice City</Title>
        <div className={cx("content")}>
          <div className={cx("row")}>
            <div className={cx("info")}>
              <p>
                Khách hàng chọn phương thức thanh toán chuẩn sẽ được chiết khấu
                giảm giá 1%.
              </p>
              
              <p dir="ltr">
                <strong>Phương thức thanh toán siêu linh hoạt 50%:</strong>
              </p>
              <p dir="ltr">
                Khách hàng chọn phương thức thanh toán siêu linh hoạt 50% được
                chiết khấu giảm giá 6.0%.
              </p>
              
              <p dir="ltr">
                <strong>Phương thức thanh toán siêu linh hoạt 70%:</strong>
              </p>
              <p dir="ltr">
                Khách hàng chọn phương thức thanh toán siêu linh hoạt 70% được
                chiết khấu giảm giá 7.5%.
              </p>
              
              <p dir="ltr">
                <strong>Phương thức thanh toán siêu linh hoạt 95%:</strong>
              </p>
              <p dir="ltr">
                Khách hàng chọn phương thức thanh toán siêu linh hoạt 95% được
                chiết khấu giảm giá 10%.
              </p>
            
              <p dir="ltr">
                <strong>Lưu ý</strong>: Mức chiết khấu giảm giá trên giá{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  title="bán đất"
                  href="https://houseviet.vn/nha-dat-ban"
                  style={{textDecoration:"underline"}}
                >
                  bán đất
                </a>{" "}
                ( bao gồm móng cọc ), không tính trên giá trị công trình xây
                dựng phần thân. Riêng đối với các sản phẩm đã xây thô, mức chiết
                khấu giảm giá được tính trên tổng giá trị của sản phẩm.
              </p>
            </div>
          </div>
          <div className={cx("box")}>
            <div className={cx("box-group")}>
              <div className={cx("file")}>
                <div
                  className={cx("file-image")}
                  onClick={() => setActive(true)}
                >
                  <img
                    src="https://w.ladicdn.com/s350x350/5f21c40d58ec0c18ea5e1bac/ocyclar-20211211061241.png"
                    alt=""
                  />
                  <h3 className={cx("file-name")}>
                    Chính sách bán hàng The Venice City - New.pdf
                  </h3>
                </div>
                <div
                  className={cx("file-image")}
                  onClick={() => setActive(true)}
                >
                  <img
                    src="https://w.ladicdn.com/s350x350/5f21c40d58ec0c18ea5e1bac/ocyclar-20211211061241.png"
                    alt=""
                  />
                  <h3 className={cx("file-name")}>
                    Quỹ căn đẹp ngoại giao.pdf
                  </h3>
                </div>
                <div
                  className={cx("file-image")}
                  onClick={() => setActive(true)}
                >
                  <img
                    src="https://w.ladicdn.com/s350x350/5f21c40d58ec0c18ea5e1bac/ocyclar-20211211061241.png"
                    alt=""
                  />
                  <h3 className={cx("file-name")}>Bảng giá ưu đãi.pdf</h3>
                </div>
                <div
                  className={cx("file-image")}
                  onClick={() => setActive(true)}
                >
                  <img
                    src="https://w.ladicdn.com/s350x350/5f21c40d58ec0c18ea5e1bac/ocyclar-20211211061241.png"
                    alt=""
                  />
                  <h3 className={cx("file-name")}>
                    Sơ đồ phân lô The Venice City.pdf
                  </h3>
                </div>
                <div>
                  Quý ANH/CHỊ vui lòng nhập chính xác thông tin số điện thoại và
                  địa chỉ Email để chúng tôi có thể gửi toàn bộ tài liệu cho anh
                  chị nhanh và sớm nhất
                </div>
              </div>
              <div className={cx("form")} onClick={() => setActive(true)}>
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
            </div>
          </div>
        </div>
      </div>
      {active && <Modal parentCallback={setDisplay} />}
    </div>
  );
}

export default ChinhSach;
