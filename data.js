/* =========================================================
   DỮ LIỆU ĐỀ CƯƠNG LÝ THUYẾT & 5 MÃ ĐỀ THI (101, 202, 303, 404, 505)
   Học phần: Kiến Trúc Máy Tính (65 câu / 75 phút)
   ========================================================= */

// ---------------------------------------------------------
// 1. TỔNG HỢP LÝ THUYẾT CHI TIẾT THEO CHƯƠNG
// ---------------------------------------------------------
const THEORY_DATA = [
  {
    chapter: 1,
    title: "Chương 1. Giới Thiệu Và Hiệu Năng",
    icon: "fa-solid fa-gauge-high",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Khái Niệm Cơ Bản</h3>
        <ul>
          <li><strong>ISA (Instruction Set Architecture - Kiến trúc tập lệnh):</strong> Là góc nhìn của người lập trình assembly, định nghĩa tập lệnh, thanh ghi, chế độ định địa chỉ.</li>
          <li><strong>Tổ chức máy tính (Computer Organization):</strong> Nghiên cứu cách các khối phần cứng (CPU, bộ nhớ, bus) vận hành và kết nối với nhau.</li>
          <li><strong>Phần cứng (Hardware):</strong> Thiết kế logic và công nghệ chế tạo chip/mạch.</li>
          <li><strong>4 Khối phần cứng cơ bản:</strong> CPU, Bộ nhớ chính, Hệ thống I/O và Bus hệ thống.</li>
          <li><strong>4 Thế hệ máy tính:</strong>
            <ul>
              <li>Thế hệ 1: Dùng <em>bóng đèn điện tử</em> (Vacuum tubes).</li>
              <li>Thế hệ 2: Dùng <em>Transistor</em>.</li>
              <li>Thế hệ 3: Dùng <em>mạch tích hợp IC</em> (Integrated Circuits).</li>
              <li>Thế hệ 4: Dùng công nghệ <em>LSI / VLSI / ULSI</em> (vi xử lý mật độ rất cao).</li>
            </ul>
          </li>
        </ul>

        <h3>2. Công Thức Đánh Giá Hiệu Năng</h3>
        <div class="formula-box">
          <p><strong>Hiệu năng (Performance P):</strong> \(P = \frac{1}{T}\) (Tỉ lệ nghịch với Thời gian thực thi T)</p>
          <p><strong>So sánh hai máy A và B:</strong> \(\frac{P_A}{P_B} = \frac{T_B}{T_A}\)</p>
          <p><strong>Quan hệ Chu kỳ (\(t_0\)) và Tần số (\(f_0\)):</strong> \(t_0 = \frac{1}{f_0}\)</p>
          <p><strong>Thời gian CPU (\(T_{CPU}\)):</strong> \(T_{CPU} = \frac{I_C \times CPI}{f_0} = I_C \times CPI \times t_0\)</p>
          <p><strong>CPI trung bình:</strong> \(CPI_{TB} = \frac{\sum(CPI_i \times I_i)}{I_C}\)</p>
          <p><strong>Chỉ số MIPS:</strong> \(MIPS = \frac{f_0}{CPI \times 10^6} = \frac{I_C}{T_{CPU} \times 10^6}\)</p>
        </div>

        <div class="tip-box">
          <i class="fa-solid fa-lightbulb"></i> <strong>Lưu ý dạng bài tập:</strong> Khi tính toán luôn đổi <strong>GHz</strong> về \(10^9\text{ Hz}\), <strong>MHz</strong> về \(10^6\text{ Hz}\), <strong>ms</strong> về \(10^{-3}\text{ s}\), <strong>ns</strong> về \(10^{-9}\text{ s}\). Khi số lệnh \(I_C\) và \(CPI\) không đổi, tăng tần số \(f_0\) sẽ làm giảm thời gian \(T_{CPU}\).
        </div>
      </div>
    `
  },
  {
    chapter: 2,
    title: "Chương 2. Hệ Thống Máy Tính",
    icon: "fa-solid fa-microchip",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Khối Xử Lý Trung Tâm (CPU) và Bộ Nhớ</h3>
        <ul>
          <li><strong>CPU gồm 4 khối chính:</strong> CU (Control Unit - Điều khiển), ALU (Arithmetic Logic Unit - Tính toán), RF (Register File - Tập thanh ghi), BIU (Bus Interface Unit - Giao tiếp bus).</li>
          <li><strong>Bộ nhớ RAM:</strong> Khả biến (Volatile), mất dữ liệu khi mất nguồn điện. Dùng để lưu tạm thời dữ liệu/lệnh đang chạy.</li>
          <li><strong>Bộ nhớ ROM:</strong> Không khả biến (Non-volatile), lưu thông tin cố định (BIOS/Firmware).</li>
          <li><strong>Bộ nhớ ngoài (HDD/SSD):</strong> Dung lượng lớn, chi phí rẻ nhưng tốc độ chậm hơn nhiều so với RAM.</li>
        </ul>

        <h3>2. Chu Trình Nhận Lệnh (Fetch Cycle)</h3>
        <ol>
          <li>Bộ đếm chương trình <strong>PC (Program Counter)</strong> phát địa chỉ lệnh cần thực hiện lên Address bus.</li>
          <li>CPU phát tín hiệu điều khiển <strong>Read</strong> tới bộ nhớ chính.</li>
          <li>Lệnh từ RAM được nạp qua Data bus vào thanh ghi lệnh <strong>IR (Instruction Register)</strong>.</li>
          <li>Giá trị thanh ghi <strong>PC tự động tăng</strong> để trỏ tới địa chỉ lệnh kế tiếp.</li>
        </ol>

        <h3>3. Cơ Chế Ngắt (Interrupt)</h3>
        <ul>
          <li><strong>Nguồn phát ngắt:</strong> Lỗi chương trình (chia cho 0), lỗi phần cứng, thiết bị I/O (bàn phím/chuột), bộ đếm thời gian (Timer).</li>
          <li><strong>Tác dụng:</strong> Cho phép CPU tạm dừng chương trình đang chạy để thực hiện chương trình phục vụ ngắt <strong>ISR (Interrupt Service Routine)</strong>.</li>
          <li><strong>Quy trình xử lý ngắt:</strong> Lưu ngữ cảnh (Context) -> Chạy chương trình ngắt ISR -> Khôi phục ngữ cảnh và tiếp tục chương trình cũ.</li>
        </ul>

        <h3>4. Hệ Thống Bus</h3>
        <ul>
          <li><strong>Data Bus (Bus dữ liệu):</strong> Truyền dữ liệu giữa CPU, Bộ nhớ và I/O (Hai chiều).</li>
          <li><strong>Address Bus (Bus địa chỉ):</strong> Truyền địa chỉ ô nhớ/thiết bị từ CPU ra ngoài (Một chiều).</li>
          <li><strong>Control Bus (Bus điều khiển):</strong> Truyền các tín hiệu điều khiển: Read, Write, IRQ, Clock, Reset.</li>
        </ul>
      </div>
    `
  },
  {
    chapter: 3,
    title: "Chương 3. Số Học Máy Tính",
    icon: "fa-solid fa-calculator",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Biểu Diễn Số Nguyên Nhị Phân</h3>
        <ul>
          <li><strong>Số không dấu (Unsigned) n bit:</strong> Phạm vi giá trị từ \(0 \dots 2^n - 1\). Chuyển đổi theo trọng số nhị phân.</li>
          <li><strong>Số có dấu bù 2 (Two's Complement) n bit:</strong> Phạm vi giá trị từ \(-2^{n-1} \dots 2^{n-1} - 1\).
            <br><em>Ví dụ 8 bit:</em> \(-128 \dots +127\).</li>
          <li><strong>Biến đổi số âm Bù 2:</strong> Đảo tất cả các bit (bù 1) rồi cộng 1. 
            <br><em>Mẹo đọc nhanh khi MSB = 1:</em> Giá trị = \(\text{Unsigned} - 2^n\).</li>
        </ul>

        <h3>2. Phép Cộng Trừ & Tràn Số (Overflow)</h3>
        <ul>
          <li><strong>Tràn không dấu (Unsigned Overflow):</strong> Dựa vào cờ nhớ <strong>Carry-out (CF = 1)</strong>.</li>
          <li><strong>Tràn có dấu (Signed Overflow):</strong> Dựa vào cờ <strong>Overflow (OF = 1)</strong>. Xảy ra khi cộng 2 số cùng dấu nhưng cho kết quả trái dấu. Cộng 2 số bù 2 khác dấu <em>không bao giờ tràn có dấu</em>.</li>
          <li><strong>Phép trừ qua Bù 2:</strong> \(X - Y = X + \text{bù2}(Y)\).</li>
        </ul>

        <h3>3. Chuẩn Số Thực Dấu Phẩy Động IEEE 754</h3>
        <div class="formula-box">
          <p><strong>Công thức số chuẩn hóa:</strong> \(V = (-1)^S \times 2^{E - \text{bias}} \times 1.F\)</p>
          <p><strong>Single Precision (Binary32 - 32 bit):</strong> 1 bit dấu (S), 8 bit mũ (E), 23 bit phân số (F). Độ lệch \(\text{bias} = 127\).</p>
          <p><strong>Double Precision (Binary64 - 64 bit):</strong> 1 bit dấu (S), 11 bit mũ (E), 52 bit phân số (F). Độ lệch \(\text{bias} = 1023\).</p>
        </div>
      </div>
    `
  },
  {
    chapter: 4,
    title: "Chương 4. Kiến Trúc Tập Lệnh",
    icon: "fa-solid fa-code",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Thanh Ghi Và Các Cờ Điều Kiện</h3>
        <ul>
          <li><strong>Các thanh ghi phổ biến:</strong> PC (Bộ đếm lệnh), IR (Thanh ghi lệnh), SP (Con trỏ ngăn xếp Stack Pointer), DP/Registers (Dữ liệu), Flags (Các cờ).</li>
          <li><strong>Cờ trạng thái (Flags):</strong>
            <ul>
              <li><code>ZF (Zero Flag)</code>: Bằng 1 khi kết quả phép tính bằng 0.</li>
              <li><code>CF (Carry Flag)</code>: Bằng 1 khi phép tính tràn không dấu (có nhớ out).</li>
              <li><code>OF (Overflow Flag)</code>: Bằng 1 khi phép tính tràn có dấu.</li>
              <li><code>IF (Interrupt Flag)</code>: Bằng 1 cho phép ngắt CPU.</li>
            </ul>
          </li>
        </ul>

        <h3>2. Nguyên Tắc Hoạt Động Ngăn Xếp (Stack)</h3>
        <ul>
          <li>Hoạt động theo nguyên tắc <strong>LIFO (Last In First Out - Vào sau ra trước)</strong>.</li>
          <li>Theo tài liệu giảng dạy: Thao tác <strong>Push</strong> làm SP giảm rồi ghi dữ liệu; Thao tác <strong>Pop</strong> đọc dữ liệu rồi làm SP tăng. Ngăn xếp phát triển xuống vùng địa chỉ thấp.</li>
        </ul>

        <h3>3. Lệnh MIPS Thường Gặp</h3>
        <ul>
          <li>Cấu trúc lệnh gồm <strong>Opcode</strong> (Mã thao tác) và các <strong>Toán hạng</strong> (Operands).</li>
          <li><code>lw $t0, offset($s1)</code> (Load Word): Nạp dữ liệu từ ô nhớ <code>[$s1 + offset]</code> vào thanh ghi <code>$t0</code>.</li>
          <li><code>sw $t0, offset($s1)</code> (Store Word): Lưu dữ liệu từ thanh ghi <code>$t0</code> ra ô nhớ <code>[$s1 + offset]</code>.</li>
          <li><strong>Định địa chỉ mảng kiểu Word (4 byte):</strong> Địa chỉ phẩn tử <code>A[i] = Base + 4 * i</code>. 
            <br><em>Ví dụ:</em> <code>A[6]</code> có offset là <code>6 * 4 = 24</code> \(\rightarrow\) <code>lw $t0, 24($s1)</code>.</li>
        </ul>
      </div>
    `
  },
  {
    chapter: 5,
    title: "Chương 5. CPU Và Pipeline",
    icon: "fa-solid fa-timeline",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Chu Trình Thực Thi Lệnh Tăng Tiến</h3>
        <p>Các giai đoạn thực thi một lệnh bao gồm:</p>
        <ol>
          <li><strong>FI (Fetch Instruction):</strong> Nhận lệnh từ bộ nhớ.</li>
          <li><strong>DI (Decode Instruction):</strong> Giải mã lệnh (Khối CU đảm nhiệm).</li>
          <li><strong>CO (Calculate Operands / Read):</strong> Nhận toán hạng từ tập thanh ghi Register File.</li>
          <li><strong>FO / Execute:</strong> Thực thi phép tính trên khối ALU.</li>
          <li><strong>WB (Write-back):</strong> Ghi kết quả trở lại thanh ghi/bộ nhớ.</li>
        </ol>

        <h3>2. Kỹ Thuật Pipeline (Đường Ống Lệnh)</h3>
        <ul>
          <li><strong>Bản chất:</strong> Cho phép <em>chồng lấn các giai đoạn</em> thực thi của nhiều lệnh khác nhau trong cùng một chu kỳ clock.</li>
          <li><strong>Tác dụng:</strong> Tăng thông lượng (Throughput) xử lý lệnh của CPU, không nhất thiết làm giảm độ trễ (latency) của một lệnh đơn lẻ.</li>
          <li><strong>Công thức số chu kỳ lý tưởng:</strong> Cho \(k\) giai đoạn và \(n\) lệnh \(\rightarrow\) Số chu kỳ = \(k + n - 1\).</li>
          <li><strong>Tổng thời gian lý tưởng:</strong> \(T = (k + n - 1) \times t_{ck}\).</li>
        </ul>

        <h3>3. Các Xung Đột Pipeline (Hazards)</h3>
        <ul>
          <li><strong>Structural Hazard (Xung đột cấu trúc):</strong> Hai lệnh cùng tranh chấp một tài nguyên phần cứng.</li>
          <li><strong>Data Hazard (Xung đột dữ liệu):</strong> Lệnh sau cần kết quả tính toán của lệnh trước nhưng lệnh trước chưa ghi xong.</li>
          <li><strong>Control Hazard (Xung đột điều khiển):</strong> Do các lệnh rẽ nhánh (Branch/Jump) làm thay đổi luôn luồng lệnh.</li>
          <li>Hazards khiến CPU phải chèn các chu kỳ bong bóng <strong>Stall</strong> làm giảm hiệu năng pipeline.</li>
        </ul>
      </div>
    `
  },
  {
    chapter: 6,
    title: "Chương 6. Hệ Thống Bộ Nhớ",
    icon: "fa-solid fa-memory",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Phân Cấp Bộ Nhớ (Memory Hierarchy)</h3>
        <p class="text-center font-bold">Thanh ghi (Register) \(\to\) Cache \(\to\) RAM chính \(\to\) Bộ nhớ ngoài (Disk)</p>
        <p>Theo chiều từ trái sang phải: <strong>Dung lượng tăng dần, giá thành/bit giảm dần, nhưng Tốc độ truy cập giảm dần</strong>.</p>

        <h3>2. Chip Bộ Nhớ Nhị Phân</h3>
        <ul>
          <li>Dạng \(2^n \times m\): Có \(n\) đường địa chỉ, \(m\) đường dữ liệu.</li>
          <li>Các chân điều khiển: <code>CS (Chip Select)</code> chọn chip, <code>OE (Output Enable)</code> cho phép đọc, <code>WE (Write Enable)</code> cho phép ghi.</li>
          <li>Ghép chip song song tăng độ dài từ dữ liệu; Ghép phân miền địa chỉ để tăng số từ nhớ.</li>
        </ul>

        <h3>3. Bộ Nhớ Đệm Cache</h3>
        <div class="formula-box">
          <p><strong>Cache Hit / Miss:</strong> Hit là tìm thấy dữ liệu trên cache (truy cập cực nhanh). Miss phải nạp block từ RAM vào cache.</p>
          <p><strong>Ánh xạ trực tiếp (Direct Mapping):</strong> Block RAM được đưa vào line cache theo công thức: \(\text{Line} = \text{Block} \pmod{\text{Số line}}\).</p>

          <p><strong>Phân tích trường địa chỉ Cache Direct-Mapped:</strong></p>
          <ul>
            <li>\(\text{Offset} = \log_2(\text{Kích thước Line (Byte)})\)</li>
            <li>\(\text{Index} = \log_2(\text{Số lượng Line in Cache})\)</li>
            <li>\(\text{Tag} = \text{Độ dài địa chỉ (bit)} - \text{Index} - \text{Offset}\)</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    chapter: 7,
    title: "Chương 7. Kiến Trúc Song Song",
    icon: "fa-solid fa-network-wired",
    content: String.raw`
      <div class="theory-section">
        <h3>1. Phân Loại Flynn Cho Máy Tính Song Song</h3>
        <ul>
          <li><strong>SISD (Single Instruction, Single Data):</strong> Máy tính tuần tự truyền thống (1 luồng lệnh, 1 luồng dữ liệu).</li>
          <li><strong>SIMD (Single Instruction, Multiple Data):</strong> 1 lệnh xử lý đồng thời trên nhiều dữ liệu (xử lý mảng, đồ họa vector, GPU).</li>
          <li><strong>MISD (Multiple Instruction, Single Data):</strong> Nhiều lệnh xử lý trên cùng 1 luồng dữ liệu (hiếm gặp, dùng trong hệ thống siêu tin cậy).</li>
          <li><strong>MIMD (Multiple Instruction, Multiple Data):</strong> Nhiều lệnh xử lý độc lập trên nhiều dữ liệu (Hệ thống đa lõi Multicore, Cluster).</li>
        </ul>

        <h3>2. Kiến Trúc Bộ Nhớ Đa Xử Lý</h3>
        <ul>
          <li><strong>UMA (Uniform Memory Access):</strong> Tất cả CPU có độ trễ truy cập RAM vật lý chung là đồng nhất.</li>
          <li><strong>NUMA (Non-Uniform Memory Access):</strong> Mỗi nút CPU có bộ nhớ cục bộ riêng (Local Memory) truy cập rất nhanh; truy cập bộ nhớ từ xa (Remote Memory) qua mạng kết nối sẽ chậm hơn.</li>
        </ul>

        <h3>3. Đa Lõi (Multicore) Và GPU</h3>
        <ul>
          <li><strong>Đa lõi (Multicore CPU):</strong> Từng lõi thực hiện các luồng độc lập, các bộ nhớ cache có thể là riêng (L1/L2) hoặc dùng chung (L3).</li>
          <li><strong>GPU (Graphics Processing Unit):</strong> Chứa hàng nghìn lõi tính toán nhỏ, cực mạnh về xử lý tính toán song song dữ liệu lớn.</li>
        </ul>
      </div>
    `
  }
];

// Helper Generator cho 65 câu hỏi Đề 101, 202, 303
function generate65Questions(code) {
  // Bản đồ đáp án chuẩn cho 65 câu từ PDF gốc
  const answerKeys101 = [
    'D','A','A','B','C','B','B','D','D','A','C','A','B','A','B','D','C','B','D','C',
    'C','C','C','C','A','C','A','B','C','B','B','A','A','B','D','D','A','A','C','A',
    'C','B','A','B','B','A','C','D','C','A','B','B','C','B','C','D','A','B','D','B',
    'A','C','C','C','A'
  ];

  const answerKeys202 = [
    'D','A','C','C','D','C','D','A','C','B','A','D','B','A','A','D','A','B','B','A',
    'A','D','A','D','D','B','A','D','D','A','C','C','C','C','D','D','A','D','D','A',
    'C','D','D','A','B','C','A','B','A','C','A','A','C','A','D','B','A','A','B','D',
    'C','D','C','B','A'
  ];

  const answerKeys303 = [
    'D','C','B','B','C','D','C','D','A','D','D','D','D','D','A','B','B','D','A','B',
    'A','C','A','C','B','A','A','A','D','B','D','C','D','B','C','D','A','D','B','B',
    'A','D','C','D','B','D','A','B','D','B','B','A','C','B','D','D','A','A','B','D',
    'C','B','D','C','C'
  ];

  // Cơ sở dữ liệu 65 câu hỏi chuẩn chuẩn hóa từ PDF
  const rawQuestions = [
    { q: "Lệnh MIPS nạp word từ bộ nhớ vào thanh ghi là lệnh nào?", opts: ["add", "beq", "sw", "lw"], exp: "lw (Load Word) nạp dữ liệu từ RAM vào thanh ghi. sw (Store Word) lưu thanh ghi ra RAM." },
    { q: "Tín hiệu Memory Read thuộc loại bus nào trong hệ thống?", opts: ["Bus điều khiển (Control bus)", "Bus dữ liệu (Data bus)", "Bus nguồn", "Bus địa chỉ (Address bus)"], exp: "Read và Write là các tín hiệu điều khiển nằm trên Control Bus." },
    { q: "Đặc điểm cơ bản đúng của bộ nhớ SRAM?", opts: ["Rất nhanh, thường làm bộ nhớ đệm Cache", "Không thể đọc dữ liệu", "Lưu trữ lâu dài không mất nguồn", "Cần chu kỳ refresh liên tục"], exp: "SRAM chế tạo bằng Flip-Flop rất nhanh và đắt, được dùng làm bộ nhớ Cache. DRAM cần refresh." },
    { q: "Bộ nhớ ngăn xếp (Stack) hoạt động theo nguyên tắc nào?", opts: ["Ngẫu nhiên", "LIFO (Last In First Out)", "FIFO (First In First Out)", "Không theo thứ tự"], exp: "Stack hoạt động theo nguyên tắc Vào sau ra trước (LIFO)." },
    { q: "Trường Opcode trong định dạng lệnh dùng để làm gì?", opts: ["Chứa dữ liệu đầu vào", "Lưu trạng thái cờ", "Mã hóa thao tác / phép toán cần thực hiện", "Chứa con trỏ SP"], exp: "Opcode (Operation Code) xác định thao tác (như ADD, SUB, LW...)." },
    { q: "Trong ánh xạ trực tiếp (Direct mapping), khối B_j được đưa vào line bao nhiêu?", opts: ["L(j + m)", "L(j mod m)", "Line bất kỳ trong cache", "L(m mod j)"], exp: "Vị trí line trong Cache Direct-Mapped được tính bằng: Line = j mod m (với m là số line)." },
    { q: "Kỹ thuật đường ống lệnh (Pipeline) chủ yếu giúp?", opts: ["Giảm mọi độ trễ của lệnh đơn", "Tăng thông lượng (Throughput) xử lý lệnh", "Giảm số bit của lệnh", "Xóa bỏ phụ thuộc dữ liệu"], exp: "Pipeline tăng thông lượng xử lý số lệnh/thời gian nhờ thực hiện song song các giai đoạn." },
    { q: "Máy A chạy hết 8s, máy B chạy hết 12s cho cùng một chương trình. Kết luận nào đúng?", opts: ["B nhanh hơn A 4 lần", "B nhanh hơn A 1.5 lần", "A nhanh hơn B 4 lần", "A nhanh hơn B 1.5 lần"], exp: "Tỉ lệ hiệu năng P_A / P_B = T_B / T_A = 12 / 8 = 1.5 lần. Vậy máy A nhanh hơn máy B 1.5 lần." },
    { q: "Phạm vi biểu diễn của số nguyên có dấu Bù 2 độ dài 8 bit?", opts: ["0 .. 255", "-127 .. 127", "-128 .. 128", "-128 .. 127"], exp: "Biểu diễn Bù 2 n bit có phạm vi -2^(n-1) đến 2^(n-1)-1. Với 8 bit: -128 đến +127." },
    { q: "Khối phần cứng nào đảm nhiệm việc giải mã lệnh trong giai đoạn DI?", opts: ["Khối điều khiển (CU)", "Card mạng (NIC)", "Ổ cứng SSD", "Bộ nhớ Cache"], exp: "Khối điều khiển CU (Control Unit) nhận mã lệnh từ IR và phát tín hiệu giải mã." },
    { q: "Khái niệm Cache Hit có nghĩa là gì?", opts: ["Cache bị hỏng", "CPU phải khởi động lại", "Dữ liệu cần tìm có sẵn trong Cache", "Dữ liệu chỉ nằm trên đĩa cứng"], exp: "Cache Hit xảy ra khi dữ liệu yêu cầu bởi CPU đã nằm sẵn trong Cache." },
    { q: "Thuộc tính hệ thống nhìn thấy bởi người lập trình Assembly/máy thuộc phạm vi nào?", opts: ["Kiến trúc tập lệnh (ISA)", "Công nghệ đóng gói chip", "Tổ chức máy tính (Organization)", "Thiết kế nguồn điện"], exp: "ISA (Instruction Set Architecture) là góc nhìn lập trình viên (tập lệnh, thanh ghi, định địa chỉ)." },
    { q: "Cần bao nhiêu chip nhớ kích thước 8x2 để ghép thành bộ nhớ 8x8?", opts: ["8 chip", "4 chip", "16 chip", "2 chip"], exp: "Ghép song song để tăng độ dài từ dữ liệu từ 2 bit lên 8 bit: Cần 8 / 2 = 4 chip." },
    { q: "Địa chỉ hiệu dụng (Effective Address) của lệnh lw $t0, 16($s1) được tính bằng?", opts: ["$s1 + 16", "$s1 * 16", "$t0 + 16", "$t0 + $s1"], exp: "Địa chỉ hiệu dụng trong MIPS = Giá trị thanh ghi cơ sở + Số hằng (Offset) -> $s1 + 16." },
    { q: "Thanh ghi PC (Program Counter) chứa thông tin gì?", opts: ["Nội dung lệnh hiện tại", "Địa chỉ của lệnh kế tiếp cần thực hiện", "Kết quả phép tính ALU", "Đỉnh của ngăn xếp Stack"], exp: "Thanh ghi PC chứa địa chỉ của lệnh tiếp theo sẽ được CPU nạp và thực thi." },
    { q: "Cờ Carry Flag (CF) báo hiệu điều gì chủ yếu?", opts: ["Kết quả bằng 0", "Lỗi bộ nhớ cache", "Tràn phép tính có dấu", "Tràn phép tính không dấu"], exp: "Cờ CF (Carry Flag) báo hiệu sự tràn nhớ trong các phép tính số nguyên không dấu." },
    { q: "CPU có tần số 2 GHz, CPI trung bình = 4. Tốc độ tính theo MIPS xấp xỉ bằng?", opts: ["2000 MIPS", "250 MIPS", "500 MIPS", "800 MIPS"], exp: "MIPS = f0 / (CPI * 10^6) = 2*10^9 / (4 * 10^6) = 500 MIPS." },
    { q: "Mô hình kiến trúc phân loại Flynn: 1 luồng lệnh xử lý nhiều luồng dữ liệu là gì?", opts: ["MISD", "SIMD", "SISD", "MIMD"], exp: "SIMD = Single Instruction, Multiple Data (1 lệnh, nhiều dữ liệu)." },
    { q: "Khi số lượng lệnh I_C và CPI không đổi, cách nào sau đây giúp giảm thời gian T_CPU?", opts: ["Tăng chu kỳ clock", "Tăng số lượng lệnh", "Giảm tần số clock", "Tăng tần số clock f0"], exp: "T_CPU = (I_C * CPI) / f0. Tăng tần số f0 sẽ làm giảm thời gian T_CPU." },
    { q: "Khi xảy ra hiện tượng Cache Miss, hệ thống sẽ xử lý thế nào?", opts: ["Chỉ tăng thanh ghi PC", "Tắt hoàn toàn CPU", "Nạp khối dữ liệu (Block) chứa từ nhớ từ RAM vào Cache", "Xóa toàn bộ chương trình"], exp: "Khi Miss, CPU phải dừng và yêu cầu controller đưa cả Block từ RAM lên Cache." },
    { q: "Cho mảng word 4 byte có địa chỉ cơ sở $s1. Lệnh nạp phần tử A[6] đúng là?", opts: ["lw $t0, 6($s1)", "lw $t0, 12($s1)", "lw $t0, 24($s1)", "sw $t0, 24($s1)"], exp: "Mảng word 4 byte có offset = 6 * 4 = 24. Nạp vào thanh ghi dùng lệnh lw $t0, 24($s1)." },
    { q: "Nếu hiệu năng của máy tính tăng gấp đôi thì thời gian thực thi cùng một công việc sẽ?", opts: ["Không đổi", "Gấp 4 lần", "Giảm một nửa (1/2)", "Tăng gấp đôi"], exp: "Hiệu năng P tỉ lệ nghịch với thời gian T (P = 1/T). P tăng 2 lần thì T giảm còn 1/2." },
    { q: "Điểm mạnh nổi bật nhất của bộ xử lý đồ họa GPU là gì?", opts: ["Thay thế RAM chính", "Xử lý tuần tự cực nhanh", "Xử lý song song dữ liệu quy mô lớn", "Lưu trữ BIOS"], exp: "GPU được tối ưu với hàng ngàn lõi nhỏ để xử lý song song dữ liệu (SIMD/Vector)." },
    { q: "Kiến trúc bộ nhớ phân tán NUMA có đặc điểm gì?", opts: ["Chỉ có 1 dữ liệu", "Dùng chung 1 RAM duy nhất", "Mỗi nút CPU có bộ nhớ cục bộ riêng, trao đổi qua mạng", "Không có CPU"], exp: "NUMA (Non-Uniform Memory Access): Mỗi node có nhớ riêng, truy cập nhớ cục bộ nhanh hơn nhớ từ xa." },
    { q: "Chân tín hiệu CS (Chip Select) trên chip nhớ dùng để làm gì?", opts: ["Chọn chip nhớ được phép hoạt động", "Đếm số lệnh", "Xóa cache", "Đặt số mũ"], exp: "Chân CS (Chip Select) kích hoạt chip khi địa chỉ rơi vào dải của chip đó." },
    { q: "Chức năng chính của mô-đun I/O trong hệ thống máy tính?", opts: ["Thay thế ALU", "Giải mã lệnh", "Giao tiếp và kết nối thiết bị ngoại vi với bus hệ thống", "Lưu trữ BIOS"], exp: "Mô-đun I/O chuẩn hóa giao tiếp giữa các thiết bị ngoại vi và bus hệ thống." },
    { q: "Thực hiện phép cộng hai số nguyên bù 2 khác dấu thì kết quả sẽ?", opts: ["Không bao giờ bị tràn có dấu", "Không thể làm được", "Luôn bằng 0", "Luôn bị tràn số"], exp: "Cộng 2 số bù 2 khác dấu không bao giờ xảy ra tràn có dấu (Overflow)." },
    { q: "Bộ nhớ Cache dung lượng 256 KB, kích thước một line là 32 B. Số lượng line trong Cache là?", opts: ["4096", "8192", "16384", "2048"], exp: "Số line = 256 KB / 32 B = (256 * 1024) / 32 = 8192 line." },
    { q: "Mô hình Flynn: Nhiều luồng lệnh xử lý đồng thời trên nhiều luồng dữ liệu là gì?", opts: ["MISD", "SIMD", "MIMD", "SISD"], exp: "MIMD = Multiple Instruction, Multiple Data (Nhiều lệnh, nhiều dữ liệu)." },
    { q: "Thành phần nào sau đây KHÔNG thuộc phần cứng cơ bản của máy tính?", opts: ["Khối I/O", "Trình biên dịch (Compiler)", "Bộ nhớ", "CPU"], exp: "Trình biên dịch (Compiler) là phần mềm hệ thống, không thuộc phần cứng." },
    { q: "Tổ chức máy tính (Computer Organization) nghiên cứu chủ yếu về?", opts: ["Cú pháp Java", "Cách các thành phần phần cứng vận hành và kết nối", "Thiết kế giao diện", "Kiểm thử phần mềm"], exp: "Computer Organization tập trung vào các khối chức năng và mạng kết nối giữa chúng." },
    { q: "Trong kiến trúc NUMA, phát biểu nào sau đây là đúng?", opts: ["Truy cập bộ nhớ cục bộ (Local) nhanh hơn bộ nhớ từ xa (Remote)", "Không có RAM", "Không có địa chỉ", "Chỉ dùng một CPU"], exp: "NUMA có độ trễ bộ nhớ không đồng nhất: Nhớ cục bộ gần CPU truy cập nhanh hơn." },
    { q: "Cờ Zero Flag (ZF = 1) khi nào?", opts: ["Kết quả phép tính bằng 0", "Kết quả phép tính bị âm", "Cho phép ngắt", "Phép tính có cờ nhớ Carry"], exp: "Cờ ZF được bật lên 1 nếu kết quả của phép ALU bằng 0." },
    { q: "Pipeline 5 giai đoạn, xử lý 20 lệnh, thời gian chu kỳ clock 2 ns. Tổng thời gian là?", opts: ["40 ns", "48 ns", "200 ns", "50 ns"], exp: "T = (k + n - 1) * t_ck = (5 + 20 - 1) * 2 = 24 * 2 = 48 ns." },
    { q: "Địa chỉ 32 bit, Cache 256 KB, Line 32 B. Số bit của trường Tag trong ánh xạ trực tiếp?", opts: ["18 bit", "13 bit", "5 bit", "14 bit"], exp: "Offset = log2(32) = 5 bit. Số line = 8192 -> Index = log2(8192) = 13 bit. Tag = 32 - 13 - 5 = 14 bit." },
    { q: "Phép trừ X - Y trong máy tính được thực hiện thông qua mạch cộng bằng cách nào?", opts: ["X + bù1(Y)", "bù2(X) + Y", "Dịch bit Y", "X + bù2(Y)"], exp: "Phép trừ X - Y được chuyển thành phép cộng với số bù 2: X + bù2(Y)." },
    { q: "Phép cộng hai số dương cho kết quả có bit dấu MSB = 1 báo hiệu hiện tượng gì?", opts: ["Tràn có dấu (Overflow)", "Cache miss", "Chỉ số Parity", "Phép tính đúng"], exp: "Cộng 2 số dương (MSB=0) ra số âm (MSB=1) là hiện tượng tràn số có dấu (Overflow)." },
    { q: "Trước khi chuyển sang chạy chương trình phục vụ ngắt ISR, CPU phải làm gì?", opts: ["Khôi phục ngữ cảnh", "Xóa bộ nhớ cache", "Nạp lại OS", "Lưu ngữ cảnh (Context) của chương trình hiện tại"], exp: "CPU phải lưu ngữ cảnh (thanh ghi, PC, cờ) vào Stack để sau khi ngắt xong quay lại tiếp tục." },
    { q: "Số nhị phân không dấu 10110101_2 có giá trị trong hệ thập phân là bao nhiêu?", opts: ["179", "173", "181", "183"], exp: "10110101_2 = 128 + 32 + 16 + 4 + 1 = 181." },
    { q: "Số thực chuẩn IEEE 754 đơn (Binary32) có trường mũ E = 130. Số mũ thực bằng bao nhiêu?", opts: ["3", "2", "257", "127"], exp: "Số mũ thực = E - bias = 130 - 127 = 3." },
    { q: "Pipeline gồm 6 giai đoạn, cần thực thi 8 lệnh. Số chu kỳ clock cần thiết là?", opts: ["14 chu kỳ", "48 chu kỳ", "13 chu kỳ", "8 chu kỳ"], exp: "Số chu kỳ = k + n - 1 = 6 + 8 - 1 = 13 chu kỳ." },
    { q: "Số nhị phân 8 bit bù 2: 11011011_2 biểu diễn số thập phân nào?", opts: ["219", "-37", "-36", "-35"], exp: "Bit MSB = 1 (số âm). Giá trị = Unsigned - 256 = 219 - 256 = -37." },
    { q: "Theo tài liệu bài giảng, thao tác Push dữ liệu vào ngăn xếp Stack sẽ?", opts: ["Giảm SP rồi ghi dữ liệu", "Tăng SP rồi ghi dữ liệu", "Tăng thanh ghi IR", "Giảm thanh ghi PC"], exp: "Trong MIPS/x86 tài liệu: Push làm SP giảm (dành chỗ) rồi ghi dữ liệu vào." },
    { q: "Yếu tố chính nào khiến Pipeline thực tế kém lý tưởng và xuất hiện Stall?", opts: ["Màn hình hiển thị quá lớn", "Phụ thuộc dữ liệu và rẽ nhánh (Hazards)", "Tệp văn bản", "Cổng kết nối USB"], exp: "Các loại Hazard (Data hazard, Control hazard) làm nghẽn đường ống lệnh." },
    { q: "Công nghệ linh kiện tiêu biểu của máy tính thế hệ thứ hai là gì?", opts: ["VLSI", "Transistor", "Mạch tích hợp IC", "Bóng đèn chân không"], exp: "Thế hệ 1: Bóng đèn -> Thế hệ 2: Transistor -> Thế hệ 3: IC -> Thế hệ 4: VLSI." },
    { q: "Khối nào phát tín hiệu điều khiển giải mã thanh ghi IR?", opts: ["Khối điều khiển (CU)", "Ổ cứng SSD", "Bộ nhớ RAM", "Khối tính toán (ALU)"], exp: "CU (Control Unit) giải mã lệnh trong IR để điều khiển luồng dữ liệu." },
    { q: "Thanh ghi IR (Instruction Register) dùng để chứa thông tin gì?", opts: ["Đỉnh ngăn xếp", "Địa chỉ lệnh kế tiếp", "Lệnh đang được giải mã và thực thi", "Địa chỉ I/O"], exp: "IR lưu trữ bản sao của lệnh đang được CPU xử lý." },
    { q: "Bus nào trong hệ thống máy tính dùng để mang địa chỉ ô nhớ?", opts: ["Bus dữ liệu", "Bus điều khiển", "Bus nguồn", "Bus địa chỉ (Address Bus)"], exp: "Address Bus là bus một chiều mang địa chỉ từ CPU tới bộ nhớ/I/O." },
    { q: "Quan hệ toán học giữa chu kỳ xung nhịp t0 và tần số xung nhịp f0?", opts: ["t0 + f0 = 1", "t0 = f0^2", "t0 = 1 / f0", "t0 = f0"], exp: "Chu kỳ t0 và tần số f0 là hai đại lượng nghịch đảo nhau: t0 = 1 / f0." },
    { q: "Trong phép nhân nhị phân, khi bit của số nhân bằng 0 thì tích riêng phần sẽ?", opts: ["Bằng 0 (không đóng góp vào tổng tích)", "Bằng số bị nhân", "Bằng 1", "Bằng số nhân"], exp: "0 x Số bị nhân = 0, nên tích riêng phần tương ứng bằng 0." },
    { q: "Phạm vi giá trị biểu diễn của số nguyên không dấu 8 bit?", opts: ["0 .. 127", "0 .. 255", "-255 .. 255", "-128 .. 127"], exp: "Số không dấu 8 bit biểu diễn từ 0 đến 2^8 - 1 = 255." },
    { q: "Cho địa chỉ 32 bit, Cache 256KB, Line 32B. Thứ tự số bit của Offset, Index, Tag là?", opts: ["Offset 5, Index 13, Tag 14", "Offset 13, Index 5, Tag 14", "Offset 5, Index 14, Tag 13", "Offset 14, Index 5, Tag 13"], exp: "Offset = log2(32) = 5. Index = log2(8192) = 13. Tag = 32 - 5 - 13 = 14 bit." },
    { q: "Trong phân cấp bộ nhớ, các mức nhớ càng gần CPU thì có đặc điểm?", opts: ["Tốc độ càng nhanh, dung lượng nhỏ, giá/bit đắt", "Tốc độ càng chậm", "Dung lượng càng lớn", "Giá thành càng rẻ"], exp: "Càng gần CPU (như Thanh ghi, Cache L1), tốc độ càng nhanh nhưng dung lượng nhỏ." },
    { q: "Thành phần nào cung cấp/cấp phát toán hạng trực tiếp cho khối ALU?", opts: ["Tập thanh ghi (Register File)", "BIOS", "Bàn phím", "Đĩa quang"], exp: "Tập thanh ghi Register File cung cấp các toán hạng đầu vào cho ALU." },
    { q: "Chuẩn số thực Binary64 (Double Precision) theo IEEE 754 gồm bao nhiêu bit?", opts: ["32 bit", "64 bit (1 dấu, 11 mũ, 52 fraction)", "52 bit", "23 bit"], exp: "Binary64 gồm 64 bit tổng cộng: 1 bit dấu, 11 bit mũ, 52 bit fraction." },
    { q: "Đặc điểm đúng nhất của bộ nhớ RAM chính?", opts: ["Chỉ đọc", "Không mất dữ liệu khi tắt máy", "Tốc độ chậm hơn HDD", "Khả biến, mất dữ liệu khi mất nguồn điện"], exp: "RAM là bộ nhớ khả biến (Volatile), dữ liệu bị xóa sạch khi ngừng cấp điện." },
    { q: "Cơ chế ngắt (Interrupt) cho phép CPU thực hiện điều gì?", opts: ["Tạm dừng chương trình hiện tại để phục vụ sự kiện ngoại vi/hệ thống", "Đổi kiến trúc tập lệnh", "Tăng dung lượng RAM", "Tăng bus dữ liệu"], exp: "Ngắt tạm dừng luồng chính để xử lý sự kiện ưu tiên cao qua hàm ISR." },
    { q: "Lệnh Assembly: MOV AX, BX thực hiện công việc gì?", opts: ["Đổi chỗ AX và BX", "Copy giá trị từ thanh ghi BX sang thanh ghi AX", "Gán cả hai bằng 0", "Copy từ AX sang BX"], exp: "Cú pháp lệnh MOV là [Đích, Nguồn] -> AX nhận giá trị của BX." },
    { q: "Sau khi đưa địa chỉ từ PC lên Address Bus, CPU thường phát tín hiệu nào tiếp theo?", opts: ["Xóa thanh ghi IR", "Giảm SP", "Phát tín hiệu Write", "Phát tín hiệu Read bộ nhớ"], exp: "CPU phát tín hiệu Read để yêu cầu bộ nhớ trả về dữ liệu/lệnh tại địa chỉ đó." },
    { q: "Khái niệm Thanh ghi (Register) trong CPU được định nghĩa là gì?", opts: ["Bộ nhớ ngoài", "Mức nhớ đầu tiên nằm trong CPU, tốc độ truy cập cực nhanh", "Thiết bị vào ra", "Bus hệ thống"], exp: "Thanh ghi là các ô nhớ tốc độ cao nhất nằm ngay bên trong CPU." },
    { q: "Thứ tự các bước chuẩn trong một chu trình thực thi lệnh của CPU?", opts: ["FI -> DI -> Nhận toán hạng -> Thực hiện (Execute) -> Ghi (Write-back)", "DI -> FI -> Ghi -> Thực hiện", "Thực hiện -> DI -> FI", "FD -> Ghi -> FI -> DI"], exp: "Chu trình lệnh chuẩn: Nhận lệnh (FI) -> Giải mã (DI) -> Nhận toán hạng -> Thực hiện -> Ghi." },
    { q: "Một chương trình gồm 10^6 lệnh, CPI = 2.5, CPU chạy ở tần số 2.5 GHz. Thời gian thực thi là?", opts: ["1 s", "10 ms", "1 ms (0.001 s)", "0.1 ms"], exp: "T_CPU = (10^6 * 2.5) / (2.5 * 10^9) = 10^-3 s = 1 ms." },
    { q: "Chuẩn biểu diễn số thực Binary32 (Single Precision) gồm các trường nào?", opts: ["8, 8, 16", "Không có dấu", "1 bit dấu, 8 bit mũ, 23 bit fraction (Tổng 32 bit)", "1, 11, 20"], exp: "Binary32 gồm 1 bit dấu (S), 8 bit mũ (E) và 23 bit phân số (F)." },
    { q: "Kỹ thuật Pipeline trong CPU có bản chất là gì?", opts: ["Tăng dung lượng HDD", "Chỉ thực hiện một lệnh một lúc", "Kỹ thuật chồng lấn các giai đoạn thực thi của nhiều lệnh", "Mã hóa dữ liệu"], exp: "Pipeline cho phép thực hiện song song các giai đoạn của nhiều lệnh liên tiếp." },
    { q: "Số nhị phân 8 bit bù 2 của giá trị thập phân -80 là gì?", opts: ["10110000", "10101111", "11010000", "01010000"], exp: "+80 = 01010000. Bù 1 = 10101111. Bù 2 = 10101111 + 1 = 10110000." }
  ];

  // Chọn bộ mã đáp án tương ứng
  let keys = answerKeys101;
  if (code === 202) keys = answerKeys202;
  if (code === 303) keys = answerKeys303;

  // Tạo danh sách 65 câu hỏi cho mã đề
  const questions = rawQuestions.map((qObj, index) => {
    const keyChar = keys[index] || 'A';
    const correctIdx = ['A', 'B', 'C', 'D'].indexOf(keyChar);

    return {
      id: index + 1,
      question: `[Câu ${index + 1}] ${qObj.q}`,
      options: qObj.opts,
      correctIndex: correctIdx >= 0 ? correctIdx : 0,
      explanation: qObj.exp
    };
  });

  return questions;
}

// Data 4 Đề thi chính thức
const EXAMS_DATA = {
  1: {
    id: 1,
    code: "101",
    title: "Đề Thi 01 - Mã Đề 101 (Kiến Trúc Máy Tính)",
    description: "Bộ đề chuẩn 65 câu trắc nghiệm bao quát 7 chương lý thuyết & bài tập tính toán.",
    timePerQuestion: 20,
    questions: generate65Questions(101)
  },
  2: {
    id: 2,
    code: "202",
    title: "Đề Thi 02 - Mã Đề 202 (Kiến Trúc Máy Tính)",
    description: "Bộ đề ôn tập tổng hợp 65 câu chuẩn kỳ thi cuối kỳ kèm lời giải chi tiết.",
    timePerQuestion: 20,
    questions: generate65Questions(202)
  },
  3: {
    id: 3,
    code: "303",
    title: "Đề Thi 03 - Mã Đề 303 (Kiến Trúc Máy Tính)",
    description: "Đề thi đảo thứ tự chuẩn 65 câu rèn luyện phản xạ và củng cố kiến thức vững chắc.",
    timePerQuestion: 20,
    questions: generate65Questions(303)
  },
  4: {
    id: 4,
    code: "404",
    title: "Đề Thi 04 - Mã Đề 404 (Kiến Trúc Máy Tính)",
    description: "Bộ đề 65 câu tập trung tính toán: Pipeline, Cache Direct Mapped, MIPS, CPI, Amdahl & chuẩn IEEE 754.",
    timePerQuestion: 20,
    questions: [
      { id: 1, question: "[Câu 1] Kỹ thuật Pipeline giúp cải thiện yếu tố nào của hệ thống máy tính?", options: ["Dung lượng bộ nhớ", "Tần số (Clock rate)", "Giảm mọi độ trễ của 1 lệnh đơn", "Thông lượng lệnh (Throughput)"], correctIndex: 3, explanation: "Pipeline hoàn thành nhiều lệnh hơn trong một đơn vị thời gian (Throughput)." },
      { id: 2, question: "[Câu 2] Đặc điểm nào dưới đây mô tả ĐÚNG về bộ nhớ SRAM?", options: ["Cần phải làm tươi (refresh) liên tục", "Chỉ đọc không ghi được", "Chậm, dung lượng lớn", "Nhanh, đắt, thường dùng làm Cache"], correctIndex: 3, explanation: "SRAM dùng các flip-flop, không cần refresh, tốc độ rất cao." },
      { id: 3, question: "[Câu 3] Với kiến trúc Pipeline 7 giai đoạn (stage), để thực thi lý tưởng một chương trình có 20 lệnh (không stall, không phân nhánh), cần bao nhiêu chu kỳ máy?", options: ["140 chu kỳ", "26 chu kỳ", "27 chu kỳ", "25 chu kỳ"], correctIndex: 1, explanation: "Số chu kỳ lý tưởng: k + n - 1 = 7 + 20 - 1 = 26." },
      { id: 4, question: "[Câu 4] Với kiến trúc Pipeline 5 giai đoạn (stage), để thực thi lý tưởng một chương trình có 100 lệnh (không stall, không phân nhánh), cần bao nhiêu chu kỳ máy?", options: ["104 chu kỳ", "103 chu kỳ", "500 chu kỳ", "105 chu kỳ"], correctIndex: 0, explanation: "Số chu kỳ lý tưởng: k + n - 1 = 5 + 100 - 1 = 104." },
      { id: 5, question: "[Câu 5] Một hệ thống dùng địa chỉ 32 bit, bộ nhớ Cache Direct Mapped dung lượng 512 KB, kích thước mỗi block (line) là 128 Byte. Số bit Tag là:", options: ["11 bit", "12 bit", "15 bit", "13 bit"], correctIndex: 3, explanation: "Offset=7, Index=log2(512KB/128)=12. Tag=32-12-7=13." },
      { id: 6, question: "[Câu 6] Dạng biểu diễn bù 2 (8 bit) của số nguyên -12 là:", options: ["11111111", "00001100", "11110100", "10000000"], correctIndex: 2, explanation: "Bù 2 của -12: Lấy trị tuyệt đối đảo bit rồi cộng 1 -> 11110100." },
      { id: 7, question: "[Câu 7] Hệ thống bộ nhớ phân tán (Distributed Memory) có đặc điểm nào dưới đây?", options: ["Chỉ lưu cache, không có RAM chính", "Tất cả các lõi CPU chia sẻ vật lý chung một module RAM lớn", "Mỗi node có bộ nhớ riêng, giao tiếp CPU qua thông điệp mạng", "Không có CPU nào trên board"], correctIndex: 2, explanation: "Distributed Memory sử dụng Message Passing qua mạng kết nối (Cluster/Network)." },
      { id: 8, question: "[Câu 8] Dạng biểu diễn bù 2 (8 bit) của số nguyên -5 là:", options: ["11111111", "10000000", "00000101", "11111011"], correctIndex: 3, explanation: "Bù 2 của -5: Lấy trị tuyệt đối đảo bit rồi cộng 1 -> 11111011." },
      { id: 9, question: "[Câu 9] Một hệ thống dùng địa chỉ 32 bit, bộ nhớ Cache Direct Mapped dung lượng 64 KB, kích thước mỗi block (line) là 16 Byte. Số bit Tag là:", options: ["16 bit", "14 bit", "18 bit", "12 bit"], correctIndex: 0, explanation: "Offset=4, Index=log2(64KB/16)=12. Tag=32-12-4=16." },
      { id: 10, question: "[Câu 10] Dạng biểu diễn bù 2 (8 bit) của số nguyên -64 là:", options: ["11111111", "11000000", "10000000", "01000000"], correctIndex: 1, explanation: "Bù 2 của -64: Lấy trị tuyệt đối đảo bit rồi cộng 1 -> 11000000." },
      { id: 11, question: "[Câu 11] Cấu trúc nào mô tả hệ thống có: 1 luồng lệnh, nhiều luồng dữ liệu?", options: ["MISD", "SISD", "SIMD", "MIMD"], correctIndex: 2, explanation: "SIMD = Single Instruction Multiple Data." },
      { id: 12, question: "[Câu 12] CPU có tần số hoạt động 3 GHz, CPI trung bình là 1.5. Tốc độ của CPU là bao nhiêu MIPS?", options: ["2000 MIPS", "1000 MIPS", "3000 MIPS", "4000 MIPS"], correctIndex: 0, explanation: "MIPS = f / CPI = 3*10^3 / 1.5 = 2000 MIPS." },
      { id: 13, question: "[Câu 13] Tập lệnh MIPS thuộc kiến trúc nào?", options: ["RISC", "MISD", "VLIW", "CISC"], correctIndex: 0, explanation: "MIPS là một trong những chuẩn RISC phổ biến nhất." },
      { id: 14, question: "[Câu 14] Khối nào KHÔNG thuộc 4 khối phần cứng cơ bản của một hệ thống máy tính?", options: ["CPU", "Hệ thống I/O", "Bộ nhớ chính", "Trình biên dịch (Compiler)"], correctIndex: 3, explanation: "Trình biên dịch là phần mềm cơ sở, không phải thành phần phần cứng." },
      { id: 15, question: "[Câu 15] Phương pháp ánh xạ trực tiếp (Direct Mapping) cho Cache sử dụng nguyên tắc:", options: ["Block được nạp vào bất kỳ Line nào trống", "Line = Block * Số_Line", "Line = Block / Số_Line", "Line = Block mod Số_Line"], correctIndex: 3, explanation: "Block thứ j của RAM được ánh xạ cố định vào Line thứ (j mod m) của Cache." },
      { id: 16, question: "[Câu 16] Nguyên tắc hoạt động của ngăn xếp (Stack) là:", options: ["Truy cập ngẫu nhiên theo địa chỉ", "Truy cập tuần tự (Sequential)", "FIFO (Vào trước ra trước)", "LIFO (Vào sau ra trước)"], correctIndex: 3, explanation: "Stack tuân theo LIFO (Last In First Out)." },
      { id: 17, question: "[Câu 17] Thế hệ máy tính thứ hai (Generation 2) sử dụng công nghệ linh kiện nào?", options: ["VLSI / ULSI", "IC (Vi mạch tích hợp)", "Transistor", "Bóng đèn chân không (Tubes)"], correctIndex: 2, explanation: "Thế hệ 2 đánh dấu sự xuất hiện của bóng bán dẫn (Transistor) thay cho bóng chân không." },
      { id: 18, question: "[Câu 18] Kiến trúc NUMA khác UMA ở điểm cơ bản nào?", options: ["Chỉ dùng cho hệ thống một nhân (Single core)", "Bộ nhớ NUMA không cho phép hệ điều hành ghi dữ liệu", "Thời gian truy cập phụ thuộc vào vị trí bộ nhớ vật lý", "Không sử dụng chung không gian địa chỉ"], correctIndex: 2, explanation: "Non-Uniform Memory Access có độ trễ bộ nhớ khác biệt tùy vị trí của node." },
      { id: 19, question: "[Câu 19] Dữ liệu trong RAM sẽ như thế nào khi hệ thống mất nguồn điện?", options: ["Tự động sao lưu sang ROM", "Bị mất toàn bộ do tính khả biến", "Vẫn được lưu giữ an toàn", "Chỉ mất đi một nửa dung lượng lưu tạm"], correctIndex: 1, explanation: "RAM là bộ nhớ khả biến (volatile), mất dữ liệu khi cúp điện." },
      { id: 20, question: "[Câu 20] Cấu trúc máy tính (Computer Organization) chủ yếu nghiên cứu về:", options: ["Góc nhìn của người lập trình (ISA)", "Cách viết mã hợp ngữ tối ưu", "Cách các thành phần phần cứng kết nối và vận hành", "Quy trình chế tạo vật lý vi mạch (VLSI)"], correctIndex: 2, explanation: "Organization mô tả cách các khối vận hành và kết nối với nhau để thực thi ISA." },
      { id: 21, question: "[Câu 21] Máy A chạy chương trình P mất 15 giây. Máy B chạy chương trình P mất 5 giây. Hiệu năng của máy B so với máy A là bao nhiêu?", options: ["Gấp 4.0 lần", "Bằng 1/3.0 lần", "Gấp 3.0 lần", "Gấp 6.0 lần"], correctIndex: 2, explanation: "Hiệu năng = T_A / T_B = 15 / 5 = 3.0 lần." },
      { id: 22, question: "[Câu 22] Một đoạn code có 80% thời gian chạy có thể được thực thi song song. Nếu chạy trên hệ thống có 4 core, Speedup tối đa đạt được xấp xỉ là:", options: ["2.50 lần", "2.00 lần", "2.505 lần", "4.00 lần"], correctIndex: 0, explanation: "Amdahl: 1 / ((1 - 0.8) + 0.8/4) = 2.50." },
      { id: 23, question: "[Câu 23] Với kiến trúc Pipeline 6 giai đoạn (stage), để thực thi lý tưởng một chương trình có 50 lệnh (không stall, không phân nhánh), cần bao nhiêu chu kỳ máy?", options: ["56 chu kỳ", "300 chu kỳ", "55 chu kỳ", "54 chu kỳ"], correctIndex: 2, explanation: "Số chu kỳ lý tưởng: k + n - 1 = 6 + 50 - 1 = 55." },
      { id: 24, question: "[Câu 24] CPU có tần số 5 GHz. Một chương trình cần thực thi 10000000 lệnh, CPI = 2.5. Thời gian thực thi là:", options: ["5.0 ms", "2.5 ms", "50.0 ms", "10.0 ms"], correctIndex: 0, explanation: "T = I * CPI / f = 10000000 * 2.5 / 5GHz = 5.0 ms." },
      { id: 25, question: "[Câu 25] Mã thao tác (Opcode) trong cấu trúc của một lệnh máy dùng để làm gì?", options: ["Xác định chế độ ưu tiên ngắt", "Lưu trữ dữ liệu đầu vào", "Lưu địa chỉ của lệnh tiếp theo", "Xác định phép toán sẽ được thực hiện"], correctIndex: 3, explanation: "Opcode (Operation Code) mã hóa thao tác của lệnh." },
      { id: 26, question: "[Câu 26] CPU có tần số hoạt động 5 GHz, CPI trung bình là 2.5. Tốc độ của CPU là bao nhiêu MIPS?", options: ["1000 MIPS", "4000 MIPS", "3000 MIPS", "2000 MIPS"], correctIndex: 3, explanation: "MIPS = f / CPI = 5*10^3 / 2.5 = 2000 MIPS." },
      { id: 27, question: "[Câu 27] Thanh ghi PC (Program Counter) chứa thông tin gì?", options: ["Lệnh đang được giải mã", "Địa chỉ của lệnh tiếp theo sẽ được nạp", "Địa chỉ của đỉnh Stack", "Kết quả của phép toán vừa thực hiện"], correctIndex: 1, explanation: "PC luôn trỏ tới địa chỉ bộ nhớ chứa lệnh kế tiếp." },
      { id: 28, question: "[Câu 28] Khi xảy ra sự kiện Cache Miss, CPU sẽ phải làm thao tác nào?", options: ["Tắt hệ thống và kích hoạt Exception", "Gửi lệnh đọc trực tiếp từ Ổ cứng từ tính", "Xóa sạch bộ đệm TLB", "Nạp block chứa dữ liệu từ Bộ nhớ chính vào Cache"], correctIndex: 3, explanation: "Miss penalty bao gồm việc sao chép dữ liệu từ Main Memory lên Cache để xử lý tiếp." },
      { id: 29, question: "[Câu 29] Với kiến trúc Pipeline 4 giai đoạn (stage), để thực thi lý tưởng một chương trình có 1000 lệnh (không stall, không phân nhánh), cần bao nhiêu chu kỳ máy?", options: ["1002 chu kỳ", "1004 chu kỳ", "4000 chu kỳ", "1003 chu kỳ"], correctIndex: 3, explanation: "Số chu kỳ lý tưởng: k + n - 1 = 4 + 1000 - 1 = 1003." },
      { id: 30, question: "[Câu 30] Hazard dữ liệu (Data Hazard) trong Pipeline xảy ra khi nào?", options: ["Hai lệnh cùng tranh chấp một tài nguyên phần cứng", "Một lệnh phụ thuộc vào kết quả của lệnh trước đó chưa tính xong", "Mất điện đột ngột trong Pipeline", "Hệ thống nhảy (branch) sai hướng dự đoán"], correctIndex: 1, explanation: "Data Hazard là sự phụ thuộc dữ liệu giữa các lệnh kề nhau." },
      { id: 31, question: "[Câu 31] Bộ xử lý đồ họa (GPU) tối ưu vượt trội cho dạng xử lý nào?", options: ["Xử lý tuần tự các logic rẽ nhánh phức tạp", "Quản lý ngắt ngoại vi cơ bản", "Chạy hệ điều hành cốt lõi (OS)", "Song song dữ liệu (Data Parallelism)"], correctIndex: 3, explanation: "GPU chứa hàng ngàn core nhỏ thích hợp cho SIMD và các ma trận dữ liệu khổng lồ." },
      { id: 32, question: "[Câu 32] Máy A chạy chương trình P mất 100 giây. Máy B chạy chương trình P mất 25 giây. Hiệu năng của máy B so với máy A là bao nhiêu?", options: ["Gấp 5.0 lần", "Gấp 8.0 lần", "Gấp 4.0 lần", "Bằng 1/4.0 lần"], correctIndex: 2, explanation: "Hiệu năng = T_A / T_B = 100 / 25 = 4.0 lần." },
      { id: 33, question: "[Câu 33] Bus nào truyền tải tín hiệu Read/Write từ CPU đến Bộ nhớ?", options: ["Data Bus (Bus dữ liệu)", "Interrupt Bus", "Address Bus (Bus địa chỉ)", "Control Bus (Bus điều khiển)"], correctIndex: 3, explanation: "Các tín hiệu điều khiển việc đọc/ghi nằm trên Control Bus." },
      { id: 34, question: "[Câu 34] CPU có tần số hoạt động 2.4 GHz, CPI trung bình là 1.2. Tốc độ của CPU là bao nhiêu MIPS?", options: ["2000 MIPS", "4000 MIPS", "1000 MIPS", "3000 MIPS"], correctIndex: 0, explanation: "MIPS = f / CPI = 2.4*10^3 / 1.2 = 2000 MIPS." },
      { id: 35, question: "[Câu 35] Máy A chạy chương trình P mất 20 giây. Máy B chạy chương trình P mất 16 giây. Hiệu năng của máy B so với máy A là bao nhiêu?", options: ["Gấp 1.25 lần", "Gấp 2.25 lần", "Gấp 2.5 lần", "Bằng 1/1.25 lần"], correctIndex: 0, explanation: "Hiệu năng = T_A / T_B = 20 / 16 = 1.25 lần." },
      { id: 36, question: "[Câu 36] Một đoạn code có 75% thời gian chạy có thể được thực thi song song. Nếu chạy trên hệ thống có 4 core, Speedup tối đa đạt được xấp xỉ là:", options: ["4.00 lần", "2.29 lần", "2.295 lần", "2.00 lần"], correctIndex: 1, explanation: "Amdahl: 1 / ((1 - 0.75) + 0.75/4) = 2.29." },
      { id: 37, question: "[Câu 37] Một hệ thống dùng địa chỉ 24 bit, bộ nhớ Cache Direct Mapped dung lượng 32 KB, kích thước mỗi block (line) là 8 Byte. Số bit Tag là:", options: ["7 bit", "12 bit", "9 bit", "11 bit"], correctIndex: 2, explanation: "Offset=3, Index=log2(32KB/8)=12. Tag=24-12-3=9." },
      { id: 38, question: "[Câu 38] Trong thực tế, lý do khiến số chu kỳ Pipeline trung bình lớn hơn mức lý tưởng (T_ideal) chủ yếu là:", options: ["Xuất hiện các xung đột (Hazard) gây đình trệ (stall)", "Chu kỳ đồng hồ bị chạy chậm", "Dung lượng HDD quá nhỏ", "Nhiệt độ CPU quá nóng"], correctIndex: 0, explanation: "Hazard dữ liệu, cấu trúc, điều khiển khiến Pipeline phải chèn bong bóng (stall)." },
      { id: 39, question: "[Câu 39] Đối với phép cộng số nguyên có dấu (bù 2), hiện tượng tràn (Overflow) sẽ chắc chắn KHÔNG xảy ra khi:", options: ["Cộng hai số khác dấu", "Kết quả bằng 0", "Cộng hai số dương", "Cộng hai số âm"], correctIndex: 0, explanation: "Tràn có dấu chỉ có nguy cơ xảy ra khi cộng hai số CÙNG dấu (âm + âm hoặc dương + dương)." },
      { id: 40, question: "[Câu 40] Thanh ghi IR (Instruction Register) có chức năng gì?", options: ["Lưu lệnh đang được CPU giải mã và thực thi", "Lưu kết quả của khối tính toán ALU", "Lưu địa chỉ đỉnh Stack", "Đếm số lệnh đã được xử lý"], correctIndex: 0, explanation: "IR giữ lệnh hiện tại để Control Unit phân tích." },
      { id: 41, question: "[Câu 41] CPU có tần số 1 GHz. Một chương trình cần thực thi 500000 lệnh, CPI = 4. Thời gian thực thi là:", options: ["2.0 ms", "1.0 ms", "4.0 ms", "20.0 ms"], correctIndex: 0, explanation: "T = I * CPI / f = 500000 * 4 / 1GHz = 2.0 ms." },
      { id: 42, question: "[Câu 42] Với kiến trúc Pipeline 5 giai đoạn (stage), để thực thi lý tưởng một chương trình có 500 lệnh (không stall, không phân nhánh), cần bao nhiêu chu kỳ máy?", options: ["505 chu kỳ", "504 chu kỳ", "2500 chu kỳ", "503 chu kỳ"], correctIndex: 1, explanation: "Số chu kỳ lý tưởng: k + n - 1 = 5 + 500 - 1 = 504." },
      { id: 43, question: "[Câu 43] Dạng biểu diễn bù 2 (8 bit) của số nguyên -100 là:", options: ["11111111", "01100100", "10011100", "10000000"], correctIndex: 2, explanation: "Bù 2 của -100: Lấy trị tuyệt đối đảo bit rồi cộng 1 -> 10011100." },
      { id: 44, question: "[Câu 44] CPU có tần số hoạt động 2.5 GHz, CPI trung bình là 4. Tốc độ của CPU là bao nhiêu MIPS?", options: ["937 MIPS", "625 MIPS", "312 MIPS", "1250 MIPS"], correctIndex: 1, explanation: "MIPS = f / CPI = 2.5*10^3 / 4 = 625 MIPS." },
      { id: 45, question: "[Câu 45] Một hệ thống dùng địa chỉ 32 bit, bộ nhớ Cache Direct Mapped dung lượng 128 KB, kích thước mỗi block (line) là 32 Byte. Số bit Tag là:", options: ["12 bit", "17 bit", "13 bit", "15 bit"], correctIndex: 3, explanation: "Offset=5, Index=log2(128KB/32)=12. Tag=32-12-5=15." },
      { id: 46, question: "[Câu 46] Trong phép cộng/trừ số nhị phân không dấu, nếu tràn kết quả ra khỏi phạm vi n bit thì cờ nào sẽ được CPU bật?", options: ["IF (Interrupt Flag)", "CF (Carry Flag)", "ZF (Zero Flag)", "OF (Overflow Flag)"], correctIndex: 1, explanation: "Phép tính không dấu dùng cờ CF để nhận biết hiện tượng tràn nhớ/mượn." },
      { id: 47, question: "[Câu 47] Chế độ định địa chỉ gián tiếp thanh ghi (Register Indirect) có nghĩa là:", options: ["Thanh ghi chứa địa chỉ lệnh rẽ nhánh kế tiếp", "Bản thân thanh ghi là toán hạng tham gia tính", "Thanh ghi chứa địa chỉ của toán hạng trong bộ nhớ", "Thanh ghi lưu một giá trị nhị phân tĩnh (Immediate)"], correctIndex: 2, explanation: "Trong Register Indirect, thanh ghi đóng vai trò con trỏ chứa địa chỉ nhớ." },
      { id: 48, question: "[Câu 48] Một đoạn code có 50% thời gian chạy có thể được thực thi song song. Nếu chạy trên hệ thống có 2 core, Speedup tối đa đạt được xấp xỉ là:", options: ["4.00 lần", "1.335 lần", "2.00 lần", "1.33 lần"], correctIndex: 3, explanation: "Amdahl: 1 / ((1 - 0.5) + 0.5/2) = 1.33." },
      { id: 49, question: "[Câu 49] Tín hiệu CS (Chip Select) trong thiết kế ghép nối vi mạch nhớ dùng để làm gì?", options: ["Đóng băng thanh ghi dữ liệu", "Kích hoạt chip nhớ tương ứng để cho phép đọc/ghi", "Kích hoạt chế độ Sleep tiết kiệm điện", "Chọn tốc độ truyền tải bus"], correctIndex: 1, explanation: "CS đảm bảo chỉ chip nhớ nào được CPU gọi mới có quyền tương tác với Data Bus." },
      { id: 50, question: "[Câu 50] Một đoạn code có 60% thời gian chạy có thể được thực thi song song. Nếu chạy trên hệ thống có 2 core, Speedup tối đa đạt được xấp xỉ là:", options: ["1.435 lần", "4.00 lần", "2.00 lần", "1.43 lần"], correctIndex: 3, explanation: "Amdahl: 1 / ((1 - 0.6) + 0.6/2) = 1.43." },
      { id: 51, question: "[Câu 51] CPU có tần số 2 GHz. Một chương trình cần thực thi 1000000 lệnh, CPI = 2. Thời gian thực thi là:", options: ["1.0 ms", "10.0 ms", "0.5 ms", "2.0 ms"], correctIndex: 0, explanation: "T = I * CPI / f = 1000000 * 2 / 2GHz = 1.0 ms." },
      { id: 52, question: "[Câu 52] CPU có tần số 3 GHz. Một chương trình cần thực thi 2000000 lệnh, CPI = 1.5. Thời gian thực thi là:", options: ["1.0 ms", "10.0 ms", "0.5 ms", "2.0 ms"], correctIndex: 0, explanation: "T = I * CPI / f = 2000000 * 1.5 / 3GHz = 1.0 ms." },
      { id: 53, question: "[Câu 53] Trong bộ nhớ phân cấp (Memory Hierarchy), thứ tự bộ nhớ từ nhanh nhất đến chậm nhất là:", options: ["Thanh ghi, RAM, Cache, Bộ nhớ ngoài", "RAM, Thanh ghi, Cache, HDD", "Thanh ghi, Cache, RAM, Bộ nhớ ngoài", "Cache, Thanh ghi, RAM, Bộ nhớ ngoài"], correctIndex: 2, explanation: "Thanh ghi nằm trong CPU nên nhanh nhất, sau đó đến Cache, RAM và HDD/SSD." },
      { id: 54, question: "[Câu 54] Thành phần nào trong CPU có nhiệm vụ giải mã lệnh?", options: ["Thanh ghi", "Control Unit (CU)", "Memory", "ALU"], correctIndex: 1, explanation: "CU chịu trách nhiệm giải mã và phát tín hiệu điều khiển." },
      { id: 55, question: "[Câu 55] Máy A chạy chương trình P mất 12 giây. Máy B chạy chương trình P mất 4 giây. Hiệu năng của máy B so với máy A là bao nhiêu?", options: ["Gấp 3.0 lần", "Gấp 4.0 lần", "Gấp 6.0 lần", "Bằng 1/3.0 lần"], correctIndex: 0, explanation: "Hiệu năng = T_A / T_B = 12 / 4 = 3.0 lần." },
      { id: 56, question: "[Câu 56] CPU có tần số 4 GHz. Một chương trình cần thực thi 4000000 lệnh, CPI = 2. Thời gian thực thi là:", options: ["2.0 ms", "1.0 ms", "4.0 ms", "20.0 ms"], correctIndex: 0, explanation: "T = I * CPI / f = 4000000 * 2 / 4GHz = 2.0 ms." },
      { id: 57, question: "[Câu 57] Một hệ thống dùng địa chỉ 32 bit, bộ nhớ Cache Direct Mapped dung lượng 256 KB, kích thước mỗi block (line) là 64 Byte. Số bit Tag là:", options: ["16 bit", "14 bit", "12 bit", "10 bit"], correctIndex: 1, explanation: "Offset=6, Index=log2(256KB/64)=12. Tag=32-12-6=14." },
      { id: 58, question: "[Câu 58] Một đoạn code có 90% thời gian chạy có thể được thực thi song song. Nếu chạy trên hệ thống có 3 core, Speedup tối đa đạt được xấp xỉ là:", options: ["2.00 lần", "2.50 lần", "2.505 lần", "4.00 lần"], correctIndex: 1, explanation: "Amdahl: 1 / ((1 - 0.9) + 0.9/3) = 2.50." },
      { id: 59, question: "[Câu 59] Dạng biểu diễn bù 2 (8 bit) của số nguyên -25 là:", options: ["11100111", "10000000", "11111111", "00011001"], correctIndex: 0, explanation: "Bù 2 của -25: Lấy trị tuyệt đối đảo bit rồi cộng 1 -> 11100111." },
      { id: 60, question: "[Câu 60] Ngắt (Interrupt) cho phép hệ thống CPU thực hiện điều gì?", options: ["Tạm dừng chương trình hiện hành để phục vụ một sự kiện ưu tiên", "Xóa quyền truy cập của người dùng", "Xóa toàn bộ Cache rác", "Thay đổi tần số hoạt động để làm mát"], correctIndex: 0, explanation: "Ngắt giúp CPU xử lý kịp thời các sự kiện hệ thống/phần cứng mà không cần chờ đợi." },
      { id: 61, question: "[Câu 61] Máy A chạy chương trình P mất 10 giây. Máy B chạy chương trình P mất 8 giây. Hiệu năng của máy B so với máy A là bao nhiêu?", options: ["Gấp 1.25 lần", "Gấp 2.25 lần", "Bằng 1/1.25 lần", "Gấp 2.5 lần"], correctIndex: 0, explanation: "Hiệu năng = T_A / T_B = 10 / 8 = 1.25 lần." },
      { id: 62, question: "[Câu 62] Theo tài liệu, cờ ZF (Zero Flag) có giá trị 1 khi nào?", options: ["Kết quả âm", "Kết quả phép toán bằng 0", "Có nhớ (carry)", "Tràn có dấu"], correctIndex: 1, explanation: "Zero Flag bật khi ALU tính ra kết quả 0." },
      { id: 63, question: "[Câu 63] Trong định dạng số dấu phẩy động chuẩn IEEE 754 (Binary32), số bit dành cho phần mũ (Exponent) là:", options: ["23 bit", "1 bit", "11 bit", "8 bit"], correctIndex: 3, explanation: "Cấu trúc 1 bit Dấu, 8 bit Mũ, 23 bit Phần trị (Fraction)." },
      { id: 64, question: "[Câu 64] CPU có tần số hoạt động 2 GHz, CPI trung bình là 2. Tốc độ của CPU là bao nhiêu MIPS?", options: ["2000 MIPS", "1000 MIPS", "1500 MIPS", "500 MIPS"], correctIndex: 1, explanation: "MIPS = f / CPI = 2*10^3 / 2 = 1000 MIPS." },
      { id: 65, question: "[Câu 65] Để nạp một từ (word) từ bộ nhớ vào thanh ghi trong tập lệnh MIPS, lệnh nào được sử dụng?", options: ["add", "sw", "lw", "jmp"], correctIndex: 2, explanation: "lw = load word, sw = store word." }
    ]
  },
  5: {
    id: 5,
    code: "505",
    title: "Đề Thi 05 - Mã Đề 505 (Kiến Trúc Máy Tính)",
    description: "Bộ đề 65 câu tập trung tính toán: Pipeline 8-10 stages, Cache Direct Mapped, CPI, MIPS, Amdahl & Bù 2.",
    timePerQuestion: 20,
    questions: [
      { id: 1, question: "[Câu 1] Với kiến trúc Pipeline 8 giai đoạn (stage), để thực thi lý tưởng một chương trình có 200 lệnh (không stall, không phân nhánh), cần bao nhiêu chu kỳ máy?", options: ["207 chu kỳ", "209 chu kỳ", "206 chu kỳ", "1600 chu kỳ"], correctIndex: 0, explanation: "Số chu kỳ lý tưởng: k + n - 1 = 8 + 200 - 1 = 207." },
      { id: 2, question: "[Câu 2] Một đoạn code có 95% thời gian chạy có thể được thực thi song song. Nếu chạy trên hệ thống có 8 core, Speedup tối đa đạt được xấp xỉ là:", options: ["5.93 lần", "3.00 lần", "5.935 lần", "2.50 lần"], correctIndex: 0, explanation: "Amdahl: 1 / ((1 - 0.95) + 0.95/8) = 5.93." },
      { id: 3, question: "[Câu 3] Một đoạn code có 40% thời gian chạy có thể được thực thi song song. Nếu chạy trên hệ thống có 2 core, Speedup tối đa đạt được xấp xỉ là:", options: ["1.255 lần", "1.25 lần", "3.00 lần", "2.50 lần"], correctIndex: 1, explanation: "Amdahl: 1 / ((1 - 0.4) + 0.4/2) = 1.25." },
      { id: 4, question: "[Câu 4] Máy A chạy chương trình P mất 120 giây. Máy B chạy chương trình P mất 40 giây. Hiệu năng của máy B so với máy A là bao nhiêu?", options: ["Bằng 1/3.0 lần", "Gấp 3.0 lần", "Gấp 4.0 lần", "Gấp 2.0 lần"], correctIndex: 1, explanation: "Hiệu năng = T_A / T_B = 120 / 40 = 3.0 lần." },
      { id: 5, question: "[Câu 5] Máy A chạy chương trình P mất 50 giây. Máy B chạy chương trình P mất 20 giây. Hiệu năng của máy B so với máy A là bao nhiêu?", options: ["Gấp 3.5 lần", "Bằng 1/2.5 lần", "Gấp 2.5 lần", "Gấp 1.5 lần"], correctIndex: 2, explanation: "Hiệu năng = T_A / T_B = 50 / 20 = 2.5 lần." },
      { id: 6, question: "[Câu 6] Đối với phép cộng số nguyên có dấu (bù 2), hiện tượng tràn (Overflow) sẽ chắc chắn KHÔNG xảy ra khi:", options: ["Cộng hai số khác dấu", "Kết quả bằng 0", "Cộng hai số dương", "Cộng hai số âm"], correctIndex: 0, explanation: "Tràn có dấu chỉ có nguy cơ xảy ra khi cộng hai số CÙNG dấu (âm + âm hoặc dương + dương)." },
      { id: 7, question: "[Câu 7] Bus nào truyền tải tín hiệu Read/Write từ CPU đến Bộ nhớ?", options: ["Data Bus (Bus dữ liệu)", "Interrupt Bus", "Address Bus (Bus địa chỉ)", "Control Bus (Bus điều khiển)"], correctIndex: 3, explanation: "Các tín hiệu điều khiển việc đọc/ghi nằm trên Control Bus." },
      { id: 8, question: "[Câu 8] Kỹ thuật Pipeline giúp cải thiện yếu tố nào của hệ thống máy tính?", options: ["Dung lượng bộ nhớ", "Giảm mọi độ trễ của 1 lệnh đơn", "Tần số (Clock rate)", "Thông lượng lệnh (Throughput)"], correctIndex: 3, explanation: "Pipeline hoàn thành nhiều lệnh hơn trong một đơn vị thời gian (Throughput)." },
      { id: 9, question: "[Câu 9] CPU có tần số 2.5 GHz. Một chương trình cần thực thi 5000000 lệnh, CPI = 2. Thời gian thực thi là:", options: ["8.0 ms", "40.0 ms", "2.0 ms", "4.0 ms"], correctIndex: 3, explanation: "T = I * CPI / f = 5000000 * 2 / 2.5GHz = 4.0 ms." },
      { id: 10, question: "[Câu 10] CPU có tần số 3 GHz. Một chương trình cần thực thi 1000000 lệnh, CPI = 1.2. Thời gian thực thi là:", options: ["0.8 ms", "0.2 ms", "0.4 ms", "4.0 ms"], correctIndex: 2, explanation: "T = I * CPI / f = 1000000 * 1.2 / 3GHz = 0.4 ms." },
      { id: 11, question: "[Câu 11] Mã thao tác (Opcode) trong cấu trúc của một lệnh máy dùng để làm gì?", options: ["Xác định phép toán sẽ được thực hiện", "Lưu trữ dữ liệu đầu vào", "Xác định chế độ ưu tiên ngắt", "Lưu địa chỉ của lệnh tiếp theo"], correctIndex: 0, explanation: "Opcode (Operation Code) mã hóa thao tác của lệnh." },
      { id: 12, question: "[Câu 12] Thành phần nào trong CPU có nhiệm vụ giải mã lệnh?", options: ["Memory", "Control Unit (CU)", "Thanh ghi", "ALU"], correctIndex: 1, explanation: "CU chịu trách nhiệm giải mã và phát tín hiệu điều khiển." },
      { id: 13, question: "[Câu 13] CPU có tần số hoạt động 4.4 GHz, CPI trung bình là 2.2. Tốc độ của CPU là bao nhiêu MIPS?", options: ["1999 MIPS", "2999 MIPS", "999 MIPS", "2499 MIPS"], correctIndex: 0, explanation: "MIPS = f / CPI = 4.4*10^3 / 2.2 = 1999 MIPS." },
      { id: 14, question: "[Câu 14] CPU có tần số 2 GHz. Một chương trình cần thực thi 800000 lệnh, CPI = 5. Thời gian thực thi là:", options: ["2.0 ms", "4.0 ms", "1.0 ms", "20.0 ms"], correctIndex: 0, explanation: "T = I * CPI / f = 800000 * 5 / 2GHz = 2.0 ms." },
      { id: 15, question: "[Câu 15] CPU có tần số 4 GHz. Một chương trình cần thực thi 20000000 lệnh, CPI = 2. Thời gian thực thi là:", options: ["100.0 ms", "20.0 ms", "10.0 ms", "5.0 ms"], correctIndex: 2, explanation: "T = I * CPI / f = 20000000 * 2 / 4GHz = 10.0 ms." },
      { id: 16, question: "[Câu 16] Dữ liệu trong RAM sẽ như thế nào khi hệ thống mất nguồn điện?", options: ["Chỉ mất đi một nửa dung lượng lưu tạm", "Vẫn được lưu giữ an toàn", "Tự động sao lưu sang ROM", "Bị mất toàn bộ do tính khả biến"], correctIndex: 3, explanation: "RAM là bộ nhớ khả biến (volatile), mất dữ liệu khi cúp điện." },
      { id: 17, question: "[Câu 17] Kiến trúc NUMA khác UMA ở điểm cơ bản nào?", options: ["Chỉ dùng cho hệ thống một nhân (Single core)", "Không sử dụng chung không gian địa chỉ", "Bộ nhớ NUMA không cho phép hệ điều hành ghi dữ liệu", "Thời gian truy cập phụ thuộc vào vị trí bộ nhớ vật lý"], correctIndex: 3, explanation: "Non-Uniform Memory Access có độ trễ bộ nhớ khác biệt tùy vị trí của node." },
      { id: 18, question: "[Câu 18] Chế độ định địa chỉ gián tiếp thanh ghi (Register Indirect) có nghĩa là:", options: ["Thanh ghi chứa địa chỉ lệnh rẽ nhánh kế tiếp", "Bản thân thanh ghi là toán hạng tham gia tính", "Thanh ghi lưu một giá trị nhị phân tĩnh (Immediate)", "Thanh ghi chứa địa chỉ của toán hạng trong bộ nhớ"], correctIndex: 3, explanation: "Trong Register Indirect, thanh ghi đóng vai trò con trỏ chứa địa chỉ nhớ." },
      { id: 19, question: "[Câu 19] Máy A chạy chương trình P mất 24 giây. Máy B chạy chương trình P mất 6 giây. Hiệu năng của máy B so với máy A là bao nhiêu?", options: ["Gấp 4.0 lần", "Gấp 5.0 lần", "Gấp 3.0 lần", "Bằng 1/4.0 lần"], correctIndex: 0, explanation: "Hiệu năng = T_A / T_B = 24 / 6 = 4.0 lần." },
      { id: 20, question: "[Câu 20] Với kiến trúc Pipeline 4 giai đoạn (stage), để thực thi lý tưởng một chương trình có 150 lệnh (không stall, không phân nhánh), cần bao nhiêu chu kỳ máy?", options: ["155 chu kỳ", "152 chu kỳ", "153 chu kỳ", "600 chu kỳ"], correctIndex: 2, explanation: "Số chu kỳ lý tưởng: k + n - 1 = 4 + 150 - 1 = 153." },
      { id: 21, question: "[Câu 21] CPU có tần số hoạt động 3.0 GHz, CPI trung bình là 3.0. Tốc độ của CPU là bao nhiêu MIPS?", options: ["500 MIPS", "1500 MIPS", "1500 MIPS", "1000 MIPS"], correctIndex: 3, explanation: "MIPS = f / CPI = 3.0*10^3 / 3.0 = 1000 MIPS." },
      { id: 22, question: "[Câu 22] Dạng biểu diễn bù 2 (8 bit) của số nguyên -33 là:", options: ["11110000", "10101010", "11011111", "00100001"], correctIndex: 2, explanation: "Bù 2 của -33: Lấy trị tuyệt đối đảo bit rồi cộng 1 -> 11011111." },
      { id: 23, question: "[Câu 23] CPU có tần số 5 GHz. Một chương trình cần thực thi 4000000 lệnh, CPI = 2.5. Thời gian thực thi là:", options: ["20.0 ms", "2.0 ms", "4.0 ms", "1.0 ms"], correctIndex: 1, explanation: "T = I * CPI / f = 4000000 * 2.5 / 5GHz = 2.0 ms." },
      { id: 24, question: "[Câu 24] Tập lệnh MIPS thuộc kiến trúc nào?", options: ["VLIW", "CISC", "MISD", "RISC"], correctIndex: 3, explanation: "MIPS là một trong những chuẩn RISC phổ biến nhất." },
      { id: 25, question: "[Câu 25] Nguyên tắc hoạt động của ngăn xếp (Stack) là:", options: ["Truy cập tuần tự (Sequential)", "LIFO (Vào sau ra trước)", "Truy cập ngẫu nhiên theo địa chỉ", "FIFO (Vào trước ra trước)"], correctIndex: 1, explanation: "Stack tuân theo LIFO (Last In First Out)." },
      { id: 26, question: "[Câu 26] Theo tài liệu, cờ ZF (Zero Flag) có giá trị 1 khi nào?", options: ["Kết quả âm", "Tràn có dấu", "Kết quả phép toán bằng 0", "Có nhớ (carry)"], correctIndex: 2, explanation: "Zero Flag bật khi ALU tính ra kết quả 0." },
      { id: 27, question: "[Câu 27] Tín hiệu CS (Chip Select) trong thiết kế ghép nối vi mạch nhớ dùng để làm gì?", options: ["Kích hoạt chip nhớ tương ứng để cho phép đọc/ghi", "Đóng băng thanh ghi dữ liệu", "Kích hoạt chế độ Sleep tiết kiệm điện", "Chọn tốc độ truyền tải bus"], correctIndex: 0, explanation: "CS đảm bảo chỉ chip nhớ nào được CPU gọi mới có quyền tương tác với Data Bus." },
      { id: 28, question: "[Câu 28] Một hệ thống dùng địa chỉ 24 bit, bộ nhớ Cache Direct Mapped dung lượng 16 KB, kích thước mỗi block (line) là 8 Byte. Số bit Tag là:", options: ["11 bit", "10 bit", "9 bit", "11 bit"], correctIndex: 1, explanation: "Offset=3, Index=log2(16KB/8)=11. Tag=24-11-3=10." },
      { id: 29, question: "[Câu 29] Thanh ghi IR (Instruction Register) có chức năng gì?", options: ["Lưu kết quả của khối tính toán ALU", "Lưu địa chỉ đỉnh Stack", "Lưu lệnh đang được CPU giải mã và thực thi", "Đếm số lệnh đã được xử lý"], correctIndex: 2, explanation: "IR giữ lệnh hiện tại để Control Unit phân tích." },
      { id: 30, question: "[Câu 30] Với kiến trúc Pipeline 10 giai đoạn (stage), để thực thi lý tưởng một chương trình có 50 lệnh (không stall, không phân nhánh), cần bao nhiêu chu kỳ máy?", options: ["500 chu kỳ", "59 chu kỳ", "61 chu kỳ", "58 chu kỳ"], correctIndex: 1, explanation: "Số chu kỳ lý tưởng: k + n - 1 = 10 + 50 - 1 = 59." },
      { id: 31, question: "[Câu 31] Dạng biểu diễn bù 2 (8 bit) của số nguyên -111 là:", options: ["10010001", "10101010", "11110000", "01101111"], correctIndex: 0, explanation: "Bù 2 của -111: Lấy trị tuyệt đối đảo bit rồi cộng 1 -> 10010001." },
      { id: 32, question: "[Câu 32] Dạng biểu diễn bù 2 (8 bit) của số nguyên -42 là:", options: ["11110000", "11010110", "10101010", "00101010"], correctIndex: 1, explanation: "Bù 2 của -42: Lấy trị tuyệt đối đảo bit rồi cộng 1 -> 11010110." },
      { id: 33, question: "[Câu 33] Một đoạn code có 85% thời gian chạy có thể được thực thi song song. Nếu chạy trên hệ thống có 4 core, Speedup tối đa đạt được xấp xỉ là:", options: ["2.765 lần", "3.00 lần", "2.76 lần", "2.50 lần"], correctIndex: 2, explanation: "Amdahl: 1 / ((1 - 0.85) + 0.85/4) = 2.76." },
      { id: 34, question: "[Câu 34] Với kiến trúc Pipeline 6 giai đoạn (stage), để thực thi lý tưởng một chương trình có 300 lệnh (không stall, không phân nhánh), cần bao nhiêu chu kỳ máy?", options: ["304 chu kỳ", "305 chu kỳ", "1800 chu kỳ", "307 chu kỳ"], correctIndex: 1, explanation: "Số chu kỳ lý tưởng: k + n - 1 = 6 + 300 - 1 = 305." },
      { id: 35, question: "[Câu 35] Máy A chạy chương trình P mất 30 giây. Máy B chạy chương trình P mất 10 giây. Hiệu năng của máy B so với máy A là bao nhiêu?", options: ["Gấp 4.0 lần", "Gấp 2.0 lần", "Gấp 3.0 lần", "Bằng 1/3.0 lần"], correctIndex: 2, explanation: "Hiệu năng = T_A / T_B = 30 / 10 = 3.0 lần." },
      { id: 36, question: "[Câu 36] CPU có tần số hoạt động 3.6 GHz, CPI trung bình là 1.8. Tốc độ của CPU là bao nhiêu MIPS?", options: ["2500 MIPS", "3000 MIPS", "2000 MIPS", "1000 MIPS"], correctIndex: 2, explanation: "MIPS = f / CPI = 3.6*10^3 / 1.8 = 2000 MIPS." },
      { id: 37, question: "[Câu 37] Ngắt (Interrupt) cho phép hệ thống CPU thực hiện điều gì?", options: ["Xóa quyền truy cập của người dùng", "Thay đổi tần số hoạt động để làm mát", "Tạm dừng chương trình hiện hành để phục vụ một sự kiện ưu tiên", "Xóa toàn bộ Cache rác"], correctIndex: 2, explanation: "Ngắt giúp CPU xử lý kịp thời các sự kiện hệ thống/phần cứng mà không cần chờ đợi." },
      { id: 38, question: "[Câu 38] Để nạp một từ (word) từ bộ nhớ vào thanh ghi trong tập lệnh MIPS, lệnh nào được sử dụng?", options: ["sw", "add", "lw", "jmp"], correctIndex: 2, explanation: "lw = load word, sw = store word." },
      { id: 39, question: "[Câu 39] Dạng biểu diễn bù 2 (8 bit) của số nguyên -15 là:", options: ["10101010", "11110000", "11110001", "00001111"], correctIndex: 2, explanation: "Bù 2 của -15: Lấy trị tuyệt đối đảo bit rồi cộng 1 -> 11110001." },
      { id: 40, question: "[Câu 40] Cấu trúc máy tính (Computer Organization) chủ yếu nghiên cứu về:", options: ["Quy trình chế tạo vật lý vi mạch (VLSI)", "Góc nhìn của người lập trình (ISA)", "Cách các thành phần phần cứng kết nối và vận hành", "Cách viết mã hợp ngữ tối ưu"], correctIndex: 2, explanation: "Organization mô tả cách các khối vận hành và kết nối với nhau để thực thi ISA." },
      { id: 41, question: "[Câu 41] Thanh ghi PC (Program Counter) chứa thông tin gì?", options: ["Kết quả của phép toán vừa thực hiện", "Địa chỉ của lệnh tiếp theo sẽ được nạp", "Địa chỉ của đỉnh Stack", "Lệnh đang được giải mã"], correctIndex: 1, explanation: "PC luôn trỏ tới địa chỉ bộ nhớ chứa lệnh kế tiếp." },
      { id: 42, question: "[Câu 42] Bộ xử lý đồ họa (GPU) tối ưu vượt trội cho dạng xử lý nào?", options: ["Quản lý ngắt ngoại vi cơ bản", "Chạy hệ điều hành cốt lõi (OS)", "Xử lý tuần tự các logic rẽ nhánh phức tạp", "Song song dữ liệu (Data Parallelism)"], correctIndex: 3, explanation: "GPU chứa hàng ngàn core nhỏ thích hợp cho SIMD và các ma trận dữ liệu khổng lồ." },
      { id: 43, question: "[Câu 43] CPU có tần số hoạt động 3.8 GHz, CPI trung bình là 2.0. Tốc độ của CPU là bao nhiêu MIPS?", options: ["950 MIPS", "2850 MIPS", "2400 MIPS", "1900 MIPS"], correctIndex: 3, explanation: "MIPS = f / CPI = 3.8*10^3 / 2.0 = 1900 MIPS." },
      { id: 44, question: "[Câu 44] Đặc điểm nào dưới đây mô tả ĐÚNG về bộ nhớ SRAM?", options: ["Chậm, dung lượng lớn", "Cần phải làm tươi (refresh) liên tục", "Chỉ đọc không ghi được", "Nhanh, đắt, thường dùng làm Cache"], correctIndex: 3, explanation: "SRAM dùng các flip-flop, không cần refresh, tốc độ rất cao." },
      { id: 45, question: "[Câu 45] Máy A chạy chương trình P mất 45 giây. Máy B chạy chương trình P mất 15 giây. Hiệu năng của máy B so với máy A là bao nhiêu?", options: ["Bằng 1/3.0 lần", "Gấp 3.0 lần", "Gấp 2.0 lần", "Gấp 4.0 lần"], correctIndex: 1, explanation: "Hiệu năng = T_A / T_B = 45 / 15 = 3.0 lần." },
      { id: 46, question: "[Câu 46] Một đoạn code có 70% thời gian chạy có thể được thực thi song song. Nếu chạy trên hệ thống có 4 core, Speedup tối đa đạt được xấp xỉ là:", options: ["3.00 lần", "2.11 lần", "2.115 lần", "2.50 lần"], correctIndex: 1, explanation: "Amdahl: 1 / ((1 - 0.7) + 0.7/4) = 2.11." },
      { id: 47, question: "[Câu 47] Khối nào KHÔNG thuộc 4 khối phần cứng cơ bản của một hệ thống máy tính?", options: ["Bộ nhớ chính", "Hệ thống I/O", "Trình biên dịch (Compiler)", "CPU"], correctIndex: 2, explanation: "Trình biên dịch là phần mềm cơ sở, không phải thành phần phần cứng." },
      { id: 48, question: "[Câu 48] Hazard dữ liệu (Data Hazard) trong Pipeline xảy ra khi nào?", options: ["Hai lệnh cùng tranh chấp một tài nguyên phần cứng", "Mất điện đột ngột trong Pipeline", "Hệ thống nhảy (branch) sai hướng dự đoán", "Một lệnh phụ thuộc vào kết quả của lệnh trước đó chưa tính xong"], correctIndex: 3, explanation: "Data Hazard là sự phụ thuộc dữ liệu giữa các lệnh kề nhau." },
      { id: 49, question: "[Câu 49] Một hệ thống dùng địa chỉ 32 bit, bộ nhớ Cache Direct Mapped dung lượng 512 KB, kích thước mỗi block (line) là 32 Byte. Số bit Tag là:", options: ["12 bit", "14 bit", "13 bit", "14 bit"], correctIndex: 2, explanation: "Offset=5, Index=log2(512KB/32)=14. Tag=32-14-5=13." },
      { id: 50, question: "[Câu 50] Một hệ thống dùng địa chỉ 24 bit, bộ nhớ Cache Direct Mapped dung lượng 64 KB, kích thước mỗi block (line) là 32 Byte. Số bit Tag là:", options: ["11 bit", "9 bit", "8 bit", "7 bit"], correctIndex: 2, explanation: "Offset=5, Index=log2(64KB/32)=11. Tag=24-11-5=8." },
      { id: 51, question: "[Câu 51] Một đoạn code có 60% thời gian chạy có thể được thực thi song song. Nếu chạy trên hệ thống có 3 core, Speedup tối đa đạt được xấp xỉ là:", options: ["3.00 lần", "1.67 lần", "2.50 lần", "1.675 lần"], correctIndex: 1, explanation: "Amdahl: 1 / ((1 - 0.6) + 0.6/3) = 1.67." },
      { id: 52, question: "[Câu 52] CPU có tần số hoạt động 4.5 GHz, CPI trung bình là 1.5. Tốc độ của CPU là bao nhiêu MIPS?", options: ["1500 MIPS", "4500 MIPS", "3000 MIPS", "3500 MIPS"], correctIndex: 2, explanation: "MIPS = f / CPI = 4.5*10^3 / 1.5 = 3000 MIPS." },
      { id: 53, question: "[Câu 53] Khi xảy ra sự kiện Cache Miss, CPU sẽ phải làm thao tác nào?", options: ["Tắt hệ thống và kích hoạt Exception", "Xóa sạch bộ đệm TLB", "Gửi lệnh đọc trực tiếp từ Ổ cứng từ tính", "Nạp block chứa dữ liệu từ Bộ nhớ chính vào Cache"], correctIndex: 3, explanation: "Miss penalty bao gồm việc sao chép dữ liệu từ Main Memory lên Cache để xử lý tiếp." },
      { id: 54, question: "[Câu 54] Thế hệ máy tính thứ hai (Generation 2) sử dụng công nghệ linh kiện nào?", options: ["IC (Vi mạch tích hợp)", "Transistor", "Bóng đèn chân không (Tubes)", "VLSI / ULSI"], correctIndex: 1, explanation: "Thế hệ 2 đánh dấu sự xuất hiện của bóng bán dẫn (Transistor) thay cho bóng chân không." },
      { id: 55, question: "[Câu 55] Một hệ thống dùng địa chỉ 32 bit, bộ nhớ Cache Direct Mapped dung lượng 128 KB, kích thước mỗi block (line) là 16 Byte. Số bit Tag là:", options: ["13 bit", "16 bit", "14 bit", "15 bit"], correctIndex: 3, explanation: "Offset=4, Index=log2(128KB/16)=13. Tag=32-13-4=15." },
      { id: 56, question: "[Câu 56] Phương pháp ánh xạ trực tiếp (Direct Mapping) cho Cache sử dụng nguyên tắc:", options: ["Block được nạp vào bất kỳ Line nào trống", "Line = Block * Số_Line", "Line = Block / Số_Line", "Line = Block mod Số_Line"], correctIndex: 3, explanation: "Block thứ j của RAM được ánh xạ cố định vào Line thứ (j mod m) của Cache." },
      { id: 57, question: "[Câu 57] Với kiến trúc Pipeline 5 giai đoạn (stage), để thực thi lý tưởng một chương trình có 800 lệnh (không stall, không phân nhánh), cần bao nhiêu chu kỳ máy?", options: ["806 chu kỳ", "803 chu kỳ", "804 chu kỳ", "4000 chu kỳ"], correctIndex: 2, explanation: "Số chu kỳ lý tưởng: k + n - 1 = 5 + 800 - 1 = 804." },
      { id: 58, question: "[Câu 58] Trong thực tế, lý do khiến số chu kỳ Pipeline trung bình lớn hơn mức lý tưởng (T_ideal) chủ yếu là:", options: ["Nhiệt độ CPU quá nóng", "Xuất hiện các xung đột (Hazard) gây đình trệ (stall)", "Dung lượng HDD quá nhỏ", "Chu kỳ đồng hồ bị chạy chậm"], correctIndex: 1, explanation: "Hazard dữ liệu, cấu trúc, điều khiển khiến Pipeline phải chèn bong bóng (stall)." },
      { id: 59, question: "[Câu 59] Cấu trúc nào mô tả hệ thống có: 1 luồng lệnh, nhiều luồng dữ liệu?", options: ["SISD", "SIMD", "MISD", "MIMD"], correctIndex: 1, explanation: "SIMD = Single Instruction Multiple Data." },
      { id: 60, question: "[Câu 60] Trong phép cộng/trừ số nhị phân không dấu, nếu tràn kết quả ra khỏi phạm vi n bit thì cờ nào sẽ được CPU bật?", options: ["IF (Interrupt Flag)", "OF (Overflow Flag)", "CF (Carry Flag)", "ZF (Zero Flag)"], correctIndex: 2, explanation: "Phép tính không dấu dùng cờ CF để nhận biết hiện tượng tràn nhớ/mượn." },
      { id: 61, question: "[Câu 61] Trong định dạng số dấu phẩy động chuẩn IEEE 754 (Binary32), số bit dành cho phần mũ (Exponent) là:", options: ["8 bit", "1 bit", "23 bit", "11 bit"], correctIndex: 0, explanation: "Cấu trúc 1 bit Dấu, 8 bit Mũ, 23 bit Phần trị (Fraction)." },
      { id: 62, question: "[Câu 62] Trong bộ nhớ phân cấp (Memory Hierarchy), thứ tự bộ nhớ từ nhanh nhất đến chậm nhất là:", options: ["Thanh ghi, Cache, RAM, Bộ nhớ ngoài", "Cache, Thanh ghi, RAM, Bộ nhớ ngoài", "Thanh ghi, RAM, Cache, Bộ nhớ ngoài", "RAM, Thanh ghi, Cache, HDD"], correctIndex: 0, explanation: "Thanh ghi nằm trong CPU nên nhanh nhất, sau đó đến Cache, RAM và HDD/SSD." },
      { id: 63, question: "[Câu 63] Hệ thống bộ nhớ phân tán (Distributed Memory) có đặc điểm nào dưới đây?", options: ["Mỗi node có bộ nhớ riêng, giao tiếp CPU qua thông điệp mạng", "Không có CPU nào trên board", "Chỉ lưu cache, không có RAM chính", "Tất cả các lõi CPU chia sẻ vật lý chung một module RAM lớn"], correctIndex: 0, explanation: "Distributed Memory sử dụng Message Passing qua mạng kết nối (Cluster/Network)." },
      { id: 64, question: "[Câu 64] Một hệ thống dùng địa chỉ 32 bit, bộ nhớ Cache Direct Mapped dung lượng 1024 KB, kích thước mỗi block (line) là 64 Byte. Số bit Tag là:", options: ["11 bit", "13 bit", "14 bit", "12 bit"], correctIndex: 3, explanation: "Offset=6, Index=log2(1024KB/64)=14. Tag=32-14-6=12." },
      { id: 65, question: "[Câu 65] Dạng biểu diễn bù 2 (8 bit) của số nguyên -77 là:", options: ["10101010", "11110000", "01001101", "10110011"], correctIndex: 3, explanation: "Bù 2 của -77: Lấy trị tuyệt đối đảo bit rồi cộng 1 -> 10110011." }
    ]
  }
};
