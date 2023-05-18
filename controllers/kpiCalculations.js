export function getDevicePopularity(interactions){
    console.log('Inside getDevicePopularity()');
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
    const devicePopularity = {iOS_count,android_count,other_count};
    return devicePopularity;
}

export function getInteractionsByDay(interactions){
    console.log('Inside getInteractionsByDay()');
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

    console.table({weekdays, weekdays_counter});
    const interactionsByDay = {weekdays, weekdays_counter}
    return interactionsByDay;
}

export function getLastFiveLeads(leads){
    return leads.slice(leads.length-5);
}
        