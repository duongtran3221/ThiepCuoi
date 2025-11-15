import React, { useEffect } from 'react';
import './App.css';
import logo_wedding from './assets/logo-wedding.png';
import gif from './assets/gif.gif';
import border from './assets/borderTopLeft.png';
import bg from './assets/bg.jpg'
function App() {
  useEffect(() => {
    // Thêm hiệu ứng scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className='content'>
        {/* Phần đầu với hiệu ứng text reveal */}
        <div className='top_content' style={{ backgroundImage: `url(${bg})` }}>
          <img src={logo_wedding} className='logo_wedding heart-beat' alt="Wedding Logo"></img>
          
          <div className='couple_name text-reveal'> 
            <span className='couple_name_style name-glow'>Bá Đại & Mai Liên</span>
          </div>

          <div className='couple_date text-reveal text-reveal-delay-1'> 
            <span className='couple_date_style'>29.11.2025 | Chủ nhật</span>
          </div>
          
          <div className='couple_text text-reveal text-reveal-delay-2'> 
            <span className='couple_text_style' style={{ fontStyle: "unset", fontSize: "12px" }}>Trân trọng kính mời</span>
          </div>
          
          <div className='couple_text text-reveal text-reveal-delay-2'> 
            <span className='couple_text_style' style={{ fontStyle: "italic", fontWeight: "600" }}>Bạn và người thương</span>
          </div>
          
          <div className='couple_text text-reveal text-reveal-delay-3'> 
            <span className='couple_text_style' style={{ height: "2px" }}>..................................</span>
          </div>
          
          <div className='couple_text text-reveal text-reveal-delay-3'> 
            <span className='couple_text_style'>Tham dự tiệc cưới của chúng tôi</span>
          </div>

          <div className='text-reveal text-reveal-delay-4'>
            <img 
              src={logo_wedding} 
              alt="Couple" 
              style={{ 
                width: "200px", 
                height: "200px", 
                borderRadius: "20px", 
                background: "linear-gradient(45deg, #ff9baa, #f5627a)", 
                marginTop: "20px",
                padding: "10px",
                boxShadow: "0 10px 25px rgba(245, 98, 122, 0.3)"
              }}
            />
          </div>
          
          <div className='couple_text text-reveal text-reveal-delay-4'> 
            <span 
              className='couple_text_style' 
              style={{ fontSize: "12px", fontStyle: "unset" }}
            >
              Duyên trời định, tình đất chứng, trăm năm hữu hảo
            </span>
          </div>
        </div>

        {/* Phần giữa với hiệu ứng scroll */}
        <div className='medium_content'>
          {/* Nhà gái */}
          <div className='girl_family fade-in-scroll'>
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "center", 
              alignItems: "center", 
            }}>
              <div className='girl_name pulse-border'>
                <span className='girl_name_style'>Cô</span>
                <span className='girl_name_style'>dâu</span>
                <span className='girl_name_style'>Mai</span>
                <span className='girl_name_style'>Liên</span>
              </div>
              <img src={gif} style={{ width: "25px", height: "60px" }} alt="Decoration" className='float-animation'></img>
            </div>

            <div className='girl_family_details'>
              <span style={{ fontSize: "16px", fontWeight: "600", color: "#f5627a" }}>Nhà gái</span>
              <span style={{ fontWeight: "600", fontStyle: "italic", color: "burlywood", fontFamily: "cursive" }}>Ông: Trần Văn A</span>
              <span style={{ fontWeight: "600", fontStyle: "italic", color: "burlywood", fontFamily: "cursive" }}>Bà: Lê Thị B</span>
              <span style={{ fontSize: "14px", color: "#666" }}>Thôn XX, xã YY, tỉnh ZZ</span>
            </div>
            
            <div style={{ flex: 1, marginRight: "3px" }}>
              <img 
                src={logo_wedding} 
                alt="Bride" 
                className='float-animation'
                style={{ 
                  width: "140px", 
                  height: "190px", 
                  borderRadius: "80px", 
                  background: "linear-gradient(45deg, #ff9baa, #f5627a)",
                  marginTop: "20px",
                  padding: "5px",
                  boxShadow: "0 8px 20px rgba(245, 98, 122, 0.3)"
                }}
              />
            </div>
          </div>

          {/* Nhà trai */}
          <div className='boy_family fade-in-scroll'>
            <div style={{ flex: 1, marginLeft: "3px" }}>
              <img 
                src={logo_wedding} 
                alt="Groom"
                className='float-animation'
                style={{ 
                  width: "140px", 
                  height: "190px", 
                  borderRadius: "80px", 
                  background: "linear-gradient(45deg, #ff9baa, #f5627a)",
                  marginTop: "20px",
                  padding: "5px",
                  boxShadow: "0 8px 20px rgba(245, 98, 122, 0.3)"
                }}
              />
            </div>
            
            <div className='girl_family_details'>
              <span style={{ fontSize: "16px", fontWeight: "600", color: "#f5627a" }}>Nhà trai</span>
              <span style={{ fontWeight: "600", fontStyle: "italic", color: "burlywood", fontFamily: "cursive" }}>Ông: Trần Văn C</span>
              <span style={{ fontWeight: "600", fontStyle: "italic", color: "burlywood", fontFamily: "cursive" }}>Bà: Lê Thị D</span>
              <span style={{ fontSize: "14px", color: "#666" }}>Thôn XX, xã YY, tỉnh ZZ</span>
            </div>
            
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "center", 
              alignItems: "center", 
              marginRight: "15px" 
            }}>
              <div className='girl_name pulse-border'>
                <span className='girl_name_style'>Chú</span>
                <span className='girl_name_style'>rể</span>
                <span className='girl_name_style'>Bá</span>
                <span className='girl_name_style'>Đại</span>
              </div>
              <img src={gif} style={{ width: "25px", height: "60px" }} alt="Decoration" className='float-animation'></img>
            </div>
          </div>

          {/* Thông báo */}
          <div className='notice fade-in-scroll'>
            <img src={border} style={{ width: "120px", height: "120px", position: "absolute", left: 0 }} alt="Border"></img>
            <img
              src={border} 
              style={{ width: "120px", height: "120px", position: "absolute", right: 0, transform: "scaleX(-1)" }}
              alt="Border"
            />
            
            <div className='notice_content' style={{ zIndex: 2 }}>
              <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "space-between" }}>
                <div className='girl_family_details' style={{ marginTop: "0" }}>
                  <span style={{ fontSize: "16px", fontWeight: "600", color: "#f5627a" }}>Nhà gái</span>
                  <span style={{ fontWeight: "600", fontStyle: "italic", color: "burlywood", fontFamily: "cursive" }}>Ông: Trần Văn A</span>
                  <span style={{ fontWeight: "600", fontStyle: "italic", color: "burlywood", fontFamily: "cursive" }}>Bà: Lê Thị B</span>
                  <span style={{ fontSize: "14px", color: "#666" }}>Thôn XX, xã YY, tỉnh ZZ</span>
                </div>
                
                <div className='girl_family_details' style={{ marginTop: "0" }}>
                  <span style={{ fontSize: "16px", fontWeight: "600", color: "#f5627a" }}>Nhà trai</span>
                  <span style={{ fontWeight: "600", fontStyle: "italic", color: "burlywood", fontFamily: "cursive" }}>Ông: Trần Văn C</span>
                  <span style={{ fontWeight: "600", fontStyle: "italic", color: "burlywood", fontFamily: "cursive" }}>Bà: Lê Thị D</span>
                  <span style={{ fontSize: "14px", color: "#666" }}>Thôn XX, xã YY, tỉnh ZZ</span>
                </div>
              </div>
              
              <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                textAlign: "center",
                marginTop: "20px"
              }}>
                <span style={{ fontSize: "16px", color: "#f5627a", marginBottom: "10px" }}>Trân trọng báo tin</span>
                <span style={{ marginBottom: "15px" }}>
                  <span style={{ fontWeight: "600", color: "#f5627a" }}>Lễ vu quy </span>
                  <span style={{ color: "#666" }}>của chúng con</span>
                </span>
                <span style={{ fontSize: "28px", fontStyle: "italic", color: "#f5627a", fontWeight: "500" }} className='name-glow'>Mai Liên</span>
                <span style={{ color: "#f5627a", margin: "5px 0" }}>&</span>
                <span style={{ fontSize: "28px", fontStyle: "italic", color: "#f5627a", fontWeight: "500" }} className='name-glow'>Bá Đại</span>
              </div>
            </div>
            
            <img
              src={border} 
              style={{ width: "120px", height: "120px", position: "absolute", left: 0, top: 150, transform: "scaleY(-1)" }}
              alt="Border"
            />
            <img
              src={border} 
              style={{ width: "120px", height: "120px", position: "absolute", right: 0, top: 150, transform: "scale(-1, -1)" }}
              alt="Border"
            />
          </div>

          {/* Ngày cưới */}
          <div className='date_wedding fade-in-scroll'>
            <div className='container_date'>
              <img src={logo_wedding} className='logo_wedding heart-beat' alt="Logo"></img>
              <span style={{ fontSize: "20px", fontWeight: "600", color: "#f5627a", margin: "10px 0" }}>Lễ vu quy</span>
              <span style={{ color: "#666", marginBottom: "15px" }}>Vào lúc 8 giờ 00</span>
              <hr width="80%" style={{ border: "1px solid #ff9baa", margin: "15px 0" }}></hr>
              
              <div style={{ 
                width: "75%", 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                margin: "15px 0"
              }}>
                <span style={{ color: "#f5627a", fontWeight: "500" }}>CHỦ NHẬT</span> 
                <span style={{ 
                  width: "40px", 
                  height: "40px", 
                  lineHeight: "40px", 
                  borderRadius: "50%", 
                  background: "linear-gradient(45deg, #ff9baa, #f5627a)",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "18px",
                  boxShadow: "0 5px 15px rgba(245, 98, 122, 0.3)"
                }}>30</span> 
                <span style={{ color: "#f5627a", fontWeight: "500" }}>THÁNG 11</span>
              </div>
              
              <hr width="80%" style={{ border: "1px solid #ff9baa", margin: "15px 0" }}></hr>
              <span style={{ fontSize: "18px", fontWeight: "600", color: "#f5627a", margin: "10px 0" }}>2025</span>
              <span style={{ color: "#666", fontSize: "14px", marginBottom: "20px" }}>( Tức ngày .. tháng .. năm .. )</span>
              
              <div style={{ 
                background: "rgba(255, 245, 245, 0.8)", 
                padding: "15px", 
                borderRadius: "15px",
                margin: "15px 0",
                width: "80%"
              }}>
                <span style={{ color: "#f5627a", fontWeight: "500" }}>Bữa tiệc thân mật</span>
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  marginTop: "10px",
                  padding: "0 20px"
                }}>
                  <span style={{ color: "#666" }}>Thứ bảy</span> 
                  <span style={{ fontWeight: "600", color: "#f5627a" }}>17h00</span>
                </div>
              </div>
              
              <span style={{ fontWeight: "600", color: "#f5627a", margin: "5px 0" }}>29.11.2025</span>
              <span style={{ color: "#666", fontSize: "14px" }}>( Tức ngày .. tháng .. năm .. )</span>
            </div>
          </div>

          {/* Địa điểm */}
          <div className='location fade-in-scroll'>
            <span style={{ fontSize: "24px", fontWeight: "600", color: "#f5627a", marginBottom: "15px" }}>Địa điểm tổ chức</span>
            <span style={{ fontSize: "16px", color: "#666", marginBottom: "20px" }}>Thôn Lê Lợi, xã Chí Minh, tỉnh Hưng Yên</span>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.7025590543262!2d105.98948611079233!3d20.762846496778828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135b9f9d9be5fb3%3A0x96957b4b1816e166!2zTmjDoCB2xINuIGjDs2EgdGjDtG4gTMOqIEzhu6Np!5e0!3m2!1svi!2s!4v1763147040731!5m2!1svi!2s"
              width="85%"
              height="250"
              style={{ 
                border: "0", 
                borderRadius: "15px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px"
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Location"
            />
            
            <a 
              href='https://www.google.com/maps/place/Nh%C3%A0+v%C4%83n+h%C3%B3a+th%C3%B4n+L%C3%AA+L%E1%BB%A3i/@20.7628415,105.9920664,17z/data=!3m1!4b1!4m6!3m5!1s0x3135b9f9d9be5fb3:0x96957b4b1816e166!8m2!3d20.7628415!4d105.9920664!16s%2Fg%2F11rgdk1tlg?entry=ttu&g_ep=EgoyMDI1MTExMS4wIKXMDSoASAFQAw%3D%3D' 
              target='_blank' 
              rel="noopener noreferrer"
              style={{
                color: "#f5627a",
                textDecoration: "none",
                fontWeight: "500",
                padding: "10px 20px",
                border: "2px solid #f5627a",
                borderRadius: "25px",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#f5627a";
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#f5627a";
              }}
            >
              Xem chỉ đường
            </a>
          </div>

          {/* Sự kiện cưới */}
          <div className='event_wedding fade-in-scroll'>
            <span style={{ fontSize: "24px", fontWeight: "600", color: "#f5627a" }}>Sự kiện cưới</span>
            <div style={{
              width: "80%",
              margin: "20px auto",
              padding: "20px",
              background: "linear-gradient(135deg, rgba(255, 245, 245, 0.8), rgba(255, 255, 255, 0.8))",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0" }}>
                <span style={{ fontWeight: "500", color: "#f5627a" }}>Lễ thành hôn</span>
                <span style={{ color: "#666" }}>08:00 - 10:00</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0" }}>
                <span style={{ fontWeight: "500", color: "#f5627a" }}>Tiệc trưa</span>
                <span style={{ color: "#666" }}>11:30 - 14:00</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0" }}>
                <span style={{ fontWeight: "500", color: "#f5627a" }}>Chụp ảnh</span>
                <span style={{ color: "#666" }}>14:30 - 16:00</span>
              </div>
            </div>
          </div>

          {/* Hộp cưới */}
          <div className='box_wedding fade-in-scroll'>
            <span style={{ fontSize: "24px", fontWeight: "600", color: "#f5627a", marginBottom: "15px" }}>Hộp cưới</span>
            <span style={{ 
              fontSize: "16px", 
              color: "#666", 
              marginBottom: "20px",
              width: "80%",
              textAlign: "center",
              lineHeight: "1.6"
            }}>
              Cảm ơn bạn rất nhiều vì đã gửi những lời chúc tốt đẹp nhất đến với đám cưới của chúng tôi
            </span>
            
            <div style={{
              display: "flex", 
              width: "90%", 
              justifyContent: "space-between",
              alignItems: "center",
              background: "rgba(255, 245, 245, 0.8)",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)"
            }}> 
              <img 
                src={logo_wedding} 
                width={100} 
                height={100} 
                alt="Bank QR"
                style={{
                  borderRadius: "10px",
                  background: "linear-gradient(45deg, #ff9baa, #f5627a)",
                  padding: "5px"
                }}
              />
              
              <div style={{
                display: "flex", 
                flexDirection: "column", 
                width: "70%", 
                textAlign: "left", 
                marginLeft: "20px"
              }}>
                <span style={{ margin: "5px 0", color: "#666" }}>
                  <strong style={{ color: "#f5627a" }}>Ngân hàng:</strong> VietinBank
                </span>
                <span style={{ margin: "5px 0", color: "#666" }}>
                  <strong style={{ color: "#f5627a" }}>Tên tài khoản:</strong> Trần Bá Đại
                </span>
                <span style={{ margin: "5px 0", color: "#666" }}>
                  <strong style={{ color: "#f5627a" }}>Số tài khoản:</strong> 0987654321
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Phần cuối - Album */}
        <div className='bot_content'>
          <span style={{ 
            fontSize: "24px", 
            fontWeight: "600", 
            color: "#f5627a",
            margin: "30px 0",
            display: "block"
          }} className='fade-in-scroll'>
            Album hình cưới
          </span>
          
          <div className='img_container'>
            <div className='single_img fade-in-scroll'>
              <img src={logo_wedding} alt="Wedding 1"></img>
            </div>
            
            <div className='two_img fade-in-scroll'>
              <img src={logo_wedding} alt="Wedding 2"></img>
              <img src={logo_wedding} alt="Wedding 3"></img>
            </div>
            
            <div className='two_img fade-in-scroll'>
              <img src={logo_wedding} alt="Wedding 4"></img>
              <img src={logo_wedding} alt="Wedding 5"></img>
            </div>
            
            <div className='single_img fade-in-scroll'>
              <img src={logo_wedding} alt="Wedding 6"></img>
            </div>
          </div>

          {/* Kết thúc */}
          <div className='ending fade-in-scroll'> 
            <span style={{ fontSize: "36px" }}>Thank You</span>
            <span style={{ fontSize: "20px", marginTop: "10px" }}>Rất hân hạnh được đón tiếp</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;