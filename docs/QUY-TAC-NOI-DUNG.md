# Quy tắc nội dung và trình bày

Bộ quy tắc này rút ra từ các lần review bài viết của Quá Hay. Mọi bài mới, và mọi lần sửa bài cũ, phải tuân thủ. Cuối file có checklist để tự soát trước khi đăng.

Nguyên tắc gốc: viết sao cho người đọc nghĩ “Khoan, chuyện này có thật à? Để xem thử”, chứ không phải “người này viết hay thật”.

---

## 0. Chọn dạng bài

Có hai dạng bài. Chọn dạng trước khi viết và ghi vào trường `type` trong `assets/js/data.js`.

0.1. **Bài lầm tưởng** (`type: "myth"`): chỉ dùng khi lầm tưởng đó **thật sự phổ biến** và có thể chỉ ra bằng chứng nó phổ biến (xuất hiện trong sách giáo khoa, giáo trình, khảo sát, phim ảnh, câu nói cửa miệng). Ví dụ: tháp Maslow, Vạn Lý Trường Thành nhìn thấy từ không gian, Napoleon thấp bé, con người chỉ dùng 10% bộ não. Bài lấy lầm tưởng làm chủ đề rồi đưa dẫn chứng phản biện.

0.2. **Bài kiến thức** (`type: "fact"`): dùng cho chủ đề thú vị nhưng không có lầm tưởng phổ biến nào thật sự đáng phản bác. Ví dụ: vì sao nắp chai có 21 răng, lịch sử và các dòng bia. Bài trình bày kiến thức, không dựng lên một “lầm tưởng” để bác bỏ.

0.3. Không gượng ép. Nếu phải tự nghĩ ra câu lầm tưởng (“bia nào cũng như nhau”, “số 21 ẩn chứa quy luật toán học”) thì đó là bài kiến thức. Một lời đồn nhỏ hoặc một chỗ nguồn tham khảo bị sai vẫn có thể được đính chính trong thân bài kiến thức, nhưng không được đưa lên làm khung bài.

0.4. Tiêu đề, sapo và thẻ bài trên trang chủ phải theo đúng dạng: bài kiến thức không dùng chữ “lầm tưởng”, “tưởng như”, “hóa ra” để tạo cảm giác đang bóc mẽ.

## 1. Giọng văn

1.1. Viết như một người kể chuyện có hiểu biết, nói thẳng vào việc. Câu ngắn, nhịp nhanh.

1.2. Không dùng slogan hay câu kiểu thương hiệu (“Phòng thí nghiệm của sự tò mò”, “Điều đó quá hay”). Không tự bảo người đọc nên cảm thấy gì.

1.3. Không dùng câu mở làm màu: “Điều thú vị nhất là…”, “Điều buồn cười nhất…”, “Đây là chỗ câu chuyện trở nên thú vị…”, “Chi tiết đáng mang ra bàn nhậu…”. Nói luôn chi tiết đó.

1.4. Không dùng câu chốt cố gây cười hoặc cố tạo chất thơ ở cuối đoạn (“Một sợi chỉ dài vô tận vẫn là sợi chỉ”, “Lời khuyên cuối cùng có lẽ không được hoan nghênh lắm ở bàn này”).

1.5. Không lạm dụng cấu trúc “không phải X, mà là Y”. Chỉ dùng khi thật sự đang đính chính X.

1.6. Không tự đặt câu trích dẫn (blockquote) rồi gán cho ai đó hoặc để không nguồn. Trích dẫn phải có thật và có nguồn.

1.7. Dùng từ gần với đời sống người Việt khi có (“đếm lon”, “trăm phần trăm”, “bánh mì lỏng”), nhưng không chêm từ lóng cho có.

1.8. Tôn trọng thói quen phổ biến của người đọc. Viết về đồ uống, ẩm thực, thói quen thì không “thượng đẳng hóa”: một cách làm khác không phải là cách làm sai (ví dụ bia bỏ đá).

