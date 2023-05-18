function controller(view) {
let dashboardLocalData;

    (async function getDashboard(){
        const request = await fetch('http://localhost:5050/dashboard');
        const data = await request.json();
        dashboardLocalData = data;
        console.log(dashboardLocalData);
        const {lastFiveLeads, osPopularity, interactionsByDay} = dashboardLocalData;
        view.updateTable(lastFiveLeads);
        view.updateDoughnutChart(osPopularity);
        view.updateBarChart(interactionsByDay);
    })();

    view.onHello = (x) => {
        console.log('Hello inside the class!')
    }

    view.getHello();
    view.render();

}

let view = new View();
controller(view);