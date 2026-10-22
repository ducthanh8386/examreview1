/* =========================================================
   WAYGROUNDQUIZ - DỮ LIỆU ĐỀ CƯƠNG LÝ THUYẾT & NGÂN HÀNG CÂU HỎI
   Hỗ trợ đa môn học:
   1. Khởi Nghiệp Kinh Doanh & Đổi Mới Sáng Tạo (71 câu • 3 chương)
   2. English for Logistics (33 câu trích xuất chính xác từ file english 4 log.docx)
   ========================================================= */

// =========================================================
// MÔN 1: KHỞI NGHIỆP KINH DOANH & ĐỔI MỚI SÁNG TẠO
// =========================================================

const THEORY_DATA_STARTUP = [
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
      "Đổi mới sáng tạo + Lãnh đạo = Khởi nghiệp kinh doanh.",
      "Sáng tạo + Lãnh đạo = Đổi mới sáng tạo; Đổi mới sáng tạo + Lãnh đạo = Khởi nghiệp kinh doanh.",
      "Sáng tạo + Lãnh đạo = Đổi mới sáng tạo.",
      "Sáng tạo + Đổi mới sáng tạo + Lãnh đạo = Khởi nghiệp kinh doanh."
    ],
    correctIndex: 1,
    explanation: "Kỹ năng lãnh đạo là cầu nối: Sáng tạo + Lãnh đạo = ĐMST; ĐMST + Lãnh đạo = Khởi nghiệp kinh doanh."
  },
  {
    question: "Theo quan điểm của Đảng và Nhà nước Việt Nam tại Nghị quyết 09-NQ/TW của Bộ Chính trị (2011), tầm quan trọng của doanh nhân, doanh nghiệp và khởi nghiệp kinh doanh là gì?",
    options: [
      "Là một trong những lực lượng nòng cốt góp phần thúc đẩy sự nghiệp công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế.",
      "Là lực lượng có vai trò quan trọng trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế.",
      "Là lực lượng nòng cốt đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế.",
      "Là một trong những lực lượng nòng cốt đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế."
    ],
    correctIndex: 3,
    explanation: "Theo NQ 09-NQ/TW (2011): Đội ngũ doanh nhân là 'một trong những lực lượng nòng cốt đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế'."
  },
  {
    question: "Tầm quan trọng của khởi nghiệp kinh doanh đối với nền kinh tế và xã hội là gì?",
    options: [
      "Là nguồn tạo ra việc làm mới quan trọng nhất.",
      "Tăng thu nhập, nâng cao mức sống cho người lao động.",
      "Đóng góp vào tăng trưởng kinh tế và giải quyết các vấn đề xã hội, môi trường.",
      "Tạo ra các hàng hóa, dịch vụ mới; là nguồn tạo ra việc làm mới quan trọng nhất; tăng thu nhập/nâng cao mức sống; thúc đẩy đổi mới sáng tạo; đóng góp tăng trưởng kinh tế & giải quyết vấn đề xã hội, môi trường."
    ],
    correctIndex: 3,
    explanation: "Khởi nghiệp kinh doanh mang lại đầy đủ các lợi ích kinh tế, tạo việc làm, đổi mới sáng tạo và an sinh xã hội."
  },
  {
    question: "Trong tiếng Việt, khởi sự được hiểu là gì?",
    options: [
      "Là bắt đầu sự nghiệp hay những việc làm có lợi ích quan trọng, lâu dài.",
      "Là bắt đầu hành động để thực hiện một kế hoạch.",
      "Là bắt đầu hành động một việc làm quan trọng.",
      "Là bắt đầu hành động một việc làm có lợi ích quan trọng."
    ],
    correctIndex: 1,
    explanation: "Khởi sự trong tiếng Việt là bắt đầu hành động để thực hiện một kế hoạch."
  },
  {
    question: "Cần lưu ý điều gì khi sử dụng cụm từ “khởi sự kinh doanh” và “khởi nghiệp kinh doanh” trong tiếng Việt?",
    options: [
      "Hai cụm từ này hoàn toàn khác nhau về bản chất.",
      "Khởi sự kinh doanh chỉ áp dụng cho doanh nghiệp lớn, khởi nghiệp cho doanh nghiệp nhỏ.",
      "Hai cụm từ này thường được dùng thay thế cho nhau nhưng khởi nghiệp mang hàm ý lớn lao, lâu dài hơn.",
      "Hai cụm từ này là từ đồng nghĩa tuyệt đối."
    ],
    correctIndex: 2,
    explanation: "Trong tiếng Việt hai từ hay được dùng tương đương, nhưng 'khởi nghiệp' mang hàm ý sứ mệnh quan trọng và lâu dài hơn."
  },
  {
    question: "Vì sao khởi nghiệp kinh doanh lại là nguồn tạo ra việc làm mới quan trọng nhất?",
    options: [
      "Vì các doanh nghiệp lớn không tuyển dụng nhân sự mới.",
      "Vì các doanh nghiệp khởi nghiệp mới thành lập tạo ra nhiều vị trí việc làm mới và thúc đẩy các ngành phụ trợ phát triển.",
      "Vì nhà nước bắt buộc doanh nghiệp khởi sự phải tuyển nhân công.",
      "Vì khởi nghiệp luôn có quy mô nhân sự lớn ngay từ đầu."
    ],
    correctIndex: 1,
    explanation: "Các doanh nghiệp mới thành lập tạo ra dòng việc làm mới trực tiếp và kích thích nhu cầu lao động của chuỗi cung ứng xung quanh."
  },
  {
    question: "Đặc trưng nổi bật nhất của Start-up so với doanh nghiệp truyền thống (SME) là gì?",
    options: [
      "Có nhiều vốn điều lệ hơn.",
      "Tính chất đổi mới sáng tạo và tiềm năng tăng trưởng, nhân rộng quy mô (scalability) nhanh chóng.",
      "Không cần phải đăng ký kinh doanh.",
      "Chỉ hoạt động trong lĩnh vực bất động sản."
    ],
    correctIndex: 1,
    explanation: "Start-up khác SME truyền thống ở nền tảng ĐMST và khả năng tăng trưởng đột phá theo cấp số nhân (Scalability)."
  },
  {
    question: "Doanh nhân (Entrepreneur) khác với người quản lý thông thường (Manager) ở điểm nào?",
    options: [
      "Doanh nhân luôn làm việc ít giờ hơn.",
      "Doanh nhân là người tiên phong nhận diện cơ hội, chấp nhận rủi ro và huy động nguồn lực để tạo giá trị mới.",
      "Người quản lý không nhận lương cố định.",
      "Doanh nhân không chịu bất kỳ rủi ro tài chính nào."
    ],
    correctIndex: 1,
    explanation: "Doanh nhân là người phát hiện cơ hội, dám chấp nhận rủi ro và kiến tạo mô hình mới."
  }
];

const RAW_QUESTIONS_CH2 = [
  {
    question: "Khái niệm “Cơ hội kinh doanh” trong môn Khởi nghiệp kinh doanh được hiểu là gì?",
    options: [
      "Là những tình huống, bối cảnh thuận lợi tạo ra nhu cầu về một loại sản phẩm hàng hóa hoặc dịch vụ mới, hay một dự án kinh doanh mới.",
      "Là những ý tưởng xuất hiện bất chợt của người khởi nghiệp nhằm bán một sản phẩm hiện có.",
      "Là những thị trường không có đối thủ cạnh tranh.",
      "Là nguồn vốn đầu tư dồi dào từ các quỹ đầu tư mạo hiểm."
    ],
    correctIndex: 0,
    explanation: "Cơ hội kinh doanh là những bối cảnh thuận lợi tạo ra nhu cầu về sản phẩm/dịch vụ mới hoặc dự án kinh doanh mới."
  },
  {
    question: "Bốn tiêu chí cốt lõi để đánh giá một cơ hội kinh doanh là gì?",
    options: [
      "Giá rẻ - Nhanh chóng - Độc quyền - An toàn.",
      "Mang lại giá trị cho khách hàng - Hấp dẫn - Kịp thời - Đủ dài.",
      "Vốn ít - Lãi nhanh - Dễ làm - Ít cạnh tranh.",
      "Sáng tạo - Khác biệt - Hiện đại - Độc đáo."
    ],
    correctIndex: 1,
    explanation: "4 tiêu chí cốt lõi: 1. Mang lại giá trị cho khách hàng; 2. Hấp dẫn; 3. Kịp thời; 4. Đủ dài (tồn tại đủ lâu để sinh lời)."
  },
  {
    question: "Tiêu chí “Mang lại giá trị cho khách hàng” của một cơ hội kinh doanh nhấn mạnh điều gì?",
    options: [
      "Bán sản phẩm với giá rẻ nhất thị trường.",
      "Bán thứ khách hàng mong muốn và cần, chứ không phải bán thứ bạn có.",
      "Khuyến mãi thật nhiều quà tặng cho khách hàng.",
      "Quảng cáo rầm rộ trên các phương tiện truyền thông."
    ],
    correctIndex: 1,
    explanation: "Mang lại giá trị cốt lõi là giải quyết vấn đề của khách hàng: Bán thứ khách hàng cần, không phải thứ mình có."
  },
  {
    question: "Theo Barringer & Ireland (2019), có 3 nguồn gốc chính để nhận diện cơ hội kinh doanh, đó là:",
    options: [
      "Vay vốn - Thuê mặt bằng - Tuyển nhân sự.",
      "Quan sát các xu thế - Tìm khoảng trống thị trường - Giải quyết một vấn đề.",
      "Sao chép đối thủ - Giảm giá bán - Đẩy mạnh quảng cáo.",
      "Học tập lý thuyết - Tham gia hội thảo - Đọc sách kinh tế."
    ],
    correctIndex: 1,
    explanation: "3 nguồn nhận diện cơ hội: Quan sát xu thế, tìm khoảng trống thị trường, giải quyết một vấn đề."
  },
  {
    question: "Quan sát các xu thế để tìm kiếm cơ hội kinh doanh bao gồm những xu thế nào?",
    options: [
      "Xu thế kinh tế, xã hội, công nghệ, chính sách và môi trường tự nhiên.",
      "Chỉ bao gồm xu thế công nghệ mới.",
      "Chỉ bao gồm xu thế thời trang của giới trẻ.",
      "Xu thế tiêu dùng ngắn hạn theo mùa."
    ],
    correctIndex: 0,
    explanation: "Xu thế bao gồm toàn diện: Kinh tế (PESTEL), xã hội, tiến bộ công nghệ, quy định pháp lý và môi trường."
  },
  {
    question: "Tìm “khoảng trống trên thị trường” (Market Gap) nghĩa là gì?",
    options: [
      "Tìm những khu đất trống để mở cửa hàng.",
      "Nhận diện nhu cầu hoặc mong muốn của khách hàng có tồn tại nhưng chưa được các sản phẩm hiện có đáp ứng thỏa đáng.",
      "Bán các sản phẩm đã lỗi thời với giá thanh lý.",
      "Tìm các phân khúc khách hàng không có khả năng chi trả."
    ],
    correctIndex: 1,
    explanation: "Khoảng trống thị trường là vùng nhu cầu khách hàng chưa được đáp ứng hoặc đáp ứng chưa tốt."
  },
  {
    question: "Khái niệm “Tư duy thiết kế” (Design Thinking) được hiểu là gì?",
    options: [
      "Kỹ năng vẽ đồ họa và thiết kế logo thương hiệu cho công ty.",
      "Cách tiếp cận đổi mới sáng tạo lấy con người (khách hàng) làm trung tâm dựa trên nền tảng thấu cảm.",
      "Phương pháp lập trình phần mềm giao diện người dùng UI/UX.",
      "Quy trình xây dựng nhà xưởng sản xuất theo tiêu chuẩn quốc tế."
    ],
    correctIndex: 1,
    explanation: "Design Thinking là tư duy giải quyết vấn đề lấy con người/khách hàng làm trung tâm thông qua sự thấu cảm sâu sắc."
  },
  {
    question: "Trình tự 5 bước trong tiến trình Tư duy thiết kế (Design Thinking) của trường phái Stanford d.school là gì?",
    options: [
      "Lên ý tưởng -> Thiết kế mẫu -> Thấu cảm -> Thử nghiệm -> Xác định vấn đề.",
      "Thấu cảm (Empathize) -> Xác định vấn đề (Define) -> Lên ý tưởng (Ideate) -> Thiết kế mẫu (Prototype) -> Thử nghiệm (Test).",
      "Xác định vấn đề -> Thấu cảm -> Lên ý tưởng -> Thử nghiệm -> Hoàn thiện.",
      "Nghiên cứu thị trường -> Lập kế hoạch -> Sản xuất -> Bán hàng -> Thu tiền."
    ],
    correctIndex: 1,
    explanation: "Chuẩn 5 bước Design Thinking: 1. Empathize -> 2. Define -> 3. Ideate -> 4. Prototype -> 5. Test."
  },
  {
    question: "Trong bước “Thấu cảm” (Empathize), người khởi nghiệp cần làm gì?",
    options: [
      "Thuyết phục khách hàng mua sản phẩm của mình ngay lập tức.",
      "Quan sát, lắng nghe, phỏng vấn sâu và đồng cảm với cảm xúc, hành vi, nỗi đau của khách hàng.",
      "Gửi bảng báo giá chi tiết cho khách hàng.",
      "Lập tức chế tạo sản phẩm hoàn chỉnh."
    ],
    correctIndex: 1,
    explanation: "Thấu cảm là lắng nghe, quan sát không phán xét để hiểu sâu sắc cảm xúc, hành vi và nỗi đau ngầm ẩn của khách hàng."
  },
  {
    question: "Kỹ thuật “Body storming” trong giai đoạn thấu cảm khách hàng là gì?",
    options: [
      "Tập thể dục để rèn luyện sức khỏe cho đội ngũ khởi nghiệp.",
      "Đóng vai và trải nghiệm trực tiếp trong tình huống thực tế của khách hàng để cảm nhận khó khăn họ gặp phải.",
      "Khảo sát số lượng lớn qua bảng câu hỏi trực tuyến.",
      "Phân tích báo cáo tài chính của đối thủ cạnh tranh."
    ],
    correctIndex: 1,
    explanation: "Bodystorming là phương pháp đặt bản thân vào đúng hoàn cảnh thực tế của người dùng để trực tiếp trải nghiệm vấn đề."
  },
  {
    question: "Mục đích của bước “Xác định vấn đề” (Define) trong Design Thinking là gì?",
    options: [
      "Đổ lỗi cho đối thủ cạnh tranh.",
      "Đóng khung và cô đọng vấn đề cốt lõi (Core Problem / Point of View) mà khách hàng thực sự bức xúc cần giải quyết.",
      "Tính toán tổng chi phí đầu tư ban đầu.",
      "Xác định kênh phân phối sản phẩm."
    ],
    correctIndex: 1,
    explanation: "Define giúp gom các thông tin thấu cảm thành phát biểu vấn đề cốt lõi rõ ràng (Point of View)."
  },
  {
    question: "Giai đoạn “Lên ý tưởng” (Ideate) khuyến khích điều gì?",
    options: [
      "Chỉ đưa ra một ý tưởng duy nhất và bảo vệ nó đến cùng.",
      "Động não (Brainstorming) số lượng lớn ý tưởng sáng tạo, không vội phán xét, kết hợp và phát triển ý tưởng mới.",
      "Lựa chọn ngay ý tưởng an toàn nhất và ít tốn kém nhất.",
      "Chỉ sao chép ý tưởng từ nước ngoài về."
    ],
    correctIndex: 1,
    explanation: "Ideate khuyến khích số lượng (Quantity over quality), tư duy mở rộng và không phán xét ở giai đoạn đầu."
  },
  {
    question: "Khái niệm “Mẫu thử” (Prototype) trong Tư duy thiết kế mang ý nghĩa gì?",
    options: [
      "Sản phẩm hoàn thiện 100% được sản xuất hàng loạt trong nhà máy.",
      "Bản mô phỏng đơn giản, trực quan, chi phí thấp của giải pháp để khách hàng dùng thử và thu thập phản hồi nhanh.",
      "Bản vẽ thiết kế bí mật không cho ai xem.",
      "Bản hợp đồng pháp lý ký kết với nhà đầu tư."
    ],
    correctIndex: 1,
    explanation: "Prototype là bản mẫu trực quan, nhanh, rẻ để hiện thực hóa ý tưởng và kiểm chứng sớm với người dùng."
  },
  {
    question: "Khung Đề xuất giá trị (Value Proposition Canvas) của Alexander Osterwalder gồm 2 phần chính là gì?",
    options: [
      "Hồ sơ khách hàng (Customer Profile) và Bản đồ giá trị (Value Map).",
      "Doanh thu và Chi phí.",
      "Nguồn lực và Đối tác.",
      "Sản phẩm và Tiếp thị."
    ],
    correctIndex: 0,
    explanation: "VPC gồm 2 thành phần chính: Hồ sơ khách hàng (Customer Profile) và Bản đồ giá trị (Value Map)."
  },
  {
    question: "Trong Hồ sơ khách hàng (Customer Profile) của VPC, 3 yếu tố cấu thành là gì?",
    options: [
      "Tuổi tác, giới tính, nghề nghiệp.",
      "Nhiệm vụ khách hàng (Customer Jobs), Nỗi đau/Vấn đề (Pains), Lợi ích mong đợi (Gains).",
      "Thu nhập, nơi ở, thói quen mua sắm.",
      "Nhận biết, Cân nhắc, Mua hàng."
    ],
    correctIndex: 1,
    explanation: "Hồ sơ khách hàng gồm: Customer Jobs (Nhiệm vụ), Pains (Vấn đề/Nỗi đau), Gains (Lợi ích mong đợi)."
  },
  {
    question: "Trong Bản đồ giá trị (Value Map) của VPC, 3 yếu tố tương ứng là gì?",
    options: [
      "Giá cả, Phân phối, Khuyến mãi.",
      "Sản phẩm & Dịch vụ (Products & Services), Thuốc giảm đau (Pain Relievers), Yếu tố tạo lợi ích (Gain Creators).",
      "Nhà xưởng, Máy móc, Công nghệ.",
      "Kế toán, Nhân sự, Marketing."
    ],
    correctIndex: 1,
    explanation: "Value Map gồm: Sản phẩm/Dịch vụ, Thuốc giảm đau (Pain Relievers) và Yếu tố kiến tạo lợi ích (Gain Creators)."
  },
  {
    question: "Khái niệm “Sự khớp nối” (Fit) trong Khung Đề xuất giá trị đạt được khi nào?",
    options: [
      "Khi giá bán bằng với chi phí sản xuất.",
      "Khi các tính năng giảm đau và tạo lợi ích của sản phẩm giải quyết chính xác các nỗi đau và mong muốn quan trọng nhất của khách hàng.",
      "Khi sản phẩm có nhiều tính năng hơn đối thủ.",
      "Khi công ty chi nhiều tiền cho quảng cáo."
    ],
    correctIndex: 1,
    explanation: "Fit đạt được khi giá trị cung cấp khớp đúng với các Jobs, Pains, Gains quan trọng nhất của khách hàng."
  },
  {
    question: "Khái niệm MVP (Minimum Viable Product - Sản phẩm khả dụng tối thiểu) là gì?",
    options: [
      "Sản phẩm có giá thành rẻ nhất có thể.",
      "Phiên bản sản phẩm có vừa đủ các tính năng cốt lõi để đưa ra thị trường thử nghiệm và thu nhận phản hồi học hỏi tối đa với chi phí tối thiểu.",
      "Sản phẩm bị lỗi kỹ thuật trong quá trình sản xuất.",
      "Sản phẩm không thể bán được cho khách hàng."
    ],
    correctIndex: 1,
    explanation: "MVP là phiên bản tối giản nhưng hoạt động được nhằm kiểm chứng giả định thị trường với công sức ít nhất (Eric Ries - Lean Startup)."
  },
  {
    question: "Điểm khác biệt căn bản giữa “Ý tưởng kinh doanh” và “Cơ hội kinh doanh” là gì?",
    options: [
      "Ý tưởng kinh doanh chỉ là suy nghĩ chủ quan, còn cơ hội kinh doanh là ý tưởng đã được kiểm chứng thỏa mãn nhu cầu thị trường và có tính khả thi sinh lời.",
      "Ý tưởng cần nhiều tiền hơn cơ hội.",
      "Cơ hội chỉ do nhà nước cấp phép, ý tưởng do cá nhân nghĩ ra.",
      "Hai khái niệm này hoàn toàn đồng nhất."
    ],
    correctIndex: 0,
    explanation: "Ý tưởng chỉ là suy nghĩ ban đầu; chỉ khi ý tưởng gặp bối cảnh thị trường thuận lợi, đáp ứng 4 tiêu chí thì mới là Cơ hội."
  },
  {
    question: "Tại sao tư duy thiết kế lại coi thất bại sớm ở bước Thử nghiệm (Test) là một điều tích cực?",
    options: [
      "Vì công ty sẽ được hoàn thuế.",
      "Vì “Thất bại sớm để thành công nhanh” (Fail early, fail fast to succeed sooner), giúp tiết kiệm thời gian và tiền bạc trước khi đầu tư quy mô lớn.",
      "Vì khách hàng thích các sản phẩm thất bại.",
      "Vì người khởi nghiệp không cần phải nỗ lực nữa."
    ],
    correctIndex: 1,
    explanation: "Thử nghiệm sớm giúp nhận diện sai lầm với chi phí rẻ nhất, kịp thời điều chỉnh trước khi giải ngân vốn lớn."
  },
  {
    question: "Kỹ thuật “5 Why” (5 câu hỏi Tại sao) thường được dùng trong bước nào của Design Thinking?",
    options: [
      "Xác định nguyên nhân gốc rễ của vấn đề trong bước Xác định vấn đề (Define).",
      "Tính toán doanh thu.",
      "Tìm nhà cung cấp nguyên vật liệu.",
      "Định giá bán sản phẩm."
    ],
    correctIndex: 0,
    explanation: "Kỹ thuật 5 Why dùng để đào sâu tìm nguyên nhân gốc rễ (Root Cause) trong bước Define."
  },
  {
    question: "Thấu cảm (Empathy) khác với Đồng cảm/Thương hại (Sympathy) như thế nào trong kinh doanh?",
    options: [
      "Thấu cảm là đứng vào vị trí của người khác để cảm nhận và hiểu thế giới quan của họ mà không phán xét, còn Sympathy chỉ là cảm xúc thương xót bên ngoài.",
      "Thấu cảm chỉ dành cho người thân trong gia đình.",
      "Hai khái niệm này giống hệt nhau.",
      "Sympathy mang tính khoa học hơn Thấu cảm."
    ],
    correctIndex: 0,
    explanation: "Empathy là năng lực đặt mình vào hoàn cảnh của khách hàng để cảm nhận sâu sắc nhu cầu chưa nói thành lời."
  },
  {
    question: "Khái niệm “Pivot” (Chuyển hướng) trong khởi nghiệp tinh gọn có nghĩa là gì?",
    options: [
      "Tuyên bố phá sản công ty.",
      "Thay đổi chiến lược hoặc mô hình kinh doanh dựa trên phản hồi của thị trường trong khi vẫn giữ vững tầm nhìn dài hạn.",
      "Đổi tên thương hiệu nhưng giữ nguyên toàn bộ sản phẩm cũ.",
      "Bán lại công ty cho đối thủ."
    ],
    correctIndex: 1,
    explanation: "Pivot là cú chuyển hướng chiến lược có tính toán dựa trên bài học thu thập từ thị trường."
  },
  {
    question: "Trong mô hình Lean Startup (Khởi nghiệp tinh gọn), vòng lặp phản hồi cốt lõi là gì?",
    options: [
      "Vay vốn -> Thuê người -> Tiêu tiền.",
      "Xây dựng (Build) -> Đo lường (Measure) -> Học hỏi (Learn).",
      "Quảng cáo -> Giảm giá -> Bán tháo.",
      "Ý tưởng -> Nhà xưởng -> Sản xuất lớn."
    ],
    correctIndex: 1,
    explanation: "Vòng lặp cốt lõi của Lean Startup là Build - Measure - Learn."
  },
  {
    question: "Một cơ hội kinh doanh có tiêu chí “Đủ dài” (Window of Opportunity) nghĩa là:",
    options: [
      "Sản phẩm có chiều dài lớn hơn 1 mét.",
      "Thời gian cơ hội tồn tại và mở ra trên thị trường đủ lâu để doanh nghiệp thu hồi vốn và sinh lợi nhuận bền vững.",
      "Kế hoạch kinh doanh được viết dài trên 100 trang.",
      "Thời gian giao hàng cho khách hàng kéo dài nhiều tháng."
    ],
    correctIndex: 1,
    explanation: "Cửa sổ cơ hội (Window of Opportunity) phải mở đủ lâu để doanh nghiệp kịp thiết lập vị thế và khai thác sinh lời."
  }
];