1.9. Cách xưng hô của trang: “chúng tôi” khi nói về việc trang đã tìm hiểu, kiểm chứng; “bạn” khi nói với người đọc. Không dùng “mình” làm đại từ ngôi thứ nhất trong thân bài (dùng “mình” với nghĩa “của bản thân” thì được).

## 2. Từ ngữ và thuật ngữ

2.1. Không dịch sát cấu trúc câu tiếng Anh. Khi trích một câu nguyên văn tiếng Anh, viết diễn ý tiếng Việt tự nhiên rồi để nguyên văn trong ngoặc.
- Sai: “không cứng nhắc như chúng ta có thể đã ngụ ý”.
- Đúng: “không hề cứng nhắc như cách trình bày của ông dễ khiến người đọc lầm tưởng (nguyên văn: “not nearly as rigid as we may have implied”)”.

2.2. Thuật ngữ chuyên ngành: lần xuất hiện đầu tiên phải có cách nói tiếng Việt dễ hiểu, kèm thuật ngữ gốc trong ngoặc. Ví dụ: “vị thanh, sảng khoái, dứt vị (dân nấu bia gọi là “crisp”)”, “mùi lạ (off-flavor)”.

2.3. Tránh từ dịch nghe lạ với độc giả đại chúng (“vị giòn” cho chất lỏng, vị “chích” chua). Mô tả bằng cảm giác cụ thể: “ít cảm giác tê đầu lưỡi cùng vị chua nhẹ của khí CO₂”.

2.4. Tránh từ cộc hoặc văn nói khi đứng một mình: “bác” → “bác bỏ”, “phủ nhận”.

2.5. Soát lỗi lặp từ và lỗi gõ sau mỗi lần sửa câu (ví dụ “Ông ông viết”). Sửa một câu xong phải đọc lại cả câu đó cùng câu trước và sau nó.

## 3. Tiêu đề

3.1. Mức độ chắc chắn của tiêu đề phải khớp với bằng chứng trong bài.
- Bằng chứng chắc chắn → khẳng định: “Maslow chưa từng vẽ chiếc kim tự tháp mang tên mình”.
- Bằng chứng còn tranh luận → được phép dùng “có thể”: “Napoleon Bonaparte có thể không hề thấp bé như hình ảnh phổ biến”.

3.2. Không lặp một con số hay một từ hai lần trong tiêu đề. Không viết tiêu đề xuôi tuột kiểu “A, nhưng không phải vì A”.

3.3. Không dùng “luôn”, “mọi”, “tất cả” trong tiêu đề khi chính bài viết nêu ngoại lệ.

3.4. Tiêu đề trong `assets/js/data.js`, thẻ `<title>` và `<h1>` của trang phải giống nhau (thẻ `<title>` được rút gọn nếu quá dài).

## 4. Phần mở đầu bài

Bài lầm tưởng mở đầu bằng 4 khối: sapo (`.dek`), Lầm tưởng, Sự thật, Điểm thú vị (`.verdict`).

Bài kiến thức mở đầu bằng sapo và khối “điểm nhanh” (`.quick`): ba ô đánh số, mỗi ô một tiêu đề ngắn và một câu, nêu ba điều đáng nhớ nhất của bài. Trên trang chủ, thẻ bài kiến thức dùng trường `hook` với nhãn “Bạn có biết:”, thay cho “Lầm tưởng:”.

4.1. Các khối mở đầu không được lặp ý hay lặp cấu trúc liệt kê của nhau. Mỗi khối phải đưa thêm một thông tin mới. Nếu sapo đã nêu “kín, dễ mở, dây chuyền” thì Điểm thú vị phải nói chuyện khác (ví dụ: thiết kế ban đầu có 24 răng).

4.2. (Bài lầm tưởng) Lầm tưởng phải nêu cụ thể lời đồn đang bị phản bác (ví dụ “phải chia hết cho 3 để chịu lực đều”), không viết chung chung (“một quy luật toán học bí ẩn”).

4.3. (Bài lầm tưởng) Mọi lời đồn nêu trong phần Lầm tưởng phải được nhắc lại và xử lý trong thân bài.

