// ==UserScript==
// @name         Deep First Traversal with Label Generation & Backtracking (With Stop Button)
// @namespace    http://tampermonkey.net/
// @version      2025-02-14
// @description  深度优先遍历账户页面，生成标签并递归遍历每个子账户，存储数据到 IndexedDB，支持回溯和停止按钮
// @match        https://x.com/*
// @match        https://twitter.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==



//将sessionstorage导出
// (function() {
//     try {
//         // 获取 sessionStorage 的所有数据
//         const sessionData = {};
//         for (let i = 0; i < sessionStorage.length; i++) {
//             const key = sessionStorage.key(i);
//             const value = sessionStorage.getItem(key);
//             try {
//                 sessionData[key] = JSON.parse(value);
//             } catch (e) {
//                 sessionData[key] = value;
//             }
//         }

//         // 转换为 JSON 字符串
//         const jsonString = JSON.stringify(sessionData, null, 2);

//         // 创建 Blob 对象
//         const blob = new Blob([jsonString], { type: "application/json" });

//         // 创建下载链接
//         const url = URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = url;
//         link.download = `sessionStorage_${new Date().toISOString()}.json`;

//         // 触发下载
//         document.body.appendChild(link);
//         link.click();

//         // 清理
//         document.body.removeChild(link);
//         URL.revokeObjectURL(url);

//         console.log("sessionStorage 已成功导出为 JSON 文件");
//     } catch (error) {
//         console.error("导出 sessionStorage 失败:", error);
//     }
// })();


