// scripts.js

// 时间更新
function updateTime() {
    const timeElement = document.getElementById('currentTime');
    const now = new Date();
    const formattedTime = now.toLocaleString('en-US', { hour12: false });
    timeElement.textContent = formattedTime;
}

setInterval(updateTime, 1000);

// 模拟数据更新
function updateData() {
    // 最新价格
    document.getElementById('latestPrice').textContent = (Math.random() * 0.001).toFixed(8);

    // 24小时交易量
    document.getElementById('tradeVolume').textContent = (Math.random() * 10000000).toFixed(0);

    // 市场情绪
    const sentiments = ['乐观', '中立', '悲观'];
    document.getElementById('marketSentiment').textContent = sentiments[Math.floor(Math.random() * sentiments.length)];
}

setInterval(updateData, 3000);

// 图表初始化
function initCharts() {
    // 价格走势图
    const priceChart = echarts.init(document.getElementById('priceChart'));
    const priceData = Array.from({ length: 30 }, () => Math.random() * 0.001);
    priceChart.setOption({
        title: { text: '价格走势', textStyle: { color: '#fff' } },
        xAxis: { type: 'category', data: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`), axisLine: { lineStyle: { color: '#fff' } } },
        yAxis: { type: 'value', axisLine: { lineStyle: { color: '#fff' } } },
        series: [{ type: 'line', data: priceData, color: '#00e676' }]
    });

    // 交易量分布图
    const volumeChart = echarts.init(document.getElementById('volumeChart'));
    const volumeData = Array.from({ length: 24 }, () => Math.random() * 100000);
    volumeChart.setOption({
        title: { text: '交易量分布', textStyle: { color: '#fff' } },
        xAxis: { type: 'category', data: Array.from({ length: 24 }, (_, i) => `${i}h`), axisLine: { lineStyle: { color: '#fff' } } },
        yAxis: { type: 'value', axisLine: { lineStyle: { color: '#fff' } } },
        series: [{ type: 'bar', data: volumeData, color: '#00e676' }]
    });
}

initCharts();