4.4. Sapo mở bằng một hành động hoặc một sự kiện cụ thể người đọc tự kiểm tra được (“Thử mở bài báo gốc năm 1943 ra đọc thì không thấy hình nào cả”), không mở bằng nhận định chung chung.

## 5. Lập luận

5.1. Nêu đủ chuỗi nhân quả. Không viết tắt kiểu “lên men lạnh và lâu, vị nhẹ nên lỗi nào cũng lộ” khi vế đầu không dẫn tới kết luận. Tách từng nguyên nhân và nói rõ mỗi nguyên nhân dẫn tới hệ quả nào.

5.2. Khi phân loại, nêu rõ tiêu chí phân loại trước. Nếu các nhóm được liệt kê không ngang hàng (ví dụ IPA và Stout là nhánh con của Ale), phải nói rõ quan hệ đó và lý do chọn các nhóm này.

5.3. Giới thiệu khái niệm trước khi đính chính nó. Không viết “X không phải là Trappist” khi bài chưa giải thích Trappist là gì.

5.4. Khi giải thích vì sao một hình ảnh hay một lầm tưởng phổ biến, nêu cả lý do trực quan lẫn lý do thực dụng (ai được lợi, nó phục vụ mục đích gì), nếu nguồn có đề cập.

5.5. Bỏ những câu giải thích điều ai cũng biết (ví dụ “nắp nhựa chai nước ngọt có cơ chế khác”). Chỉ giữ ngoại lệ mà người đọc chưa chắc đã biết.

5.6. Câu chuyện bên lề (giai thoại) được hoan nghênh nếu nó có kiểm chứng và có giới hạn rõ ràng (ví dụ chuyện Gillette kèm phản biện của Picker).

## 6. Kiểm chứng và nguồn

6.1. Mức độ rào đón phải tương xứng với bằng chứng: không quá rụt rè khi đã chắc, không khẳng định khi chưa chắc.

6.2. Không phủ nhận nhầm điều đã được chuẩn hóa hay xác lập. Ví dụ: lịch sử chọn 21 răng ít tài liệu gốc, nhưng nắp 21 răng là một tiêu chuẩn công nghiệp có thật (DIN 6099).

6.3. Phân biệt rõ ba mức trong câu chữ:
- Đã xác minh: viết khẳng định, kèm nguồn.
- Được nhiều nguồn phổ biến nêu nhưng chưa thấy tài liệu gốc: “theo các bài phổ biến…”, “thường được kể là…”.
- Giả thuyết chưa xác minh: nói rõ “chúng tôi chưa tìm thấy tài liệu gốc xác nhận”.

6.4. Thông tin đến từ góp ý, bình luận hay bản tóm tắt (kể cả của người review hoặc AI) phải được kiểm chứng trước khi đưa vào bài như sự thật. Nếu chưa kiểm chứng được, đưa vào ở mức “giả thuyết” theo 6.3.

6.5. Mỗi bài có một hộp “Lưu ý kiểm chứng” để chặn người đọc rơi sang thái cực ngược lại (ví dụ: Maslow có đề xuất thứ bậc nhu cầu, chỉ có hình kim tự tháp là của người đời sau).

6.6. Khi bài dựa trên một nguồn thứ cấp (video, bài báo), ghi rõ những điểm nguồn đó đơn giản hóa hoặc sai so với tài liệu chuyên khảo.

6.7. Chỉ gắn link khi đã kiểm tra URL tồn tại. Nguồn chưa có URL chắc chắn thì ghi tên tài liệu, không bịa link.

6.8. Giữ nguyên chính xác số liệu, đơn vị, tên riêng, năm. Số trang, số người, số phần trăm phải khớp nguồn.

6.9. Bài về rượu bia phải có nhắc nhở không lái xe sau khi uống.

## 7. Góc bàn nhậu

7.1. Không có câu dẫn thừa (“Cảnh báo: chủ đề này dễ dẫn tới…”). Nếu cần câu dẫn, chỉ một câu ngắn có thông tin.

7.2. Mỗi câu hỏi phải là câu hỏi thật, có thể tranh luận hoặc kiểm tra tại bàn. Câu trả lời ngắn, có thông tin, không chốt bằng câu đùa.

