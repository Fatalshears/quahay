/* Quá Hay — content index: categories, topics, line-art icons.
   Add a new topic: create topics/<slug>.html, then add an entry to QH.topics. */
(function () {
  const categories = {
    body:    { name: "Cơ thể & Não bộ",      sub: "Sinh học · Y học · Tâm lý",   primary: "#FF5C35", accent: "#FFB800", bg: "#140B0D" },
    space:   { name: "Vũ trụ & Thiên văn",   sub: "Không gian · Quan sát",       primary: "#00F2FE", accent: "#9D4EDD", bg: "#080C16" },
    nature:  { name: "Thế giới tự nhiên",    sub: "Động vật · Rừng · Biển",      primary: "#00E676", accent: "#A7F3D0", bg: "#09130E" },
    history: { name: "Lịch sử & Nghệ thuật", sub: "Khảo cổ · Văn minh",          primary: "#F59E0B", accent: "#FDE68A", bg: "#13100B" },
    tech:    { name: "Công nghệ & Tương lai", sub: "AI · Vật lý · Thiết kế",     primary: "#FF007F", accent: "#38BDF8", bg: "#0F0A19" },
    food:    { name: "Ẩm thực & Đời sống",   sub: "Đồ uống · Thói quen · Đồ vật", primary: "#FFC53D", accent: "#FFF1D0", bg: "#150F08" }
  };

  // Crown-cap outline: n teeth between radius r1 (valley) and r2 (tip)
  function capPath(cx, cy, r1, r2, n) {
    let d = "";
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2, a1 = ((i + 0.5) / n) * Math.PI * 2;
      const p = (r, a) => (cx + r * Math.cos(a)).toFixed(2) + " " + (cy + r * Math.sin(a)).toFixed(2);
      d += (i ? "L" : "M") + p(r2, a0) + "L" + p(r1, a1);
    }
    return d + "Z";
  }

  const icons = {
    maslow: `<svg class="art" viewBox="0 0 64 64"><path class="ic-l" d="M32 8 L58 54 H6 Z"/><path class="ic-l" d="M25 20.5h14M19.5 30h25M14 39.5h36M9 49h46" opacity=".55"/><path class="ic-a" d="M4 44c8-10 14-10 22 0s14 10 22 0 10-6 12-4" stroke-dasharray="3 4"/></svg>`,
    cap: `<svg class="art" viewBox="0 0 64 64"><path class="ic-l" d="${capPath(32, 32, 23, 28, 21)}"/><circle class="ic-a" cx="32" cy="32" r="16"/><text x="32" y="37" text-anchor="middle" class="ic-t" font-size="14" font-weight="700">21</text></svg>`,
    wall: `<svg class="art" viewBox="0 0 64 64"><circle class="ic-a" cx="50" cy="13" r="7"/><path class="ic-a" d="M47 10a5 5 0 0 0 6 7" opacity=".6"/><path class="ic-l" d="M2 50l10-12 8 6 10-14 10 12 8-6 14 14"/><path class="ic-l" d="M8 44v-3h3v2h3v-3h3v3" opacity=".7"/><path class="ic-l" d="M26 36v-3h3v2h3v-3h3v3" opacity=".7"/><path class="ic-l" d="M2 58h60" opacity=".4"/></svg>`,
    napoleon: `<svg class="art" viewBox="0 0 64 64"><path class="ic-l" d="M6 34c6-14 18-20 26-20s20 6 26 20c-8-3-17-4-26-4s-18 1-26 4z"/><circle class="ic-a" cx="32" cy="22" r="3.5"/><path class="ic-l" d="M10 44h44" opacity=".55"/><path class="ic-l" d="M10 41v6M19 42v4M28 41v6M37 42v4M46 41v6M54 42v4" opacity=".55"/><text x="32" y="60" text-anchor="middle" class="ic-t" font-size="9" font-weight="600">1,69 m</text></svg>`,
    brain: `<svg class="art" viewBox="0 0 64 64"><path class="ic-l" d="M30 12c-6-4-14-1-15 5-6 1-9 7-6 12-4 4-2 11 3 13 0 6 6 9 11 7 3 4 7 4 7 4V12z"/><path class="ic-l" d="M34 12c6-4 14-1 15 5 6 1 9 7 6 12 4 4 2 11-3 13 0 6-6 9-11 7-3 4-7 4-7 4V12z"/><path class="ic-a" d="M16 24c4 0 6 2 7 5M14 36c4-1 7 0 9 3M48 24c-4 0-6 2-7 5M50 36c-4-1-7 0-9 3M24 46c2-3 4-4 6-4M40 46c-2-3-4-4-6-4"/></svg>`,
    beer: `<svg class="art" viewBox="0 0 64 64"><path class="ic-l" d="M16 16h28l-3 42H19z"/><path class="ic-l" d="M44 24h6a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-6" opacity=".7"/><path class="ic-a" d="M14 16c0-6 5-8 9-6 2-4 8-5 11-1 3-3 10-1 10 5"/><circle class="ic-a" cx="26" cy="44" r="1.6"/><circle class="ic-a" cx="33" cy="36" r="1.6"/><circle class="ic-a" cx="29" cy="28" r="1.3"/><circle class="ic-a" cx="35" cy="48" r="1.2"/></svg>`
  };

  const topics = [
    {
      slug: "maslow", url: "topics/maslow.html", cat: "body", icon: "maslow", read: 9,
      title: "Tháp nhu cầu Maslow có thể không phải là kim tự tháp",
      short: "Tháp Maslow",
      myth: "Abraham Maslow đã tạo ra mô hình kim tự tháp 5 tầng quen thuộc.",
      fact: "Bài báo gốc năm 1943 không có hình kim tự tháp nào. Hình tam giác 5 tầng được các tác giả sách quản trị dựng lên khoảng 15–20 năm sau.",
      remember: "Hình kim tự tháp quen thuộc không phải do Maslow tạo ra.",
      tags: ["tâm lý học", "quản trị", "động lực", "nhu cầu", "kim tự tháp", "Abraham Maslow", "1943", "McDermid", "hierarchy of needs"]
    },
    {
      slug: "nap-chai-21-rang", url: "topics/nap-chai-21-rang.html", cat: "food", icon: "cap", read: 8,
      title: "Nắp chai bia thường có 21 răng cưa — nhưng con số 21 chẳng có gì huyền bí",
      short: "Nắp chai 21 răng",
      myth: "Con số 21 trên nắp chai bia ẩn chứa một quy luật toán học đặc biệt, và mọi nắp chai đều phải như vậy.",
      fact: "Nắp kiểu crown cap ban đầu có 24 răng. Con số 21 trở nên phổ biến vì cân bằng giữa độ kín, độ dễ mở và dây chuyền sản xuất, không phải quy luật bắt buộc.",
      remember: "21 răng cưa là thiết kế phổ biến, không phải quy luật phổ quát.",
      tags: ["nắp chai", "bia", "crown cap", "William Painter", "thiết kế công nghiệp", "Gillette", "răng cưa", "đồ vật"]
    },
    {
      slug: "van-ly-truong-thanh", url: "topics/van-ly-truong-thanh.html", cat: "space", icon: "wall", read: 8,
      title: "Vạn Lý Trường Thành không thể nhìn thấy bằng mắt thường từ Mặt Trăng",
      short: "Vạn Lý Trường Thành",
      myth: "Vạn Lý Trường Thành là công trình nhân tạo duy nhất nhìn thấy được từ Mặt Trăng.",
      fact: "Từ Mặt Trăng, mắt người không thể thấy bất kỳ công trình nhân tạo nào. Ngay cả từ quỹ đạo thấp, bức tường cũng rất khó nhận ra vì quá hẹp và cùng màu với đất đá xung quanh.",
      remember: "Không thể nhìn thấy bằng mắt thường từ Mặt Trăng.",
      tags: ["Trung Quốc", "NASA", "không gian", "phi hành gia", "Mặt Trăng", "quỹ đạo", "độ phân giải mắt", "Great Wall"]
    },
    {
      slug: "napoleon", url: "topics/napoleon.html", cat: "history", icon: "napoleon", read: 8,
      title: "Napoleon Bonaparte có thể không hề thấp bé như hình ảnh phổ biến",
      short: "Napoleon",
      myth: "Napoleon là một nhà lãnh đạo thấp bé bất thường so với đàn ông cùng thời.",
      fact: "Số đo “5 pieds 2 pouces” theo đơn vị Pháp tương đương khoảng 1,68–1,69 m, ngang hoặc nhỉnh hơn mức trung bình thời đó. Hình ảnh “thấp bé” bị phóng đại bởi biếm họa Anh và sự nhầm lẫn đơn vị.",
      remember: "Hình ảnh thấp bé của ông bị ảnh hưởng bởi những cách diễn giải lịch sử thiếu chính xác.",
      tags: ["Pháp", "lịch sử", "chiều cao", "đơn vị đo", "biếm họa", "Gillray", "petit caporal", "Napoleon complex"]
    },
    {
      slug: "10-phan-tram-nao", url: "topics/10-phan-tram-nao.html", cat: "body", icon: "brain", read: 8,
      title: "Con người không chỉ sử dụng 10% bộ não",
      short: "10% bộ não",
      myth: "Chúng ta chỉ dùng 10% bộ não; 90% còn lại đang chờ được “khai phá” để tạo ra siêu năng lực.",
      fact: "Không có bằng chứng khoa học nào ủng hộ con số này. Hình ảnh não bộ cho thấy hầu như mọi vùng đều hoạt động trong một ngày, và tổn thương một vùng nhỏ cũng gây hậu quả rõ rệt.",
      remember: "Không có cơ sở khoa học cho tuyên bố con người chỉ sử dụng 10% bộ não.",
      tags: ["não bộ", "thần kinh", "fMRI", "neuromyth", "Lucy", "Limitless", "William James", "khoa học"]
    },
    {
      slug: "bia", url: "topics/bia.html", cat: "food", icon: "beer", read: 14,
      title: "Bia không chỉ để “đếm lon”: lịch sử, nguyên liệu và 4 dòng bia nên biết",
      short: "Thế giới bia",
      myth: "Bia nào cũng như nhau, chỉ khác nhãn mác; uống bia là để “trăm phần trăm” và đếm lon.",
      fact: "Bia là cả một họ thức uống với hàng trăm phong cách. Loại bia vàng nhạt quen thuộc ở Việt Nam chỉ là một nhánh (pale lager) bên cạnh IPA, Stout, Ale Bỉ và nhiều dòng khác.",
      remember: "Bia phổ thông chỉ là một nhánh nhỏ trong cây phả hệ bia.",
      tags: ["bia", "lager", "pilsner", "IPA", "stout", "porter", "ale", "Bỉ", "Reinheitsgebot", "Hội Đồng Cừu", "BJCP", "hoa bia", "mạch nha", "nitro"]
    }
  ];

  window.QH = { categories, topics, icons, capPath };
})();
