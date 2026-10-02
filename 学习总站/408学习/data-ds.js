/* 数据结构 —— 408 全大纲知识点（讲解 / 运行原理 / 例题）
   字段：subject, chapter, title, teach, principle, examples:[{q,options,answer,explain}] */
window.COURSE = (window.COURSE || []).concat([
  { subject:"数据结构", chapter:"绪论", title:"数据结构概念与算法复杂度",
    teach:"数据结构=逻辑结构+存储结构+运算。逻辑结构分线性(线性表/栈/队列/串)与非线性(树/图/集合)；存储结构分顺序、链式、索引、散列。算法五大特性：有穷性、确定性、可行性、输入、输出。",
    principle:"时间复杂度关注基本操作次数随规模 n 的增长(取最高阶、略系数)；空间复杂度关注辅助空间。",
    examples:[
      {q:"以下属于非线性结构的是（ ）。",options:["队列","栈","二叉树","字符串"],answer:"C",explain:"树、图是非线性结构；队列、栈、串都是线性结构。"},
      {q:"某算法基本操作执行次数 T(n)=3n²+2n+1，则时间复杂度为（ ）。",options:["O(n)","O(n²)","O(n³)","O(1)"],answer:"B",explain:"取最高阶项、略去系数，故为 O(n²)。"} ] },

  { subject:"数据结构", chapter:"线性表", title:"顺序表的插入删除与复杂度",
    teach:"顺序表用一段连续地址存放元素，可随机访问，按位查找 O(1)；插入/删除平均要移动约 n/2 个元素，时间 O(n)。",
    principle:"元素物理相邻，地址=基址+下标×元素大小；插入需后移、删除需前移。",
    examples:[
      {q:"长度为 n 的顺序表，在第 i 个位置(1≤i≤n+1)插入一个元素，需移动的元素个数为（ ）。",options:["n-i","n-i+1","i","n-i-1"],answer:"B",explain:"第 i 到第 n 共 n-i+1 个元素需后移。1 处插入移动 n 个。"} ] },

  { subject:"数据结构", chapter:"线性表", title:"单链表 · 双链表 · 循环链表",
    teach:"单链表每结点含数据域与指针域，按位查找 O(n)；已知前驱时插删 O(1)。双链表有前驱指针便于反向操作；循环链表尾结点指针指回头结点。",
    principle:"结点用指针相连，不要求连续存储，插入只需改指针无需移动元素。",
    examples:[
      {q:"在单链表中，在结点 p 之后插入结点 s，正确操作是（ ）。",options:["s->next=p; p->next=s","s->next=p->next; p->next=s","p->next=s->next; s=p","s->next=p; p->next=s->next"],answer:"B",explain:"先让 s 指向 p 的后继，再让 p 指向 s，顺序不能反。"},
      {q:"删除双向链表中结点 p，需要修改（ ）。",options:["只改一个指针","p 前驱的 next 和 p 后继的 prior","从头遍历整表","无法删除"],answer:"B",explain:"双向链表删除要断开前后两个方向的链接。"} ] },

  { subject:"数据结构", chapter:"线性表", title:"顺序表与链表的取舍",
    teach:"顺序表：随机访问快、插入删除慢、需连续空间、容量难扩。链表：插删快(已知位置)、访问慢、空间灵活但有指针开销。",
    principle:"选择取决于“查得多”还是“改得多”。",
    examples:[
      {q:"若需频繁在表中插入、删除元素，且很少随机访问，宜选（ ）。",options:["顺序表","链表","二维数组","栈"],answer:"B",explain:"链表已知位置插删 O(1)，不需移动元素。"} ] },

  { subject:"数据结构", chapter:"栈与队列", title:"栈(LIFO)及应用",
    teach:"栈只允许在栈顶操作，后进先出(LIFO)。典型应用：括号匹配、表达式求值(中缀转后缀)、递归调用、进制转换、深度优先搜索。",
    principle:"用栈顶指针 top：入栈 top++，出栈 top--。",
    examples:[
      {q:"a、b、c、d 依次入栈，不可能得到的出栈序列是（ ）。",options:["dcba","abcd","cabd","cbda"],answer:"C",explain:"要 c 先出，需 a、b、c 已入栈；此时 a 压在 b 下，无法在 b 之前弹出 a，故 cabd 不可能。"} ] },

  { subject:"数据结构", chapter:"栈与队列", title:"队列(FIFO)与循环队列",
    teach:"队列先进先出。循环队列用数组+队头/队尾指针，牺牲一个单元：判空 rear==front，判满 (rear+1)%max==front。",
    principle:"取模实现环状移动，避免顺序队列的假溢出。",
    examples:[
      {q:"容量为 max 的循环队列(牺牲一个单元)，队满条件是（ ）。",options:["rear==front","(rear+1)%max==front","rear+1==front","front==rear+1"],answer:"B",explain:"牺牲一个单元区分队空与队满。"},
      {q:"下列应用用到队列的是（ ）。",options:["括号匹配","求阶乘","二叉树层次遍历","表达式求值"],answer:"C",explain:"层次遍历逐层访问，用队列；其余多用栈/递归。"} ] },

  { subject:"数据结构", chapter:"数组与特殊矩阵", title:"多维数组寻址与特殊矩阵压缩",
    teach:"按行(列)优先计算元素在一维数组中的偏移；对称矩阵、上/下三角矩阵、对角矩阵可压缩存储；稀疏矩阵用三元组或十字链表。",
    principle:"用映射公式把二维下标换算成一维下标，节省空间。",
    examples:[
      {q:"n 阶对称矩阵压缩存储(只存下三角)需要的元素个数为（ ）。",options:["n²","n(n+1)/2","n(n-1)/2","n"],answer:"B",explain:"下三角(含对角线)共 1+2+…+n = n(n+1)/2 个元素。"} ] },

  { subject:"数据结构", chapter:"树与二叉树", title:"树的性质与二叉树",
    teach:"二叉树：第 i 层最多 2^(i-1) 个结点；高 h 最多 2^h-1 个结点；n0=n2+1(叶子数=度为2的结点数+1)。n 个结点的完全二叉树高为 ⌊log₂n⌋+1。",
    principle:"由层次递推与结点关系推出。",
    examples:[
      {q:"一棵二叉树中有 10 个度为 2 的结点，则叶子结点数为（ ）。",options:["9","10","11","12"],answer:"C",explain:"n0 = n2 + 1 = 10 + 1 = 11。"} ] },

  { subject:"数据结构", chapter:"树与二叉树", title:"二叉树的遍历与还原",
    teach:"先序(NLR)、中序(LNR)、后序(LRN)、层次(用队列)四种遍历。已知中序 + 先序(或后序)可唯一确定二叉树。",
    principle:"先序/后序用来定根，中序把元素分成左右子树。",
    examples:[
      {q:"已知先序 ABDEC、中序 BDAEC，则后序遍历为（ ）。",options:["DBCEA","DBCAE","BDECA","DECBA"],answer:"A",explain:"A 为根，左子树(BD)右子树(EC)；还原得后序 D B C E A。"} ] },

  { subject:"数据结构", chapter:"树与二叉树", title:"线索二叉树",
    teach:"用空指针域存放前驱/后继信息，加快遍历，得到先序/中序/后序线索二叉树。",
    principle:"ltag/rtag 标记指针指向“孩子”还是“线索”。",
    examples:[
      {q:"n 个结点的二叉树，线索化后共有多少条线索(即原来的空指针数)？（  ）",options:["n-1","n+1","2n","n"],answer:"B",explain:"n 个结点共 2n 个指针域，非空指针 n-1 个，故空指针 = 2n-(n-1) = n+1。"} ] },

  { subject:"数据结构", chapter:"树与二叉树", title:"树/森林转二叉树 与 并查集",
    teach:"树转二叉树用“左孩子右兄弟”；森林可转成二叉树。并查集用父指针数组表示集合，支持查找(Find)与合并(Union)。",
    principle:"并查集中每棵树的根指向自己，一直向上找到根即代表元素；路径压缩+按秩合并近似 O(1)。",
    examples:[
      {q:"下列不属于并查集优化手段的是（ ）。",options:["路径压缩","按秩合并","折半查找","按大小合并"],answer:"C",explain:"折半查找是查找有序表的算法，与并查集无关。"} ] },

  { subject:"数据结构", chapter:"树与二叉树的应用", title:"二叉排序树(BST)",
    teach:"左子树 < 根 < 右子树。中序遍历可得有序序列。查找/插入平均 O(log n)，最坏 O(n)(退化成链)。",
    principle:"按大小比较后递归进入左/右子树。",
    examples:[
      {q:"对二叉排序树进行中序遍历，得到的序列是（ ）。",options:["降序","升序","无序","先降后升"],answer:"B",explain:"中序遍历 BST 得到从小到大的有序序列。"} ] },

  { subject:"数据结构", chapter:"树与二叉树的应用", title:"平衡二叉树(AVL)",
    teach:"任一结点左右子树高度差≤1。插入后失衡通过 LL、RR、LR、RL 四种旋转调整。查找 O(log n)。",
    principle:"旋转让各结点平衡因子保持在 -1/0/1。",
    examples:[
      {q:"平衡二叉树中任一结点的平衡因子绝对值不超过（ ）。",options:["0","1","2","3"],answer:"B",explain:"平衡因子=|左高-右高|≤1。"} ] },

  { subject:"数据结构", chapter:"树与二叉树的应用", title:"哈夫曼树与哈夫曼编码",
    teach:"每次合并权值最小的两棵树，得到带权路径长度 WPL 最小的二叉树；哈夫曼编码是前缀编码，频率高的字符用短码。",
    principle:"贪心策略；WPL 等于所有合并结点权值之和，权值大的靠近根。",
    examples:[
      {q:"权值为 {2,3,4,5} 构造哈夫曼树的 WPL 为（ ）。",options:["28","30","32","20"],answer:"A",explain:"合并(2,3)=5、(4,5)=9、(5,9)=14，WPL=5+9+14=28。"},
      {q:"哈夫曼编码属于（ ）。",options:["定长编码","前缀编码","等长编码","非唯一可译码"],answer:"B",explain:"任一编码都不是另一编码的前缀，可唯一译码。"} ] },

  { subject:"数据结构", chapter:"树与二叉树的应用", title:"B树与B+树",
    teach:"m 阶 B 树：每结点最多 m-1 个关键字、m 个孩子，非叶结点也存数据，通过分裂/合并保持平衡，树高低、磁盘 IO 少。B+ 树数据全在叶子且叶子链表相连，非叶只作索引，适合范围查询。",
    principle:"多路平衡查找，降低树高、减少磁盘访问次数。",
    examples:[
      {q:"m 阶 B 树中，每个结点最多有（ ）个关键字。",options:["m-1","m","2m","m/2"],answer:"A",explain:"m 阶 B 树每个结点最多 m-1 个关键字、m 棵子树。"},
      {q:"关于 B+ 树，说法正确的是（ ）。",options:["数据存放在非叶结点","叶子结点按关键字有序且用指针相连","不能支持范围查询","树高远大于 B 树"],answer:"B",explain:"B+ 树所有数据在叶子，叶子有序且串成链表。"} ] },

  { subject:"数据结构", chapter:"图", title:"图的概念与存储",
    teach:"图分有向/无向；涉及度、路径、连通/强连通、生成树。存储：邻接矩阵(适合稠密图，O(V²)空间)、邻接表(适合稀疏图，O(V+E))、十字链表(有向)、邻接多重表(无向)。",
    principle:"邻接矩阵判边 O(1)，邻接表省空间、遍历高效。",
    examples:[
      {q:"n 个顶点的无向图用邻接矩阵存储需要（ ）个单元。",options:["n","n²","n(n+1)/2","2n"],answer:"B",explain:"邻接矩阵是 n×n 的二维数组。"} ] },

  { subject:"数据结构", chapter:"图", title:"图的遍历 DFS / BFS",
    teach:"DFS 用栈/递归，沿路深入再回溯；BFS 用队列，逐层扩展。邻接表下均 O(V+E)，邻接矩阵下均 O(V²)。可用于求连通分量、判断回路；BFS 可求无权图最短路。",
    principle:"用 visited 数组标记已访问顶点，避免重复。",
    examples:[
      {q:"用邻接表存储图，DFS 的时间复杂度为（ ）。",options:["O(V)","O(V²)","O(V+E)","O(E)"],answer:"C",explain:"每个顶点和每条边各访问一次，故 O(V+E)。"},
      {q:"BFS 借助（ ）实现。",options:["栈","队列","优先队列","树"],answer:"B",explain:"BFS 用队列保证按层访问。"} ] },

  { subject:"数据结构", chapter:"图", title:"最小生成树 Prim / Kruskal",
    teach:"Prim 从顶点集向外扩展，适合稠密图 O(V²)；Kruskal 按边权从小到大加入不成环的边，适合稀疏图 O(ElogE)。MST 可能不唯一，但边权总和唯一。",
    principle:"基于最小生成树的贪心性质，选 n-1 条不构成回路的边。",
    examples:[
      {q:"关于最小生成树，说法正确的是（ ）。",options:["一定唯一","可能不唯一，但边权之和唯一","一定包含最大权边","一定不含最小权边"],answer:"B",explain:"MST 形态可能不唯一，但所有 MST 的权值和相等。"} ] },

  { subject:"数据结构", chapter:"图", title:"最短路径 Dijkstra",
    teach:"Dijkstra 求单源点到其余各点的最短路，要求边权**非负**，复杂度 O(V²) 或 O(ElogV)。",
    principle:"贪心：每次选距离最小的未确定顶点，松弛它的所有邻边。",
    examples:[
      {q:"Dijkstra 算法要求图中边权（ ）。",options:["任意实数","非负","全为负","必须为整数"],answer:"B",explain:"边权为负时 Dijkstra 的贪心不成立，可用 Bellman-Ford/SPFA。"} ] },

  { subject:"数据结构", chapter:"图", title:"拓扑排序",
    teach:"对有向无环图(DAG)，把顶点排成线性序列，使每条边 u→v 都满足 u 在 v 之前。反复取入度为 0 的顶点并删除其出边。序列一般不唯一。",
    principle:"Kahn 算法：入度为 0 者入队，出队后将其邻点入度减 1。",
    examples:[
      {q:"能进行拓扑排序的图为（ ）。",options:["有向无环图","任意有向图","无向图","带权图"],answer:"A",explain:"有环图无法拓扑排序。"} ] },

  { subject:"数据结构", chapter:"图", title:"关键路径(AOE网)",
    teach:"AOE 网中边权表示活动持续时间，顶点表示事件。关键路径是源点到汇点的最长路径，决定工程最短工期，其上活动为关键活动。",
    principle:"按拓扑序求事件最早发生时间 ve，逆拓扑序求最迟时间 vl，活动时间余量为 0 即关键。",
    examples:[
      {q:"关键路径是 AOE 网中（ ）。",options:["最短路径","最长路径","任一哈密顿路径","权值最小的路径"],answer:"B",explain:"工期由最长路径决定。"} ] },

  { subject:"数据结构", chapter:"查找", title:"顺序查找、折半查找、分块查找",
    teach:"顺序查找 ASL=(n+1)/2；折半查找要求**顺序存储且有序**，ASL≈log₂(n+1)-1；分块查找块间有序、块内无序，索引用折半、块内用顺序。",
    principle:"折半每次比较把查找区间缩小一半。",
    examples:[
      {q:"折半查找要求线性表必须（ ）。",options:["顺序存储且有序","链式存储且有序","顺序存储","有序即可"],answer:"A",explain:"折半需要随机访问，故必须顺序存储且有序。"} ] },

  { subject:"数据结构", chapter:"查找", title:"散列表(哈希表)",
    teach:"用哈希函数(如除留余数法)定址，冲突处理：开放定址(线性探测、二次探测、再散列)、拉链法(链地址)。平均查找长度与装填因子 α 有关。",
    principle:"hash(key) 定位；冲突时按探测序列或链表继续找。",
    examples:[
      {q:"装填因子 α 越大，散列表（ ）。",options:["查找越快","冲突越多、查找越慢","空间越浪费","与查找无关"],answer:"B",explain:"α 越大越拥挤，冲突概率上升，ASL 增大。"} ] },

  { subject:"数据结构", chapter:"排序", title:"插入类排序(直接/折半/希尔)",
    teach:"直接插入：平均 O(n²)、稳定；折半插入：减少比较次数、移动次数不变，仍 O(n²)；希尔排序：按增量分组插入，平均约 O(n^1.3)，不稳定。",
    principle:"把当前元素插入到前面已排好的有序区。",
    examples:[
      {q:"直接插入排序在最好情况(已有序)下的时间复杂度为（ ）。",options:["O(n)","O(n²)","O(nlogn)","O(1)"],answer:"A",explain:"已有序时每次只比较一次、不移动，共 O(n)。"} ] },

  { subject:"数据结构", chapter:"排序", title:"交换类排序(冒泡/快速)",
    teach:"冒泡排序 O(n²)、稳定。快速排序用分治+基准划分：平均 O(nlogn)、最坏 O(n²)(基本有序且取端点作基准)，不稳定，递归栈空间 O(logn)。",
    principle:"每趟选一个基准，比它小的放左边、大的放右边，再对两侧递归。",
    examples:[
      {q:"快速排序最坏情况(基本有序且取首元素为基准)的时间复杂度为（ ）。",options:["O(nlogn)","O(n²)","O(n)","O(logn)"],answer:"B",explain:"此时划分极不平衡，退化为 O(n²)。"} ] },

  { subject:"数据结构", chapter:"排序", title:"选择类排序(简单选择/堆排序)",
    teach:"简单选择：每趟选最小元素放到前面，O(n²)、不稳定。堆排序：用完全二叉树(大/小根堆)，建堆 O(n)、排序 O(nlogn)，不稳定。",
    principle:"堆用数组存完全二叉树，下标 i 的左右孩子为 2i、2i+1；反复取堆顶重建堆。",
    examples:[
      {q:"堆排序的时间复杂度为（ ）。",options:["O(n)","O(nlogn)","O(n²)","O(logn)"],answer:"B",explain:"建堆 O(n)，n 次调整各 O(logn)。"} ] },

  { subject:"数据结构", chapter:"排序", title:"归并排序",
    teach:"分治：把两个有序段合并成一个有序段，时间 O(nlogn)、空间 O(n)、**稳定**。常用于外部排序。",
    principle:"自底向上两两归并，直到整体有序。",
    examples:[
      {q:"归并排序的空间复杂度为（ ）。",options:["O(1)","O(n)","O(logn)","O(nlogn)"],answer:"B",explain:"需 O(n) 辅助数组存放归并结果。"} ] },

  { subject:"数据结构", chapter:"排序", title:"基数排序与排序小结",
    teach:"基数排序按位“分配+收集”，时间 O(d(n+r))、空间 O(r)、稳定。稳定性口诀——稳定：插入、冒泡、归并、基数；不稳定：快速、希尔、选择、堆。",
    principle:"从最低位到最高位依次分配(入桶)和收集。",
    examples:[
      {q:"下列排序中，不稳定的是（ ）。",options:["归并排序","冒泡排序","快速排序","基数排序"],answer:"C",explain:"快速排序不稳定。"},
      {q:"下列排序中，空间复杂度为 O(n) 的是（ ）。",options:["快速排序","堆排序","归并排序","希尔排序"],answer:"C",explain:"归并需 O(n) 辅助空间。"} ] },

  { subject:"数据结构", chapter:"外部排序", title:"外部排序",
    teach:"外部排序核心是减少磁盘 IO：多路归并(减少归并趟数)、败者树(提高内部比较效率)、置换-选择(增大初始归并段)、最佳归并树(哈夫曼思想)。",
    principle:"归并趟数 ≈ ⌈log_k m⌉(k 路归并、m 个初始段)，增大 k 或 m 都能减少 IO。",
    examples:[
      {q:"外部排序中，用于增大初始归并段长度的方法是（ ）。",options:["败者树","置换-选择排序","快速排序","基数排序"],answer:"B",explain:"置换-选择可生成长于内存的初始归并段。"} ] },
]);