7.3. Câu hỏi mở thì nói rõ là không có đáp án đúng, rồi đưa một gợi ý cụ thể.

## 8. Trình bày và giao diện

8.1. Dòng meta dưới tiêu đề chỉ gồm: thời gian đọc, số nguồn tham khảo, tháng cập nhật. Không thêm nhãn quảng cáo (“Mức tranh luận: cao”, “Có trò chơi…”). Số nguồn phải bằng số mục trong danh sách nguồn.

8.2. Không lặp cùng một nội dung nhiều lần trên một trang (trang chủ trước đây hiện 6 chủ đề ba lần).

8.3. Không hiển thị lựa chọn rỗng (danh mục chưa có bài thì ẩn, không hiện nút mờ “sắp có”).

8.4. Trên điện thoại, tiêu đề bài hiện trước hình minh họa.

8.5. Minh họa là SVG tự vẽ theo phong cách Dark Glow Line Art, không dùng ảnh có bản quyền. Hình tương tác phải có chú thích nói rõ đây là mô phỏng hay số liệu thật.

8.6. Màu sắc lấy từ token theo danh mục trong `assets/css/style.css`; chữ nhỏ phải đủ tương phản (không dùng màu tối hơn `--dim`).

8.7. Nội dung phải đọc được khi tắt JavaScript (hiệu ứng `.reveal` chỉ ẩn nội dung khi có class `js`).

8.8. Sau khi sửa, chạy thử ở bề rộng 390px và 1280px: không lỗi JavaScript, không tràn ngang.

## 9. Cấu trúc một bài

1. `<h1>`, sapo, dòng meta, minh họa chính.
2. Bài lầm tưởng: Lầm tưởng / Sự thật / Điểm thú vị. Bài kiến thức: ba điểm nhanh.
3. Thân bài. Bài lầm tưởng theo trình tự điều tra: nguồn gốc → nội dung thật → ai/cái gì tạo ra lầm tưởng → vì sao nó phổ biến → góc nhìn hiện nay. Bài kiến thức theo trình tự giải thích: bối cảnh → cơ chế hoặc lịch sử → chi tiết đáng chú ý → giới hạn, ngoại lệ.
4. Ít nhất một hình tương tác hoặc biểu đồ giúp hiểu vấn đề.
5. Hộp “Lưu ý kiểm chứng”.
6. Góc bàn nhậu.
7. Nguồn tham khảo.

---

## Checklist trước khi đăng

- [ ] Tiêu đề khớp mức độ bằng chứng, không lặp từ, không “luôn/mọi” khi có ngoại lệ; giống nhau ở `data.js`, `<title>`, `<h1>`.
- [ ] Đã chọn đúng dạng bài: chỉ dùng dạng lầm tưởng khi lầm tưởng thật sự phổ biến; `type` trong `data.js` khớp với trang.
- [ ] Các khối mở đầu (sapo và verdict hoặc điểm nhanh) không lặp ý.
- [ ] (Bài lầm tưởng) Lời đồn được nêu cụ thể và xử lý trong thân bài.
- [ ] Không có slogan, câu mở làm màu, câu chốt gây cười, trích dẫn tự đặt.
- [ ] Không có câu dịch sát tiếng Anh; thuật ngữ có giải thích ở lần đầu.
- [ ] Mọi khái niệm được giới thiệu trước khi đính chính; phân loại nêu rõ tiêu chí.
- [ ] Chuỗi nhân quả đầy đủ, không nhảy cóc.
- [ ] Mỗi khẳng định quan trọng có nguồn; giả thuyết chưa xác minh được ghi rõ.
- [ ] Không phủ nhận nhầm điều đã là tiêu chuẩn hoặc đã được xác lập.
- [ ] Link nguồn đã kiểm tra; số nguồn ở dòng meta khớp danh sách.
- [ ] Đọc lại toàn bài để bắt lỗi lặp từ, lỗi gõ.
- [ ] Chạy thử ở 390px và 1280px.
