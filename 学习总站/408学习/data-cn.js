/* 计算机网络 —— 408 全大纲知识点 */
window.COURSE = (window.COURSE || []).concat([
  { subject:"计算机网络", chapter:"体系结构", title:"网络体系结构(OSI/TCP-IP/五层)",
    teach:"分层思想：每层为上层提供服务。OSI 七层=物理/数据链路/网络/传输/会话/表示/应用；TCP/IP 四层；学习常用五层=物理/数据链路/网络/传输/应用。协议三要素：语法、语义、同步。",
    principle:"数据自上而下封装、自下而上解封装，对等层之间通信。",
    examples:[
      {q:"下列不属于传输层功能的是（ ）。",options:["端到端通信","流量控制","路由选择","差错控制"],answer:"C",explain:"路由选择是网络层的功能。"} ] },

  { subject:"计算机网络", chapter:"体系结构", title:"网络性能指标",
    teach:"速率、带宽、吞吐量、时延(发送时延+传播时延+处理时延+排队时延)、时延带宽积、往返时延 RTT、利用率。",
    principle:"总时延由各部分叠加；带宽越大不一定越快(还受时延限制)。",
    examples:[
      {q:"下列不属于时延组成部分的是（ ）。",options:["发送时延","传播时延","处理时延","编译时延"],answer:"D",explain:"编译时延与网络传输无关。"} ] },

  { subject:"计算机网络", chapter:"物理层", title:"物理层",
    teach:"物理层传输比特流。接口特性(机械、电气、功能、过程)；传输介质(双绞线、同轴电缆、光纤、无线)；编码与调制；信道复用(频分 FDM、时分 TDM、波分 WDM、码分 CDM)。",
    principle:"物理层只负责比特的透明传输，不关心比特的含义。",
    examples:[
      {q:"物理层传输的数据单位是（ ）。",options:["帧","比特","分组","报文"],answer:"B",explain:"物理层面向比特流。"} ] },

  { subject:"计算机网络", chapter:"数据链路层", title:"数据链路层功能与差错控制",
    teach:"功能：组帧、差错控制、流量控制、可靠传输、介质访问控制。差错检测用 CRC(检错)、海明码(可纠错)。帧 = 帧头 + 数据 + 帧尾。",
    principle:"数据链路层在相邻结点间以“帧”为单位可靠传输。",
    examples:[
      {q:"数据链路层传输的数据单位是（ ）。",options:["比特","帧","分组","报文段"],answer:"B",explain:"链路层以帧为单位。"} ] },

  { subject:"计算机网络", chapter:"数据链路层", title:"可靠传输(停等/滑动窗口/ARQ)",
    teach:"停等协议、后退 N 帧(GBN)、选择重传(SR)。ARQ(自动重传请求)结合序号、确认与超时重传实现可靠传输，滑动窗口用于流量控制。",
    principle:"GBN 接收方只按序接收，出错则重传该帧及其后所有帧；SR 只重传出错帧。",
    examples:[
      {q:"后退 N 帧(GBN)协议中，接收方（ ）。",options:["逐个确认每一帧","只按序接收，出错后重传该帧及其后续帧","可乱序接收并缓存","不发送确认"],answer:"B",explain:"GBN 采用累积确认，出错后回退重传。"} ] },

  { subject:"计算机网络", chapter:"数据链路层", title:"介质访问控制与以太网",
    teach:"信道划分(FDM/TDM/CDMA)；随机访问 CSMA/CD(以太网，先听后发、边发边听、冲突停发、随机重发)、CSMA/CA(无线)；轮询。以太网 MAC 地址 48 位，最小帧 64 字节；交换机工作在链路层，自学习 MAC 地址表。",
    principle:"CSMA/CD 通过监听与冲突检测解决总线争用。",
    examples:[
      {q:"以太网采用的介质访问控制方法是（ ）。",options:["CSMA/CA","CSMA/CD","令牌环","TDMA"],answer:"B",explain:"以太网用带冲突检测的载波监听多路访问。"} ] },

  { subject:"计算机网络", chapter:"网络层", title:"网络层功能与 IP 地址",
    teach:"功能：路由与转发、拥塞控制、异构网络互联。IPv4 是 32 位地址，分 A/B/C/D/E 类；子网掩码划分子网；CIDR 无分类编址(斜线记前缀长度)。IP 地址 = 网络号 + 主机号。",
    principle:"用掩码做与运算得到网络地址；路由表决定下一跳。",
    examples:[
      {q:"192.168.1.0/24 网络中可分配给主机的地址数是（ ）。",options:["256","254","255","128"],answer:"B",explain:"主机位 8 位，去掉网络地址和广播地址，2⁸-2=254。"} ] },

  { subject:"计算机网络", chapter:"网络层", title:"IP 数据报与分片",
    teach:"IP 首部固定 20 字节，含标识、标志(DF/MF)、片偏移等字段用于分片重组。链路 MTU 限制帧大小，数据报超过 MTU 需分片。",
    principle:"片偏移以 8 字节为单位，MF 标志表示后面还有分片。",
    examples:[
      {q:"以太网默认的 MTU 通常是（ ）字节。",options:["64","512","1500","65535"],answer:"C",explain:"以太网 MTU 常见为 1500 字节。"} ] },

  { subject:"计算机网络", chapter:"网络层", title:"ARP、DHCP、ICMP",
    teach:"ARP：把 IP 地址解析为 MAC 地址(局域网内)；DHCP：动态分配 IP 地址(基于 UDP)；ICMP：差错与控制报文(ping 用 ICMP 回送请求/应答，traceroute 利用 ICMP 超时)。",
    principle:"ARP 通过广播请求、单播应答，并缓存到 ARP 表。",
    examples:[
      {q:"把 IP 地址解析为 MAC 地址的协议是（ ）。",options:["ARP","RARP","DNS","DHCP"],answer:"A",explain:"ARP 完成 IP→MAC 的解析。"} ] },

  { subject:"计算机网络", chapter:"网络层", title:"路由协议(RIP/OSPF/BGP)",
    teach:"RIP：距离向量，度量是跳数，最大 15 跳，周期广播整张路由表。OSPF：链路状态，洪泛 LSA 后用 Dijkstra，分区(区域)。BGP：外部网关协议，AS 之间，基于路径向量与策略。",
    principle:"距离向量靠与邻居交换路由表；链路状态让全网掌握拓扑。",
    examples:[
      {q:"RIP 协议使用的度量是（ ）。",options:["带宽","跳数","延迟","负载"],answer:"B",explain:"RIP 以跳数为度量，最大 15 跳。"},
      {q:"OSPF 属于（ ）路由协议。",options:["距离向量","链路状态","路径向量","静态路由"],answer:"B",explain:"OSPF 是链路状态协议。"} ] },

  { subject:"计算机网络", chapter:"网络层", title:"路由器与分组转发",
    teach:"路由器工作在网络层，连接不同网络，依据路由表逐跳转发分组，包含输入/输出端口、交换结构、路由处理器。",
    principle:"查路由表得下一跳地址，逐跳把分组传到目的网络。",
    examples:[
      {q:"路由器主要工作在（ ）。",options:["物理层","数据链路层","网络层","传输层"],answer:"C",explain:"路由器是网络层设备。"} ] },

  { subject:"计算机网络", chapter:"传输层", title:"传输层与 UDP",
    teach:"传输层提供端到端(进程间)通信，用端口号区分应用，支持复用与分用。UDP 无连接、不可靠、开销小、无需拥塞控制，适合实时/短报文。",
    principle:"UDP 首部仅 8 字节(源端口、目的端口、长度、校验和)。",
    examples:[
      {q:"下列属于 UDP 特点的是（ ）。",options:["面向连接","可靠传输","无连接、尽力而为","有拥塞控制"],answer:"C",explain:"UDP 无连接、不保证可靠。"} ] },

  { subject:"计算机网络", chapter:"传输层", title:"TCP 连接管理(三次握手/四次挥手)",
    teach:"三次握手建立连接：SYN → SYN+ACK → ACK，同步双方序号。四次挥手释放连接：FIN → ACK → FIN → ACK(因 TCP 半关闭)。TCP 首部最小 20 字节。",
    principle:"三次握手确保双方收发能力就绪并同步初始序号；四次挥手因一方数据可能未发完。",
    examples:[
      {q:"TCP 建立连接需要（ ）。",options:["两次握手","三次握手","四次握手","一次握手"],answer:"B",explain:"三次握手才能可靠地同步序号并确认双向可达。"},
      {q:"TCP 首部的最小长度是（ ）。",options:["8 字节","20 字节","40 字节","60 字节"],answer:"B",explain:"TCP 固定首部 20 字节，选项最多再加 40。"} ] },

  { subject:"计算机网络", chapter:"传输层", title:"TCP 流量控制与拥塞控制",
    teach:"流量控制用接收窗口(滑动窗口)防止接收方被淹没。拥塞控制：慢开始(窗口指数增长)→拥塞避免(线性增长)→快重传→快恢复(超时则回到慢开始)。发送窗口 = min(拥塞窗口, 接收窗口)。",
    principle:"通过动态调整窗口大小平衡发送与接收/网络承载能力。",
    examples:[
      {q:"TCP 慢开始阶段，拥塞窗口如何增长（ ）。",options:["线性增长","按指数增长","保持不变","减半"],answer:"B",explain:"慢开始每经过一个 RTT 窗口翻倍，即指数增长。"},
      {q:"TCP 发送窗口的大小取决于（ ）。",options:["只与拥塞窗口有关","取拥塞窗口与接收窗口的较小者","只与接收窗口有关","固定不变"],answer:"B",explain:"发送窗口=min(拥塞窗口, 接收窗口)。"} ] },

  { subject:"计算机网络", chapter:"应用层", title:"应用层协议(DNS/FTP/邮件/HTTP)",
    teach:"DNS：域名→IP，用 UDP 53(解析可用递归/迭代)。FTP：21 控制连接、20 数据连接。SMTP(25)发邮件，POP3(110)/IMAP 收邮件。HTTP(80)无状态、基于 TCP；HTTPS(443)。DHCP 动态分配 IP。体系结构有 C/S 与 P2P。",
    principle:"应用层协议建立在传输层之上(HTTP/FTP/SMTP 用 TCP，DNS/DHCP 用 UDP)。",
    examples:[
      {q:"DNS 查询默认使用的传输层协议是（ ）。",options:["TCP","UDP","ICMP","ARP"],answer:"B",explain:"DNS 默认用 UDP 53(区域传送用 TCP)。"},
      {q:"HTTP 默认使用的端口号是（ ）。",options:["21","25","80","443"],answer:"C",explain:"HTTP 默认 80，HTTPS 默认 443。"} ] },
]);
