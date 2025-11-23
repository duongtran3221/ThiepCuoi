import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import logo_wedding from "../assets/chuhy2.png";
import logo_wedding2 from "../assets/chuhy1.png";
import gif from "../assets/gif.gif";
import sen from '../assets/sen.avif'
import audioFile from "../assets/ido2.mp3";
import anh2 from '../assets/anhcuoi2.jpg'
import anh3 from '../assets/anhcuoi3.jpg'
import nentruc1 from '../assets/nentruc1.avif'
import nentruc2 from '../assets/nentruc2.avif'
import khung from '../assets/khung.avif'
import heart1 from '../assets/heart1.avif'
import qr1 from '../assets/qr1.jpg'
import qr2 from '../assets/qr2.jpg'
import nhan from '../assets/nhan.png'
import couple from '../assets/couple.png'
import anhxn from '../assets/anhxn.avif'
// import ac4 from '../assets/ac4.avif'

// import ac6 from '../assets/ac6.avif'
// import ac5 from '../assets/ac5.avif'
import ac7 from '../assets/ac7.avif'
import ac8 from '../assets/ac8.avif'
// import ac9 from '../assets/ac9.avif'
import ac10 from '../assets/ac10.avif'
import ac11 from '../assets/ac11.avif'
import { FaHeart, FaGift } from "react-icons/fa6";

