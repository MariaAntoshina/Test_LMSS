
const ctx1 = document.getElementById('chart1').getContext('2d');
const ctx2 = document.getElementById('chart2').getContext('2d');


let chart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Завершено', 'В процессе', 'Не пройдено', 'Не начато'],
        datasets: [{
            data: [7, 1, 1, 1 ],
            backgroundColor:
                [   '#00A75C',
                    '#E9841D',
                    '#EC133D',
                    '#B6D4ED',
                ],
            borderWidth: 0
        }]
    },
    options: {
        cutout: '80%',
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        }
    },
    plugins: [{
        beforeDraw: function(chart) {
            const ctx = chart.ctx;
            const width = chart.width;
            const height = chart.height;
            const centerX = width / 2;
            const centerY = height / 2;
            const fontSize = 32;
            const fontFamily = 'Stolzl-light';
            const fontWeight = 600;

            ctx.save();
            ctx.font =  `${fontWeight} ${fontSize}px ${fontFamily}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'black';
            ctx.fillText('70%', centerX, centerY);
            ctx.restore();
        }
    }]
});


let chartSecond = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Завершено', 'В процессе'],
        datasets: [{
            data: [2, 5],
            backgroundColor:
                [
                    '#E9841D',
                    '#B6D4ED',
                ],

            borderWidth: 0
        }]
    },
    options: {
        cutout: '80%',
        circumference: 180,
        rotation: 270,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        }
    },
    plugins: [{
        beforeDraw: function(chartSecond) {
            const ctx = chartSecond.ctx;
            const width = chartSecond.width;
            const height = chartSecond.height;
            const centerX = width / 2;
            const centerY = height / 1.4 ;
            const fontSize = 32;
            const fontFamily = 'Stolzl-light';
            const fontWeight = 600;

            ctx.save();
            ctx.font =  `${fontWeight} ${fontSize}px ${fontFamily}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'black';
            ctx.fillText('2/5', centerX, centerY);
            ctx.restore();
        }
    }]
});

