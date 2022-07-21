import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import styles from "./Bubble.module.scss";
const cx = classNames.bind(styles);

function Bubble() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY >= 190);
    };
    window.addEventListener("scroll", handleScroll);
    console.log("render");
  }, []);

  const handleTop = () =>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }
  return (
    <>
      <a href="tel:0931781880" className={cx("phone")}>0931781880</a>
      <div className={cx("bubble","sms")}>
        <a href="sms:0762222217" >.</a>
      </div>
      <div className={cx("bubble","zalo")}>
        <a href="https://zalo.me/0931781880">.</a>
      </div>
      <div className={cx("bubble","mess")}>
        <a href="https://facebook.com/quoctrang12/">.</a>
      </div>
      {show && <div className={cx("bubble","top")}>
        <FontAwesomeIcon icon ={faCircleChevronUp} size="3x" onClick={handleTop}/>
      </div>}
      
    </>
  );
}

export default Bubble;