//导入sessionstorage
(function() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/json";
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);

    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (!file) {
            console.error("未选择文件");
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const sessionData = JSON.parse(e.target.result);
                for (const key in sessionData) {
                    if (sessionData.hasOwnProperty(key)) {
                        const value = sessionData[key];
                        if (typeof value === "object" && value !== null) {
                            sessionStorage.setItem(key, JSON.stringify(value));
                        } else {
                            sessionStorage.setItem(key, value.toString());
                        }
                    }
                }
                console.log("已成功从 JSON 文件导入 sessionStorage");
                console.log("当前 sessionStorage 内容:", Object.fromEntries(Object.entries(sessionStorage)));
            } catch (error) {
                console.error("导入 sessionStorage 失败:", error);
            }
        };
        reader.onerror = (e) => {
            console.error("读取文件失败:", e);
        };
        reader.readAsText(file);

        document.body.removeChild(fileInput);
    });

    fileInput.click();
})();



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
              if (Array.isArray(account.children)) {
                // 如果该记录的 children 中存在缺失 "avatar" 字段的项，则保存当前记录的 key（即 account.handle）
                const hasMissingAvatar = account.children.some(child => {
                  return !child.hasOwnProperty("avatar") || child.avatar === undefined || child.avatar === "";
                });
                if (hasMissingAvatar && account.handle && !unupdateHandles.includes(account.handle)) {
                  unupdateHandles.push(account.handle);
                }
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
  

(function () {
    'use strict';
    /************** IndexedDB 数据库相关函数 **************/
    function openDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open("xlabel", 1);
            request.onupgradeneeded = function (event) {
                const db = event.target.result;
                if (!db.objectStoreNames.contains("accounts")) {
                    db.createObjectStore("accounts", { keyPath: "handle" });
                }
            };
            request.onsuccess = function (event) {
                resolve(event.target.result);
            };
            request.onerror = function (event) {
                reject(event.target.error);
            };
        });
    }

    // 添加或更新账户记录
    function addAccountToDB(account) {
        console.log(`将账户 ${account.handle} 数据添加到数据库...`);
        return openDB().then(db => {
            return new Promise((resolve, reject) => {
                const tx = db.transaction(["accounts"], "readwrite");
                const store = tx.objectStore("accounts");
                const req = store.put(account); // put 会覆盖相同 key 的记录
                req.onsuccess = () => resolve(account);
                req.onerror = (e) => reject(e.target.error);
            });
        });
    }

    // 根据 handle 获取账户记录
    function getAccountFromDB(handle) {
        return openDB().then(db => {
            return new Promise((resolve, reject) => {
                const tx = db.transaction(["accounts"], "readonly");
                const store = tx.objectStore("accounts");
                const req = store.get(handle);
                req.onsuccess = () => resolve(req.result);
                req.onerror = (e) => reject(e.target.error);
            });
        });
    }

    /************** 从页面 DOM 中获取数据（生成标签） **************/
    async function fetchAccountData(handle, parentHandle) {
        console.log(`开始获取账户 ${handle} 的数据...`);
    
        // 1. 等待按钮渲染
        await new Promise(resolve => setTimeout(resolve, 3000));
    
        // 2. 模拟点击内部"点击查询"按钮（如果存在）
        const internalQueryElement = document.querySelector('span.analytics-item[data-type="toQuery"]');
        if (!internalQueryElement) {
            console.log("未找到内部'点击查询'按钮，无法获取插件数据");
            return null;
        }
    
        internalQueryElement.click();
        console.log("已模拟点击内部'点击查询'元素");
    
        // 等待插件渲染数据
        await new Promise(resolve => setTimeout(resolve, 7000));
    
        // ① 从插件容器中获取改名、发盘、删贴数据
        const pluginContainer = document.querySelector('div.twitter-analytics-box');
        if (!pluginContainer) {
            throw new Error("未找到插件容器 div.twitter-analytics-box");
        }
    
        const errorMessage = pluginContainer.querySelector('span.analytics-item');
        if (errorMessage && errorMessage.innerText.includes("数据获取失败" || "加载失败")) {
            sessionStorage.setItem("isStopped", "true");
            sessionStorage.setItem("isUpdating", "false");
            console.log("查询次数可能已达上限");
            return null;
        }
    
        // 修改后的逻辑：根据 DOM 结构获取数据
        const nameChangesDiv = pluginContainer.querySelector('div.count-item[data-type="nameChanges"]');
        const pumpCountDiv = pluginContainer.querySelector('div.count-item[data-type="pumpCount"]');
        const deletedTweetsDiv = pluginContainer.querySelector('div.count-item[data-type="deletedTweets"]');
        const accountNameSpan = pluginContainer.querySelector('span.title[data-type="title"]');
        const nicknameSpan = document.querySelector('div[data-testid="UserName"] span span');
    
        // 解析数据：直接获取 innerText 并转换为数字
        const nameChangesNumber = nameChangesDiv ? parseInt(nameChangesDiv.innerText.trim(), 10) || 0 : 0;
        const pumpCountNumber = pumpCountDiv ? parseInt(pumpCountDiv.innerText.trim(), 10) || 0 : 0;
        const deletedTweetsNumber = deletedTweetsDiv ? parseInt(deletedTweetsDiv.innerText.trim(), 10) || 0 : 0;
        const nickname = nicknameSpan ? nicknameSpan.innerText : "";
        const accountName = accountNameSpan ? accountNameSpan.innerText : nickname;
    
        console.log(`改名次数: ${nameChangesNumber}, 发盘次数: ${pumpCountNumber}, 删贴次数: ${deletedTweetsNumber}`);
    
        // ② 从"关注ta的KOL"区域获取数字和子节点列表
        const kolFollowersBox = document.querySelector('div.twitter-kol-followers-box');
        let kfNumber = 0;
        let childrenHandles = [];
        if (kolFollowersBox) {
            const followerTitleSpan = kolFollowersBox.querySelector('.kol-followers-title');
            if (followerTitleSpan) {
                kfNumber = parseInt(followerTitleSpan.innerText.match(/\D*(\d+)\D*/)?.[1], 10) || 0;
            }
            const followerList = kolFollowersBox.querySelector('.kol-followers-list');
            if (followerList) {
                const followerItems = followerList.querySelectorAll('.kol-follower-item');
                followerItems.forEach(item => {
                    const screenName = item.getAttribute("data-screen-name");
                    const followerNameElement = item.querySelector('.kol-follower-name');
    
                    // 获取头像 URL
                    const avatarElement = item.querySelector('img.kol-follower-avatar');
                    const avatarUrl = avatarElement ? avatarElement.getAttribute('src') : '';
    
                    if (screenName && followerNameElement) {
                        const fullName = followerNameElement.innerText.trim();
                        childrenHandles.push({
                            handle: screenName.replace(/^@/, ""),
                            name: fullName,
                            avatar: avatarUrl
                        });
                    }
                });
            }
        }
    
        console.log(`账户名称: ${accountName}, 关注的 KOL 数量: ${kfNumber}`);
    
        // ③ 生成标签，使用从父账户数据中获取的名称
        const label = `头衔${accountName}_改名${nameChangesNumber}_发盘${pumpCountNumber}_删推${deletedTweetsNumber}_聪明钱${kfNumber}`;
        console.log(`生成的标签：${label}`);
    
        // ④ 返回一个对象而不是拼接的 label
        return {
            handle: handle,
            label: accountName,
            nameChanges: nameChangesNumber,
            pumpCount: pumpCountNumber,
            deletedTweets: deletedTweetsNumber,
            smartMoney: kfNumber,
            nickname: nickname,
            children: childrenHandles
        };
    }

    /************** 深度优先遍历账户（递归） **************/
    async function processAccount(handle, parentHandle = null) {

        // 检查是否已停止
        if (sessionStorage.getItem("isStopped") === "true") {
            console.log("遍历已停止");
            return; // 直接返回，停止执行
        }
        // 首先检查数据库中是否已存在该账户的数据
        const existing = await getAccountFromDB(handle);

        // 处理下一个兄弟节点的通用函数
        async function processNextSibling() {
            if (!parentHandle) return;

            const parentData = await getAccountFromDB(parentHandle);
            if (!parentData?.children) return;

            const currentIndex = parentData.children.findIndex(child =>
                typeof child === 'object' && child.handle === handle
            );

            if (currentIndex >= 0 && currentIndex < parentData.children.length - 1) {
                const nextSibling = parentData.children[currentIndex + 1];
                console.log(`继续处理下一个兄弟节点: ${nextSibling.handle}`);
                await processAccount(nextSibling.handle, parentHandle);
            } else {
                console.log(`已处理完 ${parentHandle} 的所有子节点`);
                const grandParentHandle = parentData.parent;
                if (grandParentHandle) {
                    console.log(`返回到祖父节点 ${grandParentHandle} 继续处理`);
                    sessionStorage.setItem("pendingHandle", parentHandle);
                    sessionStorage.setItem("pendingParent", grandParentHandle);
                    console.log(`准备跳转到 ${parentHandle}`);
                    await new Promise(res => setTimeout(res, 7000)); // 等待 7 秒
                    location.href = `https://x.com/${parentHandle}`;
                    console.log(`已跳转到 ${parentHandle}`);
                }
            }
        }

        // 如果数据已存在且标签不为空，直接处理下一个节点
        if (existing && existing.label) {
            console.log(`账户 ${handle} 已存在数据，标签为: ${existing.label}`);
            await processNextSibling();
            return;
        }

        // 检查当前页面是否是目标账户页面
        const currentPath = window.location.pathname.split("/")[1];
        if (currentPath !== handle) {
            console.log(`当前页面不是目标账户，跳转到 ${handle} 的页面`);
            sessionStorage.setItem("pendingHandle", handle);
            sessionStorage.setItem("pendingParent", parentHandle || "");
            console.log(`准备跳转到 ${handle}`);
            await new Promise(res => setTimeout(res, 7000)); // 等待 7 秒
            location.href = `https://x.com/${handle}`;
            console.log(`已跳转到 ${handle}`);
            return;
        }

        // 等待页面加载完成
        await new Promise(resolve => setTimeout(resolve, 3000));

        // 检查账户是否存在或受保护
        const emptyStateDiv = document.querySelector('div[data-testid="emptyState"]');
        const protectedAccountTexts = "These posts are protected";
        if (emptyStateDiv) {
            const headerText = emptyStateDiv.querySelector('div[data-testid="empty_state_header_text"] span');
            const invalidAccountTexts = [
                '此账号不存在',
                '账号已被冻结',
                "This account doesn't exist",
                "Account suspended",
                "Caution: This account is temporarily restricted"
            ];

            // 如果是无效账号，直接跳过
            if (invalidAccountTexts.some(text => headerText?.innerText.includes(text))) {
                console.log(`账户 ${handle} 不存在或已被冻结，跳过处理`);
                await processNextSibling();
                return;
            }

            // 如果是受保护账号（These posts are protected）
            if (headerText && headerText.innerText.includes(protectedAccountTexts)) {
                console.log(`账户 ${handle} 推文受保护，尝试检测关注按钮...`);

                // 查找关注按钮 (Twitter/X 的 DOM 可能会变化，可根据实际情况调整)
                // 一般可在 div[data-testid="placementTracking"] 下找到按钮
                const followButton = document.querySelector('div[data-testid="placementTracking"] [role="button"] span');
                if (followButton) {
                    const followText = followButton.innerText.trim();
                    if (followText === "Follow") {
                        console.log("检测到按钮文字为 'Follow'，自动点击关注");
                        followButton.click();
                        await new Promise(resolve=>setTimeout(resolve, 3000));
                    } else if (followText === "Pending") {
                        console.log("检测到按钮文字为 'Pending'，说明已发送关注请求，无需操作");
                    } else {
                        console.log(`检测到按钮文字为 '${followText}'，无需额外操作`);
                    }
                } else {
                    console.log("未找到关注按钮，无法自动关注");
                }

                // 受保护账号情况下，不再进行后续插件数据抓取，直接处理兄弟节点
                await processNextSibling();
                return;
            }
        }

        // 账户存在且不是"推文受保护"，则继续尝试点击查询按钮
        const querySuccess = await checkAndClickQuery();
        if (!querySuccess) {
            console.log("未能找到或点击查询按钮，跳过该账户");
            await processNextSibling();
            return;
        }

        // 获取新数据并处理
        let accountData;
        try {
            accountData = await fetchAccountData(handle, parentHandle);
        } catch (e) {
            console.error(`账户 ${handle} 获取数据失败：`, e);
            await processNextSibling();
            return;
        }

        if (!accountData) {
            console.log("accountData 为空，无法继续");
            await processNextSibling();
            return;
        }

        const { label, children } = accountData;

        // 更新账户数据
        const accountRecord = {
            handle: handle,
            parent: parentHandle,
            label: label,
            children: children,
            timestamp: Date.now()
        };
        await addAccountToDB(accountRecord);
        console.log(`账户 ${handle} 数据已更新`);

        // 处理子节点
        for (let child of children) {
            if (sessionStorage.getItem("isStopped") === "true") {
                console.log("遍历已停止");
                return;
            }

            console.log(`处理子账户 ${child.handle}`);
            await new Promise(resolve => setTimeout(resolve, 5000));
            await processAccount(child.handle, handle);
        }

        // 子节点处理完后，再处理兄弟节点
        await processNextSibling();
    }

    /************** 页面按钮 **************/
    // 添加一个"停止遍历"按钮
    const stopButton = document.createElement("button");
    stopButton.innerText = "停止遍历";
    stopButton.style.position = "fixed";
    stopButton.style.top = "150px";
    stopButton.style.right = "20px";
    stopButton.style.zIndex = 9999;
    document.body.appendChild(stopButton);

    stopButton.addEventListener("click", () => {
        sessionStorage.setItem("isStopped", "true");
        console.log("遍历已停止");
    });

    // 添加一个"开始遍历"按钮
    const traverseButton = document.createElement("button");
    traverseButton.innerText = "开始遍历";
    traverseButton.style.position = "fixed";
    traverseButton.style.top = "100px";
    traverseButton.style.right = "20px";
    traverseButton.style.zIndex = 9999;
    document.body.appendChild(traverseButton);

    traverseButton.addEventListener("click", () => {
        // 每次点击"开始遍历"时，将 sessionStorage 中的 isStopped 重置为 false
        sessionStorage.setItem("isStopped", "false");
        console.log("重置 isStopped 为 false");

        // 获取当前页面 URL 中的 X handle
        let xHandle = "";
        const pathParts = window.location.pathname.split("/");
        if (pathParts[1]) {
            xHandle = pathParts[1];
        }
        console.log(`启动遍历，当前账户: ${xHandle}`);
        // 启动递归遍历
        processAccount(xHandle);
    });

    // 检查当前URL是否是有效的用户页面
    function isValidUserPage() {
        const path = window.location.pathname;
        // 排除一些特殊页面
        if (path === '/' || path.includes('/home') || path.includes('/explore')) {
            return false;
        }
        // 确保是用户页面（路径第一段是用户名）
        return path.split('/').length >= 2 && path.split('/')[1].length > 0;
    }

    // 初始化检查
    async function initialize() {
        console.log("脚本开始初始化...");

        // // 检查是否是有效的用户页面
        // if (!isValidUserPage()) {
        //     console.log("不是有效的用户页面，跳过初始化");
        //     return;
        // }

        // const pendingHandle = sessionStorage.getItem("pendingHandle");
        // const pendingParent = sessionStorage.getItem("pendingParent");

        // if (pendingHandle) {
        //     console.log(`检测到待处理账户: ${pendingHandle}`);
        //     // 等待页面加载完成
        //     await new Promise(resolve => setTimeout(resolve, 3000));
        //     processAccount(pendingHandle, pendingParent === "" ? null : pendingParent);
        // } else {
        //     console.log("没有待处理的账户");
        //     // 获取当前页面的账户
        //     const currentHandle = window.location.pathname.split("/")[1];
        //     if (currentHandle) {
        //         console.log(`开始处理当前页面账户: ${currentHandle}`);
        //         processAccount(currentHandle);
        //     }
        // }
        //processNickname();
        updateAllHandles("unupdateHandles");
    }



    async function checkAndClickQuery(maxAttempts = 5) {
        let currentAttempt = parseInt(sessionStorage.getItem('queryAttemptCount') || '0');
    
        while (currentAttempt < maxAttempts) {
            console.log(`第 ${currentAttempt + 1} 次尝试查找查询按钮...`);
            const internalQueryElement = document.querySelector('span.analytics-item[data-type="toQuery"]');
    
            if (internalQueryElement) {
                console.log("找到查询按钮，准备点击");
                internalQueryElement.click();
                console.log("已点击查询按钮，等待数据加载...");
                await new Promise(resolve => setTimeout(resolve, 7000));
    
                // 如果按钮不是“加载失败”，说明暂时还可以继续查询
                sessionStorage.removeItem('queryAttemptCount');
                console.log("等待完成，继续执行");
                return true;
            }
    
            currentAttempt++;
            sessionStorage.setItem('queryAttemptCount', currentAttempt.toString());
    
            if (currentAttempt >= maxAttempts) {
                break;
            }
    
            console.log(`第 ${currentAttempt} 次尝试未找到按钮，准备刷新页面...`);
            window.location.reload();
            console.log("等待页面重新加载...");
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    
        sessionStorage.removeItem('queryAttemptCount');
        console.log("达到最大重试次数，未能找到查询按钮");
        return false;
    }
    
    

    function updateNicknameInDB(handle, nickname) {
        return openDB().then(db => new Promise((resolve, reject) => {
            const tx = db.transaction("accounts", "readwrite");
            const store = tx.objectStore("accounts");
            const req = store.get(handle);
            req.onsuccess = e => {
                const data = e.target.result;
                if (data) {
                    data.nickname = nickname;
                    store.put(data);
                }
                resolve();
            };
            req.onerror = e => reject(e.target.error);
        }));
    }

    async function getAllHandles() {
        const db = await openDB();
        return new Promise((resolve) => {
            const tx = db.transaction("accounts", "readonly");
            const store = tx.objectStore("accounts");
            const req = store.getAllKeys();
            req.onsuccess = e => resolve(e.target.result);
        });
    }
    

     // 创建读取 nickname 的按钮
     const readNicknameButton = document.createElement("button");
     readNicknameButton.innerText = "读取昵称";
     readNicknameButton.style.position = "fixed";
     readNicknameButton.style.top = "200px";
     readNicknameButton.style.right = "20px";
     readNicknameButton.style.zIndex = 9999;
     document.body.appendChild(readNicknameButton);


     readNicknameButton.addEventListener("click", async () => {
       if(!sessionStorage.getItem("nicknameHandles")){
          console.log("尚未获取所有handles,开始获取");
          getAllHandles();
       }
        processNickname();
    });

    async function processNickname() {
        const handles = JSON.parse(sessionStorage.getItem("nicknameHandles"));
        let index = parseInt(sessionStorage.getItem("nicknameIndex"), 10);
        if (index >= handles.length) {
            console.log("nickname 更新完成");
            return;
        }
        const handle = handles[index];
        
        // 检查当前页面是否是目标账户页面
        if (location.pathname.split("/")[1] !== handle) {
            console.log(`准备跳转到 ${handle}`);
            location.href = `https://x.com/${handle}`;
            console.log(`已跳转到 ${handle}`);
            return;
        }
        
        await new Promise(res => setTimeout(res, 7000));

        // 从 sessionStorage 获取 attempts，如果不存在则初始化为 0
        let attempts = parseInt(sessionStorage.getItem("nicknameAttempts"), 10) || 0;
        const maxRetries = 3; // 最大重试次数
        let nickname = "";

        while (attempts < maxRetries) {
            const nicknameSpan = document.querySelector('div[data-testid="UserName"] span span');
            nickname = nicknameSpan ? nicknameSpan.innerText : "";

            if (nickname) {
                console.log(`抓取到nickname: ${nickname} for ${handle}`);
                await updateNicknameInDB(handle, nickname);
                sessionStorage.setItem("nicknameIndex", (index + 1).toString());
                sessionStorage.setItem("nicknameAttempts", "0"); // 成功后重置 attempts
                await new Promise(res => setTimeout(res, 5000)); // 休息5 秒
                processNickname(); // 继续处理下一个
                return;
            } else {
                console.log(`第 ${attempts + 1} 次尝试未找到 nickname,准备刷新页面...`);
                attempts++;
                sessionStorage.setItem("nicknameAttempts", attempts.toString()); // 更新 attempts
                window.location.reload(); // 刷新页面
                await new Promise(res => setTimeout(res, 5000)); // 等待页面加载
              
            }
        }
        

        // 如果三次尝试后仍然未找到 nickname，记录失败的索引
        console.log(`账户 ${handle} 的 nickname 获取失败，记录失败的索引: ${index}`);
        
        // 将 attempts 重置为 0
        sessionStorage.setItem("nicknameAttempts", "0");

        // 获取失败索引数组，如果不存在则创建一个新的数组
        let failedIndexes = JSON.parse(sessionStorage.getItem("failedIndexes")) || [];
        if (!Array.isArray(faiedIndexes)) {
            failedIndexes = []; // 确保是数组
        }
        
        if (!failedIndexes.includes(index)) {
            failedIndexes.push(index); // 添加失败的索引
        }
        sessionStorage.setItem("failedIndexes", JSON.stringify(failedIndexes)); // 保存到 sessionStorage

        sessionStorage.setItem("nicknameIndex", (index + 1).toString()); // 继续下一个
        await new Promise(res => setTimeout(res, 5000)); // 休息 5 秒
        processNickname(); // 继续处理下一个
    }

    // 新增函数：处理失败的索引
    async function processFailedIndexes() {
        let failedIndexes = JSON.parse(sessionStorage.getItem("failedIndexes")) || [];
        
        while (failedIndexes.length > 0) {
            const index = failedIndexes[0]; // 获取第一个失败的索引
            const handles = JSON.parse(sessionStorage.getItem("nicknameHandles"));
            const handle = handles[index];

            // 保存当前处理的失败数组下标 i 到 sessionStorage
            sessionStorage.setItem("currentFailedIndex", index);

            // 检查当前页面是否是目标账户页面
            if (location.pathname.split("/")[1] !== handle) {
                console.log(`准备跳转到 ${handle}`);
                location.href = `https://x.com/${handle}`;
                console.log(`已跳转到 ${handle}`);
                return;
            }
            
            // 等待页面加载
            await new Promise(res => setTimeout(res, 7000));

            // 检查页面是否成功加载
            if (document.readyState !== "complete") {
                console.log(`账户 ${handle} 的页面未能加载，跳过处理...`);
                continue; // 跳过当前账户，继续处理下一个
            }

            // 尝试获取 nickname
            let attempts = parseInt(sessionStorage.getItem("nicknameAttempts"), 10) || 0; // 从 sessionStorage 获取 attempts
            const maxRefreshAttempts = 3; // 最大刷新次数
            let nickname = "";

            while (attempts < maxRefreshAttempts) {
                const nicknameSpan = document.querySelector('div[data-testid="UserName"] span span');
                nickname = nicknameSpan ? nicknameSpan.innerText : "";

                if (nickname) {
                    console.log(`成功获取到 nickname: ${nickname} for ${handle}`);
                    await updateNicknameInDB(handle, nickname);

                    // 从失败数组中移除第一个元素
                    failedIndexes.shift(); // 移除第一个元素
                    sessionStorage.setItem("failedIndexes", JSON.stringify(failedIndexes)); // 更新失败数组
                    sessionStorage.setItem("nicknameAttempts", "0"); // 成功后重置 attempts
                    break; // 成功获取 nickname，跳出刷新循环
                } else {
                    console.log(`账户 ${handle} 的 nickname 仍未找到，准备刷新页面...`);
                    attempts++;
                    sessionStorage.setItem("nicknameAttempts", attempts.toString()); // 更新 attempts
                    await new Promise(res => setTimeout(res, 5000)); // 等待页面加载
                    window.location.reload(); // 刷新页面
                }
            }

            // 如果刷新次数达到最大值，将当前账户添加到数组末尾
            if (attempts >= maxRefreshAttempts) {
                console.log(`账户 ${handle} 刷新 ${maxRefreshAttempts} 次后仍未找到 nickname，重新添加到失败数组...`);
                failedIndexes.shift();
                failedIndexes.push(index); // 将当前索引添加到数组末尾
                sessionStorage.setItem("failedIndexes", JSON.stringify(failedIndexes)); // 更新失败数组
                sessionStorage.setItem("nicknameAttempts", "0"); // 重置 attempts
            }

            // 打印当前失败数组的长度
            console.log(`当前失败数组的长度: ${failedIndexes.length}`);

            // 等待 10 秒后继续
            await new Promise(res => setTimeout(res, 10000));
        }

        console.log("所有失败的索引已处理完毕。");
    }


    // ***************************************************
    
    async function updateData(handle) {
        console.log(`开始增量更新账户 ${handle} 的数据...`);
      
        // 1. 获取最新数据
        const newAccountData = await fetchAccountData(handle);
        if (!newAccountData) {
          console.log(`无法获取账户 ${handle} 的新数据`);
          return;
        }
      
        // 2. 获取数据库中现有数据
        const existingAccountData = await getAccountFromDB(handle);
      
        // 如果数据库中不存在，则直接插入新数据
        if (!existingAccountData) {
          newAccountData.timestamp = Date.now();
          await addAccountToDB(newAccountData);
          console.log(`账户 ${handle} 不存在，已直接插入新数据`);
          return;
        }
      
        // 3. 比较更新字段
        let updated = false;
        const fieldsToUpdate = ['label', 'nameChanges', 'pumpCount', 'smartMoney', 'nickname'];
        for (const field of fieldsToUpdate) {
          if (existingAccountData[field] !== newAccountData[field]) {
            existingAccountData[field] = newAccountData[field];
            updated = true;
          }
        }
      
        // 4. 处理 children 数组
        const newChildren = newAccountData.children;       // 新数据中的 children 数组（完整对象数组）
        const existingChildren = existingAccountData.children; // 数据库中已有的 children 数组（完整对象数组）
        const existingChildrenMap = new Map(existingChildren.map(child => [child.handle, child]));
      
        const addedChildren = []; // 保存新增的子账户 handle
        for (const newChild of newChildren) {
          const existingChild = existingChildrenMap.get(newChild.handle);
          if (!existingChild) {
            // 如果不存在，视为新增
            addedChildren.push(newChild.handle);
          } else if (existingChild.name !== newChild.name || existingChild.avatar !== newChild.avatar) {
            console.log(`账户 ${handle} 的子账户 ${newChild.handle} 的字段有变化`);
            updated = true;
            break;
          }
        }
      
        // 如果发现字段更新或者有新增 children，则用最新的 children 数组替换原数据
        if (updated || addedChildren.length > 0) {
          existingAccountData.children = newChildren;
        }
      
        // 5. 保存更新数据到数据库
        if (updated) {
          existingAccountData.timestamp = Date.now();
          await addAccountToDB(existingAccountData);
          console.log(`账户 ${handle} 数据已增量更新`);
        } else {
          console.log(`账户 ${handle} 数据没有变化`);
        }
      
        // 6. 检查 addedChildren 中的 handle 是否已存在于数据库，保存数据库中不存在的 childHandle 到 sessionStorage
        const trulyNewChildren = [];
        for (const childHandle of addedChildren) {
          const existingChild = await getAccountFromDB(childHandle);
          if (!existingChild) {
            trulyNewChildren.push(childHandle);
          }
        }
      
        if (trulyNewChildren.length > 0) {
          let newChildHandles = JSON.parse(sessionStorage.getItem('newChildHandles')) || [];
          trulyNewChildren.forEach(childHandle => {
            if (!newChildHandles.includes(childHandle)) {
              newChildHandles.push(childHandle);
            }
          });
          sessionStorage.setItem('newChildHandles', JSON.stringify(newChildHandles));
          console.log(`已将 ${trulyNewChildren.length} 个数据库中不存在的 childHandle 保存到 sessionStorage`);
        } else {
          console.log(`没有新的 childHandle 需要保存到 sessionStorage`);
        }
      }
      
    
    // 添加一个"更新数据"按钮
    const updateButton = document.createElement("button");
    updateButton.innerText = "更新数据";
    updateButton.style.position = "fixed";
    updateButton.style.top = "250px";
    updateButton.style.right = "20px";
    updateButton.style.zIndex = 9999;
    document.body.appendChild(updateButton);

    updateButton.addEventListener("click", async () => {
        const isUpdating = sessionStorage.getItem("isUpdating") === "true";
        if (!isUpdating) {
            // 开始或继续更新
            sessionStorage.setItem("isUpdating", "true");
            updateButton.innerText = "停止更新";
            console.log("开始或继续更新数据...");
            updateAllHandles("unupdateHandles");
        } else {
            // 停止更新
            sessionStorage.setItem("isUpdating", "false");
            updateButton.innerText = "更新数据";
            console.log("停止更新数据...");
        }
    });


    async function updateAllHandles(handlesKey = "allHandles") {
        // 直接从 sessionStorage 获取 handles
        let allHandles = JSON.parse(sessionStorage.getItem(handlesKey));
      
        // 如果 sessionStorage 里没有数据，则从数据库获取
        if (!allHandles || allHandles.length === 0) {
          allHandles = await getAllHandles();
          if (!allHandles || allHandles.length === 0) {
            console.log("数据库中没有 handle");
            return;
          }
          sessionStorage.setItem(handlesKey, JSON.stringify(allHandles));
        }
      
        // 使用固定的 sessionStorage 键 "currentIndex"
        let currentIndex = parseInt(sessionStorage.getItem("currentIndex") || "0", 10);
      
        try {
          for (let i = currentIndex; i < allHandles.length; i++) {
            if (sessionStorage.getItem("isUpdating") !== "true") {
              console.log("更新已停止");
              sessionStorage.setItem("currentIndex", i.toString());
              return;
            }
      
            const currentPath = window.location.pathname.split("/")[1];
            if (currentPath !== allHandles[i]) {
              console.log(`当前页面不是目标账户，跳转到 ${allHandles[i]} 的页面`);
              sessionStorage.setItem("currentIndex", i.toString());
              await new Promise(res => setTimeout(res, 7000));
              location.href = `https://x.com/${allHandles[i]}`;
              console.log(`已跳转到 ${allHandles[i]}`);
              return;
            }
      
            try {
              await updateData(allHandles[i]);
              console.log(`更新完成 ${i + 1}/${allHandles.length}`);
              sessionStorage.setItem("currentIndex", (i + 1).toString());
              console.log("处理第", i, "项，currentIndex 更新为", i + 1);
            } catch (error) {
              console.error(`更新 handle ${allHandles[i]} 失败: ${error}`);
            }
          }
      
          console.log("所有 handle 已更新完成");
          sessionStorage.setItem("isUpdating", "false");
          sessionStorage.removeItem("currentIndex");
          sessionStorage.removeItem(handlesKey); // 移除 handlesKey
          updateButton.innerText = "更新数据";
        } catch (error) {
          console.error("更新过程发生错误:", error);
        }
      }
      
    

    // 直接执行初始化
    console.log("脚本加载完成，准备初始化...");
    initialize();

})();