import { submitConfirmation } from "../services/weddingService";
const ac4 = 'https://res.cloudinary.com/drbz5lbah/image/upload/v1763823071/%E1%BA%A3nh_c%C6%B0%E1%BB%9Bi_4_nu4e5u.jpg'
const ac5 = 'https://res.cloudinary.com/drbz5lbah/image/upload/v1763823308/%E1%BA%A3nh_c%C6%B0%E1%BB%9Bi_5_xzsgqi.jpg'
const ac6 = 'https://res.cloudinary.com/drbz5lbah/image/upload/v1763823071/%E1%BA%A3nh_c%C6%B0%E1%BB%9Bi_4_nu4e5u.jpg'
const ac9 = 'https://res.cloudinary.com/drbz5lbah/image/upload/v1763822575/%E1%BA%A3nh9_uiwynu.jpg'
function WeddingInvitation() {
  const [showQRPopup, setShowQRPopup] = useState(false);
  const familyDetailsRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [hasScrolled, setHasScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    message: '',
    guestOf: '' // Thêm trường này
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Hàm xử lý submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name.trim() || !formData.attendance || !formData.guestOf) {
      setSubmitStatus('Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const result = await submitConfirmation(formData);

      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          attendance: '',
          message: '',
          guestOf: ''
        });

        // Không cần setTimeout để tự động đóng nữa
        // Người dùng sẽ tự click đóng popup
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Lỗi submit form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  // Thêm hàm này vào component
  const closePopup = () => {
    setSubmitStatus('');
  };
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(error => {
              console.log("Audio play failed:", error);
              alert('Vui lòng click để nghe nhạc');
            });
        }
      }
    }
  };
  // useEffect(() => {
  //   const autoPlayAudio = async () => {
  //     if (audioRef.current) {
  //       try {
  //         // Đặt volume mặc định
  //         audioRef.current.volume = 0.2;

  //         // Thử phát nhạc ngay lập tức
  //         await audioRef.current.play();
  //         setIsPlaying(true);
  //         console.log("Nhạc đã tự động phát thành công!");
  //       } catch (error) {
  //         console.log("Lỗi autoplay:", error);

  //         // Thử lại sau 1 giây
  //         setTimeout(() => {
  //           if (audioRef.current) {
  //             audioRef.current.play()
  //               .then(() => {
  //                 setIsPlaying(true);
  //                 console.log("Nhạc phát thành công sau retry!");
  //               })
  //               .catch(err => {
  //                 console.log("Vẫn không thể tự động phát nhạc");
  //               });
  //           }
  //         }, 1000);
  //       }
  //     }
  //   };

  //   // Đợi trang load hoàn tất rồi phát nhạc
  //   const timer = setTimeout(() => {
  //     autoPlayAudio();
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, []);
  // // Phát nhạc khi user scroll xuống
  // useEffect(() => {
  //   let scrollTimeout;

  //   const handleScroll = () => {
  //     // Đánh dấu đã scroll
  //     if (!hasScrolled) {
  //       setHasScrolled(true);
  //     }

  //     // Lấy vị trí scroll hiện tại
  //     const scrollY = window.scrollY;

  //     // Nếu scroll xuống quá 100px và chưa phát nhạc
  //     if (scrollY > 100 && !isPlaying && audioRef.current) {
  //       console.log("Đã scroll xuống, phát nhạc...");

  //       audioRef.current.volume = 0.7;
  //       audioRef.current.play()
  //         .then(() => {
  //           setIsPlaying(true);
  //           console.log("Nhạc đã phát thành công khi scroll!");
  //         })
  //         .catch(error => {
  //           console.log("Không thể phát nhạc khi scroll:", error);
  //         });
  //     }
  //   };

  //   // Debounce scroll event
  //   const debouncedScroll = () => {
  //     clearTimeout(scrollTimeout);
  //     scrollTimeout = setTimeout(handleScroll, 100);
  //   };

  //   window.addEventListener('scroll', debouncedScroll);

  //   return () => {
  //     window.removeEventListener('scroll', debouncedScroll);
  //     clearTimeout(scrollTimeout);
  //   };
  // }, [isPlaying, hasScrolled]);

  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handleCanPlayThrough = () => {
      console.log("Audio ready to play");
    };

    if (audio) {
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('canplaythrough', handleCanPlayThrough);
      audio.load();
    }

    return () => {
      if (audio) {
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      }
    };
  }, []);

  useEffect(() => {
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const leftElement = entry.target.querySelector('.fade-in-left-scroll');
            const rightElement = entry.target.querySelector('.fade-in-right-scroll');

            if (leftElement) {
              leftElement.style.animation = 'slideInFromLeft 1s ease-out 0.6s forwards';
            }
            if (rightElement) {
              rightElement.style.animation = 'slideInFromRight 1s ease-out 0.9s forwards';
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3
      }
    );

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const familyDetailsElement = familyDetailsRef.current;
    if (familyDetailsElement) {
      observer.observe(familyDetailsElement);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (familyDetailsElement) {
        observer.unobserve(familyDetailsElement);
      }
    };
  }, []);
  // Thêm vào component hoặc file JS
  return (
    <div className="App">
      <div className='content'>
        {/* Nút Audio với thiết kế mới */}
        <div className="audio-container">
          <button
            className={`btnAudio ${isPlaying ? 'playing' : 'paused'}`}
            onClick={togglePlay}
            aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
          >
            <svg className="icon volume-mute" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 9V15H7L12 20V4L7 9H3Z" fill="currentColor" />
              <path d="M16 9L21 14M21 9L16 14" stroke="currentColor" strokeWidth="2" />
            </svg>

            <svg className="icon volume-up" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 9V15H7L12 20V4L7 9H3Z" fill="currentColor" />
              <path d="M16 9C16.5 9.5 17 10.5 17 12C17 13.5 16.5 14.5 16 15" stroke="currentColor" strokeWidth="2" />
              <path d="M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <div className='top_content'>
          {/* Background decorations - xuất hiện từ 2 bên */}
          <img src={nentruc1} className="decoration top-right slide-from-right" alt="Decoration"></img>
          <img src={nentruc2} className="decoration top-left slide-from-left" alt="Decoration"></img>

          {/* Logo - xuất hiện từ dưới lên */}
          <img
            src={logo_wedding}
            className='logo_wedding fade-in-up'
            alt="Wedding Logo"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '10px',
              position: 'relative',
              zIndex: 10,
            }}
          ></img>

          {/* Main content - xuất hiện từ dưới lên */}
          <div className="invitation-card fade-in-up">
            <div className="couple-names-vertical">
              <div className="name-bride-container">
                <span className="name-bride">Mai Liên</span>
              </div>

              <div className="heart-center-vertical">
                {/* <span className="heart-icon"><FaHeart size={36}></FaHeart></span> */}
                <img src={heart1} style={{ width: "40px", height: "40px" }} alt="Decoration"></img>
              </div>

              <div className="name-groom-container">
                <span className="name-groom">Bá Đại</span>
              </div>
            </div>
          </div>

          {/* Wedding date - xuất hiện từ dưới lên (delay) */}
          <div className="wedding-date-right fade-in-up-delay">
            <div className="date-right-container" >
              <div className="date-right-item">
                <span className="date-right-digit">30</span>
              </div>
              <div className="date-right-item">
                <span className="date-right-digit">11</span>
              </div>
              <div className="date-right-item">
                <span className="date-right-digit">25</span>
              </div>
            </div>
          </div>

          {/* Bottom decoration - xuất hiện từ dưới lên */}
          <img src={sen} className="decoration bottom-left slide-from-bottom" alt="Lotus"></img>
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
              <div className='girl_name pulse-border' style={{ fontFamily: "MyFont4" }}>
                <span className='girl_name_style'>Cô</span>
                <span className='girl_name_style'>dâu</span>
                <span className='girl_name_style'>Mai</span>
                <span className='girl_name_style'>Liên</span>
              </div>
              <img src={gif} style={{ width: "25px", height: "60px" }} alt="Decoration" className='float-animation'></img>
            </div>

            <div className='girl_family_details' style={{ marginTop: "100px" }}>
              <span style={{ fontSize: "22px", fontWeight: "600", color: "#194f1b", fontFamily: "MyFont6" }}>Nhà gái</span>
              <span style={{ fontWeight: "600", fontStyle: "italic", fontSize: "15px", color: "#194f1b", fontFamily: "MyFont5" }}>Ông: Đinh Văn Dần</span>
              <span style={{ fontWeight: "600", fontStyle: "italic", fontSize: "15px", color: "#194f1b", fontFamily: "MyFont5" }}>Bà : Nguyễn Thị Thúy</span>
              <span style={{ fontSize: "14px", color: "#194f1b", fontFamily: "MyFont3", marginTop: "3px" }}>Thôn Ngọc Nha Thượng, Xã Khoái Châu, Hưng Yên</span>
            </div>

            <div style={{ flex: 1, marginRight: "3px" }}>
              <img
                src={anh2}
                alt="Bride"
                className='float-animation'
                style={{
                  width: "140px",
                  height: "190px",
                  borderRadius: "80px",
                  // background: "linear-gradient(45deg, #ff9baa, #f5627a)",
                  marginTop: "20px",
                  padding: "5px",
                  boxShadow: "0 8px 20px rgba(245, 98, 122, 0.3)"
                }}
              />
            </div>
          </div>

          {/* Nhà trai */}
          <div className='boy_family fade-in-scroll' >
            <div style={{ flex: 1, marginLeft: "3px" }}>
              <img
                src={anh3}
                alt="Groom"
                className='float-animation'
                style={{
                  width: "140px",
                  height: "190px",
                  borderRadius: "80px",
                  // background: "linear-gradient(45deg, #ff9baa, #f5627a)",
                  padding: "5px",
                  marginTop: "20px",
                  boxShadow: "0 8px 20px rgba(245, 98, 122, 0.3)"
                }}
              />
            </div>

            <div className='girl_family_details' style={{ marginTop: "100px" }}>
              <span style={{ fontSize: "22px", fontWeight: "600", color: "color: #194f1b;", fontFamily: "MyFont6" }}>Nhà trai</span>
              <span style={{ fontWeight: "600", fontSize: "15px", fontStyle: "italic", color: "color: #194f1b;", fontFamily: "MyFont5" }}>Ông: Trần Bá Quảng</span>
              <span style={{ fontWeight: "600", fontSize: "15px", fontStyle: "italic", color: "color: #194f1b;", fontFamily: "MyFont5" }}>Bà : Lê Thị Thuý Hằng</span>
              <span style={{ fontSize: "14px", color: "color: #194f1b;", fontFamily: "MyFont3", marginTop: "3px" }}>Thôn Lê Lợi, Xã Chí Minh, Hưng Yên</span>
            </div>

            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <div className='girl_name pulse-border'>
                <span className='girl_name_style'>Chủ</span>
                <span className='girl_name_style'>rể</span>
                <span className='girl_name_style'>Bá</span>
                <span className='girl_name_style'>Đại</span>
              </div>
              <img src={gif} style={{ width: "25px", height: "60px" }} alt="Decoration" className='float-animation'></img>
            </div>
          </div>

          {/* Thông báo */}
          <div className='notice fade-in-scroll' style={{
            backgroundImage: `url(${khung})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            maxWidth: '500px',
            height: '550px',
            margin: '0 auto',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} ref={familyDetailsRef}>

            <div className='notice_content' style={{
              zIndex: 2,
              width: '100%',
              height: "90%",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div style={{
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: '20px'
              }}>
                {/* Nhà gái */}
                <div
                  className='girl_family_details fade-in-left-scroll'
                  style={{
                    width: '49%', // Giới hạn width
                    opacity: 0,
                    transform: "translateX(-100px)",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: "600", color: "#194f1b", display: 'block', marginBottom: '8px', fontFamily: "MyFont6" }}>Nhà gái</span>
                  <span style={{ fontWeight: "600", fontStyle: "italic", color: "#194f1b", fontFamily: "MyFont5", display: 'block', fontSize: '14px' }}>Ông: Đinh Văn Dần</span>
                  <span style={{ fontWeight: "600", fontStyle: "italic", color: "#194f1b", fontFamily: "MyFont5", display: 'block', fontSize: '14px' }}>Bà : Nguyễn Thị Thúy</span>
                  <span style={{ fontSize: "12px", color: "#194f1b", display: 'block', marginTop: '6px', lineHeight: '1.3', fontFamily: "MyFont3" }}>Thôn Ngọc Nha Thượng, Xã Khoái Châu, Hưng Yên</span>
                </div>

                {/* Nhà trai */}
                <div
                  className='girl_family_details fade-in-right-scroll'
                  style={{
                    width: '49%', // Giới hạn width
                    opacity: 0,
                    transform: "translateX(100px)",
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: "600", color: "#194f1b", display: 'block', marginBottom: '8px', fontFamily: "MyFont6" }}>Nhà trai</span>
                  <span style={{ fontWeight: "600", fontStyle: "italic", color: "#194f1b", fontFamily: "MyFont5", display: 'block', fontSize: '14px' }}>Ông: Trần Bá Quảng</span>
                  <span style={{ fontWeight: "600", fontStyle: "italic", color: "#194f1b", fontFamily: "MyFont5", display: 'block', fontSize: '14px' }}>Bà : Lê Thị Thuý Hằng</span>
                  <span style={{ fontSize: "12px", color: "#194f1b", display: 'block', marginTop: '6px', lineHeight: '1.3', fontFamily: "MyFont3" }}>Thôn Lê Lợi, Xã Chí Minh, Hưng Yên</span>
                </div>
              </div>

              {/* Phần thông báo cô dâu chú rể */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginTop: 'auto'
              }}>
                <span style={{ fontSize: "20px", fontFamily: "MyFont8", color: "#194f1b", marginBottom: "8px", display: 'block' }}>Trân trọng báo tin</span>
                <span style={{ marginBottom: "12px", display: 'block' }}>
                  <span style={{ color: "#194f1b", fontStyle: "italic", fontFamily: "MyFont9", lineHeight: "40px", fontSize: '40px' }}>Lễ thành hôn </span>
                </span>
                <span style={{ fontSize: "22px", fontStyle: "italic", color: "#e0468b", fontWeight: "500", fontFamily: "MyFont10", display: 'block' }} className='name-glow'>Trần Bá Đại</span>
                <span style={{ color: "#194f1b", margin: "3px 0", fontFamily: "cursive", display: 'block' }}><img src={nhan} style={{ width: "30px", height: "30px" }}></img></span>
                <span style={{ fontSize: "22px", fontStyle: "italic", color: "#e0468b", fontWeight: "500", fontFamily: "MyFont10", display: 'block' }} className='name-glow'>Đinh Nguyễn Mai Liên</span>
              </div>
            </div>
          </div>

          {/* Ngày cưới */}
          <div className='date_wedding fade-in-scroll'>
            <div className='container_date'>
              <img src={logo_wedding2} className='logo_wedding heart-beat' style={{ width: "60px", height: "60px" }} alt="Logo"></img>
              <img src={couple} style={{ width: "150px", height: "130px", position: "absolute", left: -60, bottom: 0, zIndex: 1 }} alt="Logo"></img>
              <span style={{ fontSize: "20px", fontWeight: "600", color: "color: #194f1b;", margin: "10px 0", fontFamily: "MyFont11" }}>Lễ thành hôn</span>
              <span style={{ color: "#666", marginTop: "15px" }}>Vào lúc 14 giờ 00</span>
              <hr width="80%" style={{ border: "1px solid color: #194f1b;", margin: "15px 0", marginTop: 0 }}></hr>

              <div style={{
                width: "75%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <span style={{ color: "color: #194f1b;", fontWeight: "500", fontSize: "16px", lineHeight: "40px", fontFamily: "MyFont12" }}>CHỦ NHẬT</span>
                <span style={{
                  width: "40px",
                  height: "40px",
                  lineHeight: "40px",
                  color: "#d74886",
                  fontWeight: "600",
                  fontSize: "36px",
                  fontFamily: "MyFont13"
                }}>30</span>
                <span style={{ color: "color: #194f1b;", fontWeight: "500", fontSize: "16px", lineHeight: "40px", fontFamily: "MyFont12" }}>THÁNG 11</span>
              </div>

              <hr width="80%" style={{ border: "1px solid color: #194f1b;", margin: "15px 0" }}></hr>
              <span style={{ fontSize: "18px", fontWeight: "600", color: "color: #194f1b;", margin: "10px 0", fontFamily: "MyFont13" }}>2025</span>
              <span style={{ color: "#E9B7A7", fontSize: "14px", marginBottom: "20px" }}>( Tức ngày 11 tháng 10 năm Ất Tỵ )</span>

              <div style={{
                background: "#ebfaecff",
                padding: "15px",
                borderRadius: "15px",
                margin: "15px 0",
                width: "80%"
              }}>
                <span style={{ color: "color: #194f1b;", fontWeight: "500" }}>Bữa tiệc thân mật</span>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}>
                  <span style={{ color: "#666" }}>Nhà trai:</span>
                  <span style={{ fontWeight: "600", color: "color: #194f1b;" }}>18h30</span>
                </div>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}>
                  <span style={{ color: "#666" }}>Nhà gái:</span>
                  <span style={{ fontWeight: "600", color: "color: #194f1b;" }}>17h30</span>
                </div>
              </div>

              <span style={{ fontWeight: "600", color: "color: #194f1b;", margin: "5px 0" }}>29.11.2025</span>
              <span style={{ color: "#E9B7A7", fontSize: "14px", zIndex: 2 }}>( Tức ngày 10 tháng 10 năm Ất Tỵ )</span>
            </div>
          </div>

          {/* Địa điểm */}
          <div className='location fade-in-scroll'>
            <span style={{ fontSize: "24px", fontWeight: "600", color: "#194f1b", marginBottom: "15px" }}>Địa điểm tổ chức</span>
            <span style={{ fontSize: "20px", fontWeight: "600", color: "#194f1b", marginBottom: "15px" }}>Nhà trai</span>
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
              href='https://www.google.com/maps/place/Nh%C3%A0+v%C4%83n+h%C3%B3a+th%C3%B4n+L%C3%AA+L%E1%BB%A3i/@20.7628415,105.9920664,17z/data=!3m1!4b1!4m6!3m5!1s0x3135b9f9d9be5fb3:0x96957b4b1816e166!8m2!3d20.7628415!4d105.9920664!16s%2Fg%2F11rgdk1tlg?entry=ttu&g_ep=EgoyMDI5MTExMS4wIKXMDSoJLDEwMDEmSAFQAw%3D%3D'
              target='_blank'
              rel="noopener noreferrer"
              style={{
                color: "#194f1b",
                textDecoration: "none",
                fontWeight: "500",
                padding: "10px 20px",
                border: "2px solid #194f1b",
                borderRadius: "25px",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#194f1b";
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#194f1b";
              }}
            >
              Xem chỉ đường
            </a>
            <span style={{ fontSize: "20px", fontWeight: "600", color: "#194f1b", marginBottom: "15px", marginTop: "15px" }}>Nhà gái</span>
            <span style={{ fontSize: "16px", color: "#666", marginBottom: "20px" }}>Thôn Ngọc Nha Thượng, Xã Khoái Châu, Hưng Yên</span>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3729.7385006106556!2d105.9846061752504!3d20.80186458079131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ4JzA2LjciTiAxMDXCsDU5JzEzLjkiRQ!5e0!3m2!1svi!2s!4v1763656338816!5m2!1svi!2s"
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
              href="https://www.google.com/maps/dir/?api=1&destination=20.80186458079131,105.9846061752504"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#194f1b",
                textDecoration: "none",
                fontWeight: "500",
                padding: "10px 20px",
                border: "2px solid #194f1b",
                borderRadius: "25px",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#194f1b";
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#194f1b";
              }}
            >
              Xem chỉ đường
            </a>

          </div>

          <div className='join_form fade-in-scroll'>
            <h2 className='form_title'>Xác nhận tham gia</h2>

            {/* Popup thông báo */}
            {submitStatus && (
              <div className={`popup-overlay ${submitStatus}`}>
                <div className="popup-content">
                  <img
                    src={anhxn}
                    style={{
                      width: "100%",
                      aspectRatio: "3/2",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <p style={{ fontSize: "14px" }}>Cảm ơn bạn đã dành thời gian phản hồi.</p>
                  <p style={{ fontSize: "14px" }}>Chúng mình vô cùng trân quý sự quan tâm của bạn!</p>

                  <p style={{ fontFamily: "MyFont6", fontSize: "24px", fontStyle: "italic" }}>Thank You!</p>
                  {/* <p className="popup-message">
                    {submitStatus === 'success'
                      ? 'Cảm ơn bạn đã phản hồi!'
                      : submitStatus === 'error'
                        ? 'Vui lòng thử lại sau!'
                        : submitStatus}
                  </p> */}
                  <button
                    className="popup-close-btn"
                    onClick={closePopup}
                  >
                    X
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className='form_group'>
                <label className='form_label'>Họ và tên *</label>
                <input
                  type="text"
                  className='form_input'
                  placeholder="Nhập họ và tên của bạn"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className='form_group'>
                <label className='form_label'>Bạn là khách mời của *</label>
                <select
                  className='form_select'
                  value={formData.guestOf}
                  onChange={(e) => setFormData({ ...formData, guestOf: e.target.value })}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Bạn là khách mời của ai?</option>
                  <option value="bride">Cô dâu</option>
                  <option value="groom">Chú rể</option>
                </select>
              </div>
              <div className='form_group'>
                <label className='form_label'>Xác nhận tham gia *</label>
                <div className='radio_group'>
                  <label className={`radio_label ${formData.attendance === 'yes' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === 'yes'}
                      onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                      disabled={isSubmitting}
                    />
                    Tôi sẽ tham gia
                  </label>
                  <label className={`radio_label ${formData.attendance === 'no' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === 'no'}
                      onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                      disabled={isSubmitting}
                    />
                    Rất tiếc, tôi bận mất rồi
                  </label>
                </div>
              </div>

              <div className='form_group'>
                <label className='form_label'>Lời nhắn</label>
                <textarea
                  className='form_textarea'
                  placeholder="Gửi lời chúc đến cô dâu chú rể..."
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className='submit_btn'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Đang gửi...' : 'Gửi xác nhận'}
              </button>
            </form>
          </div>
          {/* Hộp cưới */}
          {/* Nút Gửi mừng cưới */}
          <div className='box_wedding fade-in-scroll' style={{ padding: 0 }} >
            <button
              className='gift-button'
              onClick={() => setShowQRPopup(true)}
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#194f1b",
                background: "linear-gradient(135deg, #194f1b, #1c771fff)",
                border: "none",
                borderRadius: "50px",
                padding: "10px 20px",
                cursor: "pointer",
                boxShadow: "0 8px 25px rgba(245, 98, 122, 0.3)",
                transition: "all 0.3s ease",
                color: "white",
                fontFamily: "inherit"
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 12px 35px rgba(245, 98, 122, 0.5)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 25px rgba(245, 98, 122, 0.3)";
              }}
            >
              <FaGift /> Gửi mừng cưới
            </button>
          </div>

          {/* Popup QR */}
          {showQRPopup && (
            <div
              className="qr-popup-overlay"
              onClick={() => setShowQRPopup(false)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                backdropFilter: "blur(5px)"
              }}
            >
              <div
                className="qr-popup-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "30px",
                  maxWidth: "90%",
                  width: "400px",
                  textAlign: "center",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
                  animation: "popupAppear 0.3s ease-out"
                }}
              >
                <div style={{ width: "100%", height: "40px", marginBottom: "10px", }}>
                  <span style={{
                    color: "white",
                    marginBottom: "20px",
                    fontSize: "18px",
                    fontWeight: "600",
                    width: "100px",
                    height: "30px",
                    backgroundColor: "#f72f2fff",
                    padding: 7,
                    border: "none",
                    borderRadius: "15px"
                  }}>
                    Gửi quà mừng
                  </span>
                </div>


                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "flex-start",
                  gap: "20px",
                  marginBottom: "25px"
                }}>
                  {/* QR 1 */}
                  <div style={{ textAlign: "center", display: "flex", flexDirection: "row", width: "100%" }}>
                    <div style={{
                      width: "100px",
                      height: "100px",
                      background: "#f5f5f5",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 10px",
                      border: "2px solid #194f1b",
                      float: "left",
                      overflow: "hidden"
                    }}>

                      <img src={qr1} alt="QR 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ display: "flex", flex: 1, flexDirection: "column", float: "left", height: "100px", padding: 5 }}>
                      <span style={{ fontSize: "16px", color: "#194f1b", fontWeight: "600" }}>Trần Bá Đại</span>
                      <span style={{ fontSize: "14px", color: "#194f1b" }}>Vietcombank</span>
                      <span style={{ fontSize: "14px", color: "#194f1b" }}>1041730455</span>
                    </div>

                  </div>

                  {/* QR 2 */}
                  <div style={{ textAlign: "center", display: "flex", flexDirection: "row", width: "100%" }}>
                    
                    <div style={{ display: "flex", flex: 1, flexDirection: "column", float: "left", height: "100px", padding: 5 }}>
                      <span style={{ fontSize: "16px", color: "#194f1b", fontWeight: "600" }}>Đinh Nguyễn Mai Liên</span>
                      <span style={{ fontSize: "14px", color: "#194f1b" }}>Techcombank</span>
                      <span style={{ fontSize: "14px", color: "#194f1b" }}>19074084147014</span>
                    </div>
                    <div style={{
                      width: "100px",
                      height: "100px",
                      background: "#f5f5f5",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 10px",
                      border: "2px solid #194f1b",
                      overflow: "hidden"
                    }}>

                      <img src={qr2} alt="QR 2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>

                <p style={{
                  fontSize: "14px",
                  color: "#666",
                  marginBottom: "20px",
                  lineHeight: "1.5"
                }}>
                  Quét mã QR để gửi lời chúc và món quà đến cô dâu chú rể
                </p>

                <button
                  onClick={() => setShowQRPopup(false)}
                  style={{
                    background: "#194f1b",
                    color: "white",
                    border: "none",
                    borderRadius: "25px",
                    padding: "10px 25px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "600",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#194f1b";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "#194f1b";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  Đóng
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Phần cuối - Album */}
        <div className='bot_content'>
          <span style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#194f1b",
            margin: "30px 0",
            display: "block"
          }} className='fade-in-scroll'>
            Album hình cưới
          </span>

          <div className='img_container'>
            <div className='single_img fade-in-scroll'>
              <img src={ac4} alt="Wedding 1" loading="lazy" ></img>
            </div>

            <div className='two_img fade-in-scroll'>
              <img src={ac5} alt="Wedding 2" loading="lazy" ></img>
              <img src={ac6} alt="Wedding 3" loading="lazy" ></img>
            </div>

            <div className='two_img fade-in-scroll'>
              <img src={ac7} alt="Wedding 4" loading="lazy" ></img>
              <img src={ac8} alt="Wedding 5" loading="lazy" ></img>
            </div>
            <div className='two_img fade-in-scroll'>
              <img src={ac9} alt="Wedding 4" loading="lazy" ></img>
              <img src={ac10} alt="Wedding 5" loading="lazy" ></img>
            </div>

            <div className='single_img fade-in-scroll'>
              <img src={ac11} alt="Wedding 6" loading="lazy" ></img>
            </div>
          </div>

          {/* Kết thúc */}
          <div className='ending fade-in-scroll'>
            <span style={{ fontSize: "36px" }}>Thank You</span>
            <span style={{ fontSize: "20px", marginTop: "10px" }}>Rất hân hạnh được đón tiếp</span>
          </div>
        </div>
        <audio ref={audioRef} src={audioFile} preload="metadata" loop />
      </div>
    </div>

  )
}

export default WeddingInvitation;