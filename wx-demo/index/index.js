var Chart = require('../script/Chart.umd.min.js');
const app = getApp()

Page({
  data: {
    chart:{}
  },
  touchHandler(e){
    this.chart.instance.touchHandler(e);
  },
  addData(){
    if (this.chart.config.data.datasets.length > 0) {
      var month = this.chart.MONTHS[this.chart.config.data.labels.length % this.chart.MONTHS.length];
      this.chart.config.data.labels.push(month);
      this.chart.config.data.datasets.forEach(function(dataset) {
        dataset.data.push(Math.floor(-100+Math.random()*200));
      });
      this.chart.instance.update();
    }
  },
  removeData(){
    this.chart.config.data.labels.splice(-1, 1); // remove the label first
    this.chart.config.data.datasets.forEach(function(dataset) {
      dataset.data.pop();
    });
    this.chart.instance.update();
  },
  onLoad() {
    this.chart = {};
    this.chart.config = createConfig();
    this.chart.MONTHS = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
    this.chart.instance = new Chart('canvas', this.chart.config)
    function createConfig() {
      return {
          type: 'line',
          data: {
              labels: ['一', '二', '三', '四', '五', '六'],
              datasets: [{
                  label: '数据一',
                  backgroundColor: 'rgba(255,0,0,0.3)',
                  borderColor: 'rgba(255,0,0,0.3)',
                  data: [
                      Math.floor(-100+Math.random()*200),
                      Math.floor(-100+Math.random()*200),
                      Math.floor(-100+Math.random()*200),
                      Math.floor(-100+Math.random()*200),
                      Math.floor(-100+Math.random()*200),
                      Math.floor(-100+Math.random()*200),
                  ],
                  fill: false,
              }, {
                  label: '数据二',
                  fill: false,
                  backgroundColor: 'rgba(0,0,255,0.3)',
                  borderColor: 'rgba(0,0,255,0.3)',
                  data: [
                      Math.floor(-100+Math.random()*200),
                      Math.floor(-100+Math.random()*200),
                      Math.floor(-100+Math.random()*200),
                      Math.floor(-100+Math.random()*200),
                      Math.floor(-100+Math.random()*200),
                      Math.floor(-100+Math.random()*200),
                  ],
              }]
          },
          options: {
              responsive: true,
              tooltips: {
                  mode: 'index',
                  intersect: false,
              },
              hover: {
                  mode: 'nearest',
                  intersect: true
              },
              scales: {
                  xAxes: [{
                      display: true,
                      scaleLabel: {
                          display: true,
                          labelString: '月'
                      }
                  }],
                  yAxes: [{
                      display: true,
                      scaleLabel: {
                          display: true,
                          labelString: 'Value'
                      }
                  }]
              }
          }
      }
    }
  },
})
