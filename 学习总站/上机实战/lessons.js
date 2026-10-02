/* 上机实战 · 课程数据
   每条：{ id, chapter, title, teach, points, lang, code, stdin, output }
   code/stdin 会在右侧“编辑器/输入”里预填，output 是运行应当得到的结果。 */
window.LESSONS = [
  { id:"c1", chapter:"C 语言速复习", title:"入门：输入输出", lang:"c",
    teach:"从 main 开始执行。printf 负责输出，scanf 负责输入——注意变量前要加 & 取地址。%d 整数、%f 浮点、%c 字符、%s 字符串。",
    points:"scanf 的格式串要和输入对应；忘记 & 是最常见的错误。",
    code:'#include <stdio.h>\nint main(){\n    int a, b;\n    scanf("%d %d", &a, &b);\n    printf("a+b = %d\\n", a + b);\n    printf("a*b = %d\\n", a * b);\n    return 0;\n}\n',
    stdin:"3 5\n", output:"a+b = 8\na*b = 15\n" },

  { id:"c2", chapter:"C 语言速复习", title:"数组与循环", lang:"c",
    teach:"数组下标从 0 开始。用 for 循环遍历，读入一组数并求最大值、总和。",
    points:"求最大值时初始化技巧：第一个元素直接作为初值，或用一个很小的哨兵。",
    code:'#include <stdio.h>\nint main(){\n    int n, i, x, maxv = 0, sum = 0;\n    scanf("%d", &n);\n    for(i = 0; i < n; i++){\n        scanf("%d", &x);\n        if(i == 0 || x > maxv) maxv = x;\n        sum += x;\n    }\n    printf("max = %d\\n", maxv);\n    printf("sum = %d\\n", sum);\n    return 0;\n}\n',
    stdin:"5\n3 9 2 7 5\n", output:"max = 9\nsum = 26\n" },

  { id:"c3", chapter:"C 语言速复习", title:"指针与动态内存 malloc", lang:"c",
    teach:"指针存放地址。malloc 在堆上申请内存，用完要 free。数组名本质是指向首元素的指针，a[i] 等价于 *(a+i)。",
    points:"malloc 返回 void*，要强转；申请失败返回 NULL(教学示例里省略判断)。",
    code:'#include <stdio.h>\n#include <stdlib.h>\nint main(){\n    int n, i, *a, s = 0;\n    scanf("%d", &n);\n    a = (int*)malloc(n * sizeof(int));\n    for(i = 0; i < n; i++){ scanf("%d", &a[i]); s += a[i]; }\n    printf("sum = %d\\n", s);\n    free(a);\n    return 0;\n}\n',
    stdin:"4\n1 2 3 4\n", output:"sum = 10\n" },

  { id:"c4", chapter:"C 语言速复习", title:"结构体 struct", lang:"c",
    teach:"struct 把多个不同类型的字段打包成一个整体；用 typedef 起别名后可直接当类型名用。用 . 访问成员，用指针时用 ->。",
    points:"读字符串进 char 数组用 %s，不加 &（数组名本身即地址）。",
    code:'#include <stdio.h>\ntypedef struct { char name[20]; int score; } Student;\nint main(){\n    Student s;\n    scanf("%s %d", s.name, &s.score);\n    printf("%s 的成绩是 %d\\n", s.name, s.score);\n    return 0;\n}\n',
    stdin:"Tom 95\n", output:"Tom 的成绩是 95\n" },

  { id:"ds1", chapter:"数据结构上机", title:"顺序表：插入与删除", lang:"c",
    teach:"顺序表 = 数组 + 长度。在第 i 个位置插入，需要把 i 之后元素整体后移；删除则整体前移。这是 O(n) 操作。",
    points:"注意下标换算(位置是第几个/从 0 计)；数组要留够空间。",
    code:'#include <stdio.h>\n#define MAX 100\nint main(){\n    int a[MAX], n, i, p, v;\n    scanf("%d", &n);\n    for(i = 0; i < n; i++) scanf("%d", &a[i]);\n    scanf("%d %d", &p, &v);            /* 在第 p 个位置插入 v */\n    for(i = n; i >= p; i--) a[i] = a[i-1];   /* 后移 */\n    a[p-1] = v; n++;\n    printf("插入后: ");\n    for(i = 0; i < n; i++) printf("%d ", a[i]);\n    printf("\\n");\n    for(i = p-1; i < n-1; i++) a[i] = a[i+1]; /* 删除该位置 */\n    n--;\n    printf("删除后: ");\n    for(i = 0; i < n; i++) printf("%d ", a[i]);\n    printf("\\n");\n    return 0;\n}\n',
    stdin:"5\n1 2 3 4 5\n2 9\n", output:"插入后: 1 9 2 3 4 5 \n删除后: 1 2 3 4 5 \n" },

  { id:"ds2", chapter:"数据结构上机", title:"单链表：头插建表与遍历", lang:"c",
    teach:"每个结点含数据域和 next 指针。头插法每次把新结点插到表头，得到的是逆序。遍历用 while(p){...; p=p->next;}。",
    points:"malloc 结点后要立刻设好 data 和 next；头指针初值 NULL。",
    code:'#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node { int data; struct Node *next; } Node;\nint main(){\n    int n, i, x;\n    Node *head = NULL, *p;\n    scanf("%d", &n);\n    for(i = 0; i < n; i++){            /* 头插法 */\n        scanf("%d", &x);\n        p = (Node*)malloc(sizeof(Node));\n        p->data = x; p->next = head; head = p;\n    }\n    printf("链表: ");\n    for(p = head; p; p = p->next) printf("%d ", p->data);\n    printf("\\n");\n    return 0;\n}\n',
    stdin:"4\n1 2 3 4\n", output:"链表: 4 3 2 1 \n" },

  { id:"ds3", chapter:"数据结构上机", title:"栈：括号匹配", lang:"c",
    teach:"栈后进先出(LIFO)。扫描字符串：遇左括号入栈；遇右括号时若栈空则失败，否则弹出配对。最后栈必须为空。",
    points:"用数组 + top 指针即可实现栈；top=0 表示空栈。",
    code:'#include <stdio.h>\nint main(){\n    char s[1000], st[1000];\n    int top = 0, i, ok = 1;\n    scanf("%s", s);\n    for(i = 0; s[i]; i++){\n        if(s[i] == \'(\') st[top++] = \'(\';\n        else if(s[i] == \')\'){\n            if(top == 0){ ok = 0; break; }\n            top--;\n        }\n    }\n    if(top) ok = 0;\n    printf(ok ? "匹配\\n" : "不匹配\\n");\n    return 0;\n}\n',
    stdin:"(a(b)c)\n", output:"匹配\n" },

  { id:"ds4", chapter:"数据结构上机", title:"队列：循环队列", lang:"c",
    teach:"队列先进先出(FIFO)。循环队列用数组 + front/rear，牺牲一个单元：判空 front==rear；判满 (rear+1)%MAX==front。",
    points:"入队：q[rear]=x; rear=(rear+1)%MAX。出队：取 q[front]; front=(front+1)%MAX。",
    code:'#include <stdio.h>\n#define MAX 10\nint main(){\n    int q[MAX], front = 0, rear = 0, n, i, x;\n    scanf("%d", &n);\n    for(i = 0; i < n; i++){            /* 入队 */\n        scanf("%d", &x);\n        if((rear + 1) % MAX == front){ printf("队满\\n"); break; }\n        q[rear] = x; rear = (rear + 1) % MAX;\n    }\n    printf("出队: ");\n    while(front != rear){ printf("%d ", q[front]); front = (front + 1) % MAX; }\n    printf("\\n");\n    return 0;\n}\n',
    stdin:"4\n1 2 3 4\n", output:"出队: 1 2 3 4 \n" },

  { id:"ds5", chapter:"数据结构上机", title:"二叉树：先序建树 + 中序遍历", lang:"c",
    teach:"用先序序列递归建树，# 表示空结点。中序遍历顺序：左子树 → 根 → 右子树。",
    points:"建树是递归：读一个字符，若是 # 返回空，否则建根、递归建左右子树。",
    code:'#include <stdio.h>\n#include <stdlib.h>\ntypedef struct T { char c; struct T *l, *r; } T;\nT* build(){\n    char ch; scanf(" %c", &ch);\n    if(ch == \'#\') return NULL;\n    T* t = (T*)malloc(sizeof(T));\n    t->c = ch; t->l = build(); t->r = build();\n    return t;\n}\nvoid in(T* t){ if(!t) return; in(t->l); printf("%c ", t->c); in(t->r); }\nint main(){\n    T* root = build();\n    printf("中序: "); in(root); printf("\\n");\n    return 0;\n}\n',
    stdin:"AB#D##C##\n", output:"中序: B D A C \n" },

  { id:"ds6", chapter:"数据结构上机", title:"图：邻接矩阵 DFS / BFS", lang:"c",
    teach:"邻接矩阵 g[i][j] 表示 i 到 j 是否有边。DFS 递归深入，BFS 用队列逐层扩展，都要用 visited 防重复访问。",
    points:"DFS 靠递归栈；BFS 手写一个数组队列即可。",
    code:'#include <stdio.h>\nint n, g[20][20], vis[20];\nvoid dfs(int u){\n    int v; vis[u] = 1; printf("%d ", u);\n    for(v = 0; v < n; v++) if(g[u][v] && !vis[v]) dfs(v);\n}\nint main(){\n    int i, j, q[20], f = 0, r = 0;\n    scanf("%d", &n);\n    for(i = 0; i < n; i++) for(j = 0; j < n; j++) scanf("%d", &g[i][j]);\n    printf("DFS: "); dfs(0); printf("\\n");\n    for(i = 0; i < n; i++) vis[i] = 0;\n    printf("BFS: ");\n    q[r++] = 0; vis[0] = 1;\n    while(f < r){ int u = q[f++]; printf("%d ", u);\n        for(i = 0; i < n; i++) if(g[u][i] && !vis[i]){ vis[i] = 1; q[r++] = i; } }\n    printf("\\n");\n    return 0;\n}\n',
    stdin:"4\n0 1 1 0\n1 0 0 1\n1 0 0 1\n0 1 1 0\n", output:"DFS: 0 1 3 2 \nBFS: 0 1 2 3 \n" },

  { id:"ds7", chapter:"数据结构上机", title:"排序：冒泡 + 快速排序", lang:"c",
    teach:"冒泡：相邻比较交换，O(n²)、稳定。快排：选基准把小的放左、大的放右，再递归，平均 O(nlogn)、不稳定。",
    points:"快排划分(pivot)：左右指针向中间靠，遇到逆序就交换。",
    code:'#include <stdio.h>\nvoid bubble(int a[], int n){ int i, j, t; for(i=0;i<n-1;i++) for(j=0;j<n-1-i;j++) if(a[j]>a[j+1]){t=a[j];a[j]=a[j+1];a[j+1]=t;} }\nvoid qs(int a[], int l, int r){ if(l>=r) return; int i=l, j=r, p=a[l], t;\n    while(i<j){ while(i<j && a[j]>=p) j--; a[i]=a[j]; while(i<j && a[i]<=p) i++; a[j]=a[i]; }\n    a[i]=p; qs(a,l,i-1); qs(a,i+1,r); }\nvoid show(int a[], int n){ int i; for(i=0;i<n;i++) printf("%d ", a[i]); printf("\\n"); }\nint main(){ int a[100], b[100], n, i; scanf("%d", &n);\n    for(i=0;i<n;i++){ scanf("%d", &a[i]); b[i]=a[i]; }\n    bubble(a,n); printf("冒泡: "); show(a,n);\n    qs(b,0,n-1); printf("快排: "); show(b,n);\n    return 0; }\n',
    stdin:"6\n5 2 8 1 9 3\n", output:"冒泡: 1 2 3 5 8 9 \n快排: 1 2 3 5 8 9 \n" },

  { id:"ds8", chapter:"数据结构上机", title:"查找：二分查找", lang:"c",
    teach:"二分查找要求序列有序。每次取中间元素比较，相等即找到；小于则去右半，大于则去左半。O(log n)。",
    points:"循环条件 low<=high；mid=(low+high)/2；注意边界。",
    code:'#include <stdio.h>\nint main(){\n    int a[100], n, i, x, l, r, mid, pos = -1;\n    scanf("%d", &n);\n    for(i = 0; i < n; i++) scanf("%d", &a[i]);\n    scanf("%d", &x);\n    l = 0; r = n - 1;\n    while(l <= r){ mid = (l + r) / 2;\n        if(a[mid] == x){ pos = mid; break; }\n        else if(a[mid] < x) l = mid + 1; else r = mid - 1; }\n    if(pos >= 0) printf("找到，下标 %d\\n", pos);\n    else printf("未找到\\n");\n    return 0;\n}\n',
    stdin:"6\n1 3 5 7 9 11\n7\n", output:"找到，下标 3\n" },
];
