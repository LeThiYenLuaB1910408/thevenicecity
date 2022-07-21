import classNames from "classnames/bind";
import styles from "./Error.module.scss";
const cx = classNames.bind(styles);

function Error() {
    return ( <div id={cx("message")}>
    <h2>404</h2>
    <h1>Page Not Found</h1>
    <h2>Return: <a href="https://the-venice-city.web.app">the-venice-city.web.app</a></h2>
  </div> );
}

export default Error;