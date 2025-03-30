(async function() {
    // 定义 openDB 函数，用于打开 IndexedDB 数据库
    function openDB() {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open("xlabel", 1);
        request.onupgradeneeded = function(event) {
          const db = event.target.result;
          if (!db.objectStoreNames.contains("accounts")) {
            db.createObjectStore("accounts", { keyPath: "handle" });
          }
        };
        request.onsuccess = function(event) {
          resolve(event.target.result);
        };
        request.onerror = function(event) {
          reject(event.target.error);
        };
      });
    }
  
    // 定义 unupdatehandles 函数，查找 children 数组中缺少 "avatar" 字段的记录对应的 key 值
    async function unupdatehandles() {
      try {
        const db = await openDB();
        return new Promise((resolve, reject) => {
          const tx = db.transaction("accounts", "readonly");
          const store = tx.objectStore("accounts");
          const request = store.getAll();
          request.onsuccess = function(e) {
            const accounts = e.target.result;
            let unupdateHandles = [];
            accounts.forEach(account => {
              // 检查 children 数组是否存在
              if (account.smartMoney === 0) {
                  unupdateHandles.push(account.handle);
              }
            });
            // 保存结果到 sessionStorage，并在控制台输出
            sessionStorage.setItem("unupdateHandles", JSON.stringify(unupdateHandles));
            console.log("缺失 avatar 字段的记录 key:", unupdateHandles);
            resolve(unupdateHandles);
          };
          request.onerror = function(e) {s
            console.error("查询数据库失败:", e.target.error);
            reject(e.target.error);
          };
        });
      } catch (error) {
        console.error("打开数据库失败:", error);
      }
    }
  
    // 直接调用函数，在控制台执行
    unupdatehandles();
  })();