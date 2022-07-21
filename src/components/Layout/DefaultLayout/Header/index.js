import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import {Link} from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);
function Header() {
  const handleClick=()=>{
    document.getElementById("container").classList.toggle(cx("hidden"));
    
  }
  return (
    <div className={cx("wrapper")}>
      <FontAwesomeIcon className={cx("menu")} icon={faBars} onClick={handleClick}/>
        <div><img className={cx("logo-2")} alt="logo" src="https://danhkhoireal.vn/wp-content/uploads/2022/06/Logo-The-Venice-City.png"/></div>
      <div className={cx("container")} id="container">
        <div><Link to="TongQuan" activeClass="active" spy={true} smooth={true} duration={500}>Tổng Quan</Link></div>
        <div><Link to="ViTri" activeClass="active" spy={true} smooth={true} duration={500}>Vị Trí</Link></div>
        <div><Link to="TienIch" activeClass="active" spy={true} smooth={true} duration={500}>Tiện Ích</Link></div>
        <div><Link to="MatBang" activeClass="active" spy={true} smooth={true} duration={500}>Mặt Bằng</Link></div>
        <div><img className={cx("logo")} alt="logo" src="https://danhkhoireal.vn/wp-content/uploads/2022/06/Logo-The-Venice-City.png"/></div>
        <div><Link to="ChinhSach" activeClass="active" spy={true} smooth={true} duration={500}>Chính Sách</Link></div>
        <div><Link to="TienDoDuAn" activeClass="active" spy={true} smooth={true} duration={500}>Tiến Độ Dự Án</Link></div>
        <div><Link to="TinTuc" activeClass="active" spy={true} smooth={true} duration={500}>Tin Tức</Link></div>
        <div><Link to="LienHe" activeClass="active" spy={true} smooth={true} duration={500}>Liên Hệ</Link></div>
      </div>
    </div>
  );
}

export default Header;

