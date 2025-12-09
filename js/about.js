// ===== グラフ生成スクリプト =====

// Chart.js を読み込み済みである前提
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('gradeChart');
    if (!ctx) return;  // ページに無ければ何もしない

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['2年', '3年', '4年'],
            datasets: [{
                data: [34, 12, 4],  // 27期, 26期, 25期
                backgroundColor: [
                    '#ff9999',
                    '#99ccff',
                    '#ffcc99'
                ]
            }]
        }
    });
});
