(async function() {
    // 打开 IndexedDB 数据库
    const db = await new Promise((resolve, reject) => {
        const request = indexedDB.open("xlabel", 1);
        request.onsuccess = e => resolve(e.target.result);
        request.onerror = e => reject(e.target.error);
    });

    const tx = db.transaction("accounts", "readonly");
    const store = tx.objectStore("accounts");
    const request = store.getAll();

    request.onsuccess = async e => {
        const accounts = e.target.result;
        let myTwitterNoteItems = {};

        // 格式化 IndexedDB 数据
        accounts.forEach(account => {
            if (account.handle && account.label && account.nickname) {
                myTwitterNoteItems[account.handle] = {
                    tag: account.label,            // 对应数据库的 label
                    name: account.nickname,        // 对应数据库的 nickname
                    group: "g_1715575413636",      // 固定 group
                    parent: account.parent || "",  // 其他字段
                    children: account.children || [],
                    timestamp: account.timestamp || 0,
                    deletedTweets:account.deletedTweets || 0,
                    nameChanges:account.nameChanges || 0,
                    pumpCount:account.pumpCount || 0,
                    smartMoney:account.smartMoney || 0

                };
            }
        });

        // 创建文件选择框，用户手动选择 JSON 文件
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = ".txt";
        fileInput.onchange = function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = function() {
                try {
                    const exampleData = JSON.parse(reader.result); // 解析 JSON

                    // 替换 `$myTwitterNoteItems`
                    exampleData["$myTwitterNoteItems"] = myTwitterNoteItems;

                    // 生成 JSON 字符串
                    const jsonData = JSON.stringify(exampleData, null, 4);

                    // 创建 Blob 并下载
                    const blob = new Blob([jsonData], { type: "text/plain" });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = "exported_twitter_data.txt";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    console.log("数据已导出为 exported_twitter_data.txt");
                } catch (error) {
                    console.error("JSON 解析错误:", error);
                }
            };
            reader.readAsText(file);
        };

        document.body.appendChild(fileInput);
        fileInput.click();
    };

    request.onerror = e => {
        console.error("读取数据库时发生错误:", e.target.error);
    };
})();
