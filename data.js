/* =========================================================
   DỮ LIỆU ĐỀ CƯƠNG LÝ THUYẾT & 3 MÃ ĐỀ THI (101, 202, 303)
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
    'D','C','C','C','A'
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

// Data 3 Đề thi chính thức
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
  }
};
