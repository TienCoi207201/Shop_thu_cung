import React from 'react'
import './App.css'
import MeoAnh from './img/meo-anh-long-dai-nguon-goc-dac-diem-va-gia-cua-meo-anh-long-dai-1.jpg'
import TiemPhong from './img/tiem-phong-cho-cho1.jpg'
import ThucAnCho from './img/thuc-an-hat-cho-cho-poodle-nature-source-love-.jpg'
import ThuCung2 from './img/thu-cung-2.jpg'
import ChoPhoc from './img/cho-phoc-soc-dep-09.jpg'
import Phoc1 from './img/phoc1.jpg'
import Alaska from './img/alasca.jpg'
import Akita from './img/Akita-Ven-C12473-1.jpg'
import Poodleto from './img/poodleto.jpg'
import Golden from './img/golden.jpg'
import NgaoHusky from './img/ngaohusky.jpg'
import Corgi from './img/corgi.jpg'


function App() {
  return (
    <>
      <div class="app">
        <header class="header">
            <div class="grid">
                <nav class="header__navbar">
                    <ul class="header__navbar-list">
                        <li class="header__navbar-item header__navbar-item-separate">Vào cửa hàng thú cưng</li>
                        <li class="header__navbar-item">Kết nối
                            <a href="" class="header__navbar-icon-link">
                                <i class="fa-brands fa-facebook-square"></i>
                            </a>
                            <a href="" class="header__navbar-icon-link">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                    <ul class="header__navbar-list">
                        <li class="header__navbar-item header__navbar-item--has-notify">
                            <a href="" class="header__navbar-item-link">
                                <i class="fa-solid fa-bell"></i>
                                Thông báo</a>
                                <div class="header__notify">
                                    <header class="header__notify-header">
                                        <h3>Thông báo mới nhận</h3>
                                    </header>
                                    <ul class="header__notify-list">
                                        <li class="header__notify-item">
                                            <a href="" class="header__notify-link">
                                                <img src={ChoPhoc} alt="" class="header__notify-img"/>
                                                <div class="header__notify-info">
                                                    <span class="header__notify-name">Chó phốc sóc thuần chủng</span>
                                                    <span class="header__notify-detail">Giảm ngay 30% từ ngày...</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="header__notify-item">
                                            <a href="" class="header__notify-link">
                                                <img src={MeoAnh} alt="" class="header__notify-img"/>
                                                <div class="header__notify-info">
                                                    <span class="header__notify-name">Mèo anh lông dài sắp xuất chuồng</span>
                                                    <span class="header__notify-detail">Bạn là một người yêu mèo thì còn chần chờ gì nữa hãy...</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="header__notify-item">
                                            <a href="" class="header__notify-link">
                                                <img src={TiemPhong} alt="" class="header__notify-img"/>
                                                <div class="header__notify-info">
                                                    <span class="header__notify-name">Tiêm phòng cho thú cưng</span>
                                                    <span class="header__notify-detail">Tại sao phải tiêm phòng cho thú cưng? </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="header__notify-item">
                                            <a href="" class="header__notify-link">
                                                <img src={ThucAnCho} alt="" class="header__notify-img"/>
                                                <div class="header__notify-info">
                                                    <span class="header__notify-name">Thức ăn dành cho chó poodle</span>
                                                    <span class="header__notify-detail">Nếu bạn không cho thú cưng ăn đúng đồ ăn thì hậu quả...</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="header__notify-item">
                                            <a href="" class="header__notify-link">
                                                <img src={ThuCung2} alt="" class="header__notify-img"/>
                                                <div class="header__notify-info">
                                                    <span class="header__notify-name">Bảng giá spa cho thú cưng nhân ngày 30/4-1/5</span>
                                                    <span class="header__notify-detail">giảm ngay 10% cho các dịch vụ spa và...</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <footer class="header__notify-footer">
                                        <a href="" class="header__notify-footer-btn">Xem tất cả</a>
                                    </footer>
                                </div>
                        </li>
                        <li class="header__navbar-item">
                            <a href="" class="header__navbar-item-link">
                                <i class="fa-solid fa-circle-question"></i>
                                Trợ giúp</a>
                        </li>
                        <a href="./login.html">
                            <li class="header__navbar-item header__navbar-item--strong header__navbar-item-separate">Đăng nhập</li>
                        </a>
                        <a href="./signup.html">
                            <li class="header__navbar-item header__navbar-item--strong">Đăng ký</li> 
                        </a>
                    </ul>
                </nav> 
                <div class="header-with-search">
                    <div class="header__logo">
                        <a href="./index.html">
                            <img width="360" height="120" src="https://dogily.vn/wp-content/uploads/2020/07/dogily-logo.png" class="header-logo-dark" alt="Dogily Petshop – Mua Bán Chó Mèo Cảnh Tphcm, Hà Nội &amp; Đà Lạt"/>
                        </a>
                    </div>
                    <div class="header__search">
                        <input type="" class="header__search-input" placeholder="Nhập thú cưng cần tìm "/>
                        <a href="" class="header__search-link">
                            <i class="header__search-search fa-solid fa-magnifying-glass"></i>
                        </a>
                    </div>
                    <div class="header__cart">
                        <a href="./cart.html">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </a>
                    </div>
                </div>
                <div class="header__suggest">
                    <a href="" class="header__suggest-link">Sữa tắm cho chó</a>
                    <a href="" class="header__suggest-link">Chó poodle trưởng thành</a>
                    <a href="" class="header__suggest-link">Mèo anh lông ngắn </a>
                    <a href="" class="header__suggest-link">Thông báo mới</a>
                </div>
            </div>
        </header>
        <main class="cartegory">
            <div class="container">
                <div class="cartegory-top row">
                    <p>Trang chủ</p><p>- Chó cảnh</p>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="grid__column-2">
                        <nav class="category category-danhmuc">
                            <ul class="category-list">
                                <li class="category-item category-item--active">
                                    <a href="./danhmuc.html" class="categoty-item__link">Chó cảnh</a>
                                </li>
                                <li class="category-item">
                                    <a href="#" class="categoty-item__link">Mèo cảnh </a>
                                </li>
                                <li class="category-item">
                                    <a href="#" class="categoty-item__link">Đồ ăn hạt dành cho chó mèo</a>
                                </li>
                                <li class="category-item">
                                    <a href="#" class="categoty-item__link">Mèo cảnh</a>
                                </li>
                                <li class="category-item">
                                    <a href="#" class="categoty-item__link">Cá cảnh</a>
                                </li>
                                <li class="category-item ">
                                    <a href="#" class="categoty-item__link">Chuột humter</a>
                                </li>
                                <li class="category-item ">
                                    <a href="#" class="categoty-item__link">Chim cảnh</a>
                                </li>
                                <li class="category-item ">
                                    <a href="#" class="categoty-item__link">Phụ kiện cho mèo</a>
                                </li>
                                <li class="category-item ">
                                   <a href="#" class="categoty-item__link category-item-end">Xem thêm</a>
                               </li>
                            </ul>
                        </nav>
                        </div>
                    <div class="cartegory-right">
                        <div class="cartegory-right-top row">
                            <div class="cartegory-right-top-item ">
                                <p>- Chó cảnh</p>
                            </div>
                            <div class="cartegory-right-top-item">
                                <button><span>Bộ lọc</span><i class="fas fa-sort-down"></i></button>
                            </div>
                            <div class="cartegory-right-top-item">
                                <select name="" id="">
                                    <option value="">Sắp xếp</option>
                                    <option value="">Giá cao đến thấp</option>
                                    <option value="">Giá thấp đến cao</option>
                                </select>
                            </div>
                        </div>
                        <div class="category-right-content">
                            <div class="cartegory-right-content-1">
                                <div class="cartegory-right-content-item ">
                                    <img src={Phoc1} alt=""/>
                                    <h1>Chó phốc sóc trắng</h1>
                                    <p>7.790.000<sup>đ</sup></p>
                                </div>
                                <div class="cartegory-right-content-item">
                                    <img src={Alaska} alt=""/>
                                    <h1>Chó Alaska nhập khẩu </h1>
                                    <p>7.790.000<sup>đ</sup></p>
                                </div>
                                <div class="cartegory-right-content-item">
                                    <img src={Akita} alt=""/>
                                    <h1>Chó Akita vện</h1>
                                    <p>9.000.000<sup>đ</sup></p>
                                </div>
                                <div class="cartegory-right-content-item">
                                    <img src={Poodleto} alt=""/>
                                    <h1>Chó poodle tini 2 tháng tuổi</h1>
                                    <p>10.330.000<sup>đ</sup></p>
                                </div>
                            </div>
                            <div class="cartegory-right-content-2">
                                <div class="cartegory-right-content-item">
                                    <img src={Poodleto} alt=""/>
                                    <h1>Poodle Toy khổng lồ</h1>
                                    <p>22.999.000<sup>đ</sup></p>
                                </div>
                                <div class="cartegory-right-content-item">
                                    <img src={NgaoHusky} alt=""/>
                                    <h1>Ngáo Husky </h1>
                                    <p>10.790.000<sup>đ</sup></p>
                                </div>
                                <div class="cartegory-right-content-item">
                                    <img src={Corgi} alt=""/>
                                    <h1>Corgi mông bự nhập khẩu</h1>
                                    <p>20.790.000<sup>đ</sup></p>
                                </div>
                                <div class="cartegory-right-content-item">
                                    <img src={Golden} alt=""/>
                                    <h1>Golden trưởng thành </h1>
                                    <p>21.000.000<sup>đ</sup></p>
                                </div>
                            </div>
                        </div>
                        <div class="cartegory-right-bottom row">
                            <div class="cartegory-right-bottom-items">
                                <p>Trang 2 <span>&#124;</span> 5 trang</p>
                            </div>
                            <div class="cartegory-right-bottom-items">
                                <p><span>&#171;</span> 1 2 3 4 5 <span>&#187;</span> Trang cuối</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer class="footer">
            <div class="grid">
                <div class="grid__row">
                    <div class="grid__column-2-4">
                        <h3 class="footer__heading">Thú cưng bán chạy </h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Chó Alaska </a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Mèo tam thể </a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Chuột humster vàng chanh</a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Chuột humster mắt đỏ</a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Cá kiếm</a>
                                </li>
                            </li>
                        </ul>
                    </div>
                    <div class="grid__column-2-4">
                        <h3 class="footer__heading">Danh mục thú cưng</h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Chó cảnh</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Mèo cảnh</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Đồ ăn hạt dành cho mèo</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Chuột cảnh</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Cá cảnh</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Chim cảnh </a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Phụ kiện thú cưng </a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Cát mèo</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Khay vệ sinh</a>
                            </li>
                        </ul>
                    </div>
                    <div class="grid__column-2-4">
                        <h3 class="footer__heading">Danh mục tin tức </h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Thú cưng chuẩn bị xuất chuồng</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Thông tin khuyến mãi</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Thức ăn thú cưng</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Cách nuôi chó Alaska</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Cách nuôi chuột humster</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Chính sách giao hàng </a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Chính sách đổi trả</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Chính sách bảo mật </a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Chính sách chung </a>
                            </li>
                        </ul>
                    </div>
                    <div class="grid__column-2-4">
                        <h3 class="footer__heading">Liên kết mạng xã hội </h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="" class="footer-item__link">
                                    <i class="footer-item__icon fab fa-facebook-square"></i>
                                    Facebook
                                </a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">
                                    <i class="footer-item__icon fab fa-twitter"></i>
                                    Twitter 
                                </a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">
                                    <i class="footer-item__icon fab fa-pinterest-p"></i>
                                    Pintersrt
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="grid__column-2-4">
                        <h3 class="footer__heading">Sản phẩm nổi bật</h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Pate cho mèo gói 350g vị cá ngừ</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Pate cho mèo gói 1,2kg vị hải sản</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Hạt cho chó</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Vòng cổ cho chó</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Chuồng cho humster</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Thức ăn cho cá</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Phụ kiện trang trí bể cá noel</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">chuồng chim</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="grip">
                    <p class="footer__text">2021 - Shop thú cưng petville</p>
                </div>
            </div>
        </footer>
    </div>
    </>
  );
}

export default App;
