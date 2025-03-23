// 创建文件读取框并导入数据到IndexedDB
(async function importTwitterNotesToIndexedDB() {
  // 创建文件输入元素
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  
  // 监听文件选择事件
  input.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error('未选择文件');
      return;
    }

    // 读取文件内容
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = JSON.parse(e.target.result);
        
        // 提取myTwitterNoteItems数据
        const twitterNotes = data.$myTwitterNoteItems;
        
        if (!twitterNotes) {
          console.error('没有找到$myTwitterNoteItems数据');
          return;
        }
        
        // 打开IndexedDB数据库
        const dbRequest = indexedDB.open('xlabel', 1);
        
        dbRequest.onerror = (event) => {
          console.error('打开数据库失败:', event.target.error);
        };
        
        dbRequest.onupgradeneeded = (event) => {
          const db = event.target.result;
          
          // 如果accounts表不存在，创建它
          if (!db.objectStoreNames.contains('accounts')) {
            const accountsStore = db.createObjectStore('accounts', { keyPath: 'handle' });
          }
        };
        
        dbRequest.onsuccess = (event) => {
          const db = event.target.result;
          const transaction = db.transaction('accounts', 'readwrite');
          const accountsStore = transaction.objectStore('accounts');
          
          // 将数据导入到accounts表
          for (const key in twitterNotes) {
            const item = twitterNotes[key];
            
            // 直接将整个对象存入数据库
            const accountData = {
              handle: key,
              parent: item.parent || null,
              label: item.tag || '',
              nickname: item.name || '',
              children: item.children || [],
              timestamp: Date.now(), // 当前时间戳
              nameChanges: item.nameChanges || 0, // 新增字段
              pumpCount: item.pumpCount || 0,     // 新增字段
              deletedTweets: item.deletedTweets || 0, // 新增字段
              smartMoney: item.smartMoney || 0    // 新增字段，默认值为68
            };
            
            const addRequest = accountsStore.put(accountData);
            
            addRequest.onsuccess = () => {
              console.log(`成功导入账号: ${key}`);
            };
            
            addRequest.onerror = (event) => {
              console.error('导入数据时出错:', event.target.error);
            };
          }
          
          transaction.oncomplete = () => {
            console.log('所有数据导入完成');
          };
        };
      } catch (error) {
        console.error('读取或解析文件时发生错误:', error);
      }
    };
    
    // 读取文件内容
    reader.readAsText(file);
  });
  
  // 触发文件选择框
  input.click();
})();