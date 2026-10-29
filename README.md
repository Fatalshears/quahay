# Quá Hay

Trang tổng hợp những điều thú vị và các lầm tưởng phổ biến, được kiểm chứng bằng nguồn tham khảo và minh họa theo phong cách **Dark Glow Line Art** (nét vẽ SVG phát sáng, hiệu ứng vẽ nét khi cuộn, đổi bảng màu theo danh mục).

Trang tĩnh thuần HTML/CSS/JS, không cần build, chạy trực tiếp trên GitHub Pages.

## Cấu trúc

```
index.html                  Trang chủ: hero, tìm kiếm, lọc danh mục, cuộn đổi màu, tổng kết
topics/*.html               Mỗi chủ đề một trang riêng
assets/css/style.css        Hệ thống thiết kế: token màu theo danh mục, typography, motion
assets/js/data.js           Danh mục, danh sách chủ đề (dùng cho trang chủ, menu, tìm kiếm), icon SVG
assets/js/main.js           Header, menu, tìm kiếm (Ctrl/⌘ K hoặc /), vẽ nét, đổi màu theo vùng cuộn, mục lục, chuyển bài
assets/vendor/fuse.min.js   Fuse.js v7.0.0 (Apache 2.0), tải từ github.com/krisk/Fuse
```

## Thêm chủ đề mới

Trước khi viết, đọc [quy tắc nội dung và trình bày](docs/QUY-TAC-NOI-DUNG.md) và chạy checklist ở cuối file.

1. Sao chép một trang trong `topics/` làm khung, đổi `data-slug`, `data-theme` và nội dung.
2. Thêm một mục vào `QH.topics` trong `assets/js/data.js` (slug, url, cat, icon, title, short, myth, fact, remember, tags).
3. Nếu cần icon mới, thêm SVG 64×64 vào `QH.icons` (dùng class `ic-l`, `ic-a`, `ic-t` để tự nhận màu danh mục).

Danh mục có sẵn: `body`, `space`, `nature`, `history`, `tech`, `food`. Danh mục chưa có bài sẽ hiển thị “sắp có”.

## Chạy thử

```bash
python3 -m http.server 8000
```

Mở http://localhost:8000.

## Triển khai GitHub Pages

Vào **Settings → Pages**, chọn **Deploy from a branch**, chọn nhánh chứa mã và thư mục `/ (root)`. File `.nojekyll` đã có sẵn.

## Tài nguyên miễn phí

- Phông chữ Space Grotesk và Be Vietnam Pro (SIL Open Font License), từ Google Fonts / github.com/google/fonts.
- Fuse.js (Apache 2.0) cho tìm kiếm mờ; tìm kiếm không phân biệt dấu tiếng Việt.
- Toàn bộ minh họa là SVG tự vẽ, không dùng ảnh có bản quyền.