const RAW_QUESTIONS_CH3 = [
  {
    question: "Khái niệm “Mô hình kinh doanh” (Business Model) có ý nghĩa trọng tâm là gì?",
    options: [
      "Bản kế hoạch chi tiết các công việc hàng ngày của nhân viên.",
      "Mô tả cách thức một tổ chức tạo ra giá trị, chuyển giao giá trị và thu nhận lại giá trị.",
      "Bản hợp đồng thuê mặt bằng kinh doanh.",
      "Phần mềm quản lý bán hàng của doanh nghiệp."
    ],
    correctIndex: 1,
    explanation: "Mô hình kinh doanh mô tả cách thức doanh nghiệp Tạo ra giá trị (Create), Chuyển giao giá trị (Deliver) và Thu nhận giá trị (Capture value)."
  },
  {
    question: "Mô hình kinh doanh Canvas (Business Model Canvas - BMC) do ai sáng lập?",
    options: [
      "Philip Kotler.",
      "Alexander Osterwalder và Yves Pigneur.",
      "Michael Porter.",
      "Steve Jobs."
    ],
    correctIndex: 1,
    explanation: "BMC được phát triển bởi Alexander Osterwalder & Yves Pigneur."
  },
  {
    question: "Mô hình Canvas gồm bao nhiêu thành tố cốt lõi?",
    options: [
      "5 thành tố.",
      "7 thành tố.",
      "9 thành tố.",
      "12 thành tố."
    ],
    correctIndex: 2,
    explanation: "BMC bao gồm 9 khối thành tố (9 Building Blocks)."
  },
  {
    question: "Thành tố đầu tiên và quan trọng nhất khi bắt đầu phân tích BMC là gì?",
    options: [
      "Cơ cấu chi phí.",
      "Phân khúc khách hàng (Customer Segments).",
      "Các đối tác chính.",
      "Các hoạt động chính."
    ],
    correctIndex: 1,
    explanation: "Quy trình phân tích BMC chuẩn luôn xuất phát từ Phân khúc khách hàng (CS) và Đề xuất giá trị (VP)."
  },
  {
    question: "Thành tố “Đề xuất giá trị” (Value Propositions) trong BMC trả lời cho câu hỏi nào?",
    options: [
      "Doanh nghiệp bán sản phẩm ở đâu?",
      "Doanh nghiệp mang lại giá trị/giải pháp gì để giải quyết vấn đề và thỏa mãn nhu cầu của khách hàng?",
      "Ai là nhà cung cấp nguyên liệu?",
      "Chi phí thuê nhân viên là bao nhiêu?"
    ],
    correctIndex: 1,
    explanation: "Value Proposition trả lời: Chúng ta mang lại giá trị vượt trội nào cho khách hàng?"
  },
  {
    question: "Năm giai đoạn của thành tố “Kênh truyền thông & phân phối” (Channels) trong BMC là gì?",
    options: [
      "Hỏi giá -> Mua hàng -> Trả tiền -> Đổi trả -> Khiếu nại.",
      "Nhận biết (Awareness) -> Đánh giá (Evaluation) -> Mua/Thanh toán (Purchase) -> Chuyển giao (Delivery) -> Sau bán hàng (After-sales).",
      "Quảng cáo -> Giảm giá -> Vận chuyển -> Thu tiền -> Bảo hành.",
      "Gặp gỡ -> Giới thiệu -> Ký hợp đồng -> Giao hàng -> Thanh lý."
    ],
    correctIndex: 1,
    explanation: "5 giai đoạn kênh: Nhận biết, Đánh giá, Mua sắm, Chuyển giao và Hậu mãi."
  },
  {
    question: "Thành tố “Quan hệ khách hàng” (Customer Relationships) mô tả điều gì?",
    options: [
      "Mối quan hệ thân quen giữa giám đốc và người thân.",
      "Loại hình quan hệ mà doanh nghiệp muốn thiết lập và duy trì với từng phân khúc khách hàng (thu hút, giữ chân, phát triển khách).",
      "Danh bạ số điện thoại của tất cả khách hàng.",
      "Hợp đồng lao động với nhân viên chăm sóc khách hàng."
    ],
    correctIndex: 1,
    explanation: "Customer Relationships xác định cách công ty thu hút, duy trì và gia tăng giá trị từ khách hàng."
  },
  {
    question: "Thành tố “Dòng doanh thu” (Revenue Streams) thể hiện điều gì?",
    options: [
      "Số tiền doanh nghiệp phải đi vay ngân hàng.",
      "Dòng tiền mà doanh nghiệp thu được từ từng phân khúc khách hàng thông qua các cơ chế định giá khác nhau.",
      "Chi phí trả lương cho giám đốc.",
      "Tiền đặt cọc của nhà cung cấp."
    ],
    correctIndex: 1,
    explanation: "Revenue Streams là dòng tiền thu vào từ giá trị mà khách hàng sẵn sàng chi trả."
  },
  {
    question: "Thành tố “Nguồn lực chính” (Key Resources) trong BMC bao gồm những nhóm tài sản nào?",
    options: [
      "Chỉ bao gồm tiền mặt gửi ngân hàng.",
      "Tài sản vật chất, tài sản trí tuệ (bản quyền, thương hiệu), nhân lực và tài chính.",
      "Chỉ bao gồm xe cộ và nhà xưởng.",
      "Bàn ghế văn phòng và máy tính cá nhân."
    ],
    correctIndex: 1,
    explanation: "Key Resources gồm 4 nhóm: Vật chất (Physical), Trí tuệ (Intellectual), Nhân lực (Human), Tài chính (Financial)."
  },
  {
    question: "Thành tố “Hoạt động chính” (Key Activities) trong BMC là gì?",
    options: [
      "Những hành động quan trọng nhất mà doanh nghiệp phải thực hiện để vận hành mô hình kinh doanh.",
      "Các hoạt động vui chơi giải trí của công ty cuối tuần.",
      "Các cuộc họp giao ban nội bộ hàng ngày.",
      "Việc nộp thuế cho cơ quan nhà nước."
    ],
    correctIndex: 0,
    explanation: "Key Activities là các hành động then chốt nhất để tạo ra giá trị, tiếp cận thị trường và duy trì quan hệ khách hàng."
  },
  {
    question: "Thành tố “Đối tác chính” (Key Partnerships) mang lại lợi ích gì cho doanh nghiệp?",
    options: [
      "Tối ưu hóa quy mô, giảm thiểu rủi ro, và tiếp cận các nguồn lực/hoạt động mà doanh nghiệp không tự làm.",
      "Giúp doanh nghiệp không cần phải làm bất cứ việc gì.",
      "Đảm bảo doanh nghiệp luôn có lãi 100%.",
      "Giúp né tránh việc kiểm toán tài chính."
    ],
    correctIndex: 0,
    explanation: "Key Partnerships giúp tối ưu hóa, giảm thiểu rủi ro và tận dụng nguồn lực bên ngoài."
  },
  {
    question: "Thành tố “Cơ cấu chi phí” (Cost Structure) bao gồm những loại chi phí chính nào?",
    options: [
      "Chi phí cố định (Fixed Costs) và Chi phí biến đổi (Variable Costs).",
      "Chỉ có chi phí mặt bằng.",
      "Chỉ có tiền thưởng cuối năm cho nhân viên.",
      "Tiền phạt giao thông của đội xe."
    ],
    correctIndex: 0,
    explanation: "Cơ cấu chi phí gồm chi phí cố định (mặt bằng, lương cơ bản) và biến đổi (nguyên vật liệu, hoa hồng)."
  },
  {
    question: "Nhóm các thành tố thuộc nửa bên PHẢI của mô hình Canvas đại diện cho điều gì?",
    options: [
      "Hậu trường sản xuất và chi phí nội bộ.",
      "Thị trường, khách hàng, giá trị chuyển giao và doanh thu (Mặt trước - Front Stage).",
      "Pháp lý và quản trị nhân sự.",
      "Công nghệ thông tin và lưu trữ dữ liệu."
    ],
    correctIndex: 1,
    explanation: "Nửa phải BMC hướng ra thị trường (Khách hàng, Kênh, Quan hệ, Giá trị, Doanh thu)."
  },
  {
    question: "Nhóm các thành tố thuộc nửa bên TRÁI của mô hình Canvas đại diện cho điều gì?",
    options: [
      "Hiệu quả vận hành, nguồn lực, hoạt động, đối tác và chi phí (Hậu trường - Back Stage).",
      "Quảng cáo trên mạng xã hội.",
      "Tâm lý học hành vi khách hàng.",
      "Chính sách ngoại giao quốc tế."
    ],
    correctIndex: 0,
    explanation: "Nửa trái BMC là hậu trường vận hành (Nguồn lực, Hoạt động, Đối tác, Chi phí)."
  },
  {
    question: "Theo nghiên cứu của Oliver Gassmann và cộng sự (2014), có bao nhiêu mô hình kinh doanh mẫu?",
    options: [
      "10 mô hình.",
      "33 mô hình.",
      "55 mô hình kinh doanh.",
      "99 mô hình."
    ],
    correctIndex: 2,
    explanation: "Gassmann và cộng sự tại Đại học St. Gallen tổng kết 55 mô hình kinh doanh mẫu (The Business Model Navigator)."
  },
  {
    question: "Theo Gassmann, hơn 90% các mô hình kinh doanh mới thực chất là:",
    options: [
      "Phát minh hoàn toàn mới chưa từng có trong lịch sử nhân loại.",
      "Sự tái kết hợp (Recombination) hoặc áp dụng các mô hình đã có sang một ngành/bối cảnh mới.",
      "Sự sao chép bất hợp pháp.",
      "Các mô hình do trí tuệ nhân tạo tự động tạo ra."
    ],
    correctIndex: 1,
    explanation: "Hơn 90% đổi mới mô hình kinh doanh là tái kết hợp các thành tố mẫu sang ngành nghề mới."
  },
  {
    question: "Mô hình kinh doanh “Freemium” (Free + Premium) hoạt động như thế nào?",
    options: [
      "Tất cả mọi người đều được dùng miễn phí vĩnh viễn không giới hạn.",
      "Cung cấp gói dịch vụ cơ bản miễn phí cho số đông, và thu phí các tính năng nâng cao (Premium) từ một nhóm người dùng sẵn sàng trả tiền.",
      "Bắt buộc người dùng trả tiền trước khi tải ứng dụng.",
      "Bán hàng với giá 0 đồng và nhận tiền từ từ thiện."
    ],
    correctIndex: 1,
    explanation: "Freemium: Phiên bản cơ bản miễn phí để thu hút người dùng; thu phí phiên bản nâng cao (Spotify, Canva...)."
  },
  {
    question: "Mô hình kinh doanh “Dao cạo & Lưỡi dao” (Razor and Blade / Bait and Hook) là gì?",
    options: [
      "Bán sản phẩm chính với giá rất rẻ hoặc lỗ (Dao cạo), và kiếm lợi nhuận lớn từ việc bán các phụ kiện/vật tư tiêu hao liên tục đi kèm (Lưỡi dao).",
      "Bán dao cạo râu trực tuyến.",
      "Tặng miễn phí phụ kiện và bán thân máy giá cắt cổ.",
      "Chỉ bán hàng cho thợ cắt tóc."
    ],
    correctIndex: 0,
    explanation: "Bait and Hook / Razor-Blade: Bán thiết bị rẻ (máy in, máy pha cà phê capsule) và thu lợi nhuận từ vật tư tiêu hao định kỳ."
  },
  {
    question: "Mô hình kinh doanh “Kinh tế chia sẻ / Nền tảng hai mặt” (Two-Sided Platform) như Grab, Airbnb hoạt động ra sao?",
    options: [
      "Tự mua hàng nghìn xe ô tô và khách sạn để cho thuê.",
      "Đóng vai trò trung gian kết nối giữa người có tài sản nhàn rỗi (tài xế, chủ nhà) và người có nhu cầu sử dụng, thu phí giao dịch.",
      "Chỉ sản xuất phần mềm bán đứt bản quyền.",
      "Kinh doanh dịch vụ vận tải truyền thống."
    ],
    correctIndex: 1,
    explanation: "Nền tảng kết nối trực tiếp cung - cầu nhàn rỗi trên không gian số để hưởng hoa hồng giao dịch."
  },
  {
    question: "Mô hình kinh doanh “Thuê bao” (Subscription) có đặc điểm nổi bật nào?",
    options: [
      "Khách hàng trả tiền định kỳ (hàng tháng/năm) để được quyền truy cập và sử dụng sản phẩm/dịch vụ liên tục.",
      "Khách hàng mua đứt sản phẩm một lần duy nhất.",
      "Khách hàng chỉ trả tiền khi nào đến cửa hàng trực tiếp.",
      "Doanh nghiệp không có nguồn thu ổn định."
    ],
    correctIndex: 0,
    explanation: "Subscription tạo dòng doanh thu định kỳ có thể dự đoán trước (Netflix, Microsoft 365...)."
  },
  {
    question: "Mô hình “Khử trung gian” (Disintermediation / Direct-to-Consumer - D2C) mang lại lợi ích gì?",
    options: [
      "Nhà sản xuất bán hàng thẳng tới tay người tiêu dùng cuối, loại bỏ các khâu đại lý trung gian, giảm giá bán và tăng biên lợi nhuận.",
      "Tăng thêm nhiều cấp đại lý bán lẻ.",
      "Làm chậm thời gian giao hàng.",
      "Không tiếp cận được ý kiến phản hồi của khách hàng."
    ],
    correctIndex: 0,
    explanation: "D2C cắt giảm tầng nấc trung gian để tối ưu giá thành và trực tiếp kiểm soát trải nghiệm khách hàng."
  },
  {
    question: "Trong phân tích quán cà phê vỉa hè, bàn ghế nhựa, ấm nước, phin pha cà phê thuộc thành tố nào của BMC?",
    options: [
      "Đối tác chính.",
      "Nguồn lực chính (Key Resources - Tài sản vật chất).",
      "Phân khúc khách hàng.",
      "Dòng doanh thu."
    ],
    correctIndex: 1,
    explanation: "Bàn ghế, dụng cụ pha chế là nguồn lực vật chất cần thiết để vận hành quán."
  },
  {
    question: "Khái niệm “Đổi mới sáng tạo mô hình kinh doanh” (Business Model Innovation) nghĩa là:",
    options: [
      "Thay đổi cách thức doanh nghiệp tạo ra, chuyển giao và thu nhận giá trị bằng cách đổi mới một hoặc nhiều thành tố trong mô hình.",
      "Chỉ thay đổi bao bì sản phẩm.",
      "Thay đổi địa chỉ trụ sở công ty.",
      "Đổi font chữ trên website."
    ],
    correctIndex: 0,
    explanation: "ĐMST mô hình kinh doanh là sự thay đổi mang tính cấu trúc ở các khối thành tố nhằm tạo lợi thế cạnh tranh mới."
  },
  {
    question: "Thành tố “Đối tác chính” trong mô hình kinh doanh của chuỗi cửa hàng tiện lợi nhượng quyền (Franchise) thường là:",
    options: [
      "Các đối tác nhận nhượng quyền (Franchisees) và nhà phân phối chuỗi cung ứng.",
      "Khách hàng mua nước ngọt.",
      "Cơ quan thuế địa phương.",
      "Nhân viên bảo vệ giữ xe."
    ],
    correctIndex: 0,
    explanation: "Trong mô hình Franchise, các bên nhận quyền và mạng lưới logistics là đối tác sống còn."
  },
  {
    question: "Sự khác biệt cốt lõi giữa Kế hoạch kinh doanh (Business Plan) và Mô hình kinh doanh (Business Model) là:",
    options: [
      "Mô hình kinh doanh là bản thiết kế logic về cách tạo giá trị, còn Kế hoạch kinh doanh là lộ trình hành động và dự toán tài chính chi tiết để thực thi mô hình đó.",
      "Kế hoạch kinh doanh không bao giờ thay đổi, mô hình kinh doanh thay đổi hàng ngày.",
      "Mô hình kinh doanh chỉ dành cho công ty phá sản.",
      "Hai văn bản này là một."
    ],
    correctIndex: 0,
    explanation: "Mô hình kinh doanh là bản thiết kế logic cốt lõi; Kế hoạch kinh doanh là kế hoạch chi tiết triển khai mô hình."
  },
  {
    question: "Mô hình kinh doanh theo kiểu ‘Bán hàng bổ sung’ (Add-on) là gì?",
    options: [
      "Là mô hình kinh doanh trong đó tính năng cơ bản được miễn phí; các tính năng bổ sung được chi trả thêm.",
      "Là mô hình kinh doanh trong đó sản phẩm/tính năng cơ bản được bán với giá cạnh tranh; các tính năng hoặc phụ kiện bổ sung phù hợp nhu cầu cụ thể được tính phí thêm.",
      "Là mô hình chỉ bán hàng cũ đã qua sử dụng.",
      "Là mô hình bắt buộc mua kèm toàn bộ phụ kiện đắt tiền."
    ],
    correctIndex: 1,
    explanation: "Add-on (như hãng hàng không giá rẻ Vietjet, Ryanair): vé cơ bản giá rẻ, hành lý ký gửi/chỗ ngồi/suất ăn thu thêm phí."
  },
  {
    question: "Theo Gassmann và cộng sự (2014), yếu tố cốt lõi để đổi mới sáng tạo mô hình kinh doanh là gì?",
    options: [
      "Sử dụng một mô hình kinh doanh trong một bối cảnh/ngành nghề mà nó chưa từng được sử dụng trước đây.",
      "Bắt chước 100% đối thủ cùng ngành.",
      "Tăng giá bán sản phẩm lên gấp 10 lần.",
      "Cắt giảm toàn bộ chi phí chăm sóc khách hàng."
    ],
    correctIndex: 0,
    explanation: "Chuyển dịch mô hình đã thành công ở ngành này sang ngành nghề khác là bí quyết đổi mới mô hình hiệu quả nhất."
  },
  {
    question: "Những thành tố thuộc nhóm tạo ra “Chi phí” trong Mô hình kinh doanh Canvas là gì?",
    options: [
      "Nguồn lực chính - Hoạt động chính - Đối tác chính.",
      "Phân khúc khách hàng - Kênh phân phối - Quan hệ khách hàng.",
      "Đề xuất giá trị - Dòng doanh thu - Đối tác chính.",
      "Kênh truyền thông - Khách hàng - Cơ cấu chi phí."
    ],
    correctIndex: 0,
    explanation: "Chi phí phát sinh chủ yếu từ việc duy trì Nguồn lực chính, triển khai Hoạt động chính và hợp tác với Đối tác chính."
  },
  {
    question: "Thành tố “Phân khúc khách hàng” trong Canvas có nội dung chính là gì?",
    options: [
      "Những nhóm cá nhân hoặc tổ chức mà doanh nghiệp muốn tiếp cận và phục vụ.",
      "Những đối thủ cạnh tranh mà doanh nghiệp muốn tiêu diệt.",
      "Những nhà đầu tư tiềm năng trong tương lai.",
      "Các cơ quan ban ngành quản lý nhà nước."
    ],
    correctIndex: 0,
    explanation: "Phân khúc khách hàng xác định rõ nhóm khách hàng mục tiêu mà doanh nghiệp kiến tạo giá trị."
  },
  {
    question: "Tại sao doanh nghiệp cần xác định rõ “Đề xuất giá trị độc nhất” (Unique Value Proposition - UVP)?",
    options: [
      "Để khách hàng hiểu ngay lý do vì sao họ nên chọn mua sản phẩm của bạn thay vì chọn đối thủ cạnh tranh.",
      "Để in lên danh thiếp cho đẹp mắt.",
      "Để nhân viên thuộc lòng trong giờ chào cờ.",
      "Để thỏa mãn yêu cầu của ngân hàng cho vay vốn."
    ],
    correctIndex: 0,
    explanation: "UVP nêu bật lý do khách hàng nên chọn bạn vì giải pháp vượt trội và khác biệt rõ ràng so với đối thủ."
  }
];

