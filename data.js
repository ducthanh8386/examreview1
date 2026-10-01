/* =========================================================
   DỮ LIỆU ĐỀ CƯƠNG LÝ THUYẾT & NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM
   Học phần: Khởi Nghiệp Kinh Doanh & Đổi Mới Sáng Tạo
   ========================================================= */

// ---------------------------------------------------------
// 1. TỔNG HỢP LÝ THUYẾT CHI TIẾT THEO CHƯƠNG
// ---------------------------------------------------------
const THEORY_DATA = [
  {
    chapter: 1,
    title: "Chương 1. Bản Chất Khởi Nghiệp, Kinh Doanh Và Sự Sáng Tạo",
    icon: "fa-solid fa-lightbulb",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Khái Niệm Cơ Bản Về Khởi Nghiệp & Kinh Doanh</h3>
        <ul>
          <li><strong>Khởi sự kinh doanh (Start-ups):</strong> Là doanh nghiệp/tổ chức mới thành lập ở giai đoạn đầu phát triển nhằm đưa sản phẩm mới ra thị trường dựa trên nền tảng <em>đổi mới sáng tạo</em>, với mục tiêu tăng trưởng và mở rộng quy mô nhanh chóng.</li>
          <li><strong>Khởi nghiệp trong tiếng Việt:</strong> Là bắt đầu sự nghiệp hay những việc làm có 3 tính chất cốt lõi: <em>quan trọng, có lợi ích</em> và <em>lâu dài</em>.</li>
          <li><strong>Khởi sự trong tiếng Việt:</strong> Là bắt đầu hành động để thực hiện một kế hoạch.</li>
          <li><strong>Khởi nghiệp kinh doanh (Shane & Venkataraman, 2000):</strong> Là quá trình tìm kiếm, đánh giá và khai thác các cơ hội kinh doanh bằng cách thành lập doanh nghiệp mới hoặc với/trong doanh nghiệp hiện có.</li>
          <li><strong>Kinh doanh (Luật Doanh nghiệp 59/2020):</strong> Là việc thực hiện liên tục một, một số hoặc tất cả công đoạn của quá trình từ đầu tư, sản xuất đến tiêu thụ sản phẩm hoặc cung ứng dịch vụ trên thị trường nhằm mục đích <em>tìm kiếm lợi nhuận</em>.</li>
          <li><strong>Khởi nghiệp trong doanh nghiệp đã thành lập:</strong> Nhấn mạnh 3 trụ cột: Tính chủ động (<em>Proactive</em>), Đổi mới sáng tạo (<em>Innovative</em>) và Chấp nhận rủi ro (<em>Risk taking</em>).</li>
        </ul>

        <h3>2. Sáng Tạo, Đổi Mới Sáng Tạo & Kỹ Năng Lãnh Đạo</h3>
        <div class="formula-box">
          <p><strong>Sáng tạo (Creativity):</strong> Năng lực vượt qua những ý tưởng, quy tắc, khuôn mẫu, quan hệ cũ để tạo ra cái mới và khác biệt.</p>
          <p><strong>Đổi mới sáng tạo (Innovation):</strong> Là sáng tạo được <em>thương mại hóa</em> dưới hình thức sản phẩm nhằm đáp ứng nhu cầu của nhóm khách hàng nhất định.</p>
          <p><strong>Kỹ năng lãnh đạo (Leadership skills):</strong> Là cầu nối kết hợp sự sáng tạo thành đổi mới sáng tạo và khởi nghiệp kinh doanh:</p>
          <p style="text-align: center; font-weight: 700; color: var(--accent-purple);">
            Sáng tạo (C) + Lãnh đạo (L) = Đổi mới sáng tạo (I)<br>
            Đổi mới sáng tạo (I) + Lãnh đạo (L) = Khởi nghiệp kinh doanh (E)
          </p>
        </div>

        <h3>3. Động Lực & Tầm Quan Trọng Của Khởi Nghiệp</h3>
        <ul>
          <li><strong>3 Lý do chính của nhà khởi nghiệp:</strong>
            <ol>
              <li>Được tự mình làm chủ (Nghiệp chủ).</li>
              <li>Được theo đuổi ý tưởng, cơ hội của riêng mình.</li>
              <li>Được tưởng thưởng về tài chính cho bản thân và gia đình.</li>
            </ol>
          </li>
          <li><strong>Tầm quan trọng kinh tế - xã hội:</strong> Tạo ra hàng hóa/dịch vụ mới, là nguồn tạo ra việc làm mới quan trọng nhất, tăng thu nhập/mức sống, thúc đẩy đổi mới sáng tạo, đóng góp tăng trưởng kinh tế và giải quyết các vấn đề xã hội/môi trường.</li>
        </ul>
      </div>
    `
  },
  {
    chapter: 2,
    title: "Chương 2. Cơ Hội Kinh Doanh Và Tư Duy Thiết Kế",
    icon: "fa-solid fa-bullseye",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Khái Niệm & 4 Tiêu Chí Của Cơ Hội Kinh Doanh</h3>
        <ul>
          <li><strong>Cơ hội kinh doanh:</strong> Là những tình huống, bối cảnh thuận lợi tạo ra nhu cầu về một loại sản phẩm hàng hóa/dịch vụ mới, hay một dự án kinh doanh mới. Khác với <em>Ý tưởng kinh doanh</em> (chỉ là suy nghĩ/dự định có thể đáp ứng hoặc không các tiêu chí của cơ hội).</li>
          <li><strong>4 Tiêu chí cốt lõi của một cơ hội kinh doanh:</strong>
            <ul>
              <li><strong>Mang lại giá trị cho khách hàng:</strong> Bán thứ khách hàng mong muốn và cần, không phải bán thứ bạn có.</li>
              <li><strong>Hấp dẫn:</strong> Thị trường cần phải đủ lớn, có thể đáp ứng nhu cầu và đạt doanh thu lớn hơn chi phí.</li>
              <li><strong>Kịp thời:</strong> Thời điểm thị trường cần và thời điểm bạn có thể gia nhập thị trường là khớp nhau.</li>
              <li><strong>Đủ dài:</strong> Thời gian cơ hội tồn tại đủ dài để khai thác sinh lời.</li>
            </ul>
          </li>
        </ul>

        <h3>2. Ba Nguồn Gốc Xác Định Cơ Hội (Barringer & Ireland, 2019)</h3>
        <ol>
          <li><strong>Quan sát các xu thế:</strong> Xu thế kinh tế, xã hội, công nghệ, chính sách và môi trường tự nhiên.</li>
          <li><strong>Tìm khoảng trống trên thị trường:</strong> Nhận diện nhu cầu/mong muốn của khách hàng có tồn tại nhưng chưa được đáp ứng đầy đủ.</li>
          <li><strong>Giải quyết một vấn đề:</strong> Tìm ra giải pháp giúp giải quyết hiệu quả vấn đề mà bản thân hoặc nhiều người gặp phải.</li>
        </ol>

        <h3>3. Tiến Trình 5 Bước Trong Tư Duy Thiết Kế (Design Thinking)</h3>
        <div class="formula-box">
          <p><strong>Định nghĩa:</strong> Cách tiếp cận phát triển sản phẩm mới lấy con người (khách hàng) làm trung tâm dựa trên nền tảng thấu cảm.</p>
          <ol>
            <li><strong>Bước 1 - Thấu cảm (Empathize):</strong> Thấu hiểu và đồng cảm sâu sắc về nhu cầu, cảm nhận, suy nghĩ, hành vi của khách hàng (dùng phương pháp Body storming, phỏng vấn sâu...).</li>
            <li><strong>Bước 2 - Xác định vấn đề (Define):</strong> Xác định những vấn đề cốt lõi mà khách hàng đang gặp phải và thực sự cần giải quyết.</li>
            <li><strong>Bước 3 - Phát triển giải pháp (Ideate):</strong> Động não, phát triển các ý tưởng sáng tạo cho vấn đề chính của khách hàng.</li>
            <li><strong>Bước 4 - Thiết kế mẫu / Mẫu thử (Prototype):</strong> Xây dựng sản phẩm mẫu trực quan hóa các giải pháp và thu thập phản hồi.</li>
            <li><strong>Bước 5 - Kiểm tra (Test):</strong> Lựa chọn giải pháp tốt nhất từ các mẫu thử để hoàn thiện trước khi thương mại hóa.</li>
          </ol>
        </div>

        <h3>4. Khung Đề Xuất Giá Trị (Alexander Osterwalder)</h3>
        <ul>
          <li><strong>Hồ sơ khách hàng (Customer Profile):</strong>
            <ul>
              <li><em>Nhiệm vụ (Jobs):</em> Điều khách hàng cần thực hiện trong công việc, cuộc sống.</li>
              <li><em>Vấn đề (Pains):</em> Điều khiến khách hàng lo lắng, bận tâm, cảm thấy bị cản trở.</li>
              <li><em>Mong muốn (Gains):</em> Kết quả/lợi ích mà khách hàng mong đợi.</li>
            </ul>
          </li>
          <li><strong>Bản đồ giá trị (Value Map):</strong> Sản phẩm/Dịch vụ (Products & Services), Giải pháp cho vấn đề (Pain Relievers), Giải pháp cho mong muốn (Gain Creators).</li>
          <li><strong>Sự khớp nối (Fit):</strong> Đạt được khi các giải pháp khớp chính xác với nỗi đau và mong muốn của khách hàng.</li>
        </ul>
      </div>
    `
  },
  {
    chapter: 3,
    title: "Chương 3. Mô Hình Kinh Doanh (BMC) Và Đổi Mới Sáng Tạo",
    icon: "fa-solid fa-chart-pie",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Khái Niệm Mô Hình Kinh Doanh</h3>
        <ul>
          <li><strong>Mô hình kinh doanh:</strong> Mô tả cách thức doanh nghiệp <em>tạo ra giá trị</em>, <em>chuyển giao giá trị</em> cho khách hàng và các bên liên quan, và <em>thu nhận lại giá trị</em> (doanh thu, lợi nhuận).</li>
          <li><strong>Phân biệt bộ ba:</strong>
            <ul>
              <li><em>Chiến lược kinh doanh:</em> Chọn thị trường nào? Làm thế nào để chiến thắng đối thủ?</li>
              <li><em>Kế hoạch kinh doanh:</em> Mục tiêu là gì? Những hoạt động cụ thể cần triển khai?</li>
              <li><em>Mô hình kinh doanh:</em> Tạo ra và bán cái gì, cho ai, mang lại giá trị gì và nhận về giá trị thế nào?</li>
            </ul>
          </li>
          <li><strong>Thời điểm xác định:</strong> Sau khi đã đánh giá tính khả thi của cơ hội và trước khi chuẩn bị kế hoạch kinh doanh.</li>
        </ul>

        <h3>2. 9 Thành Tố Trong Mô Hình Canvas (Business Model Canvas - BMC)</h3>
        <p>Phát triển bởi Alexander Osterwalder & Yves Pigneur theo trình tự phân tích chuẩn:</p>
        <ol>
          <li><strong>Phân khúc khách hàng (CS):</strong> Nhóm khách hàng mục tiêu mà doanh nghiệp muốn tiếp cận và phục vụ.</li>
          <li><strong>Đề xuất giá trị (VP):</strong> Danh mục sản phẩm/dịch vụ mang lại giá trị giải quyết vấn đề cho khách hàng.</li>
          <li><strong>Kênh truyền thông & phân phối (CH):</strong> Cách tiếp cận để chuyển giao giá trị (5 giai đoạn: <em>Nhận biết - Đánh giá - Thanh toán - Chuyển giao - Sau bán hàng</em>).</li>
          <li><strong>Quan hệ khách hàng (CR):</strong> Loại quan hệ muốn thiết lập và duy trì với từng phân khúc.</li>
          <li><strong>Dòng doanh thu (RS):</strong> Dòng tiền thu được từ khách hàng (hợp cùng CS, VP, CH, CR tạo nhóm Doanh thu).</li>
          <li><strong>Nguồn lực chính (KR):</strong> Những tài sản quan trọng nhất cần có để vận hành mô hình.</li>
          <li><strong>Hoạt động chính (KA):</strong> Các hành động quan trọng nhất cần thực hiện để vận hành mô hình.</li>
          <li><strong>Đối tác chính (KP):</strong> Mạng lưới nhà cung ứng và đối tác hợp tác.</li>
          <li><strong>Cơ cấu chi phí (CS):</strong> Chi phí cố định và biến đổi phát sinh (hợp cùng KR, KA, KP tạo nhóm Chi phí).</li>
        </ol>

        <h3>3. 55 Mô Hình Kinh Doanh (Gassmann et al., 2014)</h3>
        <ul>
          <li>Có 55 mô hình kinh doanh phổ biến trên thế giới; mỗi mô hình nhấn mạnh vào một hoặc một vài thành tố quan trọng.</li>
          <li><strong>Yếu tố cốt lõi để đổi mới sáng tạo:</strong> Sử dụng một mô hình kinh doanh trong một bối cảnh/ngành nghề mà nó <em>chưa từng được sử dụng trước đây</em>.</li>
          <li><strong>Các mô hình tiêu biểu:</strong>
            <ul>
              <li><em>Bán hàng trực tiếp (Direct Selling):</em> Bán thẳng từ nhà sản xuất đến người dùng, bỏ qua trung gian.</li>
              <li><em>Freemium:</em> Bản cơ bản miễn phí (Free), bản nâng cao tính phí (Premium).</li>
              <li><em>Bán hàng bổ sung (Add-on):</em> Sản phẩm cốt lõi giá rẻ/cạnh tranh; các tính năng mở rộng thu thêm phí.</li>
              <li><em>Thuê bao (Subscription):</em> Khách hàng trả tiền định kỳ để nhận sản phẩm/dịch vụ đều đặn.</li>
              <li><em>Khách hàng trung thành (Loyalty):</em> Duy trì khách thông qua việc cung cấp giá trị cao hơn sản phẩm cơ bản (tích điểm, ưu đãi hội viên).</li>
            </ul>
          </li>
        </ul>
      </div>
    `
  }
];

// ---------------------------------------------------------
// 2. NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM CHUẨN HÓA
// ---------------------------------------------------------
const RAW_QUESTIONS_CH1 = [
  {
    question: "Khởi sự kinh doanh trong tiếng Anh (start-ups) được hiểu là gì?",
    options: [
      "Là doanh nghiệp mới thành lập và đưa sản phẩm mới ra thị trường dựa trên nền tảng đổi mới sáng tạo.",
      "Là việc kinh doanh và đưa sản phẩm mới ra thị trường dựa trên nền tảng đổi mới sáng tạo.",
      "Là việc thành lập doanh nghiệp và đưa sản phẩm mới ra thị trường dựa trên nền tảng đổi mới sáng tạo.",
      "Là doanh nghiệp nhỏ hoạt động dựa trên nền tảng đổi mới sáng tạo."
    ],
    correctIndex: 0,
    explanation: "Khởi sự kinh doanh (start-ups) là doanh nghiệp mới thành lập và đưa sản phẩm mới ra thị trường dựa trên nền tảng đổi mới sáng tạo."
  },
  {
    question: "Trong tiếng Việt, khởi nghiệp được hiểu là gì?",
    options: [
      "Là bắt đầu sự nghiệp hay những việc làm quan trọng, vui vẻ.",
      "Là bắt đầu sự nghiệp hay những việc làm có lợi ích quan trọng, ngắn hạn.",
      "Là bắt đầu sự nghiệp hay những việc làm có lợi ích quan trọng, lâu dài.",
      "Là bắt đầu sự nghiệp hay những việc làm có lợi ích."
    ],
    correctIndex: 2,
    explanation: "Trong tiếng Việt, khởi nghiệp được hiểu là bắt đầu sự nghiệp hay những việc làm có lợi ích quan trọng, lâu dài."
  },
  {
    question: "Khởi nghiệp kinh doanh theo định nghĩa được chấp nhận rộng rãi nhất của Scott Shane và S. Venkataraman (2000) là gì?",
    options: [
      "Là quá trình tìm kiếm, đánh giá và khai thác các cơ hội kinh doanh bằng cách thành lập doanh nghiệp mới.",
      "Là quá trình tìm kiếm, đánh giá và khai thác các cơ hội kinh doanh bằng cách thành lập doanh nghiệp mới hoặc với doanh nghiệp hiện có.",
      "Là quá trình tìm kiếm, đánh giá và khai thác các cơ hội kinh doanh với doanh nghiệp hiện có.",
      "Là quá trình tìm kiếm, đánh giá và khai thác các cơ hội kinh doanh với doanh nghiệp thường có quy mô nhỏ."
    ],
    correctIndex: 1,
    explanation: "Shane & Venkataraman (2000) định nghĩa: Khởi nghiệp kinh doanh là quá trình tìm kiếm, đánh giá và khai thác cơ hội bằng cách thành lập doanh nghiệp mới hoặc với doanh nghiệp hiện có."
  },
  {
    question: "Theo Luật Doanh nghiệp số 59/2020 của Việt Nam, kinh doanh là gì?",
    options: [
      "Là việc thực hiện một quá trình từ đầu tư, sản xuất đến tiêu thụ sản phẩm hoặc cung ứng dịch vụ trên thị trường nhằm mục đích tìm kiếm lợi nhuận.",
      "Là việc thực hiện liên tục một, một số hoặc tất cả công đoạn của quá trình từ đầu tư, sản xuất đến tiêu thụ sản phẩm hoặc cung ứng dịch vụ trên thị trường nhằm mục đích tìm kiếm lợi nhuận.",
      "Là việc thực hiện liên tục một, một số hoặc tất cả công đoạn của quá trình từ đầu tư, sản xuất đến tiêu thụ sản phẩm hoặc cung ứng dịch vụ trên thị trường nhằm mục đích phục vụ xã hội.",
      "Là việc thực hiện một số công đoạn của quá trình từ đầu tư, sản xuất đến tiêu thụ sản phẩm hoặc cung ứng dịch vụ trên thị trường nhằm mục đích tìm kiếm lợi nhuận."
    ],
    correctIndex: 1,
    explanation: "Theo Luật Doanh nghiệp 59/2020/QH14: Kinh doanh là việc thực hiện liên tục một, một số hoặc tất cả công đoạn của quá trình từ đầu tư, sản xuất đến tiêu thụ sản phẩm hoặc cung ứng dịch vụ trên thị trường nhằm mục đích tìm kiếm lợi nhuận."
  },
  {
    question: "Khởi nghiệp kinh doanh trong doanh nghiệp đã thành lập trong tiếng Anh được hiểu là gì?",
    options: [
      "Các doanh nghiệp đã thành lập tìm kiếm, đánh giá và khai thác các cơ hội kinh doanh trên cơ sở nhấn mạnh tính đổi mới sáng tạo (innovative).",
      "Các doanh nghiệp đã thành lập tìm kiếm, đánh giá và khai thác các cơ hội kinh doanh trên cơ sở nhấn mạnh việc chấp nhận rủi ro (risk taking).",
      "Các doanh nghiệp đã thành lập tìm kiếm, đánh giá và khai thác các cơ hội kinh doanh trên cơ sở nhấn mạnh tính chủ động (proactive), đổi mới sáng tạo (innovative) và chấp nhận rủi ro (risk taking).",
      "Các doanh nghiệp đã thành lập tìm kiếm, đánh giá và khai thác các cơ hội kinh doanh trên cơ sở nhấn mạnh tính chủ động (proactive)."
    ],
    correctIndex: 2,
    explanation: "Khởi nghiệp trong doanh nghiệp đã thành lập nhấn mạnh 3 yếu tố: Tính chủ động (proactive), Đổi mới sáng tạo (innovative) và Chấp nhận rủi ro (risk taking)."
  },
  {
    question: "Sáng tạo trong khởi nghiệp kinh doanh được hiểu là gì?",
    options: [
      "Là năng lực vượt qua được những ý tưởng, quy tắc, khuôn mẫu, quan hệ và những gì truyền thống/thông thường/cũ để tạo ra những cái mới, cái khác biệt.",
      "Là năng lực tạo ra những sản phẩm mới có tính chất sáng tạo.",
      "Là năng lực tạo ra những gì mà khách hàng mong muốn có và sẵn sàng trả tiền.",
      "Là năng lực vượt qua được những gì nhàm chán để tạo ra những cái vui vẻ."
    ],
    correctIndex: 0,
    explanation: "Sáng tạo là năng lực vượt qua các khuôn mẫu, quy tắc cũ để tạo ra cái mới và khác biệt."
  },
  {
    question: "Những lý do chính của khởi nghiệp kinh doanh của các cá nhân hoặc nhóm khởi nghiệp là gì?",
    options: [
      "Được tưởng thưởng về tài chính cho bản thân và gia đình.",
      "Được tự mình làm chủ (nghiệp chủ).",
      "Được theo đuổi ý tưởng, cơ hội của riêng mình.",
      "Được tự mình làm chủ (nghiệp chủ), được theo đuổi ý tưởng, cơ hội của riêng mình, được tưởng thưởng về tài chính cho bản thân và gia đình..."
    ],
    correctIndex: 3,
    explanation: "Ba động lực chính: Tự làm chủ (nghiệp chủ), theo đuổi ý tưởng/cơ hội riêng, và nhận tưởng thưởng tài chính."
  },
  {
    question: "Đổi mới sáng tạo trong khởi nghiệp kinh doanh được hiểu là gì?",
    options: [
      "Là sáng tạo được thương mại hóa dưới hình thức sản phẩm nhằm đáp ứng nhu cầu của nhóm khách hàng nhất định.",
      "Là việc thương mại hóa sản phẩm nào đó cho nhóm khách hàng nhất định.",
      "Là việc thương mại hóa sản phẩm nhằm đáp ứng nhu cầu và giữ chân một nhóm khách hàng nhất định.",
      "Là việc sáng tạo ra những sản phẩm mới chưa từng có trước đây trên thị trường."
    ],
    correctIndex: 0,
    explanation: "Đổi mới sáng tạo (Innovation) là sự sáng tạo được thương mại hóa dưới dạng sản phẩm để giải quyết nhu cầu khách hàng."
  },
  {
    question: "Mối liên hệ giữa kỹ năng lãnh đạo, đổi mới sáng tạo, và khởi nghiệp kinh doanh là gì?",
    options: [
      "Kỹ năng lãnh đạo (Leadership skills) là yếu tố kết nối Sáng tạo (Creativity) với Đổi mới sáng tạo (Innovation) và Khởi nghiệp kinh doanh (Entrepreneurship).",
      "Khởi nghiệp kinh doanh (Entrepreneurship) là yếu tố kết nối Kỹ năng lãnh đạo (Leadership skills) với Sáng tạo (Creativity) và Đổi mới sáng tạo (Innovation).",
      "Sáng tạo (Creativity) là yếu tố kết nối Kỹ năng lãnh đạo (Leadership skills) với Đổi mới sáng tạo (Innovation) và Khởi nghiệp kinh doanh (Entrepreneurship).",
      "Đổi mới sáng tạo (Innovation) là yếu tố kết nối Kỹ năng lãnh đạo (Leadership skills) với Sáng tạo (Creativity) và Khởi nghiệp kinh doanh (Entrepreneurship)."
    ],
    correctIndex: 0,
    explanation: "Kỹ năng lãnh đạo là cầu nối chuyển hóa: Sáng tạo + Lãnh đạo = Đổi mới sáng tạo; Đổi mới sáng tạo + Lãnh đạo = Khởi nghiệp kinh doanh."
  },
  {
    question: "Kỹ năng lãnh đạo là gì?",
    options: [
      "Là những năng lực..., qua đó giúp nhà lãnh đạo làm việc hiệu quả để hoàn thành các mục tiêu của tổ chức.",
      "Là những năng lực..., qua đó giúp nhà lãnh đạo quản lý hiệu quả người khác để hoàn thành các mục tiêu của tổ chức.",
      "Là những năng lực..., qua đó giúp nhà lãnh đạo làm việc với và thông qua người khác để giúp họ hoàn thành các mục tiêu của mình.",
      "Là những năng lực..., qua đó giúp nhà lãnh đạo làm việc với và thông qua người khác để hoàn thành các mục tiêu của tổ chức."
    ],
    correctIndex: 3,
    explanation: "Kỹ năng lãnh đạo là những năng lực giúp làm việc với và thông qua người khác nhằm hoàn thành các mục tiêu của tổ chức."
  },
  {
    question: "Trong tiếng Việt, khởi sự được hiểu là gì?",
    options: [
      "Là bắt đầu làm việc để thực hiện một điều gì đó ngay lập tức.",
      "Là bắt đầu làm việc để thực hiện một chuyến đi chơi.",
      "Là bắt đầu hành động để thực hiện một kế hoạch.",
      "Là bắt đầu làm việc để thực hiện một điều gì đó vui vẻ là chính."
    ],
    correctIndex: 2,
    explanation: "Khởi sự là bắt đầu hành động để thực hiện một kế hoạch."
  },
  {
    question: "Tầm quan trọng của khởi nghiệp kinh doanh đối với sự phát triển kinh tế-xã hội của các quốc gia là gì?",
    options: [
      "Tạo ra hàng hóa, dịch vụ mới.",
      "Đóng góp vào tăng trưởng kinh tế; đóng góp vào giải quyết các vấn đề xã hội, môi trường.",
      "Tạo ra tạo ra việc làm mới; tăng thu nhập và mức sống.",
      "Tạo ra hàng hóa, dịch vụ mới; tạo ra việc làm mới; tăng thu nhập và mức sống; khuyến khích đổi mới sáng tạo; đóng góp vào tăng trưởng kinh tế; đóng góp vào giải quyết các vấn đề xã hội, môi trường..."
    ],
    correctIndex: 3,
    explanation: "Khởi nghiệp đóng vai trò toàn diện vào phát triển kinh tế, tạo việc làm mới, đổi mới sáng tạo và giải quyết vấn đề xã hội."
  },
  {
    question: "Trong tiếng Việt, khởi nghiệp được hiểu là bắt đầu sự nghiệp hay những việc làm có những đặc điểm nào sau đây?",
    options: [
      "Có tính chất quan trọng, có lợi ích và mang tính lâu dài.",
      "Chỉ mang tính chất ngắn hạn, vui vẻ và có lợi ích tức thời.",
      "Có tính chất quan trọng nhưng chủ yếu là ngắn hạn.",
      "Vui vẻ là chính và không cần có tính lợi ích lâu dài."
    ],
    correctIndex: 0,
    explanation: "Khởi nghiệp có 3 tính chất căn bản: Quan trọng, có lợi ích, và lâu dài."
  },
  {
    question: "Theo Luật Doanh nghiệp số 59/2020 của Việt Nam, kinh doanh là việc thực hiện liên tục một, một số hoặc tất cả công đoạn của quá trình từ đầu tư, sản xuất đến tiêu thụ sản phẩm hoặc cung ứng dịch vụ trên thị trường nhằm mục đích tìm kiếm lợi nhuận?",
    options: [
      "Đúng.",
      "Sai.",
      "Chỉ đúng với các công ty cổ phần niêm yết.",
      "Chỉ đúng với hoạt động thương mại quốc tế."
    ],
    correctIndex: 0,
    explanation: "Đúng. Đây là định nghĩa chính xác theo Khoản 21 Điều 4 Luật Doanh nghiệp số 59/2020/QH14."
  },
  {
    question: "Kỹ năng lãnh đạo (Leadership skills) là yếu tố kết nối Sáng tạo (Creativity) với Đổi mới sáng tạo (Innovation) và Khởi nghiệp kinh doanh (Entrepreneurship)?",
    options: [
      "Đúng.",
      "Sai.",
      "Chỉ đúng trong các tập đoàn công nghệ lớn.",
      "Chỉ đúng trong khu vực hành chính công."
    ],
    correctIndex: 0,
    explanation: "Đúng. Lãnh đạo là yếu tố cốt lõi kết nối (C + L = I, I + L = E)."
  },
  {
    question: "Theo nhiều nghiên cứu quốc tế, doanh nghiệp khởi nghiệp hay doanh nghiệp mới thành lập là nguồn tạo ra việc làm mới quan trọng nhất?",
    options: [
      "Đúng.",
      "Sai.",
      "Doanh nghiệp nhà nước mới là nguồn quan trọng nhất.",
      "Các tập đoàn đa quốc gia luôn tạo ra hầu hết việc làm mới."
    ],
    correctIndex: 0,
    explanation: "Đúng. Doanh nghiệp khởi nghiệp và doanh nghiệp mới thành lập là động lực tạo việc làm mới lớn nhất cho nền kinh tế."
  }
];

const RAW_QUESTIONS_CH2 = [
  {
    question: "Tiêu chí “Kịp thời” trong xác định cơ hội kinh doanh nghĩa là gì?",
    options: [
      "Thời điểm thị trường sôi động và thời điểm bạn có thể gia nhập thị trường là khớp nhau.",
      "Thời điểm thị trường cạnh tranh và thời điểm bạn có thể gia nhập thị trường là khớp nhau.",
      "Thời điểm thị trường bão hòa và thời điểm bạn có thể gia nhập thị trường là khớp nhau.",
      "Thời điểm thị trường cần và thời điểm bạn có thể gia nhập thị trường là khớp nhau."
    ],
    correctIndex: 3,
    explanation: "Kịp thời nghĩa là thời điểm thị trường có nhu cầu cần và thời điểm bạn có khả năng gia nhập thị trường là khớp nhau."
  },
  {
    question: "Bốn tiêu chí của một cơ hội kinh doanh là gì?",
    options: [
      "Mang lại giá trị cho khách hàng, hấp dẫn, kịp thời, và đủ dài.",
      "Mang lại giá trị cho khách hàng, hấp dẫn, chắc chắn, và đủ dài.",
      "Mang lại giá trị cho khách hàng, sáng tạo, kịp thời, và đủ dài.",
      "Mang lại giá trị cho doanh nghiệp, hấp dẫn, kịp thời, và đủ dài."
    ],
    correctIndex: 0,
    explanation: "4 tiêu chí cốt lõi: Mang lại giá trị cho khách hàng, Hấp dẫn, Kịp thời, và Đủ dài."
  },
  {
    question: "Ý tưởng kinh doanh là gì?",
    options: [
      "Là suy nghĩ, dự định, kế hoạch về hoạt động đem lại lợi nhuận, và thường gắn với sản phẩm nào đó; có thể đáp ứng hoặc không các tiêu chí của một cơ hội.",
      "Là tình huống giúp đem lại lợi nhuận, và thường gắn với sản phẩm nào đó; có thể đáp ứng hoặc không các tiêu chí của một cơ hội.",
      "Là hoạt động giúp đem lại lợi nhuận, và thường gắn với sản phẩm nào đó; có thể đáp ứng hoặc không các tiêu chí của một cơ hội.",
      "Là bối cảnh giúp đem lại lợi nhuận, và thường gắn với sản phẩm nào đó; có thể đáp ứng hoặc không các tiêu chí của một cơ hội."
    ],
    correctIndex: 0,
    explanation: "Ý tưởng kinh doanh là suy nghĩ, dự định về hoạt động đem lại lợi nhuận, có thể đáp ứng hoặc không đáp ứng các tiêu chí của cơ hội."
  },
  {
    question: "Tiêu chí “Hấp dẫn” trong xác định cơ hội kinh doanh nghĩa là gì?",
    options: [
      "Thị trường cần phải cạnh tranh, bạn có thể đáp ứng nhu cầu thị trường và đạt doanh thu lớn hơn chi phí.",
      "Thị trường cần phải đủ lớn, bạn có thể đáp ứng nhu cầu thị trường và đạt doanh thu lớn hơn chi phí.",
      "Thị trường cần phải tập trung, bạn có thể đáp ứng nhu cầu thị trường và đạt doanh thu lớn hơn chi phí.",
      "Thị trường cần phải tăng trưởng, bạn có thể đáp ứng nhu cầu thị trường và đạt doanh thu lớn hơn chi phí."
    ],
    correctIndex: 1,
    explanation: "Hấp dẫn nghĩa là dung lượng thị trường phải đủ lớn, có thể đáp ứng và tạo ra doanh thu lớn hơn chi phí."
  },
  {
    question: "Cơ hội kinh doanh là gì?",
    options: [
      "Là những phán đoán về một loại sản phẩm hàng hóa/dịch vụ mới, hay một dự án kinh doanh mới.",
      "Là những tình huống, bối cảnh thuận lợi tạo ra một loại sản phẩm hàng hóa/dịch vụ mới, hay một dự án kinh doanh mới.",
      "Là những hoạt động tạo ra một loại sản phẩm hàng hóa/dịch vụ mới đáp ứng nhu cầu của phân khúc khách hàng cụ thể.",
      "Là những tình huống, bối cảnh thuận lợi tạo ra nhu cầu về một loại sản phẩm hàng hóa/dịch vụ mới, hay một dự án kinh doanh mới."
    ],
    correctIndex: 3,
    explanation: "Cơ hội kinh doanh là những tình huống, bối cảnh thuận lợi tạo ra nhu cầu về một loại sản phẩm hàng hóa/dịch vụ mới hay dự án mới."
  },
  {
    question: "Ba nguồn gốc chính của cơ hội kinh doanh theo Barringer và Ireland (2019) là gì?",
    options: [
      "Quan sát các xu thế, tìm khoảng trống trên thị trường, và giải quyết một vấn đề.",
      "Quan sát các đối tác, tìm khoảng trống trên thị trường, và giải quyết một vấn đề.",
      "Quan sát các đối thủ cạnh tranh, tìm khoảng trống trên thị trường, và giải quyết một vấn đề.",
      "Quan sát khách hàng, tìm khoảng trống trên thị trường, và giải quyết một vấn đề."
    ],
    correctIndex: 0,
    explanation: "3 nguồn gốc: 1. Quan sát các xu thế, 2. Tìm khoảng trống trên thị trường, 3. Giải quyết một vấn đề."
  },
  {
    question: "Thiết kế mẫu là bước thứ mấy trong tiến trình tư duy thiết kế và nội dung của nó là gì?",
    options: [
      "Thiết kế mẫu là bước 3 trong tiến trình tư duy thiết kế và nội dung là xây dựng sản phẩm mẫu để trực quan hóa các giải pháp cho vấn đề của đối tác và thu thập phản hồi.",
      "Thiết kế mẫu là bước 4 trong tiến trình tư duy thiết kế và nội dung là xây dựng sản phẩm mẫu để trực quan hóa các giải pháp cho vấn đề của khách hàng và thu thập phản hồi.",
      "Thiết kế mẫu là bước 4 trong tiến trình tư duy thiết kế và nội dung là xây dựng sản phẩm mẫu để trực quan hóa các giải pháp cho vấn đề của doanh nghiệp và thu thập phản hồi.",
      "Thiết kế mẫu là bước 3 trong tiến trình tư duy thiết kế và nội dung là xây dựng sản phẩm mẫu để trực quan hóa các giải pháp cho vấn đề của khách hàng và thu thập phản hồi."
    ],
    correctIndex: 1,
    explanation: "Thiết kế mẫu (Prototype) là bước thứ 4: xây dựng sản phẩm mẫu để trực quan hóa giải pháp và thu thập phản hồi."
  },
  {
    question: "Xác định vấn đề là bước thứ mấy trong tiến trình tư duy thiết kế và nội dung của nó là gì?",
    options: [
      "Xác định vấn đề là bước 3 trong tiến trình tư duy thiết kế và nội dung là xác định những vấn đề chính mà khách hàng đang gặp phải và cần giải quyết.",
      "Xác định vấn đề là bước thứ 2 trong tiến trình tư duy thiết kế và nội dung là xác định những vấn đề chính mà đối thủ đang gặp phải và cần giải quyết.",
      "Xác định vấn đề là bước thứ 2 trong tiến trình tư duy thiết kế và nội dung là xác định những vấn đề chính mà khách hàng đang gặp phải và cần giải quyết.",
      "Xác định vấn đề là bước thứ 3 trong tiến trình tư duy thiết kế và nội dung là xác định những vấn đề chính mà doanh nghiệp đang gặp phải và cần giải quyết."
    ],
    correctIndex: 2,
    explanation: "Xác định vấn đề (Define) là bước thứ 2: xác định vấn đề chính mà khách hàng đang gặp phải và cần giải quyết."
  },
  {
    question: "Tiêu chí “Đủ dài” trong xác định cơ hội kinh doanh nghĩa là gì?",
    options: [
      "Thời gian khách hàng tồn tại đủ dài để khai thác.",
      "Thời gian doanh nghiệp tồn tại đủ dài để khai thác.",
      "Thời gian cơ hội tồn tại đủ dài để khai thác.",
      "Thời gian sản phẩm tồn tại đủ dài để khai thác."
    ],
    correctIndex: 2,
    explanation: "Đủ dài nghĩa là khoảng thời gian cơ hội tồn tại phải đủ dài để doanh nghiệp kịp thời triển khai và khai thác sinh lời."
  },
  {
    question: "Tìm hiểu những thay đổi về kinh tế, chính sách, xã hội, công nghệ và môi trường tự nhiên có dẫn tới sự khác biệt giữa những gì đang có và những gì có thể có hoặc cần có là phương pháp xác định cơ hội kinh doanh nào?",
    options: [
      "Giải quyết một vấn đề.",
      "Quan sát các xu thế.",
      "Quan sát thị trường.",
      "Tìm khoảng trống trên thị trường."
    ],
    correctIndex: 1,
    explanation: "Phân tích các thay đổi vĩ mô (PESTEL) chính là phương pháp quan sát các xu thế."
  },
  {
    question: "Kiểm tra là bước thứ mấy trong tiến trình tư duy thiết kế và nội dung của nó là gì?",
    options: [
      "Kiểm tra là bước thứ 3 trong tiến trình tư duy thiết kế và nội dung là lựa chọn giải pháp tốt nhất trong số các giải pháp từ các mẫu thử để hoàn thiện và kiểm tra trước khi thương mại hóa.",
      "Kiểm tra là bước thứ 5 trong tiến trình tư duy thiết kế và nội dung là lựa chọn giải pháp tốt nhất trong số các giải pháp từ các mẫu thử để hoàn thiện và kiểm tra trước khi thương mại hóa.",
      "Kiểm tra là bước thứ 5 trong tiến trình tư duy thiết kế và nội dung là phát triển giải pháp tốt nhất để hoàn thiện và kiểm tra trước khi thương mại hóa.",
      "Kiểm tra là bước thứ 3 trong tiến trình tư duy thiết kế và nội dung là phát triển giải pháp tốt nhất để hoàn thiện và kiểm tra trước khi thương mại hóa."
    ],
    correctIndex: 1,
    explanation: "Kiểm tra (Test) là bước thứ 5: chọn giải pháp tốt nhất từ mẫu thử để hoàn thiện và kiểm định trước khi tung ra thị trường."
  },
  {
    question: "Yếu tố “Vấn đề/Pains” thuộc phần nào trong mô hình đề xuất giá trị của Alexander Osterwalder và nội dung của nó là gì?",
    options: [
      "Yếu tố \"Vấn đề/Pains\" thuộc phần “Hồ sơ khách hàng\" trong mô hình đề xuất giá trị của Alexander Osterwalder và nội dung của nó là những điều khiến đối tác của doanh nghiệp cụ thể lo lắng, bận tâm hoặc cảm thấy bị cản trở khi thực hiện nhiệm vụ của họ.",
      "Yếu tố \"Vấn đề/Pains\" thuộc phần “Đề xuất giá trị” trong mô hình đề xuất giá trị của Alexander Osterwalder và nội dung của nó là những điều khiến phân khúc khách hàng cụ thể lo lắng, bận tâm hoặc cảm thấy bị cản trở khi thực hiện nhiệm vụ của họ trong công việc, cuộc sống.",
      "Yếu tố \"Vấn đề/Pains\" thuộc phần “Hồ sơ khách hàng\" trong mô hình đề xuất giá trị của Alexander Osterwalder và nội dung của nó là những điều khiến phân khúc khách hàng cụ thể lo lắng, bận tâm hoặc cảm thấy bị cản trở khi thực hiện nhiệm vụ của họ trong công việc, cuộc sống.",
      "Yếu tố \"Vấn đề/Pains\" thuộc phần “Hồ sơ khách hàng\" trong mô hình đề xuất giá trị của Alexander Osterwalder và nội dung của nó là những điều khiến doanh nghiệp cụ thể lo lắng, bận tâm hoặc cảm thấy bị cản trở khi thực hiện nhiệm vụ của họ trong đáp ứng nhu cầu của khách hàng."
    ],
    correctIndex: 2,
    explanation: "Vấn đề/Pains thuộc phần Hồ sơ khách hàng (Customer Profile): những lo lắng, trở ngại khách hàng gặp phải."
  },
  {
    question: "Mô hình đề xuất giá trị do Alexander Osterwalder phát triển nhằm mục đích để làm gì?",
    options: [
      "Để thấu cảm các vấn đề và mong muốn của các đối tác cụ thể và phát triển các giải pháp cho các vấn đề và mong muốn đó.",
      "Để thấu cảm các vấn đề và mong muốn của các doanh nghiệp cụ thể và phát triển các giải pháp cho các vấn đề và mong muốn đó.",
      "Để thấu cảm các vấn đề và mong muốn của các phân khúc khách hàng cụ thể và phát triển các giải pháp cho các vấn đề và mong muốn đó.",
      "Để thấu cảm các vấn đề và mong muốn của các đối thủ cụ thể và phát triển các giải pháp cho các vấn đề và mong muốn đó."
    ],
    correctIndex: 2,
    explanation: "Mục đích: Thấu cảm vấn đề và mong muốn của phân khúc khách hàng cụ thể để thiết kế giải pháp tương ứng."
  },
  {
    question: "Yếu tố “Nhiệm vụ/Jobs” thuộc phần nào trong mô hình đề xuất giá trị của Alexander Osterwalder và nội dung của nó là gì?",
    options: [
      "Yếu tố “Nhiệm vụ/Jobs” thuộc phần “Hồ sơ khách hàng\" trong mô hình đề xuất giá trị của Alexander Osterwalder và nội dung của nó là những điều mà phân khúc khách hàng cụ thể đang cần thực hiện hoặc giải quyết trong công việc, cuộc sống.",
      "Yếu tố “Nhiệm vụ/Jobs” thuộc phần “Hồ sơ khách hàng\" trong mô hình đề xuất giá trị của Alexander Osterwalder và nội dung của nó là những điều mà đối tác cụ thể đang cần thực hiện hoặc giải quyết.",
      "Yếu tố “Nhiệm vụ/Jobs” thuộc phần “Hồ sơ khách hàng\" trong mô hình đề xuất giá trị của Alexander Osterwalder và nội dung của nó là những điều mà doanh nghiệp cụ thể đang cần thực hiện hoặc giải quyết.",
      "Yếu tố “Nhiệm vụ/Jobs” thuộc phần “Đề xuất giá trị\" trong mô hình đề xuất giá trị của Alexander Osterwalder và nội dung của nó là những điều mà phân khúc khách hàng cụ thể đang cần thực hiện hoặc giải quyết trong công việc, cuộc sống."
    ],
    correctIndex: 0,
    explanation: "Nhiệm vụ/Jobs thuộc Hồ sơ khách hàng: những công việc/nhiệm vụ khách hàng đang cần thực hiện hoặc giải quyết."
  },
  {
    question: "Phương pháp “Động thân thể/Body storming” là gì, dùng để làm gì và được thực hiện như thế nào?",
    options: [
      "Một phương pháp trong tư duy thiết kế, dùng để thấu cảm và phát triển giải pháp cho vấn đề của khách hàng, bằng cách thâm nhập vào môi trường thực tế của khách hàng.",
      "Một phương pháp trong tư duy logic, dùng để thấu cảm và phát triển giải pháp cho vấn đề của khách hàng, bằng cách thâm nhập vào môi trường thực tế của khách hàng.",
      "Một phương pháp trong tư duy thiết kế, dùng để thấu cảm vấn đề của khách hàng, bằng cách thâm nhập vào môi trường thực tế của khách hàng.",
      "Một phương pháp trong tư duy thiết kế, dùng để thấu cảm và phát triển giải pháp cho vấn đề của doanh nghiệp, bằng cách thâm nhập vào môi trường thực tế của họ."
    ],
    correctIndex: 0,
    explanation: "Body storming là phương pháp thâm nhập trải nghiệm môi trường thực tế của khách hàng để thấu cảm và phát triển giải pháp."
  },
  {
    question: "Hãy sắp xếp thứ tự (từ 1-5) các bước sau trong Tư duy thiết kế: 1. Xác định vấn đề, 2. Thấu cảm, 3. Phát triển giải pháp, 4. Kiểm tra, 5. Xây dựng mẫu thử.",
    options: [
      "1. 2. 3. 4. 5.",
      "2. 1. 3. 5. 4.",
      "2. 1. 5. 3. 4.",
      "1. 3. 2. 5. 4."
    ],
    correctIndex: 1,
    explanation: "Thứ tự chuẩn 5 bước: 2. Thấu cảm -> 1. Xác định vấn đề -> 3. Phát triển giải pháp -> 5. Xây dựng mẫu thử -> 4. Kiểm tra."
  },
  {
    question: "Phát triển giải pháp là bước thứ mấy trong tiến trình tư duy thiết kế và nội dung của nó là gì?",
    options: [
      "Phát triển giải pháp là bước 3 trong tiến trình tư duy thiết kế và nội dung là phát triển ý tưởng về giải pháp sáng tạo cho vấn đề chính của khách hàng.",
      "Phát triển giải pháp là bước 4 trong tiến trình tư duy thiết kế và nội dung là phát triển ý tưởng về giải pháp sáng tạo cho vấn đề chính của đối tác.",
      "Phát triển giải pháp là bước 3 trong tiến trình tư duy thiết kế và nội dung là phát triển ý tưởng về giải pháp sáng tạo cho vấn đề chính của doanh nghiệp.",
      "Phát triển giải pháp là bước 4 trong tiến trình tư duy thiết kế và nội dung là phát triển ý tưởng về giải pháp sáng tạo cho vấn đề chính của khách hàng."
    ],
    correctIndex: 0,
    explanation: "Phát triển giải pháp (Ideate) là bước thứ 3: phát triển các ý tưởng sáng tạo cho vấn đề chính của khách hàng."
  },
  {
    question: "Phương pháp xác định cơ hội kinh doanh bằng cách giải quyết một vấn đề nghĩa là gì?",
    options: [
      "Tìm ra thực trạng của vấn đề mà bản thân nhà khởi nghiệp và/hoặc nhiều người khác gặp phải trong cuộc sống, công việc...",
      "Tìm ra giải pháp giúp giải quyết hiệu quả vấn đề mà bản thân nhà khởi nghiệp và/hoặc nhiều người khác gặp phải trong cuộc sống, công việc...",
      "Tìm ra nguyên nhân của vấn đề mà bản thân nhà khởi nghiệp và/hoặc nhiều người khác gặp phải trong cuộc sống, công việc.",
      "Tìm ra hậu quả quả của vấn đề mà bản thân nhà khởi nghiệp và/hoặc nhiều người khác gặp phải trong cuộc sống, công việc..."
    ],
    correctIndex: 1,
    explanation: "Giải quyết vấn đề nghĩa là tìm ra giải pháp giúp giải quyết hiệu quả vấn đề mà bản thân hoặc nhiều người đang gặp phải."
  },
  {
    question: "Phương pháp xác định cơ hội kinh doanh bằng cách tìm khoảng trống trên thị trường nghĩa là gì?",
    options: [
      "Xác định tình huống trong đó mong muốn hoặc nhu cầu của khách hàng về một loại sản phẩm hàng hóa hoặc dịch vụ nào đó là có nhưng lại không được đáp ứng đầy đủ.",
      "Xác định tình huống trong đó mong muốn hoặc nhu cầu của doanh nghiệp về một loại sản phẩm hàng hóa hoặc dịch vụ nào đó là có nhưng lại không sản xuất được.",
      "Xác định tình huống trong đó mong muốn hoặc nhu cầu của khách hàng về một loại sản phẩm hàng hóa hoặc dịch vụ nào đó là có nhưng lại không có khả năng thanh toán.",
      "Xác định tình huống trong đó mong muốn hoặc nhu cầu của doanh nghiệp về một loại sản phẩm hàng hóa hoặc dịch vụ nào đó là có nhưng lại có quá nhiều đối thủ cạnh tranh."
    ],
    correctIndex: 0,
    explanation: "Tìm khoảng trống nghĩa là phát hiện nhu cầu của khách hàng có thực nhưng chưa được thị trường đáp ứng đầy đủ."
  },
  {
    question: "Thấu cảm là bước thứ mấy trong tiến trình tư duy thiết kế và nội dung của nó là gì?",
    options: [
      "Thấu cảm là bước thứ 2 trong tiến trình tư duy thiết kế và nội dung là thấu hiểu và đồng cảm sâu sắc về các nhu cầu, cảm nhận, suy nghĩ, hành vi của khách hàng.",
      "Thấu cảm là bước thứ 1 trong tiến trình tư duy thiết kế và nội dung là thấu hiểu và đồng cảm sâu sắc về các nhu cầu, cảm nhận, suy nghĩ, hành vi của khách hàng.",
      "Thấu cảm là bước thứ 1 trong tiến trình tư duy thiết kế và nội dung là thấu hiểu và đồng cảm sâu sắc về các nhu cầu, cảm nhận, suy nghĩ, hành vi của đối thủ cạnh tranh.",
      "Thấu cảm là bước thứ 1 trong tiến trình tư duy thiết kế và nội dung là thấu hiểu và đồng cảm sâu sắc về các nhu cầu, cảm nhận, suy nghĩ, hành vi của doanh nghiệp."
    ],
    correctIndex: 1,
    explanation: "Thấu cảm (Empathize) là bước đầu tiên (bước 1): thấu hiểu và đồng cảm sâu sắc với khách hàng."
  },
  {
    question: "Tiêu chí \"Mang lại giá trị cho khách hàng\" trong xác định cơ hội kinh doanh nghĩa là gì?",
    options: [
      "Bán sản phẩm (hàng hóa hoặc dịch vụ) mà khách hàng chờ đợi; không phải bán thứ bạn có hay có thể tạo ra.",
      "Bán sản phẩm (hàng hóa hoặc dịch vụ) mà khách hàng mong muốn; không phải bán thứ bạn có hay có thể tạo ra.",
      "Bán sản phẩm (hàng hóa hoặc dịch vụ) mà khách hàng cần và có thể mua; không phải bán thứ bạn có hay có thể tạo ra.",
      "Bán sản phẩm (hàng hóa hoặc dịch vụ) mà khách hàng yêu cầu; không phải bán thứ bạn có hay có thể tạo ra."
    ],
    correctIndex: 1,
    explanation: "Mang lại giá trị là bán thứ khách hàng mong muốn và cần, không bán thứ doanh nghiệp tự suy diễn hay sẵn có."
  },
  {
    question: "Trong Mô hình đề xuất giá trị do Alexander Osterwalder phát triển, cần đạt được sự phù hợp giữa các cặp yếu tố nào sau đây?",
    options: [
      "Sản phẩm/Products - Nhiệm vụ/Jobs; Giải pháp cho mong muốn/Gain Creators - Vấn đề/Pains; Giải pháp cho vấn đề/Pain Relievers - Mong muốn/Gains.",
      "Sản phẩm/Products - Nhiệm vụ/Jobs; Giải pháp cho vấn đề/Pain Relievers - Vấn đề/Pains; Giải pháp cho mong muốn - Mong muốn/Gain Creators.",
      "Sản phẩm/Products - Nhiệm vụ/Jobs; Giải pháp /Solutions - Vấn đề/Problems.",
      "Sản phẩm/Products - Nhiệm vụ/Jobs; Giải pháp cho Vấn đề và Mong muốn/Pain Relievers and Gain Creators - Vấn đề và mong muốn/Pains and Gains."
    ],
    correctIndex: 1,
    explanation: "Sự khớp nối: Products - Jobs; Pain Relievers - Pains; Gain Creators - Gains."
  },
  {
    question: "Tư duy thiết kế có nguồn gốc từ đâu và hiện được vận dụng trong những lĩnh vực nào?",
    options: [
      "Tư duy thiết kế vận dụng nhiều phương pháp, công cụ và quy trình mà các nhà thiết kế sử dụng, và hiện nay bắt đầu được áp dụng vào lĩnh vực kinh doanh.",
      "Tư duy thiết kế vận dụng nhiều phương pháp, công cụ và quy trình mà các nhà kinh doanh sáng tạo sử dụng, và hiện nay chủ yếu được phát triển và áp dụng vào lĩnh vực kinh doanh.",
      "Tư duy thiết kế vận dụng nhiều phương pháp, công cụ và quy trình mà các nhà thiết kế sử dụng, nhưng hiện nay đã được phát triển và áp dụng vào nhiều lĩnh vực khác nhau - bao gồm kiến trúc, kỹ thuật và kinh doanh.",
      "Tư duy thiết kế vận dụng nhiều phương pháp, công cụ và quy trình mà các nhà thiết kế sử dụng, nhưng hiện nay chủ yếu được phát triển và áp dụng vào lĩnh vực kinh doanh."
    ],
    correctIndex: 2,
    explanation: "Tư duy thiết kế xuất phát từ giới thiết kế nhưng nay đã mở rộng sang kiến trúc, kỹ thuật, công nghệ và kinh doanh."
  },
  {
    question: "Tư duy thiết kế là gì?",
    options: [
      "Là một cách tiếp cận giúp phát triển, sáng tạo các sản phẩm mới dựa trên nền tảng thấu cảm khách hàng - xác định và giải quyết các vấn đề mà khách hàng thực sự gặp phải hoặc các đáp ứng các nhu cầu mà họ thực sự mong muốn.",
      "Là một cách tiếp cận giúp phát triển, sáng tạo các sản phẩm mới dựa trên nền tảng thấu cảm đối thủ cạnh tranh - xác định và giải quyết các vấn đề mà đối thủ cạnh tranh thực sự gặp phải hoặc các đáp ứng các nhu cầu mà họ thực sự mong muốn.",
      "Là một cách tiếp cận giúp phát triển, sáng tạo các sản phẩm mới dựa trên nền tảng thấu cảm doanh nghiệp - xác định và giải quyết các vấn đề mà doanh nghiệp thực sự gặp phải hoặc các đáp ứng các nhu cầu mà họ thực sự mong muốn.",
      "Là một cách tiếp cận giúp phát triển, sáng tạo các sản phẩm mới dựa trên nền tảng thấu cảm đối tác - xác định và giải quyết các vấn đề mà đối tác thực sự gặp phải hoặc các đáp ứng các nhu cầu mà họ thực sự mong muốn."
    ],
    correctIndex: 0,
    explanation: "Tư duy thiết kế là cách tiếp cận lấy khách hàng làm trung tâm, thấu cảm để giải quyết vấn đề thực tế."
  },
  {
    question: "Tiêu chí “Hấp dẫn” trong xác định cơ hội kinh doanh đòi hỏi điều gì về quy mô và hiệu quả tài chính?",
    options: [
      "Thị trường cần phải cạnh tranh khốc liệt để chứng minh tiềm năng.",
      "Thị trường cần phải tăng trưởng vượt bậc mà không cần tính tới chi phí.",
      "Thị trường cần tập trung vào số ít khách hàng cao cấp.",
      "Thị trường cần phải đủ lớn, bạn có thể đáp ứng nhu cầu thị trường và đạt doanh thu lớn hơn chi phí."
    ],
    correctIndex: 3,
    explanation: "Tiêu chí hấp dẫn: Dung lượng thị trường đủ lớn và tạo ra doanh thu > chi phí."
  }
];

const RAW_QUESTIONS_CH3 = [
  {
    question: "Mô hình kinh doanh là gì?",
    options: [
      "Là cách mà doanh nghiệp sản xuất và chuyển giao sản phẩm tới khách hàng.",
      "Là cách mà doanh nghiệp hợp tác với các bên có liên quan để đáp ứng nhu cầu của khách hàng.",
      "Là cách mà doanh nghiệp tạo ra và chuyển giao giá trị cho khách hàng và các bên có liên quan khác và nhận lại giá trị từ họ.",
      "Là cách mà doanh nghiệp tạo ra doanh thu và lợi nhuận."
    ],
    correctIndex: 2,
    explanation: "Mô hình kinh doanh là cách doanh nghiệp tạo ra, chuyển giao giá trị cho khách hàng và thu nhận lại giá trị."
  },
  {
    question: "Yếu tố nào giúp trả lời các câu hỏi: Chọn thị trường và phân khúc khách hàng nào? Làm thế nào để chiến thắng đối thủ cạnh tranh trong thị trường và phân khúc khách hàng đã chọn?",
    options: [
      "Kế hoạch kinh doanh.",
      "Mô hình kinh doanh.",
      "Chiến lược kinh doanh.",
      "Môi trường kinh doanh."
    ],
    correctIndex: 2,
    explanation: "Chiến lược kinh doanh (Business Strategy) trả lời câu hỏi: Chọn thị trường nào và làm sao để chiến thắng đối thủ."
  },
  {
    question: "Phát biểu nào là đúng nhất trong số những phát biểu sau đây về mô hình kinh doanh?",
    options: [
      "Mô hình kinh doanh không chỉ đơn thuần là cách kiếm tiền, cách tạo doanh thu cho doanh nghiệp mà còn bao gồm cách doanh nghiệp tạo ra giá trị và cách chuyển giao giá trị tới riêng cho khách hàng.",
      "Mô hình kinh doanh không chỉ đơn thuần là cách kiếm tiền, cách tạo doanh thu cho doanh nghiệp mà còn bao gồm cách doanh nghiệp tạo ra giá trị và cách chuyển giao giá trị tới khách hàng và các bên có liên quan khác.",
      "Mô hình kinh doanh là cách doanh nghiệp kiếm tiền và tạo doanh thu, chứ không phải là cách doanh nghiệp tạo ra giá trị và cách chuyển giao giá trị tới khách hàng và các bên có liên quan khác.",
      "Mô hình kinh doanh chủ yếu là cách doanh nghiệp kiếm tiền và tạo doanh thu; ngoài ra là cách doanh nghiệp tạo ra giá trị và cách chuyển giao giá trị tới khách hàng và các bên có liên quan khác."
    ],
    correctIndex: 1,
    explanation: "Mô hình kinh doanh bao hàm toàn diện việc tạo giá trị, chuyển giao giá trị cho khách hàng & các bên liên quan, và thu hồi giá trị."
  },
  {
    question: "Yếu tố nào giúp trả lời các câu hỏi: Mục tiêu kinh doanh là gì? Những hoạt động cần phải thực hiện để triển khai chiến lược kinh doanh và đạt được những mục tiêu đó?",
    options: [
      "Môi trường kinh doanh.",
      "Kế hoạch kinh doanh.",
      "Mô hình kinh doanh.",
      "Chiến lược kinh doanh."
    ],
    correctIndex: 1,
    explanation: "Kế hoạch kinh doanh (Business Plan) vạch rõ các mục tiêu và hoạt động hành động cụ thể."
  },
  {
    question: "Mô hình kinh doanh giúp trả lời những câu hỏi gì?",
    options: [
      "Tạo ra và bán cái gì, cho ai, làm thế nào để chiến lược đối thủ cạnh tranh, và cần phải triển khai những hoạt động cụ thể gì?",
      "Mục tiêu kinh doanh là gì? Những hoạt động cần phải thực hiện để triển khai chiến lược kinh doanh và đạt được những mục tiêu đó?",
      "Chọn thị trường và phân khúc khách hàng nào? Làm thế nào để chiến thắng đối thủ cạnh tranh trong thị trường và phân khúc khách hàng đã chọn?",
      "Tạo ra và bán cái gì (sản phẩm & dịch vụ), cho ai (phân khúc khách hàng mục tiêu), mang lại giá trị gì cho khách hàng, và nhận về giá trị như thế nào?"
    ],
    correctIndex: 3,
    explanation: "Mô hình kinh doanh trả lời: Tạo ra & bán cái gì, cho ai, mang lại giá trị gì và nhận về giá trị như thế nào."
  },
  {
    question: "Thành tố “Đề xuất giá trị” trong Mô hình kinh doanh Canvas có nội dung chính là gì?",
    options: [
      "Danh mục các nguồn lực giá trị để hợp tác với đối tác cụ thể.",
      "Danh mục các chiến lược để cạnh tranh với đối thủ cụ thể.",
      "Danh mục các sản phẩm (hàng hóa và dịch vụ) mang lại giá trị cho phân khúc khách hàng cụ thể.",
      "Danh mục các sản phẩm (hàng hóa và dịch vụ) mang lại doanh thu cho doanh nghiệp cụ thể."
    ],
    correctIndex: 2,
    explanation: "Đề xuất giá trị (Value Proposition) là danh mục sản phẩm/dịch vụ mang lại giá trị giải quyết vấn đề cho phân khúc khách hàng."
  },
  {
    question: "Thành tố “Dòng doanh thu\" trong Mô hình kinh doanh Canvas có nội dung chính là gì?",
    options: [
      "Mô tả dòng tiền mà doanh nghiệp có thể thu được từ các phân khúc khách hàng.",
      "Mô tả dòng tiền mà doanh nghiệp có thể thu được từ hoạt động sản xuất, kinh doanh.",
      "Mô tả dòng tiền mà doanh nghiệp có thể thu được từ các hoạt động bán hàng.",
      "Mô tả dòng tiền mà doanh nghiệp có thể thu được từ các sản phẩm của mình."
    ],
    correctIndex: 0,
    explanation: "Dòng doanh thu (Revenue Streams) mô tả dòng tiền mà doanh nghiệp thu được từ các phân khúc khách hàng."
  },
  {
    question: "Những thành tố thuộc nhóm tạo ra “Dòng doanh thu\" trong Mô hình kinh doanh Canvas là gì?",
    options: [
      "Phân khúc khách hàng - Đề xuất giá trị - Kênh truyền thông và phân phối - Hoạt động chính.",
      "Phân khúc khách hàng - Đề xuất giá trị - Kênh truyền thông và phân phối - Nguồn lực chính.",
      "Phân khúc khách hàng - Đề xuất giá trị - Kênh truyền thông và phân phối - Quan hệ khách hàng.",
      "Phân khúc khách hàng - Đề xuất giá trị - Kênh truyền thông và phân phối - Đối tác chính."
    ],
    correctIndex: 2,
    explanation: "Nhóm doanh thu gồm 4 thành tố hướng ra thị trường: Phân khúc khách hàng, Đề xuất giá trị, Kênh phân phối, và Quan hệ khách hàng."
  },
  {
    question: "Thành tố “Quan hệ khách hàng\" trong Mô hình kinh doanh Canvas có nội dung chính là gì?",
    options: [
      "Mô tả những loại sản phẩm mà một công ty muốn mang lại cho những phân khúc khách hàng mục tiêu cụ thể.",
      "Mô tả những loại quan hệ mà một công ty muốn thiết lập với những phân khúc khách hàng mục tiêu cụ thể.",
      "Mô tả những loại giá trị mà một công ty muốn mang lại cho những phân khúc khách hàng mục tiêu cụ thể.",
      "Mô tả những loại kênh truyền thông mà một công ty muốn thiết lập với những phân khúc khách hàng mục tiêu cụ thể."
    ],
    correctIndex: 1,
    explanation: "Quan hệ khách hàng (Customer Relationships) mô tả loại mối quan hệ muốn thiết lập và duy trì với khách hàng."
  },
  {
    question: "Thành tố “Các hoạt động chính\" trong Mô hình kinh doanh Canvas có nội dung chính là gì?",
    options: [
      "Mô tả các hoạt động quan trọng nhất mà một công ty cần thực hiện để vận hành chiến lược kinh doanh.",
      "Mô tả các nguồn lực quan trọng nhất mà một công ty cần có để vận hành mô hình kinh doanh",
      "Mô tả các hoạt động quan trọng nhất mà một công ty cần thực hiện để vận hành mô hình kinh doanh.",
      "Mô tả các hoạt động quan trọng nhất mà một công ty cần thực hiện để đạt mục tiêu kinh doanh."
    ],
    correctIndex: 2,
    explanation: "Hoạt động chính (Key Activities) mô tả các hành động quan trọng nhất cần thực hiện để vận hành mô hình kinh doanh."
  },
  {
    question: "Thành tố Cơ cấu chi phí trong Mô hình kinh doanh Canvas có nội dung chính là gì?",
    options: [
      "Mô tả tất cả các loại chi phí phát sinh để vận hành chiến lược kinh doanh, bao gồm hai nhóm chi phí cố định và chi phí biến đổi.",
      "Mô tả tất cả các loại chi phí phát sinh để vận hành mô hình kinh doanh, bao gồm hai nhóm chi phí cố định và chi phí biến đổi.",
      "Mô tả tất cả các loại chi phí phát sinh để triển khai kế hoạch kinh doanh, bao gồm hai nhóm chỉ phí cố định và chi phí biến đổi.",
      "Mô tả tất cả các loại chi phí phát sinh để triển khai ý tưởng kinh doanh, bao gồm hai nhóm chi phí cố định và chi phí biến đổi."
    ],
    correctIndex: 1,
    explanation: "Cơ cấu chi phí (Cost Structure) mô tả toàn bộ chi phí phát sinh để vận hành mô hình (gồm định phí và biến phí)."
  },
  {
    question: "Mô hình kinh doanh theo kiểu Bán hàng trực tiếp là gì?",
    options: [
      "Là mô hình kinh doanh trong đó sản phẩm của công ty được bán trực tiếp bởi nhà sản xuất hoặc nhà cung ứng dịch vụ, đã tính trung gian.",
      "Là mô hình kinh doanh trong đó sản phẩm của công ty được bán trực tiếp bởi nhà sản xuất hoặc nhà cung ứng dịch vụ, bỏ qua trung gian.",
      "Là mô hình kinh doanh trong đó sản phẩm của công ty được bán trực tiếp bởi nhà sản xuất hoặc nhà cung ứng dịch vụ, chưa tính trung gian.",
      "Là mô hình kinh doanh trong đó sản phẩm của công ty được bán trực tiếp bởi nhà sản xuất hoặc nhà cung ứng dịch vụ, chưa bao gồm trung gian."
    ],
    correctIndex: 1,
    explanation: "Bán hàng trực tiếp (Direct Selling) bán thẳng từ nhà sản xuất/cung ứng đến tay người dùng cuối, bỏ qua các khâu trung gian."
  },
  {
    question: "Mô hình kinh doanh theo kiểu Khách hàng trung thành là gì?",
    options: [
      "Là mô hình kinh doanh trong đó khách hàng trung thành được duy trì thông qua cung cấp sản phẩm có giá cạnh tranh.",
      "Là mô hình kinh doanh trong đó khách hàng trung thành được duy trì thông qua cung cấp sản phẩm có tính sáng tạo.",
      "Là mô hình kinh doanh trong đó khách hàng trung thành được duy trì thông qua cung cấp giá trị cao hơn sản phẩm cơ bản.",
      "Là mô hình kinh doanh trong đó khách hàng trung thành được duy trì thông qua cung cấp giá trị cao hơn đối thủ cạnh tranh."
    ],
    correctIndex: 2,
    explanation: "Mô hình khách hàng trung thành giữ chân khách thông qua việc cung cấp thêm giá trị vượt trên sản phẩm/dịch vụ cơ bản."
  },
  {
    question: "Trong phân tích mô hình kinh doanh của các hãng xe công nghệ, nội dung “Có xe, muốn tăng thêm thu nhập” làm bạn suy nghĩ tới thành tố nào trong Mô hình kinh doanh Canvas?",
    options: [
      "Đối tác chính.",
      "Nguồn lực chính.",
      "Đề xuất giá trị.",
      "Phân khúc khách hàng."
    ],
    correctIndex: 3,
    explanation: "Tài xế/chủ xe là một Phân khúc khách hàng (Customer Segment) trong mô hình nền tảng đa bên (Multi-sided Platform) của xe công nghệ."
  },
  {
    question: "Các nhóm khách hàng sẽ thuộc về những phân khúc khác nhau khi nào?",
    options: [
      "Khi nhu cầu của họ đòi hỏi phải có những đáp ứng giống nhau; họ có thể được tiếp cận bởi các kênh phân phối khác nhau; họ cần phải được duy trì các hình thức quan hệ khách hàng khác nhau; họ sẵn sàng chi trả cho các khía cạnh khác nhau của sản phẩm.",
      "Khi nhu cầu của họ đòi hỏi phải có những đáp ứng riêng biệt, họ có thể được tiếp cận bởi các kênh phân phối khác nhau; họ cần phải được duy trì các hình thức quan hệ khách hàng giống nhau; họ sẵn sàng chi trả cho các khía cạnh khác nhau của sản phẩm.",
      "Khi nhu cầu của họ đòi hỏi phải có những đáp ứng riêng biệt, họ có thể được tiếp cận bởi các kênh phân phối giống nhau; họ cần phải được duy trì các hình thức quan hệ khách hàng khác nhau; họ sẵn sàng chi trả cho các khía cạnh khác nhau của sản phẩm.",
      "Khi nhu cầu của họ đòi hỏi phải có những đáp ứng riêng biệt họ có thể được tiếp cận bởi các kênh phân phối khác nhau; họ cần phải được duy trì các hình thức quan hệ khách hàng khác nhau; họ sẵn sàng chi trả cho các khía cạnh khác nhau của sản phẩm."
    ],
    correctIndex: 3,
    explanation: "Khách hàng thuộc phân khúc khác nhau khi: nhu cầu riêng biệt, kênh tiếp cận khác nhau, quan hệ duy trì khác nhau và mức sẵn sàng chi trả khác nhau."
  },
  {
    question: "Công cụ phân tích mô hình kinh doanh nào là do Osterwalder và Pigneur phát triển?",
    options: [
      "Công cụ Mô hình kinh doanh BMN (Business Model Navigator).",
      "Công cụ Mô hình kinh doanh BMT (Business Model Template).",
      "Công cụ Mô hình kinh doanh BMC (Business Model Canvas).",
      "Công cụ Mô hình kinh doanh sáng tạo BMI (Business Model Innovation)."
    ],
    correctIndex: 2,
    explanation: "Business Model Canvas (BMC) gồm 9 thành tố là công cụ nổi tiếng do Alexander Osterwalder & Yves Pigneur phát triển."
  },
  {
    question: "Thành tố “Kênh truyền thông và phân phối” trong Mô hình kinh doanh Canvas có nội dung chính là gì?",
    options: [
      "Mô tả cách thức doanh nghiệp truyền thông và tiếp cận các phân khúc khách hàng để xây dựng thương hiệu với họ.",
      "Mô tả cách thức doanh nghiệp truyền thông và tiếp cận các phân khúc khách hàng để sản xuất hàng hóa, dịch vụ cho họ.",
      "Mô tả cách thức doanh nghiệp truyền thông và tiếp cận các phân khúc khách hàng để xây dựng lòng tin với họ.",
      "Mô tả cách thức doanh nghiệp truyền thông và tiếp cận các phân khúc khách hàng để chuyển giao giá trị cho họ."
    ],
    correctIndex: 3,
    explanation: "Kênh (Channels) mô tả cách thức doanh nghiệp giao tiếp, tiếp cận và chuyển giao giá trị tới khách hàng."
  },
  {
    question: "Thời điểm nào là thích hợp nhất để xác định mô hình kinh doanh?",
    options: [
      "Sau khi đã đánh giá được tính khả thi của cơ hội kinh doanh và trước khi chuẩn bị kế hoạch kinh doanh.",
      "Trước khi đánh giá được tính khả thi của cơ hội kinh doanh và sau khi chuẩn bị kế hoạch kinh doanh.",
      "Trước khi đã đánh giá được tính khả thi của cơ hội kinh doanh và trước khi chuẩn bị kế hoạch kinh doanh.",
      "Sau khi đã đánh giá được tính khả thi của cơ hội kinh doanh và sau khi chuẩn bị kế hoạch kinh doanh."
    ],
    correctIndex: 0,
    explanation: "Thời điểm thích hợp nhất: Sau khi đánh giá tính khả thi của cơ hội và trước khi bắt tay viết kế hoạch kinh doanh chi tiết."
  },
  {
    question: "Mô hình kinh doanh theo kiểu Thuê bao là gì?",
    options: [
      "Là mô hình kinh doanh trong đó khách hàng đăng ký và nhận sản phẩm (hàng hóa hoặc dịch vụ) theo nhu cầu.",
      "Là mô hình kinh doanh trong đó khách hàng đăng ký và nhận sản phẩm (hàng hóa hoặc dịch vụ) theo khả năng thanh toán.",
      "Là mô hình kinh doanh trong đó khách hàng đăng ký và nhận sản phẩm (hàng hóa hoặc dịch vụ) theo chủng loại.",
      "Là mô hình kinh doanh trong đó khách hàng đăng ký và nhận sản phẩm (hàng hóa hoặc dịch vụ) theo định kỳ về thời gian"
    ],
    correctIndex: 3,
    explanation: "Mô hình thuê bao (Subscription) cung cấp sản phẩm/dịch vụ đều đặn theo chu kỳ thời gian (tháng/năm)."
  },
  {
    question: "Mô hình kinh doanh theo kiểu Freemium là gì?",
    options: [
      "Là mô hình kinh doanh trong đó phiên bản cơ bản của sản phẩm được cung cấp với phí thấp, còn phiên bản nâng cao được tính phí cao.",
      "Là mô hình kinh doanh trong đó phiên bản cơ bản của sản phẩm được cung cấp với giá cạnh tranh, còn phiên bản nâng cao được tính phí cao.",
      "Là mô hình kinh doanh trong đó phiên bản cơ bản của và nâng cao của sản phẩm được cung cấp với giá cạnh tranh.",
      "Là mô hình kinh doanh trong đó phiên bản cơ bản của sản phẩm được cung cấp miễn phí, còn phiên bản nâng cao được tính phí."
    ],
    correctIndex: 3,
    explanation: "Freemium = Free (bản cơ bản miễn phí) + Premium (bản nâng cao thu phí)."
  },
  {
    question: "Các giai đoạn trong thành tố “Kênh truyền thông và phân phối” của Mô hình kinh doanh Canvas có nội dung chính là gì?",
    options: [
      "Nhận biết - Thanh toán - Đánh giá - Chuyển giao - Sau bán hàng.",
      "Nhận biết - Đánh giá - Thanh toán - Chuyển giao - Sau bán hàng.",
      "Nhận biết - Đánh giá - Chuyển giao - Thanh toán - Sau bán hàng.",
      "Đánh giá - Nhận biết - Thanh toán - Chuyển giao - Sau bán hàng."
    ],
    correctIndex: 1,
    explanation: "5 giai đoạn của Kênh: 1. Nhận biết (Awareness) -> 2. Đánh giá (Evaluation) -> 3. Thanh toán/Mua (Purchase) -> 4. Chuyển giao (Delivery) -> 5. Sau bán hàng (After sales)."
  },
  {
    question: "Thành tố “Các đối tác chính” trong Mô hình kinh doanh Canvas có nội dung chính là gì?",
    options: [
      "Mô tả mạng lưới các nhà cung ứng và đối tác cần có để kế hoạch kinh doanh hoạt động.",
      "Mô tả mạng lưới các nhà cung ứng và đối tác cần có để ý tưởng kinh doanh hoạt động.",
      "Mô tả mạng lưới các nhà cung ứng và đối tác cần có để mô hình kinh doanh hoạt động.",
      "Mô tả mạng lưới các nhà cung ứng và đối tác cần có để chiến lược kinh doanh hoạt động."
    ],
    correctIndex: 2,
    explanation: "Đối tác chính (Key Partnerships) mô tả mạng lưới nhà cung ứng và đối tác cần thiết để mô hình kinh doanh vận hành."
  },
  {
    question: "Thành tố “Các nguồn lực chính” trong Mô hình kinh doanh Canvas có nội dung chính là gì?",
    options: [
      "Mô tả những tài sản quan trọng nhất cần phải có để kế hoạch kinh doanh hoạt động.",
      "Mô tả những tài sản quan trọng nhất cần phải có để ý tưởng kinh doanh hoạt động.",
      "Mô tả những tài sản quan trọng nhất cần phải có để chiến lược kinh doanh hoạt động.",
      "Mô tả những tài sản quan trọng nhất cần phải có để mô hình kinh doanh hoạt động."
    ],
    correctIndex: 3,
    explanation: "Nguồn lực chính (Key Resources) là các tài sản quan trọng nhất (nhân lực, tài chính, trí tuệ, vật chất) để vận hành mô hình."
  },
  {
    question: "Những thành tố trong công cụ Mô hình kinh doanh Canvas là gì và thứ tự phân tích ra sao?",
    options: [
      "Phân khúc khách hàng - 2. Đề xuất giá trị - 3. Kênh truyền thông và phân phối - 4. Quan hệ khách hàng - 5. Dòng doanh thu - 6. Hoạt động chính - 7. Nguồn lực chính - 8. Đối tác chính - 9. Chi phí.",
      "Phân khúc khách hàng - 2. Đề xuất giá trị - 3. Kênh truyền thông và phân phối - 4. Quan hệ khách hàng - 5. Dòng doanh thu - 6. Nguồn lực chính - 7. Hoạt động chính - 8. Đối tác chính - 9. Chi phí.",
      "Phân khúc khách hàng - 2. Đề xuất giá trị - 3. Kênh truyền thông và phân phối - 4. Quan hệ khách hàng - 5. Dòng doanh thu - 6. Nguồn lực chính - 7. Đối tác chính - 8. Hoạt động chính - 9. Chi phí.",
      "Phân khúc khách hàng - 2. Đề xuất giá trị - 3. Kênh truyền thông và phân phối - 4. Quan hệ khách hàng - 5. Dòng doanh thu - 6. Hoạt động chính - 7. Đối tác chính - 8. Nguồn lực chính - 9. Chi phí."
    ],
    correctIndex: 1,
    explanation: "Thứ tự phân tích chuẩn: 1. Khách hàng -> 2. Giá trị -> 3. Kênh -> 4. Quan hệ -> 5. Doanh thu -> 6. Nguồn lực -> 7. Hoạt động -> 8. Đối tác -> 9. Chi phí."
  },
  {
    question: "Mô hình kinh doanh theo kiểu ‘Bán hàng bổ sung’ là gì?",
    options: [
      "Là mô hình kinh doanh trong đó tính năng cơ bản được miễn phí; các tính năng bổ sung hay mở rộng phù hợp với nhu cầu cụ thể của khách hàng được chi trả thêm.",
      "Là mô hình kinh doanh trong đó tính năng cơ bản được bán với giá cạnh tranh; các tính năng bổ sung hay mở rộng phù hợp với nhu cầu cụ thể của khách hàng được chi trả thêm.",
      "Là mô hình kinh doanh trong đó tính năng cơ bản được bán với giá cao; các tính năng bổ sung hay mở rộng phù hợp với nhu cầu cụ thể của khách hàng được miễn phí.",
      "Là mô hình kinh doanh trong đó tính năng cơ bản được bán với giá cao; các tính năng bổ sung hay mở rộng phù hợp với nhu cầu cụ thể của khách hàng được chi trả với giá cạnh tranh."
    ],
    correctIndex: 1,
    explanation: "Bán hàng bổ sung (Add-on): sản phẩm cơ bản bán giá cạnh tranh; tính năng mở rộng theo nhu cầu được tính phí thêm."
  },
  {
    question: "Theo Gassmann và cộng sự (2014) thì có tất cả bao nhiêu loại mô hình kinh doanh và mỗi mô hình nhấn mạnh tới điều gì?",
    options: [
      "55 mô hình kinh doanh, mỗi mô hình nhấn mạnh tất cả các thành tố vì chúng có tầm quan trọng như nhau.",
      "55 mô hình kinh doanh, mỗi mô hình nhấn mạnh đến một hoặc một vài thành tố quan trọng hơn so với các thành tố khác.",
      "55 mô hình kinh doanh, mỗi mô hình nhấn mạnh đến các thành tố liên quan tới khách hàng vì chúng là quan trọng nhất.",
      "55 mô hình kinh doanh, mỗi mô hình nhấn mạnh đến các thành tố liên quan tới đề xuất giá trị vì chúng là quan trọng nhất."
    ],
    correctIndex: 1,
    explanation: "Có 55 mô hình kinh doanh; mỗi mô hình nhấn mạnh đến một hoặc một vài thành tố trọng điểm."
  },
  {
    question: "Trong phân tích mô hình kinh doanh của các quán trà đá vỉa hè, nội dung “nước giải khát, thuốc lá, bánh kẹo, ghế và chỗ ngồi” làm bạn suy nghĩ tới thành tố nào trong Mô hình kinh doanh Canvas?",
    options: [
      "Đối tác chính.",
      "Đề xuất giá trị.",
      "Phân khúc khách hàng.",
      "Nguồn lực chính."
    ],
    correctIndex: 3,
    explanation: "Bàn ghế, nước giải khát, địa điểm vỉa hè là Nguồn lực vật chất chính (Key Resources) để vận hành quán trà đá."
  },
  {
    question: "Những thành tố thuộc nhóm tạo ra “Chi phí” trong Mô hình kinh doanh Canvas là gì?",
    options: [
      "Quan hệ khách hàng - Hoạt động chính - Đối tác chính.",
      "Kênh truyền thông và phân phối - Hoạt động chính - Đối tác chính.",
      "Đề xuất giá trị - Hoạt động chính - Đối tác chính.",
      "Nguồn lực chính - Hoạt động chính - Đối tác chính."
    ],
    correctIndex: 3,
    explanation: "Nhóm phát sinh chi phí phía sau hậu trường: Nguồn lực chính + Hoạt động chính + Đối tác chính."
  },
  {
    question: "Thành tố \"Phân khúc khách hàng\" trong Mô hình kinh doanh Canvas có nội dung chính là gì?",
    options: [
      "Những nhóm đối thủ mà doanh nghiệp muốn cạnh tranh.",
      "Những nhóm cá nhân mà doanh nghiệp muốn tuyển dụng.",
      "Những nhóm cá nhân hoặc tổ chức mà doanh nghiệp muốn tiếp cận và phục vụ.",
      "Những nhóm đối tác mà doanh nghiệp muốn tiếp cận và hợp tác."
    ],
    correctIndex: 2,
    explanation: "Phân khúc khách hàng mô tả các nhóm đối tượng (cá nhân/tổ chức) mà doanh nghiệp hướng đến phục vụ."
  },
  {
    question: "Theo Gassmann và cộng sự (2014) thì yếu tố cốt lõi để đổi mới sáng tạo mô hình kinh doanh là gì?",
    options: [
      "Sử dụng một mô hình kinh doanh trong một bối cảnh mà nó chưa từng được sử dụng trước đây.",
      "Sử dụng tất cả 55 mô hình kinh doanh đã có vào mô hình kinh doanh của bạn.",
      "Sử dụng nguyên bản một vài mô hình kinh doanh trong số 55 mô hình kinh doanh đã có vào mô hình kinh doanh của bạn.",
      "Sử dụng nguyên bản tất cả 55 mô hình kinh doanh đã có để xây dựng một mô hình kinh doanh hoàn toàn mới."
    ],
    correctIndex: 0,
    explanation: "Yếu tố cốt lõi của đổi mới sáng tạo mô hình: Áp dụng một mô hình đã có vào một ngành/bối cảnh mới mà nó chưa từng xuất hiện."
  }
];

// Helper gom và định danh câu hỏi
function formatQuestionList(rawList, prefix = "Câu") {
  return rawList.map((q, idx) => ({
    id: idx + 1,
    question: `[${prefix} ${idx + 1}] ${q.question}`,
    options: q.options,
    correctIndex: q.correctIndex,
    explanation: q.explanation
  }));
}

// Gom toàn bộ 71 câu từ 3 chương
const ALL_71_QUESTIONS = [
  ...RAW_QUESTIONS_CH1,
  ...RAW_QUESTIONS_CH2,
  ...RAW_QUESTIONS_CH3
];

// ---------------------------------------------------------
// 3. DANH SÁCH 5 MÃ ĐỀ LUYỆN TẬP
// ---------------------------------------------------------
const EXAMS_DATA = {
  1: {
    id: 1,
    code: "FULL-71",
    title: "Đề Thi 01 - Đề Tổng Hợp Toàn Diện (Full 71 Câu)",
    description: "Bộ đề 71 câu trắc nghiệm bao quát toàn bộ 3 chương Khởi Nghiệp Kinh Doanh & Đổi Mới Sáng Tạo.",
    timePerQuestion: 20,
    questions: formatQuestionList(ALL_71_QUESTIONS, "Câu")
  },
  2: {
    id: 2,
    code: "CH1-16",
    title: "Đề Thi 02 - Chuyên Đề Chương 1 (16 Câu)",
    description: "Bản chất khởi nghiệp, kinh doanh, sự sáng tạo, đổi mới sáng tạo và vai trò kỹ năng lãnh đạo.",
    timePerQuestion: 20,
    questions: formatQuestionList(RAW_QUESTIONS_CH1, "C1")
  },
  3: {
    id: 3,
    code: "CH2-25",
    title: "Đề Thi 03 - Chuyên Đề Chương 2 (25 Câu)",
    description: "4 tiêu chí cơ hội kinh doanh, 5 bước tư duy thiết kế (Design Thinking) & khung đề xuất giá trị Osterwalder.",
    timePerQuestion: 20,
    questions: formatQuestionList(RAW_QUESTIONS_CH2, "C2")
  },
  4: {
    id: 4,
    code: "CH3-30",
    title: "Đề Thi 04 - Chuyên Đề Chương 3 (30 Câu)",
    description: "9 thành tố Canvas (BMC), 55 mô hình kinh doanh Gassmann và đổi mới sáng tạo mô hình.",
    timePerQuestion: 20,
    questions: formatQuestionList(RAW_QUESTIONS_CH3, "C3")
  },
  5: {
    id: 5,
    code: "EXAM-VIP",
    title: "Đề Thi 05 - Đề Thi Thử Cuối Kỳ Chuẩn (71 Câu)",
    description: "Bộ đề thi thử cuối kỳ xáo trộn ngẫu nhiên tất cả các chương giúp rèn luyện phản xạ và thuộc bài 100%.",
    timePerQuestion: 20,
    questions: formatQuestionList(ALL_71_QUESTIONS, "Đề Thi")
  }
};
