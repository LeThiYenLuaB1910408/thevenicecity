import classNames from "classnames/bind";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

function Title({ children}) {
    return (         <div className={cx("title")}>
    <h3 className={cx("name-title")}>{children}</h3>
    <div className={cx("")}>
      <img
        src="https://w.ladicdn.com/s500x350/5c7362c6c417ab07e5196b05/decor1-20210313073005.png"
        alt=""
      />
    </div>
  </div> );
}

export default Title;