const ALL_STARTUP_QUESTIONS = [
  ...RAW_QUESTIONS_CH1,
  ...RAW_QUESTIONS_CH2,
  ...RAW_QUESTIONS_CH3
];

function formatQuestionList(rawList, prefix = "Câu") {
  return rawList.map((q, idx) => ({
    id: idx + 1,
    question: `[${prefix} ${idx + 1}] ${q.question}`,
    options: q.options,
    correctIndex: q.correctIndex,
    explanation: q.explanation
  }));
}

const EXAMS_DATA_STARTUP = {
  1: {
    id: 1,
    code: "FULL-71",
    title: "Đề Thi 01 - Đề Tổng Hợp Toàn Diện (Full 71 Câu)",
    description: "Bộ đề 71 câu trắc nghiệm bao quát toàn bộ 3 chương Khởi Nghiệp Kinh Doanh & Đổi Mới Sáng Tạo.",
    timePerQuestion: 20,
    questions: formatQuestionList(ALL_STARTUP_QUESTIONS, "Câu")
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
    questions: formatQuestionList(ALL_STARTUP_QUESTIONS, "Đề Thi")
  }
};


// =========================================================
// MÔN 2: TIẾNG ANH CHUYÊN NGÀNH LOGISTICS (TỪ FILE english 4 log.docx)
// =========================================================

// 2.1 CẨM NANG LÝ THUYẾT & TỪ VỰNG CHUYÊN NGÀNH (Bám sát 33 câu trong đề)
const THEORY_DATA_LOGISTICS = [
  {
    chapter: 1,
    title: "Chuyên Đề 1. Logistics Entities & Supply Chain Roles",
    icon: "fa-solid fa-users-gear",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Key Entities in Freight & Transportation</h3>
        <ul>
          <li><strong>Haulage contractor (Haulier):</strong> A company which carries goods by road (nhà thầu vận tải đường bộ).</li>
          <li><strong>Freight forwarder:</strong> A person or business that arranges documentation and travel facilities for companies dispatching goods to customers (đại lý giao nhận vận tải).</li>
          <li><strong>Consignee:</strong> The person or firm named in a freight contract to whom the goods have been shipped (người nhận hàng được chỉ định).</li>
          <li><strong>Courier:</strong> A company that specialises in the speedy and secure delivery of small goods and packages (công ty chuyển phát nhanh bưu phẩm).</li>
          <li><strong>Supplier / Vendor:</strong> A company which supplies parts, raw materials, or services to another company (nhà cung ứng).</li>
          <li><strong>Wholesaler:</strong> An intermediary between manufacturers and retailers which buys in large quantities and resells in smaller quantities (nhà bán buôn / đại lý phân phối sỉ).</li>
        </ul>
      </div>
    `
  },
  {
    chapter: 2,
    title: "Chuyên Đề 2. Logistics Operations & Inventory Systems",
    icon: "fa-solid fa-warehouse",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Core Operational Concepts</h3>
        <ul>
          <li><strong>LCL (Less than Container Load):</strong> Consignments of cargo that do not fill a complete standard shipping container (hàng lẻ đóng ghép container).</li>
          <li><strong>Cross-docking:</strong> The direct flow of goods from receipt at the warehouse to outbound shipping, completely bypassing long-term storage (trung chuyển trực tiếp tại sàn kho).</li>
          <li><strong>Order picking:</strong> The selecting and assembling of items from inventory stock to fulfill customer shipments (nhặt hàng theo đơn).</li>
          <li><strong>Reverse logistics:</strong> The collecting and handling of used or damaged goods, or of reusable transit equipment (logistics thu hồi / xử lý hàng lỗi & tái chế).</li>
          <li><strong>Lead time:</strong> The time it takes to produce and supply a product (thời gian hoàn thành chu trình cung ứng).</li>
          <li><strong>Procurement:</strong> The purchasing of materials, parts, supplies and equipment required to run an enterprise (hoạt động mua sắm / thu mua).</li>
          <li><strong>VMI (Vendor-Managed Inventory):</strong> A system where inventory is monitored, planned and managed by the manufacturer on behalf of the customer/retailer (quản lý tồn kho bởi nhà cung cấp).</li>
          <li><strong>JIT (Just-in-Time):</strong> Philosophy aiming at reducing inventories by co-ordinating delivery of materials just before they are needed in production (mô hình đúng lúc, tối ưu hóa tồn kho).</li>
          <li><strong>Intermodal transport:</strong> Goods are carried in the same loading unit (e.g. container) using different modes (rail, road, sea), and the freight itself is not handled when the mode changes (vận tải kết hợp / đa phương thức).</li>
        </ul>
      </div>
    `
  },
  {
    chapter: 3,
    title: "Chuyên Đề 3. Business Quotations & Offer Sentence Structures",
    icon: "fa-solid fa-file-invoice-dollar",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Standard Business English Patterns in Logistics Quotations</h3>
        <div class="formula-box">
          <p><strong>1. Đính kèm bảng báo giá theo yêu cầu:</strong><br>
          <em>"Please find attached our quotation according to your request for three new products."</em></p>
          
          <p><strong>2. Cách tính giá dựa trên dự báo tiêu thụ:</strong><br>
          <em>"Our prices are calculated on the basis of your forecast of annual consumption figures."</em></p>
          
          <p><strong>3. Ưu đãi chiết khấu theo thời hạn hợp đồng:</strong><br>
          <em>"For a contract term of at least two years, we can offer you a discount of 2.5%."</em></p>
          
          <p><strong>4. Danh sách giá niêm yết theo cột:</strong><br>
          <em>"In the attached quotation sheet, all prices have been listed in columns according to your requirements."</em></p>
          
          <p><strong>5. Chiết khấu theo số lượng đơn hàng:</strong><br>
          <em>"If your order exceeds 2,000 items, we can offer you a further 10% discount."</em></p>
          
          <p><strong>6. Cam kết thời gian giao hàng sau khi nhận đơn:</strong><br>
          <em>"We would be able to deliver within 10 days of receipt of order."</em></p>
        </div>
      </div>
    `
  },
  {
    chapter: 4,
    title: "Chuyên Đề 4. Grammar in Logistics: Passive Voice & Comparisons",
    icon: "fa-solid fa-spell-check",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Câu Bị Động (Passive Voice) Trong Quy Trình Logistics</h3>
        <ul>
          <li><strong>Hiện tại đơn (Present Simple Passive - is/are + V3):</strong><br>
          <em>"Sales information is transferred to the CRP computer system as soon as the item is scanned at the point of sale."</em><br>
          <em>"Orders are generated automatically on the basis of the data received from the cash register."</em></li>
          <li><strong>Quá khứ đơn (Past Simple Passive - was/were + V3):</strong><br>
          <em>"Last Friday the consignment was delivered to the retail outlet by barge."</em></li>
          <li><strong>Quá khứ hoàn thành (Past Perfect Passive - had been + V3):</strong><br>
          <em>"When the inspector arrived, the dangerous goods had already been packed and labelled."</em></li>
          <li><strong>Tương lai đơn (Future Simple Passive - will be + V3):</strong><br>
          <em>"Your order will be shipped within six days of the purchase order."</em></li>
          <li><strong>Hiện tại tiếp diễn (Present Continuous Passive - is/are being + V3):</strong><br>
          <em>"Please note that the reefer containers are being loaded at the terminal at the moment."</em></li>
        </ul>

        <h3>2. Cấu Trúc So Sánh Phương Thức Vận Tải (Modes Comparison)</h3>
        <div class="formula-box">
          <ul>
            <li><strong>Long → longer:</strong> <em>"Normally the voyage takes about six days by barge, but it often takes longer if the weather is bad."</em></li>
            <li><strong>Cheap → the cheapest:</strong> <em>"Inland waterway transport is cheap — in fact it is the cheapest of all the transport options."</em></li>
            <li><strong>High → higher:</strong> <em>"It would only take four days to ship by truck, but the cost would be about 50% higher than by barge."</em></li>
            <li><strong>Fast → faster:</strong> <em>"Rail would definitely be faster than the truck option if we use the express service."</em></li>
            <li><strong>Expensive → more expensive:</strong> <em>"Unfortunately, the express train would also be more expensive than shipping by road."</em></li>
            <li><strong>Bad → worse:</strong> <em>"Their transit times have improved, but their documentation service is still worse than ours."</em></li>
          </ul>
        </div>
      </div>
    `
  }
];

