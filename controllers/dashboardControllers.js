import { fs } from "../dependencies.js";
import * as KPI from "./kpiCalculations.js";

export const getData = (req, res) => {
    try {
        const usersJSONData = fs.readFileSync('./localCollection/users.json');
        const interactionsJSONData = fs.readFileSync('./localCollection/interactions.json');
        const {users} = JSON.parse(usersJSONData);
        const {interactions} = JSON.parse(interactionsJSONData);
        /*
        let iOS_count=0; 
        let android_count=0; 
        let other_count=0
        interactions.forEach(interaction => {
          if(interaction.OS === 'iOS'){
            iOS_count++;
          }else if (interaction.OS === 'Android'){
            android_count++;
          }else {
            other_count++;
          }
        });
        //console.log(`iOS_count: ${iOS_count}`);
        console.table({iOS_count,android_count,other_count})
        const osPopularity = {iOS_count,android_count,other_count};

        //----------------------------------------------- visitsByDay
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const weekdays_counter = [0,0,0,0,0,0,0];

        interactions.forEach(interaction=>{
          const day = interaction.date.split(' ')[0];
          console.log(day);
          weekdays.forEach( (weekday, j) => {
            if(day === weekday){
              weekdays_counter[j]++;
              return;
            }
          });
        });

        console.table({weekdays, weekdays_counter});*/
        const osPopularity = KPI.getDevicePopularity(interactions);
        const interactionsByDay = KPI.getInteractionsByDay(interactions);
        const lastFiveLeads =  KPI.getLastFiveLeads(users);

        let dashboardData = {users,interactions,osPopularity, interactionsByDay, lastFiveLeads}
        res.status(201).send(dashboardData);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error adding user');
      }
}


