import classNames from "classnames/bind";
import Title from "../components/Title";
import styles from "./TinTuc.module.scss";

const cx = classNames.bind(styles);
function TinTuc() {
  const listNews = [
    {
      image:
        "https://w.ladicdn.com/s600x500/62957c1637739a005da4499d/cho-noi-cai-rang-2_1624262882-20220604030846.jpg",
      text: "Chợ nổi Cái Răng Cần Thơ - Trải nghiệm độc đáo tại miền Tây sông nước",
    },
    {
      image:
        "https://w.ladicdn.com/s600x500/62957c1637739a005da4499d/birdview-2-min-20220601072745.jpg",
      text: "Mở bán giai đoạn 2 dự án Meyhomes Capital Phú Quốc - BĐS khan hiếm sở hữu lâu dài",
    },
    {
      image:
        "https://w.ladicdn.com/s600x500/62957c1637739a005da4499d/z3019449063311_a82e20bda142f2b58ee0b7653d249c38-20220601073100.jpg",
      text: "68 căn khách sạn mini ra mắt tại Phú Quốc thu hút giới đầu tư toàn quốc",
    },
    {
      image:
        "https://w.ladicdn.com/s600x500/5f21c40d58ec0c18ea5e1bac/nen-moi-1-20211210043030.jpg",
      text: "Long Beach Resort Phú Quốc – điểm sáng bất động sản nghỉ dưỡng ven biển dịp cuối năm",
    },
  ];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
      <Title>TIN TỨC CẬP NHẬT</Title>
        <div className={cx("content")}>
          {listNews.map((news,index) => (
            <div className={cx("box")} key={index}>
              <a href="https://www.facebook.com">
                <div className={cx("image")}>
                  <img src={news.image} alt="" />
                </div>
                <div className={cx("text")}>{news.text}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TinTuc;
