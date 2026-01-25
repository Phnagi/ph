// src/data/works.js

export const worksData = [
    // --- Personal 類別範例 ---
    //--coolGuy-------
    {
        id: 'coolGuy',
        title: 'Cool Guy 男孩',  // 你指定的標題
        category: 'personal',
        folderPath: 'personal/coolGuy',
        // ★ 設定封面：我先選了第一張，你可以改選別張
        cover: '_DSC6075.jpg', 
            
        // ★ 預先幫你寫好：之後詳細頁可以用這個陣列把 5 張全部秀出來
        images: [
            '_DSC6038.jpg',
            '_DSC6043.jpg',
            '_DSC6045.jpg',
            '_DSC6053.jpg',
            '_DSC6075.jpg'
        ],
        desc: '帥氣風格的人像寫真'
      },
      //--Dmart-------
      {
        id: 'Dmart',
        title: 'D-Mart 超市',
        category: 'personal',
        folderPath: 'personal/Dmart',
        // ★ 設定封面：目前選第一張
        cover: '_DSC3828.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
        '_DSC3700.jpg',
        '_DSC3753.jpg',
        '_DSC3783.jpg',
        '_DSC3828.jpg'
        ],
        desc: 'Dmart的商品攝影'
      },
    //--funnyday-------
    {
        id: 'funnyday',
        title: 'Funny Day 面白',
        category: 'personal',
        folderPath: 'personal/funnyday',
        // ★ 設定封面 (預設第一張，若喜歡拿牛奶盒那張可改成 _R019146.jpg)
        cover: '_R019051.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_R018999.jpg',
          '_R019009.jpg',
          '_R019045.jpg',
          '_R019051.jpg',
          '_R019133.jpg',
          '_R019135.jpg',
          '_R019144.jpg',
          '_R019146.jpg',
          '_R019179.jpg',
          '_R019182.jpg',
          '_R019183.jpg',
          '_R019184.jpg',
          '_R019193.jpg'
        ],
        desc: '有趣的一天'
      },
    //--girl_1-------
    {
        id: 'girl_1',
        title: 'girl_1 女孩1',
        category: 'personal',
        folderPath: 'personal/girl_1',
        // ★ 設定封面 (預設第一張，若喜歡咖啡杯那張可改成 _R020273.jpg)
        cover: '_R020316.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_R020248.jpg',
          '_R020252.jpg',
          '_R020255.jpg',
          '_R020256.jpg',
          '_R020258.jpg',
          '_R020264.jpg',
          '_R020273.jpg',
          '_R020299.jpg',
          '_R020306.jpg',
          '_R020308.jpg',
          '_R020316.jpg',
          '_R020317.jpg',
          '_R020319.jpg',
          '_R020377.jpg',
          '_R020386.jpg',
          '_R020387.jpg',
          '_R020443.jpg',
          '_R020453.jpg',
          '_R020461-2.jpg'
        ],
        desc: '捕捉細膩的神情'
      },
    //--girl_2-------
    {
        id: 'girl_2',
        title: 'girl_2 女孩2',
        category: 'personal',
        folderPath: 'personal/girl_2',
        // ★ 設定封面 (預設第一張)
        cover: '_R018583.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_R018577-2.jpg',
          '_R018579.jpg',
          '_R018583.jpg',
          '_R018585.jpg',
          '_R018586.jpg'
        ],
        desc: '另一種風格的展現'
      },
    //--happy-------
    {
        id: 'happy',
        title: 'happy 快樂',
        category: 'personal',
        folderPath: 'personal/happy',
        // ★ 設定封面 (預設第一張)
        cover: '_R019482.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_DSC9665.jpg',
          '_DSC9677.jpg',
          '_R018892.jpg',
          '_R019088.jpg',
          '_R019101.jpg',
          '_R019106.jpg',
          '_R019478.jpg',
          '_R019479.jpg',
          '_R019480.jpg',
          '_R019481.jpg',
          '_R019482.jpg',
          '_R019483.jpg'
        ],
        desc: '笑容與開心的瞬間'
      },
    //--memento-------
    {
        id: 'memento',
        title: 'Memento 記憶',
        category: 'personal',
        folderPath: 'personal/memento',
        // ★ 設定封面 (預設第一張)
        cover: '_DSC1686.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_DSC1388.jpg',
          '_DSC1400.jpg',
          '_DSC1403.jpg',
          '_DSC1404.jpg',
          '_DSC1686.jpg',
          '_DSC1690.jpg',
          '_DSC1699.jpg'
        ],
        desc: '關於回憶的拼湊'
      },
    //--midnight-------
    {
        id: 'midnight',
        title: 'Midnight 午夜',
        category: 'personal',
        folderPath: 'personal/midnight',
        // ★ 設定封面 (預設第一張)
        cover: '_R019417.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_R019388.jpg',
          '_R019390-2.jpg',
          '_R019403.jpg',
          '_R019406.jpg',
          '_R019417.jpg',
          '_R019418.jpg'
        ],
        desc: '城市的夜晚不睡覺'
      },
    //--midnight_2-------
    {
        id: 'midnight_2',
        title: 'Midnight2 午夜2',
        category: 'personal',
        folderPath: 'personal/midnight_2',
        // ★ 設定封面 (預設第一張)
        cover: '_R019695.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_R019695.jpg',
          '_R019697.jpg',
          '_R019699.jpg',
          '_R019708.jpg',
          '_R019709.jpg',
          '_R019710.jpg',
          '_R019717.jpg'
        ],
        desc: '深夜系列的續篇'
      },
    //--rainyDay-------
    {
        id: 'rainyDay',
        title: 'Rainy Day 雨天',
        category: 'personal',
        folderPath: 'personal/rainyDay',
        // ★ 設定封面 (預設第一張)
        cover: '_DSC1822.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_DSC1822.jpg',
          '_DSC1895.jpg',
          '_DSC1907.jpg',
          '_DSC1954.jpg',
          '_DSC1959.jpg',
          '_DSC2210.jpg'
        ],
        desc: '雨水與城市的對話'
      },
    //--sunshine-------
    {
        id: 'sunshine',
        title: 'Sunshine 陽光',
        category: 'personal',
        folderPath: 'personal/sunshine',
        // ★ 設定封面 (預設第一張)
        cover: 'R0321965.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          'R0321965.jpg',
          'R0321969.jpg',
          'R0321972.jpg',
          'R0321976.jpg',
          'R0321981.jpg',
          'R0321982.jpg'
        ],
        desc: '充滿光影與溫度的畫面'
      },
  
    // --- Street 類別範例 ---
    // --- cloud  ---

    {
        id: 'cloud',
        title: 'cloud 雲',
        category: 'street',
        folderPath: 'street/cloud',
        // ★ 設定封面
        cover: '_DSC2157.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_DSC2137.jpg',
          '_DSC2157.jpg'
        ],
        desc: '抬頭看見的風景'
      },
    // --- life  ---
      {
        id: 'life',
        title: 'life 人生',
        category: 'street',
        folderPath: 'street/life',
        // ★ 設定封面
        cover: '_DSC7052.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_DSC6883.jpg',
          '_DSC6996.jpg',
          '_DSC7052.jpg',
          '_DSC7097.jpg'
        ],
        desc: '日常街頭的觀察'
      },
       // --- live_1  ---   
       {
        id: 'live_1',
        title: 'live_1 生活1',
        category: 'street',
        folderPath: 'street/live_1',
        // ★ 設定封面 (預設第一張)
        cover: '_DSC5769.jpg',
        
        // ★ 該資料夾內的所有照片 (共 41 張)
        images: [
          '_DSC2336.jpg',
          '_DSC2469.jpg',
          '_DSC2531.jpg',
          '_DSC2797.jpg',
          '_DSC2874.jpg',
          '_DSC3128.jpg',
          '_DSC3237.jpg',
          '_DSC3333.jpg',
          '_DSC3599.jpg',
          '_DSC3836.jpg',
          '_DSC3857.jpg',
          '_DSC3994.jpg',
          '_DSC4041.jpg',
          '_DSC4334.jpg',
          '_DSC4866.jpg',
          '_DSC5067.jpg',
          '_DSC5592.jpg',
          '_DSC5689.jpg',
          '_DSC5750.jpg',
          '_DSC5769.jpg',
          '_DSC5809.jpg',
          '_DSC5834.jpg',
          '_DSC5934.jpg',
          '_DSC6575.jpg',
          '_DSC6611.jpg',
          '_DSC6621.jpg',
          '_DSC6628.jpg',
          '_DSC6642.jpg',
          '_DSC6702.jpg',
          '_DSC6727.jpg',
          '_DSC6729.jpg',
          '_DSC7720.jpg',
          '_DSC7728.jpg',
          '_DSC7866.jpg',
          '_DSC7913.jpg',
          '_DSC8175.jpg',
          '_DSC8175-2.jpg',
          '_DSC8286.jpg',
          '_DSC8315.jpg',
          '_DSC8373.jpg',
          '_DSC8889.jpg'
        ],
        desc: '街頭現場紀錄 No.1'
      },
    // --- live_2  ---   
      {
        id: 'live_2',
        title: 'live_2 生活2',
        category: 'street',
        folderPath: 'street/live_2',
        // ★ 設定封面 (這張海景很極簡，非常適合當封面)
        cover: '_DSC5691.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_DSC5533.jpg',
          '_DSC5643.jpg',
          '_DSC5691.jpg',
          '_DSC5701.jpg',
          '_DSC6594.jpg',
          '_DSC6629.jpg',
          '_DSC6651.jpg',
          '_DSC6744.jpg',
          '_DSC6758.jpg'
        ],
        desc: '街頭現場紀錄 No.2'
      },
      // --- live_3  ---   
      {
        id: 'live_3',
        title: 'live_3 生活3',
        category: 'street',
        folderPath: 'street/live_3',
        // ★ 設定封面 (預設第一張，_DSC1316.jpg 的光影也很棒)
        cover: '_DSC2478.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_DSC0015.jpg',
          '_DSC0164.jpg',
          '_DSC0360.jpg',
          '_DSC0424.jpg',
          '_DSC1316.jpg',
          '_DSC1807.jpg',
          '_DSC2404.jpg',
          '_DSC2432.jpg',
          '_DSC2478.jpg',
          '_DSC2493.jpg',
          '_DSC2500.jpg',
          '_DSC2808.jpg',
          '_DSC2814.jpg',
          '_DSC3093.jpg',
          '_DSC9119.jpg',
          '_DSC9441.jpg',
          '_DSC9742.jpg',
          '_DSC9825.jpg',
          '_DSC9914.jpg'
        ],
        desc: '街頭現場紀錄 No.3'
      },
