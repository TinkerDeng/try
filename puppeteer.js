const puppeteer = require("puppeteer");
async function getPic() {
    //启动 puppeteer,启动Chrome实例
    const browser = await puppeteer.launch({ headless: false });

    //创建一个新的页面
    const page = await browser.newPage();

    //设置屏幕尺寸
    //await page.setViewport({ width: 1000, height: 500 });

    //godo打开页面
    await page.goto("http://books.toscrape.com/");

    // 延迟1s，主要是等待网站全部加载
    await page.waitFor(1000);

    // 模拟click事件
    await page.click(
        "#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img"
    );

    // 该函数可以让我们使用内置的dom选择器
    const result = await page.evaluate(() => {
        let title = document.querySelector("h1").innerText
        let price = document.querySelector(".price_color").innerText;
        return {
            title,
            price
        }
    });
    
    //截屏的路径和名称
    await page.screenshot({ path: "test.png" });

    //关闭浏览器
    await browser.close();

    return result
}
getPic().then(data => {
    console.log(data);
})