// 2.2 TOÀN BỘ 33 CÂU HỎI TRẮC NGHIỆM CHUẨN XÁC TỪ FILE english 4 log.docx
const RAW_QUESTIONS_LOGISTICS = [
  {
    question: "A ______ is a company which carries goods by road.",
    options: [
      "courier",
      "consignee",
      "haulage contractor",
      "wholesaler"
    ],
    correctIndex: 2,
    explanation: "Haulage contractor (nhà thầu vận tải đường bộ) là công ty chuyên vận chuyển hàng hóa bằng đường bộ."
  },
  {
    question: "A ______ is a person or business that arranges documentation and travel facilities for companies dispatching goods to customers.",
    options: [
      "carrier",
      "supplier",
      "retailer",
      "freight forwarder"
    ],
    correctIndex: 3,
    explanation: "Freight forwarder (công ty giao nhận vận tải) là cá nhân/doanh nghiệp sắp xếp chứng từ và thủ tục vận chuyển cho các công ty gửi hàng."
  },
  {
    question: "The person or firm named in a freight contract to whom the goods have been shipped is the ______.",
    options: [
      "shipper",
      "consignee",
      "hauler",
      "vendor"
    ],
    correctIndex: 1,
    explanation: "Consignee (người nhận hàng) là người/tổ chức được ghi tên trong hợp đồng vận chuyển là bên nhận hàng hóa."
  },
  {
    question: "A company that specialises in the speedy and secure delivery of small goods and packages is a ______.",
    options: [
      "courier",
      "barge operator",
      "distributor",
      "forwarder"
    ],
    correctIndex: 0,
    explanation: "Courier (công ty chuyển phát nhanh) chuyên giao nhận nhanh chóng và an toàn các kiện hàng nhỏ và bưu phẩm."
  },
  {
    question: "A company which supplies parts or services to another company is a supplier, also called a ______.",
    options: [
      "consignee",
      "carrier",
      "vendor",
      "client"
    ],
    correctIndex: 2,
    explanation: "Vendor (nhà cung cấp) là thuật ngữ tương đương với supplier, cung cấp linh kiện hoặc dịch vụ cho công ty khác."
  },
  {
    question: "In the acronym LCL, the letters stand for ______.",
    options: [
      "Low Cost Logistics",
      "Less than Container Load",
      "Loaded Container Line",
      "Local Cargo Logistics"
    ],
    correctIndex: 1,
    explanation: "LCL viết tắt của 'Less than Container Load' (hàng lẻ không đủ đóng nguyên một container)."
  },
  {
    question: "______ means the direct flow of goods from receipt at the warehouse to shipping, bypassing storage.",
    options: [
      "Cross-docking",
      "Order picking",
      "Transhipment",
      "Consolidation"
    ],
    correctIndex: 0,
    explanation: "Cross-docking là quy trình chuyển hàng trực tiếp từ cửa nhận sang cửa xuất kho mà không lưu kho lâu dài."
  },
  {
    question: "______ is the selecting and assembling of items from stock for shipment.",
    options: [
      "Tracking",
      "Warehousing",
      "Kitting",
      "Order picking"
    ],
    correctIndex: 3,
    explanation: "Order picking (nhặt hàng/chọn hàng theo đơn) là quy trình lựa chọn và gom các món hàng từ tồn kho để gửi đi."
  },
  {
    question: "The collecting and handling of used or damaged goods, or of reusable transit equipment, is called ______.",
    options: [
      "value-added service",
      "literature fulfilment",
      "reverse logistics",
      "customs clearance"
    ],
    correctIndex: 2,
    explanation: "Reverse logistics (logistics thu hồi/ngược) là việc thu gom và xử lý hàng đã qua sử dụng, hàng hỏng hoặc thiết bị vận chuyển tái chế."
  },
  {
    question: "______ is the time it takes to produce and supply a product.",
    options: [
      "Lead time",
      "Customer order cycle time",
      "Transit time",
      "Dwell time"
    ],
    correctIndex: 0,
    explanation: "Lead time (thời gian hoàn thành đơn hàng/thời gian cung ứng) là thời gian cần thiết để sản xuất và cung ứng sản phẩm."
  },
  {
    question: "______ is the purchasing of materials, parts, supplies and equipment required to run an enterprise.",
    options: [
      "Replenishment",
      "Merchandising",
      "Forecasting",
      "Procurement"
    ],
    correctIndex: 3,
    explanation: "Procurement (thu mua/mua sắm) là hoạt động mua nguyên vật liệu, phụ tùng và thiết bị để vận hành doanh nghiệp."
  },
  {
    question: "A ______ is an intermediary between manufacturers and retailers which buys in large quantities and resells in smaller quantities.",
    options: [
      "retailer",
      "wholesaler",
      "courier",
      "broker"
    ],
    correctIndex: 1,
    explanation: "Wholesaler (nhà bán buôn/sỉ) là trung gian giữa nhà sản xuất và nhà bán lẻ, mua số lượng lớn và bán lại số lượng nhỏ hơn."
  },
  {
    question: "In a ______ system the inventory is monitored, planned and managed by the manufacturer on behalf of the customer, often a retailer.",
    options: [
      "QR",
      "DSD",
      "VMI",
      "CM"
    ],
    correctIndex: 2,
    explanation: "VMI (Vendor-Managed Inventory) là hệ thống tồn kho được nhà sản xuất theo dõi, lập kế hoạch và quản lý thay cho khách hàng/nhà bán lẻ."
  },
  {
    question: "Just-in-time aims at reducing ______ by co-ordinating the delivery of materials just before they are needed.",
    options: [
      "lead times",
      "discounts",
      "inventories",
      "tariffs"
    ],
    correctIndex: 2,
    explanation: "Just-in-time (JIT) nhằm mục đích giảm thiểu tồn kho (inventories) bằng cách giao nguyên vật liệu ngay trước khi cần dùng."
  },
  {
    question: "In ______ transport, goods are carried in the same loading unit using different modes, and the freight itself is not handled when the mode changes.",
    options: [
      "single-wagon",
      "intermodal",
      "unaccompanied",
      "block train"
    ],
    correctIndex: 1,
    explanation: "Intermodal transport (vận tải kết hợp/đa phương thức) chở hàng trong cùng đơn vị xếp dỡ qua nhiều phương tiện mà không phải bốc dỡ hàng bên trong."
  },
  {
    question: "Sắp xếp câu hoàn chỉnh: (a) our quotation (b) Please find attached (c) according to (d) your request for three new products",
    options: [
      "a – b – c – d",
      "b – a – c – d",
      "b – c – a – d",
      "a – c – b – d"
    ],
    correctIndex: 1,
    explanation: "Thứ tự đúng: (b) Please find attached + (a) our quotation + (c) according to + (d) your request for three new products."
  },
  {
    question: "Sắp xếp câu hoàn chỉnh: (a) the basis of (b) Our prices (c) your forecast of annual consumption figures (d) are calculated on",
    options: [
      "b – a – d – c",
      "d – b – a – c",
      "b – d – a – c",
      "b – d – c – a"
    ],
    correctIndex: 2,
    explanation: "Thứ tự đúng: (b) Our prices + (d) are calculated on + (a) the basis of + (c) your forecast of annual consumption figures."
  },
  {
    question: "Sắp xếp câu hoàn chỉnh: (a) a discount of 2.5% (b) we can offer you (c) For a contract term (d) of at least two years,",
    options: [
      "b – a – c – d",
      "c – b – d – a",
      "d – c – b – a",
      "c – d – b – a"
    ],
    correctIndex: 3,
    explanation: "Thứ tự đúng: (c) For a contract term + (d) of at least two years, + (b) we can offer you + (a) a discount of 2.5%."
  },
  {
    question: "Sắp xếp câu hoàn chỉnh: (a) all prices (b) according to your requirements (c) In the attached quotation sheet, (d) have been listed in columns",
    options: [
      "a – d – c – b",
      "c – a – d – b",
      "c – d – a – b",
      "a – c – d – b"
    ],
    correctIndex: 1,
    explanation: "Thứ tự đúng: (c) In the attached quotation sheet, + (a) all prices + (d) have been listed in columns + (b) according to your requirements."
  },
  {
    question: "Sắp xếp câu hoàn chỉnh: (a) a further 10% discount. (b) we can offer you (c) If your order (d) exceeds 2,000 items,",
    options: [
      "c – b – d – a",
      "d – c – a – b",
      "c – d – b – a",
      "b – a – c – d"
    ],
    correctIndex: 2,
    explanation: "Thứ tự đúng: (c) If your order + (d) exceeds 2,000 items, + (b) we can offer you + (a) a further 10% discount."
  },
  {
    question: "Sắp xếp câu hoàn chỉnh: (a) of receipt of order. (b) We would be able to (c) within 10 days (d) deliver",
    options: [
      "b – c – d – a",
      "d – b – c – a",
      "b – d – a – c",
      "b – d – c – a"
    ],
    correctIndex: 3,
    explanation: "Thứ tự đúng: (b) We would be able to + (d) deliver + (c) within 10 days + (a) of receipt of order."
  },
  {
    question: "In a continuous replenishment system, sales information ______ (transfer) to the CRP computer system as soon as the item is scanned at the point of sale.",
    options: [
      "transfers",
      "is transferred",
      "has transferred",
      "is transferring"
    ],
    correctIndex: 1,
    explanation: "Bị động ở thì hiện tại đơn: 'sales information' (không đếm được) + 'is transferred' (được chuyển đến hệ thống máy tính CRP)."
  },
  {
    question: "Orders ______ (generate) automatically on the basis of the data received from the cash register.",
    options: [
      "generate",
      "are generating",
      "have generated",
      "are generated"
    ],
    correctIndex: 3,
    explanation: "Bị động ở hiện tại đơn số nhiều: 'Orders' (các đơn hàng) + 'are generated' (được tạo tự động)."
  },
  {
    question: "Last Friday the consignment ______ (deliver) to the retail outlet by barge.",
    options: [
      "delivered",
      "has delivered",
      "is delivered",
      "was delivered"
    ],
    correctIndex: 3,
    explanation: "Bị động thì quá khứ đơn (Last Friday): 'the consignment' (lô hàng) + 'was delivered' (đã được giao bằng sà lan)."
  },
  {
    question: "When the inspector arrived, the dangerous goods ______ already ______ (pack) and labelled.",
    options: [
      "had / packed",
      "have / been packed",
      "had / been packed",
      "were / packing"
    ],
    correctIndex: 2,
    explanation: "Bị động quá khứ hoàn thành (Past Perfect Passive): 'had already been packed' (đã được đóng gói trước khi thanh tra đến)."
  },
  {
    question: "Your order ______ (ship) within six days of the purchase order.",
    options: [
      "will ship",
      "will be shipped",
      "will being shipped",
      "shall shipping"
    ],
    correctIndex: 1,
    explanation: "Bị động thì tương lai đơn (Future Simple Passive): 'will be shipped' (sẽ được gửi đi trong vòng 6 ngày)."
  },
  {
    question: "Please note that the reefer containers ______ (load) at the terminal at the moment, so the vessel cannot sail before midnight.",
    options: [
      "are being loaded",
      "are loading",
      "have loaded",
      "were loaded"
    ],
    correctIndex: 0,
    explanation: "Bị động thì hiện tại tiếp diễn (at the moment): 'are being loaded' (các container lạnh đang được xếp lên tàu)."
  },
  {
    question: "Normally the voyage takes about six days by barge, but it often takes ______ (long) if the weather is bad.",
    options: [
      "the longest",
      "more long",
      "longer",
      "as long"
    ],
    correctIndex: 2,
    explanation: "So sánh hơn của tính từ ngắn 'long' là 'longer' (mất nhiều thời gian hơn)."
  },
  {
    question: "Inland waterway transport is cheap — in fact it is ______ (cheap) of all the transport options.",
    options: [
      "cheaper",
      "the cheapest",
      "more cheap",
      "the most cheap"
    ],
    correctIndex: 1,
    explanation: "So sánh nhất của tính từ ngắn 'cheap' là 'the cheapest' (rẻ nhất trong tất cả các lựa chọn vận chuyển)."
  },
  {
    question: "It would only take four days to ship by truck, but the cost would be about 50% ______ (high) than by barge.",
    options: [
      "the highest",
      "high",
      "higher",
      "more high"
    ],
    correctIndex: 2,
    explanation: "So sánh hơn của tính từ ngắn 'high' là 'higher' (cao hơn 50% so với đi bằng sà lan)."
  },
  {
    question: "Rail would definitely be ______ (fast) than the truck option if we use the express service.",
    options: [
      "fastest",
      "more fast",
      "as fast",
      "faster"
    ],
    correctIndex: 3,
    explanation: "So sánh hơn của tính từ ngắn 'fast' là 'faster' (nhanh hơn)."
  },
  {
    question: "Unfortunately, the express train would also be ______ (expensive) than shipping by road.",
    options: [
      "expensiver",
      "the most expensive",
      "more expensive",
      "most expensive"
    ],
    correctIndex: 2,
    explanation: "So sánh hơn của tính từ dài 'expensive' là 'more expensive' (đắt hơn so với vận chuyển đường bộ)."
  },
  {
    question: "Their transit times have improved, but their documentation service is still ______ (bad) than ours.",
    options: [
      "badder",
      "worse",
      "the worst",
      "more bad"
    ],
    correctIndex: 1,
    explanation: "So sánh hơn bất quy tắc của tính từ 'bad' là 'worse' (kém hơn/tệ hơn)."
  }
];

// 2.3 BỘ ĐỀ LUYỆN TẬP TIẾNG ANH LOGISTICS (FULL TẤT CẢ 33 CÂU)
const EXAMS_DATA_LOGISTICS = {
  1: {
    id: 1,
    code: "ENG-FULL",
    title: "Đề Thi Tổng Hợp - English for Logistics (Full 33 Câu)",
    description: "Trọn bộ 33 câu hỏi trắc nghiệm tiếng Anh chuyên ngành Logistics bao quát toàn bộ đề thi (Từ vựng, Báo giá, Câu bị động & So sánh phương thức vận tải).",
    timePerQuestion: 25,
    questions: formatQuestionList(RAW_QUESTIONS_LOGISTICS, "Câu")
  }
};


// =========================================================
// REGISTRY HỆ THỐNG ĐA MÔN HỌC
// =========================================================

// =========================================================
// MÔN 3: TƯ TƯỞNG HỒ CHÍ MINH (113 CÂU HỎI TRẮC NGHIỆM)
// =========================================================