// --- live_4  ---  
    {
        id: 'live_4',
        title: 'live_4 生活4',
        category: 'street',
        folderPath: 'street/live_4',
        // ★ 設定封面 (這張紅色計程車很有都市感，若喜歡光影幾何可改 _DSC8604.jpg)
        cover: '_DSC8251.jpg',
        
        // ★ 該資料夾內的所有照片 (共 38 張)
        images: [
        '_DSC0171.jpg',
        '_DSC0197.jpg',
        '_DSC0230.jpg',
        '_DSC0358.jpg',
        '_DSC0468.jpg',
        '_DSC0498.jpg',
        '_DSC0601.jpg',
        '_DSC1127.jpg',
        '_DSC1429.jpg',
        '_DSC1582.jpg',
        '_DSC1739.jpg',
        '_DSC1802.jpg',
        '_DSC8251.jpg',
        '_DSC8376.jpg',
        '_DSC8391.jpg',
        '_DSC8418.jpg',
        '_DSC8491.jpg',
        '_DSC8493.jpg',
        '_DSC8520.jpg',
        '_DSC8542.jpg',
        '_DSC8556.jpg',
        '_DSC8604.jpg',
        '_DSC9102.jpg',
        '_DSC9123.jpg',
        '_DSC9214.jpg',
        '_DSC9220.jpg',
        '_DSC9337.jpg',
        '_DSC9364.jpg',
        '_DSC9382.jpg',
        '_DSC9450.jpg',
        '_DSC9905.jpg',
        '_DSC9957.jpg',
        'DSC_8581.jpg', // 注意這張檔名格式稍有不同
        '1.jpg',
        '4.jpg',
        '7.jpg',
        '愛_1.jpg',
        '愛_2.jpg'
        ],
        desc: '街頭現場紀錄 No.4'
    },
