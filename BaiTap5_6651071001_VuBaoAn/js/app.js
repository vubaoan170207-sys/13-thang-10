// Khởi tạo ứng dụng Vue
const { createApp } = Vue;

createApp({
    data() {
        return {
            // Từ khóa tìm kiếm
            tuKhoa: '',
            
            // Mảng chứa giỏ hàng
            cart: [],

            // Mảng chứa danh sách tối thiểu 8 sản phẩm phụ kiện
            products: [
                { id: 1, ten: 'Ốp lưng iPhone Silicone', gia: 150000, anh: 'https://via.placeholder.com/200', moTa: 'Chống va đập tốt' },
                { id: 2, ten: 'Tai nghe Bluetooth TWS', gia: 450000, anh: 'https://via.placeholder.com/200', moTa: 'Âm thanh sống động' },
                { id: 3, ten: 'Củ sạc nhanh 20W', gia: 250000, anh: 'https://via.placeholder.com/200', moTa: 'Sạc nhanh Type-C' },
                { id: 4, ten: 'Cáp sạc Lightning', gia: 90000, anh: 'https://via.placeholder.com/200', moTa: 'Dài 1m bền bỉ' },
                { id: 5, ten: 'Sạc dự phòng 10000mAh', gia: 350000, anh: 'https://via.placeholder.com/200', moTa: 'Dung lượng chuẩn' },
                { id: 6, ten: 'Kính cường lực 9D', gia: 50000, anh: 'https://via.placeholder.com/200', moTa: 'Bảo vệ màn hình' },
                { id: 7, ten: 'Giá đỡ điện thoại', gia: 80000, anh: 'https://via.placeholder.com/200', moTa: 'Xoay 360 độ' },
                { id: 8, ten: 'Thẻ nhớ MicroSD 64GB', gia: 180000, anh: 'https://via.placeholder.com/200', moTa: 'Tốc độ đọc ghi cao' }
            ]
        }
    },
    computed: {
        // 1. Lọc sản phẩm theo từ khóa (không phân biệt hoa thường)
        danhSachLoc() {
            return this.products.filter(sp => 
                sp.ten.toLowerCase().includes(this.tuKhoa.toLowerCase())
            );
        },
        // 2. Tính tổng tiền các sản phẩm trong giỏ hàng
        tongTien() {
            return this.cart.reduce((sum, item) => sum + item.gia, 0);
        },
        // 3. Số lượng sản phẩm trong giỏ
        cartCount() {
            return this.cart.length;
        }
    },
    methods: {
        // Thêm sản phẩm vào giỏ
        themVaoGio(sanPham) {
            this.cart.push(sanPham);
            // Ghi chú so sánh Vanilla JS vs Vue:
            // Nếu dùng Vanilla JS, mỗi lần thêm/xoá giỏ hàng phải tự querySelector + cập nhật DOM thủ công.
            // Vue tự động làm điều này nhờ tính năng reactivity (dữ liệu thay đổi -> UI tự cập nhật).
        },
        // Xóa sản phẩm khỏi giỏ theo chỉ số (index)
        xoaKhoiGio(index) {
            this.cart.splice(index, 1);
        }
    }
}).mount('#app');