// 3.1 CẨM NANG LÝ THUYẾT TƯ TƯỞNG HỒ CHÍ MINH
const THEORY_DATA_HOCHIMINH = [
  {
    chapter: 1,
    title: "Phần 1. Khái Niệm, Cơ Sở & Quá Trình Hình Thành Tư Tưởng HCM",
    icon: "fa-solid fa-landmark",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Khái Niệm & Định Nghĩa Tư Tưởng Hồ Chí Minh</h3>
        <ul>
          <li><strong>Thuật ngữ:</strong> Được hiểu theo nghĩa là <em>tư tưởng của một giai cấp, một dân tộc</em> đại biểu cho khát vọng độc lập, tự do và chủ nghĩa xã hội.</li>
          <li><strong>Văn kiện Đại hội VII (1991):</strong> Cột mốc lịch sử khẳng định: <em>"Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động"</em>.</li>
          <li><strong>Văn kiện Đại hội IX (2001):</strong> Định nghĩa hoàn chỉnh: <em>"Tư tưởng Hồ Chí Minh là một hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam, kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta, kế thừa và phát triển các giá trị truyền thống tốt đẹp của dân tộc, tiếp thu tinh hoa văn hóa nhân loại..."</em></li>
          <li><strong>Mục đích:</strong> Xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh.</li>
        </ul>

        <h3>2. Cơ Sở Hình Thành Tư Tưởng Hồ Chí Minh</h3>
        <div class="formula-box">
          <p><strong>Cơ sở thực tiễn:</strong></p>
          <ul>
            <li><em>Việt Nam:</em> Cuối thế kỷ XIX - đầu thế kỷ XX, mâu thuẫn chủ yếu là giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và tay sai; phong trào yêu nước khủng hoảng sâu sắc về đường lối cứu nước.</li>
            <li><em>Thế giới:</em> Chủ nghĩa tư bản chuyển từ tự do cạnh tranh sang giai đoạn đế quốc chủ nghĩa; Cách mạng Tháng Mười Nga (1917) thắng lợi mở ra thời đại mới - thời đại cách mạng vô sản.</li>
          </ul>
          <p><strong>Cơ sở lý luận & Nhân tố chủ quan:</strong></p>
          <ul>
            <li><strong>Chủ nghĩa Mác - Lênin:</strong> Là cơ sở lý luận giữ vai trò <em>quyết định</em> đối với bản chất khoa học và cách mạng của tư tưởng Hồ Chí Minh. Ưu điểm lớn nhất là <em>phương pháp làm việc biện chứng</em>.</li>
            <li><strong>Giá trị truyền thống dân tộc:</strong> Chủ nghĩa yêu nước, tinh thần đoàn kết, ý chí tự lực tự cường, nhân ái khoan dung.</li>
            <li><strong>Tinh hoa văn hóa nhân loại:</strong> Tiếp thu tư tưởng phương Đông (Nho giáo, Phật giáo, Lão giáo, Tôn Trung Sơn) và phương Tây (Tự do - Bình đẳng - Bác ái trong Đại cách mạng Pháp 1789, Tuyên ngôn Độc lập Mỹ 1776).</li>
            <li><strong>Nhân tố chủ quan Hồ Chí Minh:</strong> Năng lực tư duy, trí tuệ sắc bén, phẩm chất đạo đức cao đẹp và hoạt động thực tiễn phong phú.</li>
          </ul>
        </div>

        <h3>3. Các Giai Đoạn Hình Thành Và Phát Triển</h3>
        <ol>
          <li><strong>Trước năm 1911:</strong> Thời kỳ hình thành tư tưởng yêu nước và chí hướng cứu nước mới (ngày 5/6/1911 Người ra đi tìm đường cứu nước tại Bến cảng Nhà Rồng trên tàu Amiran Latouche-Tréville).</li>
          <li><strong>Thời kỳ 1911 - 1920:</strong> Thời kỳ tìm thấy con đường cứu nước, giải phóng dân tộc (năm 1919 lấy tên Nguyễn Ái Quốc gửi Bản yêu sách của nhân dân An Nam tới Hội nghị Versailles; tháng 7/1920 đọc Sơ thảo Luận cương của Lênin và bỏ phiếu tán thành Quốc tế III).</li>
          <li><strong>Thời kỳ 1920 - 1930:</strong> Thời kỳ hình thành những nội dung cơ bản tư tưởng về cách mạng Việt Nam (thành lập Hội Việt Nam CMTN 1925, xuất bản <em>Bản án chế độ thực dân Pháp</em> 1925, <em>Đường Kách mệnh</em> 1927; sáng lập Đảng Cộng sản Việt Nam đầu năm 1930 với Cương lĩnh chính trị đầu tiên).</li>
          <li><strong>Thời kỳ 1930 - 1941:</strong> Thời kỳ vượt qua khó khăn, thử thách, kiên trì giữ vững đường lối, phương pháp cách mạng Việt Nam đúng đắn, sáng tạo.</li>
          <li><strong>Thời kỳ 1941 - 1969:</strong> Tư tưởng Hồ Chí Minh tiếp tục phát triển, hoàn thiện và thắng lợi rực rỡ (Cách mạng Tháng Tám, 2 cuộc kháng chiến chống Pháp và chống Mỹ).</li>
        </ol>
      </div>
    `
  },
  {
    chapter: 2,
    title: "Phần 2. Độc Lập Dân Tộc, CNXH, Đảng & Nhà Nước",
    icon: "fa-solid fa-flag",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Độc Lập Dân Tộc Gắn Liền Với Chủ Nghĩa Xã Hội</h3>
        <ul>
          <li><strong>Con đường duy nhất:</strong> <em>"Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản"</em>. Cách mạng tư sản Mỹ (1776) và Pháp (1789) là những cuộc cách mạng <em>"không đến nơi"</em>. Chỉ có Cách mạng Tháng Mười Nga là <em>"thành công và thành công đến nơi"</em> (tính triệt để).</li>
          <li><strong>Khả năng chủ động:</strong> Cách mạng giải phóng dân tộc thuộc địa cần chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc.</li>
          <li><strong>Mối quan hệ:</strong> Độc lập dân tộc là tiền đề, điều kiện tiên quyết để tiến lên CNXH; CNXH là bảo đảm vững chắc nhất cho độc lập dân tộc. Độc lập phải gắn liền với tự do, cơm no áo ấm và hạnh phúc của nhân dân.</li>
          <li><strong>Đặc điểm thời kỳ quá độ lên CNXH ở VN:</strong> Đặc điểm to nhất là <em>từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không phải trải qua giai đoạn phát triển tư bản chủ nghĩa</em>.</li>
          <li><strong>Động lực của CNXH:</strong> Con người là động lực quyết định nhất; nguyên tắc phân phối chủ yếu là <em>làm theo năng lực, hưởng theo lao động</em>.</li>
        </ul>

        <h3>2. Tư Tưởng Về Đảng Cộng Sản Việt Nam</h3>
        <div class="formula-box">
          <p><strong>Quy luật ra đời của Đảng (Sáng tạo của HCM):</strong></p>
          <p style="text-align: center; font-weight: 700; color: #ef4444;">
            Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước = Đảng Cộng sản Việt Nam
          </p>
          <ul>
            <li><strong>Bản chất:</strong> Mang bản chất giai cấp công nhân, đại biểu trung thành cho lợi ích của giai cấp công nhân, nhân dân lao động và của toàn thể dân tộc.</li>
            <li><strong>Nền tảng:</strong> Đảng phải lấy chủ nghĩa Mác - Lênin "làm cốt" (làm nền tảng tư tưởng và kim chỉ nam).</li>
            <li><strong>Nguyên tắc hoạt động:</strong> Tập trung dân chủ; Tập thể lãnh đạo, cá nhân phụ trách; <em>Tự phê bình và phê bình</em> (thường xuyên và nghiêm túc); Kỷ luật nghiêm minh, tự giác; Đoàn kết thống nhất trong Đảng.</li>
            <li><strong>Phẩm chất:</strong> "Đảng ta là đạo đức, là văn minh", là người cầm lái cho con thuyền cách mạng Việt Nam.</li>
          </ul>
        </div>

        <h3>3. Xây Dựng Nhà Nước Của Dân, Do Dân, Vì Dân</h3>
        <ul>
          <li><strong>Bản chất giai cấp:</strong> Nhà nước Việt Nam mang <em>bản chất giai cấp công nhân</em>, có tính nhân dân và tính dân tộc sâu sắc.</li>
          <li><strong>Nhà nước của dân:</strong> Mọi quyền lực nhà nước và trong xã hội đều thuộc về nhân dân; nhân dân là người chủ.</li>
          <li><strong>Nhà nước do dân:</strong> Do dân lựa chọn, bầu ra đại biểu, dân ủng hộ, nuôi dưỡng và kiểm soát.</li>
          <li><strong>Nhà nước vì dân:</strong> Phục vụ lợi ích và nguyện vọng chính đáng của nhân dân; cán bộ là công bộc, đầy tớ của dân. <em>"Việc gì lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh"</em>.</li>
          <li><strong>Nhà nước pháp quyền:</strong> Nhà nước hợp hiến, hợp pháp (Chủ tịch Hồ Chí Minh đã ký 16 đạo luật và nhiều sắc lệnh xây dựng nền pháp lý), thượng tôn pháp luật kết hợp nhuần nhuyễn với đạo đức cách mạng.</li>
          <li><strong>Chống "Giặc nội xâm":</strong> Quyết liệt phòng, chống 3 căn bệnh nguy hiểm trong bộ máy nhà nước: <em>Tham ô, lãng phí, quan liêu</em>.</li>
        </ul>
      </div>
    `
  },
  {
    chapter: 3,
    title: "Phần 3. Đại Đoàn Kết Toàn Dân Tộc & Đoàn Kết Quốc Tế",
    icon: "fa-solid fa-users",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Tư Tưởng Về Đại Đoàn Kết Toàn Dân Tộc</h3>
        <ul>
          <li><strong>Vị trí, vai trò:</strong> Đại đoàn kết toàn dân tộc không phải là thủ đoạn chính trị hay sách lược nhất thời, mà là <em>vấn đề có ý nghĩa chiến lược</em> xuyên suốt, quyết định thành bại của cách mạng: <em>"Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công"</em>.</li>
          <li><strong>Lực lượng & Chủ thể:</strong> Toàn thể nhân dân Việt Nam, mọi người con đất Việt có lòng yêu nước, không phân biệt dân tộc, tôn giáo, đảng phái, giai cấp, quá khứ.</li>
          <li><strong>Nền tảng:</strong> Khối liên minh giữa <em>giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức</em>, đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.</li>
          <li><strong>Hình thức tổ chức:</strong> <em>Mặt trận dân tộc thống nhất</em> (Hội phản đế đồng minh 1930, Mặt trận Việt Minh 1941, Mặt trận Liên Việt, Mặt trận Tổ quốc Việt Nam). Hoạt động theo nguyên tắc hiệp thương dân chủ và đồng thuận.</li>
          <li><strong>Hạt nhân đoàn kết:</strong> Yếu tố quyết định, làm hạt nhân cho khối đại đoàn kết toàn dân tộc chính là <em>sự đoàn kết, thống nhất trong Đảng</em>.</li>
        </ul>

        <h3>2. Tư Tưởng Về Đoàn Kết Quốc Tế</h3>
        <div class="formula-box">
          <p><strong>Mục tiêu & Lực lượng:</strong></p>
          <ul>
            <li>Nhằm kết hợp <em>sức mạnh dân tộc với sức mạnh thời đại</em> tạo sức mạnh tổng hợp to lớn cho cách mạng.</li>
            <li>Lực lượng đoàn kết gồm: Phong trào cộng sản và công nhân quốc tế; Phong trào đấu tranh giải phóng dân tộc; và Phong trào hòa bình, dân chủ, tiến bộ trên toàn thế giới.</li>
          </ul>
          <p><strong>Nguyên tắc ngoại giao & đoàn kết:</strong></p>
          <ul>
            <li>Dựa trên nguyên tắc <em>độc lập, tự chủ, tự lực cánh sinh</em>: <em>"Một dân tộc không tự lực cánh sinh mà cứ ngồi chờ dân tộc khác giúp đỡ thì không xứng đáng được độc lập"</em> (13/7/1952). Nội lực giữ vai trò quyết định, ngoại lực chỉ phát huy tác dụng thông qua nội lực.</li>
            <li>Đoàn kết trên cơ sở bình đẳng, tôn trọng độc lập chủ quyền, vì hòa bình và công lý: <em>"Làm bạn với tất cả nước dân chủ và không gây thù oán với một ai"</em> (9/1947).</li>
            <li>Giương cao ngọn cờ: <em>Độc lập dân tộc gắn liền với chủ nghĩa xã hội</em> và khẩu hiệu của Lênin: <em>"Vô sản tất cả các nước và các dân tộc bị áp bức đoàn kết lại!"</em>.</li>
          </ul>
        </div>
      </div>
    `
  }
];

const RAW_QUESTIONS_HCM_P1 = [
  {
    "question": "Thuật ngữ “tư tưởng Hồ Chí Minh” được dùng theo nghĩa nào?",
    "options": [
      "Là tư tưởng của một cá nhân.",
      "Là tư tưởng của một lãnh tụ.",
      "Là tư tưởng của một giai cấp, một dân tộc.",
      "Là tư tưởng của một nhóm người."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Là tư tưởng của một giai cấp, một dân tộc.\""
  },
  {
    "question": "Khái niệm tư tưởng Hồ Chí Minh: “Tư tưởng Hồ Chí Minh là một hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam, kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta, kế thừa và phát triển các giá trị truyền thống tốt đẹp của dân tộc, tiếp thu tinh hoa văn hóa nhân loại; là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta, mãi mãi soi đường cho sự nghiệp cách mạng của nhân dân ta giành thắng lợi” được nêu ra tại Văn kiện Đại hội lần thứ mấy của Đảng?",
    "options": [
      "Văn kiện Đại hội VIII.",
      "Văn kiện Đại hội IX.",
      "Văn kiện Đại hội XI.",
      "Văn kiện Đại hội X."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Văn kiện Đại hội IX.\""
  },
  {
    "question": "Khái niệm Tư tưởng Hồ Chí Minh đã chỉ ra nội dung nào sau đây?",
    "options": [
      "Hệ thống quan điểm về Đảng Cộng sản Việt Nam.",
      "Hệ thống quan điểm về cách mạng thế giới.",
      "Hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam.",
      "Hệ thống quan điểm về quá trình xây dựng chủ nghĩa xã hội."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam.\""
  },
  {
    "question": "Luận điểm: “Tư tưởng Hồ Chí Minh là một hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam, là kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta, kế thừa và phát triển các giá trị truyền thống tốt đẹp của dân tộc, tiếp thu tinh hoa văn hóa nhân loại” được nêu ra tại Văn kiện Đại hội lần thứ mấy của Đảng?",
    "options": [
      "Văn kiện Đại hội IX.",
      "Văn kiện Đại hội X.",
      "Văn kiện Đại hội VII.",
      "Văn kiện Đại hội VIII."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Văn kiện Đại hội IX.\""
  },
  {
    "question": "Luận điểm: “Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động” được nêu ra tại Văn kiện Đại hội lần thứ mấy của Đảng?",
    "options": [
      "Văn kiện Đại hội VIII.",
      "Văn kiện Đại hội X.",
      "Văn kiện Đại hội IX.",
      "Văn kiện Đại hội VII."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Văn kiện Đại hội VII.\""
  },
  {
    "question": "Phương pháp luận nghiên cứu tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Chủ nghĩa duy vật biện chứng.",
      "Chủ nghĩa Mác – Lênin.",
      "Chủ nghĩa duy vật lịch sử.",
      "Chủ nghĩa Mác – Lênin và phương pháp luận của chính Hồ Chí Minh."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Chủ nghĩa Mác – Lênin và phương pháp luận của chính Hồ Chí Minh.\""
  },
  {
    "question": "Học tập môn Tư tưởng Hồ Chí Minh có ý nghĩa như thế nào đối với sinh viên?",
    "options": [
      "Góp phần nâng cao hiểu biết về cách mạng Việt Nam.",
      "Góp phần nâng cao năng lực tư duy lý luận.",
      "Góp phần nâng cao hiểu biết về cách mạng thế giới.",
      "Góp phần nâng cao hiểu biết xã hội."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Góp phần nâng cao năng lực tư duy lý luận.\""
  },
  {
    "question": "Một trong những phương pháp quan trọng khi nghiên cứu tư tưởng Hồ Chí Minh là?",
    "options": [
      "Phương pháp phân tích văn bản kết hợp nghiên cứu hoạt động thực tiễn của Hồ Chí Minh.",
      "Phương pháp nghiên cứu hoạt động thực tiễn của Hồ Chí Minh.",
      "Phương pháp logic.",
      "Phương pháp phân tích văn bản."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Phương pháp phân tích văn bản kết hợp nghiên cứu hoạt động thực tiễn của Hồ Chí Minh.\""
  },
  {
    "question": "Đối tượng nghiên cứu của Tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam và hệ thống quan điểm Tư tưởng Hồ Chí Minh được vận động trong thực tiễn.",
      "Hệ thống quan điểm về quá trình xây dựng chủ nghĩa xã hội.",
      "Hệ thống quan điểm lý luận về cách mạng Việt Nam.",
      "Hệ thống quan điểm được vận động trong thực tiễn."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam và hệ thống quan điểm Tư tưởng Hồ Chí Minh được vận động trong thực tiễn.\""
  },
  {
    "question": "Mục đích tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Xây dựng nước Việt Nam hòa bình, thống nhất, dân chủ và giàu mạnh.",
      "Xây dựng nước Việt Nam giàu mạnh.",
      "Giải phóng xã hội.",
      "Giải phóng dân tộc."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Xây dựng nước Việt Nam hòa bình, thống nhất, dân chủ và giàu mạnh.\""
  },
  {
    "question": "Tư tưởng Hồ Chí Minh có vị trí như thế nào trong hệ thống tư tưởng Đảng Cộng sản Việt Nam?",
    "options": [
      "Là một bộ phận trong hệ thống tư tưởng của Đảng.",
      "Là bộ phận nền tảng, kim chỉ nam cho hành động của Đảng.",
      "Là bộ phận rất quan trọng trong hệ thống tư tưởng của Đảng.",
      "Là bộ phận quan trọng trong hệ thống tư tưởng của Đảng."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Là bộ phận nền tảng, kim chỉ nam cho hành động của Đảng.\""
  },
  {
    "question": "Luận điểm: “Có kinh nghiệm mà không có lý luận, cũng như một mắt sáng, một mắt mờ” của Hồ Chí Minh nói lên điều gì?",
    "options": [
      "Nhấn mạnh vai trò của lý luận.",
      "Nhấn mạnh vai trò của thực tiễn.",
      "Nhấn mạnh sự thống nhất giữa lý luận và thực tiễn.",
      "Chỉ ra căn bệnh “lý luận suông”."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Nhấn mạnh sự thống nhất giữa lý luận và thực tiễn.\""
  },
  {
    "question": "Khái niệm tư tưởng Hồ Chí Minh được Đảng ta chính thức sử dụng vào thời gian nào?",
    "options": [
      "Năm 1991.",
      "Năm 1996.",
      "Năm 1986.",
      "Năm 2001."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Năm 1991.\""
  },
  {
    "question": "Tính đảng trong nguyên tắc phương pháp luận nghiên cứu tư tưởng Hồ Chí Minh là gì?",
    "options": [
      "Đứng trên lập trường giai cấp công nhân.",
      "Đứng trên quan điểm, đường lối của Đảng.",
      "Đứng trên lập trường giai cấp công nhân, đứng trên quan điểm chủ nghĩa Mác – Lênin, quán triệt Cương lĩnh, đường lối, quan điểm của Đảng Cộng sản Việt Nam.",
      "Đứng trên quan điểm chủ nghĩa Mác – Lênin và Cương lĩnh, đường lối, quan điểm của Đảng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Đứng trên lập trường giai cấp công nhân, đứng trên quan điểm chủ nghĩa Mác – Lênin, quán triệt Cương lĩnh, đường lối, quan điểm của Đảng Cộng sản Việt Nam.\""
  },
  {
    "question": "Theo Hồ Chí Minh, học chủ nghĩa Mác- Lênin là để làm gì?",
    "options": [
      "Học thuộc các luận điểm lý luận.",
      "Để có phương pháp làm việc khoa học.",
      "Để nâng cao trình độ bản thân.",
      "Để phân tích và giải quyết các vấn đề cụ thể của cách mạng Việt Nam."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Để phân tích và giải quyết các vấn đề cụ thể của cách mạng Việt Nam.\""
  },
  {
    "question": "Hồ Chí Minh đã tiếp thu được giá trị tư tưởng nào sau đây trong Đại cách mạng Pháp 1789?",
    "options": [
      "Tự do - Bình đẳng - Bác ái.",
      "Quyền sống, quyền mưu cầu hạnh phúc.",
      "Quyền dân chủ.",
      "Quyền bình đẳng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Tự do - Bình đẳng - Bác ái.\""
  },
  {
    "question": "Một trong những giá trị của văn hoá phương Tây được Hồ Chí Minh tiếp thu góp phần hình thành tư tưởng của Người là:",
    "options": [
      "Những mặt tích cực của Nho Giáo.",
      "Tư tưởng vị tha của Phật giáo.",
      "Chủ nghĩa Tam dân của Tôn Trung Sơn.",
      "Tư tưởng dân chủ và cách mạng trong cách mạng Pháp và cách mạng Mỹ."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Tư tưởng dân chủ và cách mạng trong cách mạng Pháp và cách mạng Mỹ.\""
  },
  {
    "question": "Đặc điểm nổi bật của thực tiễn thế giới cuối thế kỷ XIX đầu thế kỷ XX là gì?",
    "options": [
      "Chủ nghĩa tư bản phát triển từ giai đoạn tự do cạnh tranh sang giai đoạn đế quốc chủ nghĩa.",
      "Chủ nghĩa xã hội trở thành hệ thống thế giới.",
      "Chủ nghĩa cộng sản ra đời.",
      "Chủ nghĩa tư bản ra đời."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Chủ nghĩa tư bản phát triển từ giai đoạn tự do cạnh tranh sang giai đoạn đế quốc chủ nghĩa.\""
  },
  {
    "question": "Nguyễn Tất Thành lên con tàu Amiran Latusơ Tơrơvin để ra đi tìm đường cứu nước tại đâu? Vào thời gian nào?",
    "options": [
      "6/5/1911 tại Bến cảng Nhà Rồng.",
      "5/6/1911 tại Bến cảng Nhà Rồng.",
      "2/6/1911 tại Sài Gòn.",
      "4/6/1911 tại Bến Nhà Rồng."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"5/6/1911 tại Bến cảng Nhà Rồng.\""
  },
  {
    "question": "Cách mạng tháng Mười Nga diễn ra năm nào?",
    "options": [
      "1915",
      "1918",
      "1917",
      "1916"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"1917\""
  },
  {
    "question": "Giai đoạn vượt qua khó khăn thử thách, giữ vững đường lối, phương pháp cách mạng Việt Nam đúng đắn, sáng tạo là giai đoạn nào?",
    "options": [
      "Thời kỳ 1930 - 1941.",
      "Thời kỳ 1920 - 1930.",
      "Trước năm 1911.",
      "Thời kỳ 1911 - 1920."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Thời kỳ 1930 - 1941.\""
  },
  {
    "question": "Đầu năm 1930. Tại Hương Cảng, Trung Quốc, Hồ Chí Minh đã chủ trì Hội nghị sáng lập tổ chức nào sau đây?",
    "options": [
      "Hội Liên hiệp thuộc địa.",
      "Hội Việt Nam cách mạng thanh niên.",
      "Đảng Cộng sản Việt Nam.",
      "Hội Liên hiệp các dân tộc bị áp bức."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Đảng Cộng sản Việt Nam.\""
  },
  {
    "question": "Thời kỳ hình thành những nội dung cơ bản tư tưởng về cách mạng Việt Nam là thời kỳ nào?",
    "options": [
      "Thời kỳ 1911 - 1920.",
      "Trước năm 1911.",
      "Thời kỳ 1930 - 1941.",
      "Thời kỳ 1920 - 1930."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Thời kỳ 1920 - 1930.\""
  },
  {
    "question": "Trong sự hình thành và phát triển tư tưởng Hồ Chí Minh, thời kỳ trước năm 1911 có ý nghĩa như thế nào?",
    "options": [
      "Thời kỳ tiếp cận với chủ nghĩa Mác - Lênin.",
      "Thời kỳ vượt qua khó khăn thử thách.",
      "Thời kỳ tìm đường cứu nước.",
      "Thời kỳ hình thành tư tưởng yêu nước và chí hướng cứu nước."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Thời kỳ hình thành tư tưởng yêu nước và chí hướng cứu nước.\""
  },
  {
    "question": "Đối với Hồ Chí Minh, ưu điểm lớn nhất trong chủ nghĩa Mác - Lênin là gì?",
    "options": [
      "Giải phóng các dân tộc thuộc địa.",
      "Đấu tranh vì tự do, dân chủ.",
      "Phương pháp làm việc biện chứng.",
      "Chống phong kiến."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Phương pháp làm việc biện chứng.\""
  },
  {
    "question": "Nguyễn Ái Quốc gửi “Bản yêu sách của nhân dân An Nam” tới Hội nghị Vécxây, đòi chính phủ Pháp thừa nhận các quyền tự do, dân chủ và bình đẳng của nhân dân Việt Nam vào thời gian nào?",
    "options": [
      "6/1919",
      "6/1917",
      "6/1918",
      "6/1920"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"6/1919\""
  },
  {
    "question": "Nguyễn Tất Thành lấy tên Nguyễn Ái Quốc vào thời gian nào?",
    "options": [
      "18/6/1919",
      "18/6/1917",
      "18/6/1920",
      "18/6/1918"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"18/6/1919\""
  },
  {
    "question": "Sự ra đời của Đảng Cộng sản Việt Nam với Cương lĩnh chính trị đầu tiên của Đảng có ý nghĩa như thế nào đối với cách mạng Việt Nam?",
    "options": [
      "Chỉ ra con đường xây dựng chủ nghĩa xã hội ở Việt Nam.",
      "Chấm dứt chế độ phong kiến Việt Nam.",
      "Chấm dứt cuộc khủng hoảng về đường lối cứu nước và tổ chức lãnh đạo cách mạng Việt Nam cuối thế kỷ XIX đầu thế kỷ XX.",
      "Tìm thấy con đường cách mạng vô sản."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Chấm dứt cuộc khủng hoảng về đường lối cứu nước và tổ chức lãnh đạo cách mạng Việt Nam cuối thế kỷ XIX đầu thế kỷ XX.\""
  },
  {
    "question": "Luận điểm: “Luận cương của V. I. Lênin làm cho tôi rất cảm động, phấn khởi, sáng tỏ, tin tưởng biết bao. Tôi vui mừng đến phát khóc lên. Ngồi một mình trong buồng mà tôi nói to lên như đang nói trước quần chúng đông đảo: hỡi đồng bào bị đọa đày đau khổ? Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng của chúng ta” được trích từ tác phẩm nào của Hồ Chí Minh?",
    "options": [
      "Con đường dẫn tôi đến với chủ nghĩa Lênin.",
      "Lênin vĩ đại.",
      "Cách mạng Tháng Mười và con đường giải phóng dân tộc.",
      "Đời hoạt động của Hồ Chủ tịch."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Con đường dẫn tôi đến với chủ nghĩa Lênin.\""
  },
  {
    "question": "Luận điểm: “Bây giờ học thuyết nhiều, chủ nghĩa nhiều, nhưng chủ nghĩa chân chính nhất, chắc chắn nhất, cách mệnh nhất là chủ nghĩa Lênin” được thể hiện trong tác phẩm nào của Hồ Chí Minh?",
    "options": [
      "Đời hoạt động của Hồ Chủ tịch.",
      "Cách mạng Tháng Mười và con đường giải phóng dân tộc.",
      "Con đường dẫn tôi đến với chủ nghĩa Lênin.",
      "Đường Kách mệnh."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Đường Kách mệnh.\""
  },
  {
    "question": "Khi thực dân Pháp xâm lược Việt Nam, mâu thuẫn cơ bản chi phối đời sống xã hội Việt Nam lúc bấy giờ là mâu thuẫn nào?",
    "options": [
      "Mâu thuẫn giữa công nhân, nông dân và thực dân Pháp.",
      "Mâu thuẫn giữa nông dân và địa chủ phong kiến.",
      "Mâu thuẫn giữa công nhân và tư sản.",
      "Mâu thuẫn giữa toàn thể dân tộc Việt Nam và thực dân Pháp xâm lược cùng bọn tay sai."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Mâu thuẫn giữa toàn thể dân tộc Việt Nam và thực dân Pháp xâm lược cùng bọn tay sai.\""
  },
  {
    "question": "Cơ sở lý luận nào có vai trò quyết định tới việc hình thành tư tưởng Hồ Chí Minh?",
    "options": [
      "Chủ nghĩa Mác - Lênin.",
      "Giá trị truyền thống của dân tộc Việt Nam.",
      "Giá trị văn hóa phương Tây.",
      "Giá trị văn hóa phương Đông."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Chủ nghĩa Mác - Lênin.\""
  },
  {
    "question": "Một trong những nhân tố chủ quan hình thành nên tư tưởng Hồ Chí Minh là?",
    "options": [
      "Bối cảnh lịch sử Việt Nam cuối thế kỷ XIX đầu thế kỷ XX.",
      "Gia đình và quê hương Hồ Chí Minh.",
      "Khả năng tư duy và trí tuệ Hồ Chí Minh.",
      "Giá trị truyền thống dân tộc."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Khả năng tư duy và trí tuệ Hồ Chí Minh.\""
  },
  {
    "question": "Chí sĩ yêu nước Phan Bội Châu khởi xướng phong trào nào sau đây?",
    "options": [
      "Duy tân.",
      "Đông du.",
      "Chống đi phu, chống thu thuế.",
      "Đông kinh nghĩa thục."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Đông du.\""
  },
  {
    "question": "Nguyễn Ái Quốc hoạt động tại Quảng Châu, Trung Quốc vào thời gian nào?",
    "options": [
      "1923 - 1924",
      "1924 - 1927",
      "1927 - 1930",
      "1921 - 1923"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"1924 - 1927\""
  },
  {
    "question": "Tác phẩm “Bản án chế độ thực dân Pháp của Hồ Chí Minh được xuất bản năm nào”?",
    "options": [
      "1921",
      "1927",
      "1925",
      "1923"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"1925\""
  }
];

const RAW_QUESTIONS_HCM_P2 = [
  {
    "question": "Theo tư tưởng Hồ Chí Minh, cách mạng giải phóng dân tộc muốn giành thắng lợi phải do ai lãnh đạo?",
    "options": [
      "Đảng Cộng sản.",
      "Tầng lớp trí thức.",
      "Giai cấp nông dân.",
      "Công đoàn."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Đảng Cộng sản.\""
  },
  {
    "question": "Hình thức của bạo lực cách mạng là gì?",
    "options": [
      "Đấu tranh vũ trang.",
      "Ngoại giao, đàm phán.",
      "Đấu tranh chính trị.",
      "Kết hợp đấu tranh vũ trang và đấu tranh chính trị."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Kết hợp đấu tranh vũ trang và đấu tranh chính trị.\""
  },
  {
    "question": "Theo Hồ Chí Minh, lực lượng của cách mạng giải phóng dân tộc dựa trên nền tảng nào?",
    "options": [
      "Tầng lớp trí thức.",
      "Giai cấp công nhân.",
      "Giai cấp nông dân.",
      "Liên minh công - nông."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Liên minh công - nông.\""
  },
  {
    "question": "Theo tư tưởng Hồ Chí Minh, độc lập dân tộc phải gắn với những nội dung nào sau đây?",
    "options": [
      "Gắn với tự do và hạnh phúc của nhân dân.",
      "Gắn với hạnh phúc của nhân dân.",
      "Gắn với tự do của nhân dân.",
      "Gắn với quyền con người."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Gắn với tự do và hạnh phúc của nhân dân.\""
  },
  {
    "question": "Theo Hồ Chí Minh, đặc trưng nổi bật về mặt kinh tế của chủ nghĩa xã hội là gì?",
    "options": [
      "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.",
      "Khoa học kỹ thuật phát triển cao.",
      "Làm theo năng lực, hưởng theo nhu cầu.",
      "Có cơ cấu kinh tế công – nông nghiệp hợp lý."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.\""
  },
  {
    "question": "Theo tư tưởng Hồ Chí Minh, động lực quyết định nhất của chủ nghĩa xã hội là gì?",
    "options": [
      "Nguồn tài nguyên, đất đai.",
      "Cơ sở vật chất - kỹ thuật hiện có.",
      "Con người.",
      "Sự hợp tác quốc tế."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Con người.\""
  },
  {
    "question": "Theo Hồ Chí Minh, mục tiêu về kinh tế của chủ nghĩa xã hội ở Việt Nam là gì?",
    "options": [
      "Nền kinh tế hiện đại.",
      "Nền kinh tế phát triển cao với khoa học kỹ thuật tiên tiến.",
      "Nền kinh tế phát triển cao với công nghiệp hiện đại.",
      "Nền kinh tế phát triển cao với công nghiệp và nông nghiệp hiện đại, khoa học và kỹ thuật tiên tiến."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Nền kinh tế phát triển cao với công nghiệp và nông nghiệp hiện đại, khoa học và kỹ thuật tiên tiến.\""
  },
  {
    "question": "Theo Hồ Chí Minh, mục tiêu về quan hệ xã hội của chủ nghĩa xã hội ở Việt Nam được thể hiện như thế nào?",
    "options": [
      "Đảm bảo dân chủ.",
      "Đảm bảo có quan hệ xã hội lành mạnh, tốt đẹp.",
      "Đảm bảo dân chủ, công bằng, văn minh.",
      "Đảm bảo công bằng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Đảm bảo dân chủ, công bằng, văn minh.\""
  },
  {
    "question": "Theo Hồ Chí Minh, mục tiêu về chính trị của chủ nghĩa xã hội ở Việt Nam là gì?",
    "options": [
      "Nông dân vươn lên nắm quyền lãnh đạo.",
      "Phải xây dựng được chế độ dân chủ.",
      "Đảm bảo quyền tham gia hoạt động chính trị của nhân dân.",
      "Trí thức lãnh đạo."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Phải xây dựng được chế độ dân chủ.\""
  },
  {
    "question": "Theo Hồ Chí Minh, đặc điểm lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là gì?",
    "options": [
      "Từ một nước tư bản đi lên chủ nghĩa xã hội",
      "Từ một nước phong kiến đi lên chủ nghĩa xã hội",
      "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không phải trải qua giai đoạn phát triển tư bản chủ nghĩa",
      "Từ một nước nông nghiệp đi lên chủ nghĩa xã hội"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không phải trải qua giai đoạn phát triển tư bản chủ nghĩa\""
  },
  {
    "question": "Theo Hồ Chí Minh, để đảm bảo độc lập dân tộc gắn liền với chủ nghĩa xã hội, phải dựa trên những điều kiện nào?",
    "options": [
      "Kinh tế và chính trị",
      "Vai trò lãnh đạo của Đảng và sức mạnh của quần chúng nhân dân.",
      "Vai trò lãnh đạo của Đảng Cộng sản, củng cố tăng cường khối đại đoàn kết dân tộc và đoàn kết với cách mạng thế giới.",
      "Vai trò lãnh đạo của Đảng, sức mạnh của nhân dân và phát huy truyền thống dân tộc."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Vai trò lãnh đạo của Đảng Cộng sản, củng cố tăng cường khối đại đoàn kết dân tộc và đoàn kết với cách mạng thế giới.\""
  },
  {
    "question": "Luận điểm: “Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản” nói lên nội dung gì?",
    "options": [
      "Cách mạng giải phóng dân tộc phụ thuộc vào cách mạng vô sản.",
      "Cách mạng giải phóng dân tộc không có mối liên quan đến cách mạng vô sản.",
      "Cách mạng giải phóng dân tộc phải đi theo con đường cách mạng vô sản.",
      "Cách mạng giải phóng dân tộc có quan hệ mật thiết với cách mạng vô sản."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Cách mạng giải phóng dân tộc phải đi theo con đường cách mạng vô sản.\""
  },
  {
    "question": "Khi nghiên cứu về cách mạng tư sản Mỹ (1776) và cách mạng tư sản Pháp (1789), Hồ Chí Minh xác định đó là những cuộc cách mạng như thế nào?",
    "options": [
      "Không thành công.",
      "Thắng lợi.",
      "Không đến nơi.",
      "Chưa trọn vẹn."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Không đến nơi.\""
  },
  {
    "question": "Chủ tịch Hồ Chí Minh ra lời kêu gọi toàn quốc kháng chiến “Thà hy sinh tất cả chứ không chịu mất nước, không chịu làm nô lệ” vào thời điểm nào?",
    "options": [
      "Đêm ngày 19/12/1946.",
      "Ngày 25/11/1946.",
      "Ngày 20/12/1946.",
      "Đêm ngày 18/9/1946."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Đêm ngày 19/12/1946.\""
  },
  {
    "question": "Luận điểm: “Tôi chỉ có một sự ham muốn, ham muốn tột bậc là làm sao cho nước ta được hoàn toàn độc lập, dân ta hoàn toàn được tự do, đồng bào ai cũng có cơm ăn, áo mặc, ai cũng được học hành” được Hồ Chí Minh nói vào thời gian nào?",
    "options": [
      "19/05/1960",
      "19/05/1969",
      "21/01/1946",
      "19/05/1954"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"21/01/1946\""
  },
  {
    "question": "Đảng Cộng sản Việt Nam ra đời vào ngày, tháng, năm nào, tại đâu?",
    "options": [
      "Ngày 03/02/1929 tại Tân Trào - Việt Nam.",
      "Ngày 03/2/1930 tại Hương Cảng - Trung Quốc.",
      "Ngày 26/3/1931 tại Hương Cảng - Trung Quốc.",
      "Ngày 03/02/1929 tại Pắc Pó - Việt Nam."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Ngày 03/2/1930 tại Hương Cảng - Trung Quốc.\""
  },
  {
    "question": "Theo tư tưởng Hồ Chí Minh, đảng là đạo đức có nghĩa là:",
    "options": [
      "Đảng viên phải có lòng yêu thương nhân dân.",
      "Đội ngũ đảng viên luôn phải thấm nhuần đạo đức cách mạng, ra sức tu dưỡng, rèn luyện, suốt đời phấn đấu cho lợi ích của dân, của nước.",
      "Mục đích hoạt động của Đảng là nâng cao đời sống nhân dân.",
      "Đảng phải thường xuyên tự chỉnh đốn, tự đổi mới."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Đội ngũ đảng viên luôn phải thấm nhuần đạo đức cách mạng, ra sức tu dưỡng, rèn luyện, suốt đời phấn đấu cho lợi ích của dân, của nước.\""
  },
  {
    "question": "Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam ra đời dựa quy luật nào?",
    "options": [
      "Phong trào công nhân.",
      "Phong trào yêu nước.",
      "Chủ nghĩa Mác - Lênin thâm nhập vào phong trào công nhân và phong trào yêu nước.",
      "Chủ nghĩa Mác - Lê nin."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Chủ nghĩa Mác - Lênin thâm nhập vào phong trào công nhân và phong trào yêu nước.\""
  },
  {
    "question": "Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam phải lấy học thuyết nào làm nền tảng?",
    "options": [
      "Chủ nghĩa xã hội không tưởng thế kỷ XIX.",
      "Tư tưởng các nhà khai sáng Pháp.",
      "Chủ nghĩa Mác - Lênin.",
      "Học thuyết Tam dân."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Chủ nghĩa Mác - Lênin.\""
  },
  {
    "question": "Theo Hồ Chí Minh, mục đích hoạt động của Đảng là gì?",
    "options": [
      "Lãnh đạo cách mạng văn hóa.",
      "Lãnh đạo cách mạng ruộng đất.",
      "Lãnh đạo cách mạng giải phóng dân tộc, giải phóng xã hội, giải phóng giai cấp, giải phóng con người.",
      "Lãnh đạo cách mạng giải phóng dân tộc."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Lãnh đạo cách mạng giải phóng dân tộc, giải phóng xã hội, giải phóng giai cấp, giải phóng con người.\""
  },
  {
    "question": "Một trong những nguyên tắc hoạt động của Đảng theo Hồ Chí Minh, đó là:",
    "options": [
      "Tự phê bình.",
      "Phê bình.",
      "Phục tùng cấp trên.",
      "Tự phê bình và phê bình."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Tự phê bình và phê bình.\""
  },
  {
    "question": "Theo tư tưởng Hồ Chí Minh, nhà nước vì dân là nhà nước?",
    "options": [
      "Do nhân dân làm chủ.",
      "Do dân bầu ra.",
      "Nhà nước phục vụ lợi ích và nguyện vọng của nhân dân.",
      "Nhà nước do Đảng Cộng sản lãnh đạo."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Nhà nước phục vụ lợi ích và nguyện vọng của nhân dân.\""
  },
  {
    "question": "Theo Hồ Chí Minh, để có nhà nước trong sạch, vững mạnh, cần phải làm gì?",
    "options": [
      "Xây dựng hệ thống pháp luật đầy đủ",
      "Kiểm soát quyền lực nhà nước; phòng chống tiêu cực trong nhà nước.",
      "Nhân dân kiểm soát quyền lực nhà nước.",
      "Phòng chống tiêu cực."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Kiểm soát quyền lực nhà nước; phòng chống tiêu cực trong nhà nước.\""
  },
  {
    "question": "Một trong những nguyên tắc hoạt động của Đảng theo Hồ Chí Minh, đó là:",
    "options": [
      "Phát huy dân chủ.",
      "Kỷ luật nghiêm minh, tự giác.",
      "Lắng nghe ý kiến quần chúng.",
      "Xử phạt nghiêm minh."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Kỷ luật nghiêm minh, tự giác.\""
  },
  {
    "question": "Chọn đáp án trả lời đúng cho câu hỏi: Những căn bệnh nào trong bộ máy nhà nước mà Hồ Chí Minh gọi là “giặc nội xâm”?",
    "options": [
      "Cậy thế, hủ hoá, tư túng.",
      "Đặc quyền, đặc lợi.",
      "Trái phép, chia rẽ, kiêu ngạo.",
      "Tham ô, lãng phí, quan liêu."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Tham ô, lãng phí, quan liêu.\""
  },
  {
    "question": "Một nhà nước pháp quyền theo Hồ Chí Minh phải là:",
    "options": [
      "Một nhà nước của dân, do dân, vì dân.",
      "Một nhà nước hợp hiến, hợp pháp.",
      "Một nhà nước thống nhất, có chủ quyền.",
      "Một nhà nước không có tiêu cực, không có đặc quyền, đặc lợi."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Một nhà nước hợp hiến, hợp pháp.\""
  },
  {
    "question": "“Việc gì lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh. Chúng ta phải yêu dân, kính dân thì dân mới yêu ta, kính ta” Những câu trên trích từ bài viết nào của Hồ Chí Minh?",
    "options": [
      "Bài phát biểu tại kỳ họp đầu tiên của Quốc hội khoá I, năm 1946.",
      "Thư gửi các đồng chí tỉnh nhà.",
      "Thư gửi các đồng chí Bắc Bộ.",
      "Thư gửi ủy ban nhân dân các kỳ, tỉnh, huyện và làng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Thư gửi ủy ban nhân dân các kỳ, tỉnh, huyện và làng.\""
  },
  {
    "question": "Ở cương vị chủ tịch nước, Hồ Chí Minh đã ký bao nhiêu đạo luật để xây dựng nền pháp lý ở Việt Nam",
    "options": [
      "10",
      "16",
      "14",
      "12"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"16\""
  },
  {
    "question": "Đảng ta có tên gọi là Đảng Lao động Việt Nam từ khi nào?",
    "options": [
      "Năm 1951.",
      "Năm 1945.",
      "Năm 1930.",
      "Năm 1960."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Năm 1951.\""
  },
  {
    "question": "Theo Hồ Chí Minh, trong công tác xây dựng nhà nước cần xác định rõ cơ chế phân công, phối hợp thi hành quyền lực giữa các cơ quan nào?",
    "options": [
      "Lập pháp, hành pháp và tư pháp.",
      "Hành pháp và tư pháp.",
      "Lập pháp và hành pháp.",
      "Lập pháp và tư pháp."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Lập pháp, hành pháp và tư pháp.\""
  },
  {
    "question": "Theo Hồ Chí Minh, mối quan hệ giữa cách mạng giải phóng dân tộc và cách mạng vô sản ở chính quốc được thể hiện như thế nào?",
    "options": [
      "Cách mạng giải phóng dân tộc và cách mạng vô sản ở chính quốc không liên quan gì tới nhau.",
      "Cách mạng giải phóng dân tộc phải phụ thuộc vào cách mạng vô sản ở chính quốc.",
      "Cách mạng giải phóng dân tộc cần chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc.",
      "Cách mạng vô sản ở chính quốc phụ thuộc vào cách mạng thuộc địa."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Cách mạng giải phóng dân tộc cần chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc.\""
  },
  {
    "question": "Theo tư tưởng Hồ Chí Minh, độc lập dân tộc bao gồm mấy nội dung cơ bản?",
    "options": [
      "5",
      "3",
      "4",
      "2"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"4\""
  },
  {
    "question": "Theo Hồ Chí Minh, trong thời kỳ quá độ lên chủ nghĩa xã hội, chúng ta cần thực hiện những nhiệm vụ gì?",
    "options": [
      "Nhiệm vụ văn hóa.",
      "Nhiệm vụ chính trị.",
      "Nhiệm vụ chính trị, kinh tế, văn hóa và quan hệ xã hội.",
      "Nhiệm vụ kinh tế."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Nhiệm vụ chính trị, kinh tế, văn hóa và quan hệ xã hội.\""
  },
  {
    "question": "“Trong thế giới bây giờ chỉ có cách mệnh Nga là đã thành công và thành công đến nơi…”. Luận điểm này của Hồ Chí Minh khẳng định điều gì?",
    "options": [
      "Tính quần chúng của cách mạng vô sản.",
      "Tính nhân văn của cách mạng vô sản.",
      "Tính triệt để của cách mạng vô sản.",
      "Tính lịch sử của cách mạng vô sản."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Tính triệt để của cách mạng vô sản.\""
  },
  {
    "question": "Mục tiêu và con đường cách mạng Chí Minh đã lựa chọn là gì?",
    "options": [
      "Độc lập dân tộc.",
      "Giải phóng dân tộc.",
      "Độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
      "Giải phóng giai cấp."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Độc lập dân tộc gắn liền với chủ nghĩa xã hội.\""
  },
  {
    "question": "Theo quan điểm Hồ Chí Minh, mối quan hệ giữa độc lập dân tộc và chủ nghĩa xã hội được thể hiện như thế nào?",
    "options": [
      "Độc lập dân tộc là cơ sở, tiền đề để tiến lên chủ nghĩa xã hội.",
      "Chủ nghĩa xã hội là cơ sở để giành độc lập dân tộc.",
      "Độc lập dân tộc là điều kiện đảm bảo cho quá trình xây dựng chủ nghĩa xã hội.",
      "Độc lập dân tộc và chủ nghĩa xã hội là 2 phạm trù riêng biệt không liên quan đến nhau."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Độc lập dân tộc là cơ sở, tiền đề để tiến lên chủ nghĩa xã hội.\""
  },
  {
    "question": "Hồ Chí Minh khẳng định: Chỉ có trong chế độ xã hội chủ nghĩa, con người mới được thực hiện điều gì?",
    "options": [
      "Thỏa mãn nhu cầu vật chất và nhu cầu tinh thần.",
      "Có điều kiện để phát huy năng lực, trí tuệ của bản thân.",
      "Có điều kiện để cải thiện đời sống riêng của mình, phát huy tính cách và sở trường riêng của mình.",
      "Có điều kiện để thực hiện quyền làm chủ, được quyền sở hữu tư liệu sản xuất."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Có điều kiện để cải thiện đời sống riêng của mình, phát huy tính cách và sở trường riêng của mình.\""
  },
  {
    "question": "“Công nông là gốc cách mạng, còn học trò, nhà buôn nhỏ, điền chủ nhỏ là bầu bạn cách mệnh công nông” được Hồ Chí minh đề cập đến điều gì?",
    "options": [
      "Mục tiêu của cách mạng.",
      "Nhiệm vụ của cách mạng.",
      "Lực lượng cách mạng.",
      "Phương pháp cách mạng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Lực lượng cách mạng.\""
  },
  {
    "question": "Quốc hội khóa I nước Việt Nam dân chủ cộng hòa họp phiên đầu tiên vào ngày bao nhiêu?",
    "options": [
      "03/02/1946",
      "02/03/1946",
      "06/01/1946",
      "05/03/1946"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"02/03/1946\""
  },
  {
    "question": "Nhà nước của nhân dân theo tư tưởng Hồ Chí Minh nghĩa là:",
    "options": [
      "Mọi công việc nhà nước đều do dân quyết định.",
      "Chăm lo mọi mặt đời sống của nhân dân.",
      "Mọi quyền lực nhà nước và trong xã hội đều thuộc về nhân dân.",
      "Đại biểu nhà nước do dân bầu ra."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Mọi quyền lực nhà nước và trong xã hội đều thuộc về nhân dân.\""
  },
  {
    "question": "Khi mới thành lập, Đảng ta có tên gọi là gì?",
    "options": [
      "Đảng Cộng sản Đông Dương.",
      "Đông Dương cộng sản Đảng.",
      "Đảng Lao động Việt Nam.",
      "Đảng Cộng sản Việt Nam."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Đảng Cộng sản Việt Nam.\""
  },
  {
    "question": "Quan điểm: “Đảng ta là đạo đức, là văn minh” được Hồ Chí Minh trình bày trong tác phẩm nào?",
    "options": [
      "Diễn văn đọc tại lễ kỷ niệm 30 năm ngày thành lập Đảng.",
      "Diễn văn khai mạc Đại hội đại biểu toàn quốc lần thứ III của Đảng.",
      "Báo cáo chính trị tại Đại hội đại biểu toàn quốc lần thứ II của Đảng.",
      "Sách lược vắn tắt của Đảng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Diễn văn đọc tại lễ kỷ niệm 30 năm ngày thành lập Đảng.\""
  },
  {
    "question": "Theo quan điểm Hồ Chí Minh, chủ nghĩa xã hội thuộc giai đoạn phát triển nào của hình thái kinh tế - xã hội Cộng sản chủ nghĩa?",
    "options": [
      "Giai đoạn thấp.",
      "Giai đoạn giữa.",
      "Giai đoạn cao.",
      "Giai đoạn trước."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Giai đoạn thấp.\""
  },
  {
    "question": "Theo quan điểm Hồ Chí Minh, có mấy nguyên tắc xây dựng chủ nghĩa xã hội trong thời kỳ quá độ?",
    "options": [
      "3",
      "4",
      "5",
      "2"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"4\""
  },
  {
    "question": "Theo Hồ Chí Minh, đặc điểm nổi bật trong quan hệ xã hội của chủ nghĩa xã hội là gì?",
    "options": [
      "Đảm bảo sự công bằng, hợp lý trong các quan hệ xã hội.",
      "Con người được thỏa mãn các nhu cầu xã hội.",
      "Con người được thỏa mãn các nhu cầu văn hóa.",
      "Đảm bảo đời sống vật chất được đầy đủ."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Đảm bảo sự công bằng, hợp lý trong các quan hệ xã hội.\""
  },
  {
    "question": "Theo tư tưởng Hồ Chí Minh, nguyên tắc phân phối chủ yếu trong chủ nghĩa xã hội là gì?",
    "options": [
      "Làm ít, hưởng vừa đủ.",
      "Phân phối bình quân cho tất cả mọi người.",
      "Làm theo năng lực, hưởng theo nhu cầu.",
      "Làm theo năng lực, hưởng theo lao động."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Làm theo năng lực, hưởng theo lao động.\""
  },
  {
    "question": "“Bất kì đàn ông, đàn bà, bất kì người già, người trẻ, không chia tôn giáo, đảng phái, dân tộc. Hễ là người Việt Nam thì phải đứng lên đánh thực dân Pháp để cứu Tổ Quốc”. Luận điểm trên được trích trong tác phẩm nào của Hồ Chí Minh?",
    "options": [
      "Lời kêu gọi toàn quốc kháng chiến.",
      "Bản án chế độ thực dân Pháp.",
      "Đường Cách mệnh.",
      "Tuyên ngôn độc lập."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Lời kêu gọi toàn quốc kháng chiến.\""
  },
  {
    "question": "Hồ Chí Minh khẳng định: Đảng cộng sản giống như:",
    "options": [
      "Người dẫn đường cho cách mạng Việt Nam.",
      "Người lái đò đưa cách mạng Việt Nam tới bến bờ thắng lợi.",
      "Người cầm lái cho cách mạng Việt Nam.",
      "Người chỉ huy cách mạng Việt Nam."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Người cầm lái cho cách mạng Việt Nam.\""
  },
  {
    "question": "Một trong những đặc điểm của nhà nước pháp quyền theo Hồ Chí Minh là:",
    "options": [
      "Nhà nước phục vụ lợi ích của nhân dân.",
      "Nhà nước do nhân dân bầu ra.",
      "Nhà nước thượng tôn pháp luật.",
      "Nhà nước lấy đạo đức làm nền tảng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Nhà nước thượng tôn pháp luật.\""
  },
  {
    "question": "Theo quan điểm Hồ Chí Minh, nhà nước ta mang bản chất của:",
    "options": [
      "Toàn dân tộc.",
      "Giai cấp công nhân.",
      "Giai cấp công – nông.",
      "Giai cấp nông dân."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Giai cấp công nhân.\""
  },
  {
    "question": "Theo tư tưởng Hồ Chí Minh, Đảng Cộng sản Việt Nam phải lấy chủ nghĩa Mác - Lênin “làm cốt”, nghĩa là:",
    "options": [
      "Đảng Cộng sản Việt Nam phải lấy chủ nghĩa Mác - Lênin làm chủ trương, đường lối.",
      "Đảng Cộng sản Việt Nam phải lấy chủ nghĩa Mác - Lênin làm nền tảng tư tưởng.",
      "Đảng Cộng sản Việt Nam phải căn cứ hoàn toàn vào chủ nghĩa Mác - Lênin để lãnh đạo cách mạng.",
      "Đảng Cộng sản Việt Nam phải lấy chủ nghĩa Mác - Lênin làm học thuyết của Đảng."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Đảng Cộng sản Việt Nam phải lấy chủ nghĩa Mác - Lênin làm nền tảng tư tưởng.\""
  },
  {
    "question": "Theo tư tưởng Hồ Chí Minh, luận điểm: Đảng Cộng sản Việt Nam là sản phẩm của sự kết hợp chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước là:",
    "options": [
      "Xác định bản chất của Đảng.",
      "Xác định nhiệm vụ của Đảng.",
      "Xác định nguồn gốc ra đời của Đảng.",
      "Xác định năng lực của Đảng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Xác định nguồn gốc ra đời của Đảng.\""
  }
];

const RAW_QUESTIONS_HCM_P3 = [
  {
    "question": "Theo Hồ Chí Minh, lực lượng đoàn kết quốc tế bao gồm?",
    "options": [
      "Phong trào công nhân quốc tế và các dân tộc bị áp bức.",
      "Phong trào cộng sản và công nhân quốc tế, phong trào đấu tranh giải phóng dân tộc và phong trào hòa bình, dân chủ thế giới.",
      "Phong trào cộng sản và công nhân quốc tế.",
      "Phong trào cộng sản và công nhân quốc tế, phong trào đấu tranh giải phóng dân tộc."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Phong trào cộng sản và công nhân quốc tế, phong trào đấu tranh giải phóng dân tộc và phong trào hòa bình, dân chủ thế giới.\""
  },
  {
    "question": "Năm 1941, Mặt trận dân tộc thống nhất có tên gọi là gì?",
    "options": [
      "Mặt trận dân chủ Đông Dương.",
      "Mặt trận Việt Minh.",
      "Hội phản đế đồng minh.",
      "Mặt trận nhân dân phản đế Đông Dương."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Mặt trận Việt Minh.\""
  },
  {
    "question": "Theo tư tưởng Hồ Chí Minh, chủ thể của khối đại đoàn kết là ai?",
    "options": [
      "Toàn thể nhân dân Việt Nam.",
      "Giai cấp công nhân.",
      "Giai cấp nông dân.",
      "Tầng lớp trí thức."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Toàn thể nhân dân Việt Nam.\""
  },
  {
    "question": "Theo Hồ Chí Minh, sự cần thiết thực hiện đoàn kết quốc tế xuất phát từ lý do nào sau đây?",
    "options": [
      "Đoàn kết quốc tế nhằm phát huy nguồn lực con người.",
      "Đoàn kết quốc tế nhằm kết hợp sức mạnh thời đại.",
      "Đoàn kết quốc tế nhằm phát huy sức mạnh dân tộc.",
      "Đoàn kết quốc tế nhằm phát huy sức mạnh dân tộc và sức mạnh thời đại, tạo sức mạnh tổng hợp cho cách mạng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Đoàn kết quốc tế nhằm phát huy sức mạnh dân tộc và sức mạnh thời đại, tạo sức mạnh tổng hợp cho cách mạng.\""
  },
  {
    "question": "Theo Hồ Chí Minh, đại đoàn kết dân tộc có ý nghĩa thế nào trong sự nghiệp cách mạng?",
    "options": [
      "Rất quan trọng.",
      "Là vấn đề có ý nghĩa sách lược.",
      "Là vấn đề có ý nghĩa chiến lược.",
      "Đặc biệt quan trọng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Là vấn đề có ý nghĩa chiến lược.\""
  },
  {
    "question": "Nền tảng của khối đại đoàn kết toàn dân tộc được Hồ Chí Minh xác định là những giai cấp, tầng lớp nào?",
    "options": [
      "Giai cấp công nhân và nông dân.",
      "Giai cấp nông dân và trí thức.",
      "Giai cấp công nhân và tầng lớp trí thức.",
      "Giai cấp công nhân, nông dân và trí thức."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Giai cấp công nhân, nông dân và trí thức.\""
  },
  {
    "question": "Theo tư tưởng Hồ Chí Minh, đoàn kết quốc tế dựa trên nguyên tắc nào sau đây?",
    "options": [
      "Phụ thuộc vào bên ngoài.",
      "Nguồn lực bên ngoài giữ vai trò quyết định.",
      "Vì lợi ích dân tộc.",
      "Độc lập, tự chủ."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Độc lập, tự chủ.\""
  },
  {
    "question": "Chọn phương án đúng theo tư tưởng Hồ Chí Minh:",
    "options": [
      "Mặt trận dân tộc thống nhất là nơi quy tụ mọi tổ chức và cá nhân yêu nước.",
      "Mặt trận dân tộc thống nhất là tổ chức của các đảng phái, nhân sĩ yêu nước.",
      "Mặt trận dân tộc thống nhất là tổ chức của giai cấp công nhân và nông dân.",
      "Mặt trận dân tộc thống nhất là tổ chức của các tầng lớp nhân dân."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Mặt trận dân tộc thống nhất là nơi quy tụ mọi tổ chức và cá nhân yêu nước.\""
  },
  {
    "question": "Theo quan điểm Hồ Chí Minh, mối quan hệ giữa nội lực và ngoại lực được thể hiện như thế nào?",
    "options": [
      "Ngoại lực giữ vai trò quyết định nội lực.",
      "Nội lực giữ vai trò quyết định, ngoại lực chỉ phát huy tác dụng thông qua nội lực bên trong.",
      "Nội lực và ngoại lực không có mối quan hệ với nhau.",
      "Nội lực và ngoại lực giữ vị trí ngang nhau."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Nội lực giữ vai trò quyết định, ngoại lực chỉ phát huy tác dụng thông qua nội lực bên trong.\""
  },
  {
    "question": "Theo Hồ Chí Minh, sức mạnh của dân tộc là gì?",
    "options": [
      "Sức mạnh nguồn lực con người.",
      "Sức mạnh vật chất.",
      "Sức mạnh tinh thần.",
      "Sức mạnh tổng hợp của các yếu tố vật chất và tinh thần."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Sức mạnh tổng hợp của các yếu tố vật chất và tinh thần.\""
  },
  {
    "question": "Một trong những nguyên tắc xây dựng và hoạt động của Mặt trận dân tộc thống nhất là:",
    "options": [
      "Tự phê bình và phê bình.",
      "Hiệp thương dân chủ.",
      "Tập thể lãnh đạo, cá nhân phụ trách.",
      "Tập trung dân chủ."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Hiệp thương dân chủ.\""
  },
  {
    "question": "Trong kháng chiến chống Pháp và chống Mỹ, Hồ Chí Minh đã tranh thủ sự ủng hộ của quốc tế bằng việc thành lập Mặt trận nào?",
    "options": [
      "Mặt trận độc lập đồng minh.",
      "Mặt trận Tổ quốc Việt Nam.",
      "Mặt trận nhân dân thế giới đoàn kết với Việt Nam chống đế quốc xâm lược.",
      "Mặt trận quốc tế."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án chính xác: \"Mặt trận nhân dân thế giới đoàn kết với Việt Nam chống đế quốc xâm lược.\""
  },
  {
    "question": "Đối với Phong trào cộng sản và công nhân quốc tế; Hồ Chí Minh đã giương cao ngọn cờ gì để xây dựng khối đoàn kết quốc tế?",
    "options": [
      "Độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
      "Độc lập, tự do và quyền bình đẳng giữa các dân tộc.",
      "Hai bên cùng có lợi.",
      "Hòa bình trong công lý."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Độc lập dân tộc gắn liền với chủ nghĩa xã hội.\""
  },
  {
    "question": "Theo Hồ Chí Minh, mục đích của Đảng lao động Việt Nam có thể gồm trong 8 chữ, đó là?",
    "options": [
      "Đoàn kết toàn dân, phát triển kinh tế.",
      "Đoàn kết dân tộc, đoàn kết quốc tế.",
      "Đoàn kết toàn dân, xây dựng đất nước.",
      "Đoàn kết toàn dân, phụng sự tổ quốc."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Đoàn kết toàn dân, phụng sự tổ quốc.\""
  },
  {
    "question": "Đối với các dân tộc trên thế giới; Hồ Chí Minh đã giương cao ngọn cờ gì để xây dựng khối đoàn kết quốc tế?",
    "options": [
      "Độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
      "Độc lập, tự do và quyền bình đẳng giữa các dân tộc.",
      "Hòa bình trong công lý.",
      "Hai bên cùng có lợi."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Độc lập, tự do và quyền bình đẳng giữa các dân tộc.\""
  },
  {
    "question": "Vận dụng tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế trong giai đoạn hiện nay, chúng ta cần phải làm gì?",
    "options": [
      "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh.",
      "Tuyên truyền tư tưởng Hồ Chí Minh về đoàn kết dân tộc và đoàn kết quốc tế.",
      "Đấu tranh chống các tệ nạn và tiêu cực trong đời sống xã hội.",
      "Quán triệt tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế trong hoạch định chủ trương, đường lối của Đảng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Quán triệt tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế trong hoạch định chủ trương, đường lối của Đảng.\""
  },
  {
    "question": "Luận điểm: “Đại đoàn kết toàn dân tộc là đường lối chiến lược của cách mạng Việt Nam, là động lực và nguồn lực to lớn trong xây dựng và bảo vệ Tổ quốc” được khẳng định tại Đại hội lần thứ mấy của Đảng?",
    "options": [
      "Đại hội Đại biểu toàn quốc lần thứ XII.",
      "Đại hội Đại biểu toàn quốc lần thứ XIII.",
      "Đại hội Đại biểu toàn quốc lần thứ XI.",
      "Đại hội Đại biểu toàn quốc lần thứ X."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Đại hội Đại biểu toàn quốc lần thứ XII.\""
  },
  {
    "question": "Theo Hồ Chí Minh, trong quá trình xây dựng khối đại đoàn kết toàn dân cần phải:",
    "options": [
      "Đứng trên quan điểm của tầng lớp trí thức.",
      "Đứng trên quan điểm của giai cấp nông nhân để tập hợp đại đa số nhân dân lao động.",
      "Đứng trên quan điểm của Đảng Cộng sản.",
      "Đứng trên quan điểm giai cấp công nhân, giải quyết hài hòa mối quan hệ giai cấp - dân tộc để tập hợp lực lượng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Đứng trên quan điểm giai cấp công nhân, giải quyết hài hòa mối quan hệ giai cấp - dân tộc để tập hợp lực lượng.\""
  },
  {
    "question": "Khái niệm “nhân dân” trong tư tưởng Hồ Chí Minh bao gồm những ai?",
    "options": [
      "Gồm công nhân và nông dân.",
      "Gồm những người dân lao động Việt Nam.",
      "Gồm công - nông - trí thức.",
      "Gồm những người Việt Nam cụ thể và tập hợp đông đảo quần chúng nhân dân."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Gồm những người Việt Nam cụ thể và tập hợp đông đảo quần chúng nhân dân.\""
  },
  {
    "question": "Luận điểm: “Một dân tộc không tự lực cánh sinh mà cứ ngồi chờ dân tộc khác giúp đỡ thì không xứng đáng được độc lập” được nói vào thời gian nào?",
    "options": [
      "10/7/1954.",
      "10/7/1952.",
      "13/7/1954.",
      "13/7/1952."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"13/7/1952.\""
  },
  {
    "question": "Mặt trận dân tộc thống nhất được ra đời vào năm nào?",
    "options": [
      "1945.",
      "1930.",
      "1935.",
      "1954."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"1930.\""
  },
  {
    "question": "Mặt trận dân tộc thống nhất được xây dựng và hoạt động dựa trên nền tảng nào?",
    "options": [
      "Công nhân và nông dân.",
      "Nông dân và trí thức.",
      "Công nhân và trí thức.",
      "Công nhân, nông dân và trí thức đặt dưới sự lãnh đạo của Đảng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án chính xác: \"Công nhân, nông dân và trí thức đặt dưới sự lãnh đạo của Đảng.\""
  },
  {
    "question": "Hồ Chí Minh khẳng định, trong khối đại đoàn kết toàn dân tộc phải đặc biệt coi trọng yếu tố “hạt nhân”, đó là yếu tố nào?",
    "options": [
      "Đoàn kết trong tầng lớp trí thức.",
      "Đoàn kết, thống nhất trong Đảng.",
      "Đoàn kết trong lực lượng vũ trang.",
      "Đoàn kết trong quần chúng nhân dân."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án chính xác: \"Đoàn kết, thống nhất trong Đảng.\""
  },
  {
    "question": "Tháng 9/1947 trả lời nhà báo Mỹ S.Êli-Mâysi, Hồ Chí Minh khẳng định chính sách ngoại giao của Việt Nam là gì?",
    "options": [
      "Làm bạn với tất cả nước dân chủ và không gây thù oán với một ai.",
      "Làm bạn với các nước xã hội chủ nghĩa.",
      "Làm bạn với tất cả các nước trên thế giới.",
      "Làm bạn với các nước tư bản."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"Làm bạn với tất cả nước dân chủ và không gây thù oán với một ai.\""
  },
  {
    "question": "Khẩu hiệu chiến lược: “Vô sản tất cả các nước và các dân tộc bị áp bức đoàn kết lại” là của ai?",
    "options": [
      "V.I.Lênin.",
      "C.Mác.",
      "Hồ Chí Minh.",
      "Ph.Ăngghen."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án chính xác: \"V.I.Lênin.\""
  }
];

const ALL_HOCHIMINH_QUESTIONS = [
  ...RAW_QUESTIONS_HCM_P1,
  ...RAW_QUESTIONS_HCM_P2,
  ...RAW_QUESTIONS_HCM_P3
];

const EXAMS_DATA_HOCHIMINH = {
  1: {
    id: 1,
    code: "HCM-FULL",
    title: "Đề Thi 01 - Đề Tổng Hợp Toàn Diện (Full 113 Câu)",
    description: "Bộ đề trọn vẹn 113 câu hỏi trắc nghiệm bao quát toàn bộ 3 phần ôn tập môn Tư tưởng Hồ Chí Minh.",
    timePerQuestion: 25,
    questions: formatQuestionList(ALL_HOCHIMINH_QUESTIONS, "Câu")
  },
  2: {
    id: 2,
    code: "HCM-P1",
    title: "Đề Thi 02 - Phần 1: Khái Niệm, Cơ Sở & Quá Trình Hình Thành (36 Câu)",
    description: "Khái niệm tư tưởng HCM, phương pháp luận, cơ sở thực tiễn - lý luận và 5 thời kỳ hình thành, phát triển tư tưởng.",
    timePerQuestion: 25,
    questions: formatQuestionList(RAW_QUESTIONS_HCM_P1, "P1")
  },
  3: {
    id: 3,
    code: "HCM-P2",
    title: "Đề Thi 03 - Phần 2: Độc Lập Dân Tộc, CNXH, Đảng & Nhà Nước (48 Câu)",
    description: "Cách mạng giải phóng dân tộc, CNXH và thời kỳ quá độ, tư tưởng về Đảng Cộng sản Việt Nam và Nhà nước của dân, do dân, vì dân.",
    timePerQuestion: 25,
    questions: formatQuestionList(RAW_QUESTIONS_HCM_P2, "P2")
  },
  4: {
    id: 4,
    code: "HCM-P3",
    title: "Đề Thi 04 - Phần 3: Đại Đoàn Kết Dân Tộc & Đoàn Kết Quốc Tế (25 Câu)",
    description: "Chiến lược đại đoàn kết toàn dân tộc, Mặt trận dân tộc thống nhất, đoàn kết quốc tế và phương châm ngoại giao Hồ Chí Minh.",
    timePerQuestion: 25,
    questions: formatQuestionList(RAW_QUESTIONS_HCM_P3, "P3")
  },
  5: {
    id: 5,
    code: "HCM-VIP",
    title: "Đề Thi 05 - Thi Thử Cuối Kỳ Chuẩn (113 Câu Xáo Trộn)",
    description: "Đề thi thử cuối kỳ chuẩn hóa bao quát toàn bộ ngân hàng câu hỏi giúp phản xạ nhanh và ghi nhớ vững chắc 100%.",
    timePerQuestion: 25,
    questions: formatQuestionList(ALL_HOCHIMINH_QUESTIONS, "Đề Thi")
  }
};

// =========================================================
// REGISTRY HỆ THỐNG ĐA MÔN HỌC
// =========================================================
const SUBJECTS_DATA = {
  hochiminh: {
    id: 'hochiminh',
    name: 'Tư Tưởng Hồ Chí Minh',
    shortName: 'Tư Tưởng HCM',
    fullName: 'Tư Tưởng Hồ Chí Minh',
    englishName: 'Ho Chi Minh Ideology',
    icon: 'fa-solid fa-star',
    secondaryIcon: 'fa-solid fa-flag',
    accentColor: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #f59e0b 50%, #dc2626 100%)',
    badgeText: 'Học Phần: Tư Tưởng Hồ Chí Minh',
    heroTitle: 'Ôn Luyện Đề Thi',
    heroSubtitle: 'Tư Tưởng Hồ Chí Minh',
    heroDesc: 'Trọn bộ 113 câu hỏi trắc nghiệm trọng tâm bao quát 3 phần: Cơ sở hình thành & phát triển, Độc lập dân tộc & CNXH, Đảng & Nhà nước, Đại đoàn kết dân tộc và quốc tế.',
    theoryTitle: 'Cẩm Nang Lý Thuyết Tư Tưởng Hồ Chí Minh',
    theoryDesc: 'Tóm tắt cốt lõi 3 phần học phần Tư Tưởng Hồ Chí Minh giúp ghi nhớ nhanh và nắm vững hệ thống quan điểm',
    theorySearchPlaceholder: 'Tìm kiếm luận điểm, mốc thời gian, tác phẩm, văn kiện Đại hội (Đại hội VII, Đại hội IX, 1911, Bản án chế độ...)...',
    theoryBannerTitle: 'Cẩm Nang Lý Thuyết 3 Phần',
    theoryBannerDesc: 'Khái niệm & cơ sở hình thành, Độc lập dân tộc & CNXH, Đảng & Nhà nước, Đại đoàn kết dân tộc & Đoàn kết quốc tế.',
    theoryData: THEORY_DATA_HOCHIMINH,
    chapters: [
      { id: 1, name: 'Phần 1: Khái niệm, Cơ sở & Quá trình hình thành', label: 'Phần 1', icon: 'fa-solid fa-landmark' },
      { id: 2, name: 'Phần 2: Độc lập dân tộc, CNXH, Đảng & Nhà nước', label: 'Phần 2', icon: 'fa-solid fa-flag' },
      { id: 3, name: 'Phần 3: Đại đoàn kết toàn dân tộc & Đoàn kết quốc tế', label: 'Phần 3', icon: 'fa-solid fa-users' }
    ],
    rawQuestions: {
      1: RAW_QUESTIONS_HCM_P1,
      2: RAW_QUESTIONS_HCM_P2,
      3: RAW_QUESTIONS_HCM_P3
    },
    allQuestions: ALL_HOCHIMINH_QUESTIONS,
    exams: EXAMS_DATA_HOCHIMINH,
    totalQuestionsCount: ALL_HOCHIMINH_QUESTIONS.length
  },

  startup: {
    id: 'startup',
    name: 'Khởi Nghiệp Kinh Doanh',
    shortName: 'Khởi Nghiệp',
    fullName: 'Khởi Nghiệp Kinh Doanh & Đổi Mới Sáng Tạo',
    englishName: 'Entrepreneurship & Innovation',
    icon: 'fa-solid fa-graduation-cap',
    secondaryIcon: 'fa-solid fa-lightbulb',
    accentColor: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    badgeText: 'Học Phần: Khởi Nghiệp Kinh Doanh',
    heroTitle: 'Ôn Tập Cuối Kỳ',
    heroSubtitle: 'Khởi Nghiệp Kinh Doanh',
    heroDesc: 'Hệ thống ôn luyện trắc nghiệm tương tác cao gồm đề thi tổng hợp, đề thi theo từng chương (Chương 1, 2, 3) kèm tổng hợp lý thuyết chi tiết.',
    theoryTitle: 'Tổng Hợp Lý Thuyết Khởi Nghiệp Kinh Doanh',
    theoryDesc: 'Tóm tắt trọng tâm 3 chương học phần Khởi Nghiệp Kinh Doanh & Đổi Mới Sáng Tạo',
    theorySearchPlaceholder: 'Tìm kiếm khái niệm, mô hình (Canvas, Design Thinking, Gassmann, Osterwalder, Start-up...)...',
    theoryBannerTitle: 'Ôn Tập Lý Thuyết 3 Chương',
    theoryBannerDesc: 'Bản chất khởi nghiệp, Cơ hội & Tư duy thiết kế (Design Thinking), Mô hình Canvas (BMC) và 55 mô hình Gassmann.',
    theoryData: THEORY_DATA_STARTUP,
    chapters: [
      { id: 1, name: 'Chương 1: Bản chất & Sáng tạo', label: 'Chương 1', icon: 'fa-solid fa-lightbulb' },
      { id: 2, name: 'Chương 2: Cơ hội & Design Thinking', label: 'Chương 2', icon: 'fa-solid fa-bullseye' },
      { id: 3, name: 'Chương 3: Mô hình BMC & Gassmann', label: 'Chương 3', icon: 'fa-solid fa-chart-pie' }
    ],
    rawQuestions: {
      1: RAW_QUESTIONS_CH1,
      2: RAW_QUESTIONS_CH2,
      3: RAW_QUESTIONS_CH3
    },
    allQuestions: ALL_STARTUP_QUESTIONS,
    exams: EXAMS_DATA_STARTUP,
    totalQuestionsCount: ALL_STARTUP_QUESTIONS.length
  },
  logistics: {
    id: 'logistics',
    name: 'English for Logistics',
    shortName: 'English Logistics',
    fullName: 'English for Logistics & Supply Chain',
    englishName: 'English for Logistics',
    icon: 'fa-solid fa-ship',
    secondaryIcon: 'fa-solid fa-truck-fast',
    accentColor: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #10b981 100%)',
    badgeText: 'Học Phần: English for Logistics',
    heroTitle: 'Ôn Luyện Đề Thi',
    heroSubtitle: 'English for Logistics',
    heroDesc: 'Trọn bộ 33 câu hỏi trắc nghiệm tiếng Anh chuyên ngành Logistics (Haulage, Freight Forwarder, VMI, JIT, Quotations, Passive Voice, Comparisons).',
    theoryTitle: 'Cẩm Nang Từ Vựng & Ngữ Pháp English for Logistics',
    theoryDesc: 'Tổng hợp thuật ngữ, câu trúc báo giá và ngữ pháp bám sát bộ đề thi tiếng Anh Logistics',
    theorySearchPlaceholder: 'Tìm kiếm thuật ngữ, ngữ pháp (Haulage, Forwarder, VMI, JIT, Passive, Quotation...)...',
    theoryBannerTitle: 'Cẩm Nang Thuật Ngữ & Ngữ Pháp',
    theoryBannerDesc: 'Tổng hợp từ vựng chuyên ngành Logistics, cấu trúc thư báo giá và các dạng câu bị động, so sánh phương thức vận tải.',
    theoryData: THEORY_DATA_LOGISTICS,
    chapters: [
      { id: 1, name: 'Chuyên đề 1: Logistics Entities', label: 'Chuyên đề 1', icon: 'fa-solid fa-users-gear' },
      { id: 2, name: 'Chuyên đề 2: Operations & Systems', label: 'Chuyên đề 2', icon: 'fa-solid fa-warehouse' },
      { id: 3, name: 'Chuyên đề 3: Quotation Structures', label: 'Chuyên đề 3', icon: 'fa-solid fa-file-invoice-dollar' },
      { id: 4, name: 'Chuyên đề 4: Passive & Comparisons', label: 'Chuyên đề 4', icon: 'fa-solid fa-spell-check' }
    ],
    rawQuestions: {
      1: RAW_QUESTIONS_LOGISTICS.slice(0, 15),
      2: RAW_QUESTIONS_LOGISTICS.slice(15, 27),
      3: RAW_QUESTIONS_LOGISTICS.slice(20, 33)
    },
    allQuestions: RAW_QUESTIONS_LOGISTICS,
    exams: EXAMS_DATA_LOGISTICS,
    totalQuestionsCount: RAW_QUESTIONS_LOGISTICS.length
  }
};

// Aliases for backward compatibility
const THEORY_DATA = THEORY_DATA_STARTUP;
const ALL_71_QUESTIONS = ALL_STARTUP_QUESTIONS;
const EXAMS_DATA = EXAMS_DATA_STARTUP;