// --- live_5  ---  
{
    id: 'live_5',
    title: 'live_5 生活5',
    category: 'street',
    folderPath: 'street/live_5',
    // ★ 設定封面 (預設第一張，若喜歡強烈光影可改 "光陰.jpg")
    cover: '日子.jpg',
    
    // ★ 該資料夾內的所有照片
    images: [
      '_DSC3311.jpg',
      '_DSC3629.jpg',
      '_R020798.jpg',
      '5.jpg',
      '6.jpg',
      '日子.jpg',
      '日子二.jpg',
      '父子.jpg',
      '光陰.jpg',
      '時光.jpg'
    ],
    desc: '街頭現場紀錄 No.5'
  },
// --- living_landscape_1  ---  
{
    id: 'living_landscape_1',
    title: 'living_landscape_1 活著的景色',
    category: 'street',
    folderPath: 'street/living_landscape_1',
    // ★ 設定封面 (預設第一張，若喜歡雪地軌道可改 _DSC4650.jpg)
    cover: '_DSC6255.jpg',
    
    // ★ 該資料夾內的所有照片
    images: [
      '_DSC2344.jpg',
      '_DSC3448.jpg',
      '_DSC3499.jpg',
      '_DSC4650.jpg',
      '_DSC4700.jpg',
      '_DSC4726.jpg',
      '_DSC4888.jpg',
      '_DSC4890.jpg',
      '_DSC4913.jpg',
      '_DSC4924.jpg',
      '_DSC5095.jpg',
      '_DSC5677.jpg',
      '_DSC5783.jpg',
      '_DSC6046.jpg',
      '_DSC6255.jpg',
      '_DSC7190.jpg',
      '_DSC7250.jpg',
      '_DSC7404.jpg',
      '_DSC7439.jpg',
      '_DSC7772.jpg',
      '_DSC7913.jpg',
      '_DSC8769.jpg'
    ],
    desc: '生活中的地景觀察 No.1'
  },
  // --- living_landscape_2  ---  
  {
    id: 'living_landscape_2',
    title: 'living_landscape_2 活著的景色2',
    category: 'street',
    folderPath: 'street/living_landscape_2',
    // ★ 設定封面 (預設第一張)
    cover: '_DSC5624.jpg',
    
    // ★ 該資料夾內的所有照片
    images: [
      '_DSC5624.jpg',
      '_DSC6718.jpg',
      'R0321307.jpg'
    ],
    desc: '生活中的地景觀察 No.2'
  },
  // --- living_landscape_3  ---  
  {
    id: 'living_landscape_3',
    title: 'living_landscape_3 活著的景色3',
    category: 'street',
    folderPath: 'street/living_landscape_3',
    // ★ 設定封面 (預設第一張夕陽城市，若喜歡鳥居可改 _DSC1167.jpg)
    cover: '_DSC9401.jpg',
    
    // ★ 該資料夾內的所有照片
    images: [
      '_DSC0135.jpg',
      '_DSC1019.jpg',
      '_DSC1028.jpg',
      '_DSC1053.jpg',
      '_DSC1167.jpg',
      '_DSC1170.jpg',
      '_DSC2035.jpg',
      '_DSC8848.jpg',
      '_DSC8907.jpg',
      '_DSC9401.jpg',
      '_DSC9518.jpg',
      '_DSC9700.jpg',
      '_R018707.jpg',
      '_R018727.jpg'
    ],
    desc: '生活中的地景觀察 No.3'
  },
  // --- living_landscape_4  ---  
  // --- living_landscape_5  ---  
  {
    id: 'living_landscape_5',
    title: 'living_landscape_5 活著的景色5',
    category: 'street',
    folderPath: 'street/living_landscape_5',
    // ★ 設定封面 (預設第一張)
    cover: '_R020768.jpg',
    
    // ★ 該資料夾內的所有照片
    images: [
      '_R018301.jpg',
      '_R020768.jpg',
      '_R020781.jpg'
    ],
    desc: '生活中的地景觀察 No.5'
  },
    // --- Food 類別範例 ---
    // --- 商業攝影_甜點 ---
    {
        id: 'dessert',
        title: '商業攝影_甜點',
        category: 'food',
        folderPath: 'food/dessert',
        // ★ 設定封面 (這張淋醬的動態感很棒，剛好是你選取的那張)
        cover: '_DSC1480.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_DSC1449.jpg',
          '_DSC1451.jpg',
          '_DSC1454.jpg',
          '_DSC1480.jpg',
          '_DSC3218.jpg',
          '_DSC8535.jpg',
          '_DSC8615.jpg',
          '_DSC8679.jpg'
        ],
        desc: '味覺與視覺的饗宴'
      },
    // --- 商業攝影_飲料 ---
    {
        id: 'drinks',
        title: '熟時單位',
        category: 'food',
        folderPath: 'food/drinks',
        // ★ 設定封面 (這張倒牛奶的動態瞬間非常有質感)
        cover: '_DSC8838.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_DSC3962.jpg',
          '_DSC3967.jpg',
          '_DSC3974.jpg',
          '_DSC4112.jpg',
          '_DSC4491.jpg',
          '_DSC4527.jpg',
          '_DSC4548.jpg',
          '_DSC4597.jpg',
          '_DSC4600.jpg',
          '_DSC4601.jpg',
          '_DSC4610.jpg',
          '_DSC4726.jpg',
          '_DSC4729.jpg',
          '_DSC8838.jpg'
        ],
        desc: '細膩的飲品光影'
      },
    // --- 商業攝影_食物 ---
    {
        id: 'foods',
        title: '商業攝影_火鍋',
        category: 'food',
        folderPath: 'food/foods',
        // ★ 設定封面 (這張肉片特寫看起來非常豐盛)
        cover: '_DSC1604.jpg',
        
        // ★ 該資料夾內的所有照片
        images: [
          '_DSC1211.jpg',
          '_DSC1567.jpg',
          '_DSC1583.jpg',
          '_DSC1604.jpg',
          '_DSC4903.jpg',
          '_DSC4907.jpg',
          '_DSC4915.jpg',
          '_DSC4920.jpg'
        ],
        desc: '豐盛的火鍋饗宴'
      },

      //影片
      {
        id: 'homepageBackground',
        title: 'homepageBackground',
        category: 'video',
        type: 'video',        // ★ 標記這是影片
        folderPath: 'videos', // ★ 路徑指到 photos 外層的 videos 資料夾
        // ★ 建議準備一張封面圖放在同個資料夾，不然列表頁可能會沒畫面
        cover: 'cover.jpg',   
        
        // ★ 影片檔案
        images: [
          'homepageMain.mov'
        ],
        desc: '首頁背景影片'
      }

  ]