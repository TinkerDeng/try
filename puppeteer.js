const puppeteer = require("puppeteer");
const schedule = require('node-schedule')
const fs = require("fs");
const cheerio = require("cheerio")

// const main = () => {
//   schedule.scheduleJob('1 0 0 * * *', () => {
//       // 主逻辑
//   })
// }

async function getPic() {
    //启动 puppeteer,启动Chrome实例,禁用默认超时
    const browser = await puppeteer.launch({ headless: false, timeout: 0 });
    //创建一个新的页面
    const page = await browser.newPage();

    //设置屏幕尺寸
    await page.setViewport({ width: 750, height: 1380 });

    // await page.setUserAgent(''); 设置useragent

    // await page.emulateMedia(mediaType)  修改媒体类型 screen print null

    // await page.emulate(options) 快捷函数 width height deviceScaleFactor isMobile hasTouch isLandscape userAgent

    // 直接输入、按键
    // await page.keyboard.type('Hello World!');
    // await page.keyboard.press('ArrowLeft');

    // 按住不放
    // await page.keyboard.down('Shift');
    // for (let i = 0; i < ' World'.length; i++)
    // await page.keyboard.press('ArrowLeft');
    // await page.keyboard.up('Shift');
    // await page.keyboard.press('Backspace');
    // await page.keyboard.sendCharacter('嗨');

    // 常见事件的监听load dialog error pageerror console
    // await page.on('load', async () => {
    //     console.log('page loading done, start fetch...');
    // });

    // 鼠标
    //await mouse.click(x, y, [options])
    //await mouse.move(x, y, [options]): options 可以设置
    //await mouse.down([options])
    //await mouse.up([options])
    //await touchscreen.tap(x, y)

    // await page.waitForNavigation()

    // 性能分析
    // await page.tracing.start({ path: 'trace.json' })

    // 等待页面加载出来
    // await page.waitForNavigation({
    //     waitUntil: 'load'
    // });

    // 等同于document.querySelector
    // await page.$(selector);

    // 等同于document.querySelectorAll，返回的是包装后的promise
    // await page.$$(selector)

    // 获取DOM属性值
    // await page.$eval("#search",ev=>{ev.value})

    // await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
    await page.goto("https://test.yangcong345.com/ZXH5-vip-payment.html");

    // await page.tracing.stop()

    // 延迟1s，主要是等待网站全部加载
    await page.waitFor(1000);

    await page.content()  //输出整个html的内容

    // 获取dom元素，返回一个 Serializable 的 Promise
    await page.evaluate(() => {
        for (var y = 0; y <= 10000; y += 100) {
            window.scrollTo(0, y)
        }
    });

    // ElementHandle 对象父类型 JSHandle 的 Promise
    await page.evaluateHandle(() => {
        Promise.resolve(window)
    });

    // 文档被创建完成但是script没有执行完成
    await page.evaluateOnNewDocument(() => { })

    //await page.waitFor('#verifyHacpaiIcon')

    // // 模拟click事件
    await page.click(
        ".get-vip-auth", {
        delay: 20
    }
    );
    await page.waitFor(2000);

    await page.click("body > section > div > div.goods-list-modal-container > div.goods-list-modal.modal-active > div.goods-card-container > div:nth-child(1) > div > div.goods-control > div.buy-goods-btn > div", {
        delay: 30
    })
    await page.click("body > section > div > div.goods-list-modal-container > div.modal-bk-mask.modal-bk-active", {
        delay: 100
    })
    // 光标聚焦
    //await page.focus('#kw');

    // 键盘点击输入
    // await page.keyboard.sendCharacter('test');

    // 给表单元素传值
    // await page.type('#nameOrEmail', secretConfig.hacpai.account, { delay: 20 })

    // 该函数可以让我们使用内置的dom选择器
    // const result = await page.evaluate(() => {
    //     let title = document.querySelector("h1").innerText
    //     let price = document.querySelector(".price_color").innerText;
    //     return {
    //         title,
    //         price
    //     }
    // });

    //截屏的路径和名称
    // await page.screenshot({ path: "test.png" });

    // 生成pdf
    //await page.pdf({path: 'hn.pdf', format: 'A4'});

    // 在window对象注册一个函数
    // await page.exposeFunction('readfile', async filePath => {
    //     return new Promise((resolve, reject) => {
    //         fs.readFile(filePath, 'utf8', (err, text) => {
    //             if (err)
    //                 reject(err);
    //             else
    //                 resolve(text);
    //         });
    //     });
    // });
    // await page.evaluate(async () => {
    //     // use window.readfile to read contents of a file
    //     const content = await window.readfile('/etc/hosts');
    //     console.log(content);
    // });

    // 关闭窗口
    await page.close();

    //关闭浏览器
    await browser.close();





    // 从 Chromium 断开和 puppeteer 的连接
    // const browserWSEndpoint = browser.wsEndpoint();
    // browser.disconnect();
    // // 使用节点来重新建立连接, 关闭 Chromium
    // const browser2 = await puppeteer.connect({ browserWSEndpoint });
    // await browser2.close();
}

getPic().then(data => {
    console.log(data);
})