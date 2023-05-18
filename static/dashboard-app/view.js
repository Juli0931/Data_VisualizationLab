class View {
    static barItem = document.querySelector('#myBarChart');
    static doughnutItem = document.querySelector('#myDoughnutChart');
    static lineItem = document.querySelector('#myLineChart');
    static fiveLeadsTable = document.querySelector('table')
    constructor() {
        this.doughnutChart;
        this.barChart;
    }
    getHello() {
        this.onHello();
    }
    getBarChart() {
        const config = {
            type: 'bar',
            data: {
                labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 32, 40, 55, 80, 24],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
        this.barChart = new Chart(View.barItem, config);
    }
    getDoughnutChart() {
        const data = {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100], //data.dataset[0].data;
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        };
        const config = { //config.data.dataset[0].data;
            type: 'doughnut',
            data: data,
        };
        this.doughnutChart = new Chart(View.doughnutItem, config);
    }
    getLineChart() {
        const labels = ['January','February', 'March', 'April', 'May', 'June', 'July'];
        const data = {
            labels: labels,
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        };
        const config = {
            type: 'line',
            data: data,
        };
        new Chart(View.lineItem, config);
    }
    getDataUpdate(){ 
        //a
    }


    updateTable(newFiveLeads){
        console.log(View.fiveLeadsTable);
        console.table(newFiveLeads);
        newFiveLeads.forEach((element, index) => {
            let row = document.createElement('tr');
            row.innerHTML =
                `<td>${newFiveLeads[index].name}</td>
                <td>${newFiveLeads[index].email}</td>`; 
            View.fiveLeadsTable.appendChild(row);
        });
    }

    updateDoughnutChart(devicePopularity){
        console.log(this.doughnutChart.data.datasets[0].data);
        console.table(devicePopularity);
        this.doughnutChart.data.datasets[0].data[0] = devicePopularity.iOS_count;
        this.doughnutChart.data.datasets[0].data[1] = devicePopularity.android_count;
        this.doughnutChart.data.datasets[0].data[2] = devicePopularity.other_count;
        this.doughnutChart.data.labels = ['iOS', 'Android', 'Other'];
        console.log(this.doughnutChart.data.datasets[0].data);
        this.doughnutChart.update();        
    }

    updateBarChart(interactionsByDay){
        this.barChart;
        const {weekdays, weekdays_counter} = interactionsByDay;
        this.barChart.data.labels = weekdays;
        this.barChart.data.datasets[0].data = weekdays_counter;
        console.log(this.barChart.data.datasets[0].data);
        this.barChart.update();
    }

    render() {
        this.getBarChart();
        this.getDoughnutChart();
        this.getLineChart();
    }
}