// src/services/weddingService.js
import { database } from '../firebase';
import { ref, push, set, get, query, orderByChild } from 'firebase/database';

// Hàm gửi thông tin xác nhận tham dự
export const submitConfirmation = async (formData) => {
  try {
    const confirmationsRef = ref(database, 'confirmations');
    const newConfirmationRef = push(confirmationsRef);
    
    const confirmationData = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: newConfirmationRef.key
    };
    
    await set(newConfirmationRef, confirmationData);
    return { success: true, id: newConfirmationRef.key };
  } catch (error) {
    console.error('Lỗi khi gửi xác nhận:', error);
    return { success: false, error: error.message };
  }
};

// Hàm lấy danh sách tất cả xác nhận (đã sửa)
export const getAllConfirmations = async () => {
  try {
    const confirmationsRef = ref(database, 'confirmations');
    
    // TẠM THỜI: Bỏ query orderByChild để tránh lỗi
    // const confirmationsQuery = query(confirmationsRef, orderByChild('timestamp'));
    
    const snapshot = await get(confirmationsRef); // Dùng ref thay vì query
    
    if (snapshot.exists()) {
      const data = snapshot.val();
      // Chuyển đổi object thành array và sắp xếp thủ công
      const confirmationsArray = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      
      // Sắp xếp theo timestamp (mới nhất lên đầu)
      return confirmationsArray.sort((a, b) => 
        new Date(b.timestamp) - new Date(a.timestamp)
      );
    }
    
    return [];
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    return [];
  }
};

// Hàm thống kê số lượng xác nhận
export const getConfirmationStats = async () => {
  try {
    const confirmations = await getAllConfirmations();
    
    const stats = {
      total: confirmations.length,
      attending: confirmations.filter(c => c.attendance === 'yes').length,
      notAttending: confirmations.filter(c => c.attendance === 'no').length,
      maybe: confirmations.filter(c => c.attendance === 'maybe').length
    };
    
    return stats;
  } catch (error) {
    console.error('Lỗi khi thống kê:', error);
    return null;
  }
};