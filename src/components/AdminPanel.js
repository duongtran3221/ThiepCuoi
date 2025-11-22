// src/components/AdminPanel.js
import React, { useState, useEffect } from 'react';
import { getAllConfirmations, getConfirmationStats } from '../services/weddingService';
import './AdminPanel.css';

const AdminPanel = () => {
  const [confirmations, setConfirmations] = useState([]);
  const [filteredConfirmations, setFilteredConfirmations] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sortBy, setSortBy] = useState('all'); // 'all', 'bride', 'groom'

  // Password đơn giản để bảo vệ admin panel
  const ADMIN_PASSWORD = '123';

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    filterConfirmations();
  }, [confirmations, sortBy]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [confirmationsData, statsData] = await Promise.all([
        getAllConfirmations(),
        getConfirmationStats()
      ]);
      
      setConfirmations(confirmationsData);
      setStats(statsData);
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterConfirmations = () => {
    if (sortBy === 'all') {
      setFilteredConfirmations(confirmations);
    } else {
      const filtered = confirmations.filter(conf => conf.guestOf === sortBy);
      setFilteredConfirmations(filtered);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Mật khẩu không đúng!');
    }
  };

  const getAttendanceText = (attendance) => {
    switch(attendance) {
      case 'yes': return '✅ Sẽ tham dự';
      case 'no': return '❌ Không tham dự';
      default: return '❓ Chưa xác nhận';
    }
  };

  const getAttendanceColor = (attendance) => {
    switch(attendance) {
      case 'yes': return '#4caf50';
      case 'no': return '#f44336';
      default: return '#9e9e9e';
    }
  };

  const getGuestOfText = (guestOf) => {
    switch(guestOf) {
      case 'bride': return '👰 Cô dâu';
      case 'groom': return '🤵 Chú rể';
      default: return '❓ Chưa xác định';
    }
  };

  const getSortButtonClass = (value) => {
    return `sort-btn ${sortBy === value ? 'active' : ''}`;
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="login-form">
          <h2>🔐 Admin Panel</h2>
          <p>Vui lòng nhập mật khẩu để tiếp tục</p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu admin"
              className="password-input"
            />
            <button type="submit" className="login-btn">Đăng nhập</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>🎊 Quản lý Xác nhận Tham dự</h1>
        <button onClick={() => setIsAuthenticated(false)} className="logout-btn">
          Đăng xuất
        </button>
      </div>

      {stats && (
        <div className="stats-container">
          <div className="stat-card total">
            <h3>Tổng số</h3>
            <div className="stat-number">{stats.total}</div>
          </div>
          <div className="stat-card attending">
            <h3>Sẽ tham dự</h3>
            <div className="stat-number">{stats.attending}</div>
          </div>
          <div className="stat-card not-attending">
            <h3>Không tham dự</h3>
            <div className="stat-number">{stats.notAttending}</div>
          </div>
          <div className="stat-card maybe">
            <h3>Chưa chắc chắn</h3>
            <div className="stat-number">{stats.maybe}</div>
          </div>
        </div>
      )}

      <div className="controls">
        <div className="left-controls">
          <button onClick={loadData} className="refresh-btn" disabled={loading}>
            {loading ? '⏳ Đang tải...' : '🔄 Làm mới'}
          </button>
          
          {/* Sort buttons */}
          <div className="sort-buttons">
            <button 
              className={getSortButtonClass('all')}
              onClick={() => setSortBy('all')}
            >
              👥 Tất cả
            </button>
            <button 
              className={getSortButtonClass('bride')}
              onClick={() => setSortBy('bride')}
            >
              👰 Cô dâu
            </button>
            <button 
              className={getSortButtonClass('groom')}
              onClick={() => setSortBy('groom')}
            >
              🤵 Chú rể
            </button>
          </div>
        </div>

        <span className="last-updated">
          Hiển thị: {filteredConfirmations.length}/{confirmations.length} bản ghi
        </span>
      </div>

      {loading ? (
        <div className="loading">Đang tải dữ liệu...</div>
      ) : (
        <div className="table-container">
          {filteredConfirmations.length === 0 ? (
            <div className="no-data">
              {confirmations.length === 0 
                ? 'Chưa có dữ liệu xác nhận nào' 
                : `Không có dữ liệu cho "${sortBy === 'bride' ? 'Cô dâu' : 'Chú rể'}"`
              }
            </div>
          ) : (
            <table className="confirmations-table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>Khách mời của</th>
                  <th>Xác nhận tham dự</th>
                  <th>Lời nhắn</th>
                  <th>Thời gian</th>
                </tr>
              </thead>
              <tbody>
                {filteredConfirmations.map((conf, index) => (
                  <tr key={conf.id} className="confirmation-row">
                    <td className="text-center">{filteredConfirmations.length - index}</td>
                    <td className="guest-name">{conf.name}</td>
                    <td className="text-center">
                      <span className="guest-of-badge">
                        {getGuestOfText(conf.guestOf)}
                      </span>
                    </td>
                    <td className="text-center">
                      <span 
                        className="attendance-badge"
                        style={{ backgroundColor: getAttendanceColor(conf.attendance) }}
                      >
                        {getAttendanceText(conf.attendance)}
                      </span>
                    </td>
                    <td className="message-cell">
                      {conf.message ? (
                        <div className="message-content">
                          <span className="message-text">"{conf.message}"</span>
                        </div>
                      ) : (
                        <span className="no-message">Không có lời nhắn</span>
                      )}
                    </td>
                    <td className="timestamp">
                      {new Date(conf.timestamp).toLocaleString('vi-VN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;