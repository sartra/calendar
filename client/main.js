// The following code appends a title to the page
// document.createElement creates an element that can be altered and then inserted into the DOM
// document.body.appendChild places a node as a child under the body element
var title = document.createElement('div');
title.innerHTML = 'Social Calendar';
document.body.appendChild(title);

// Your schedule can be accessed through the global object "schedule"
console.log(schedule);

$(document).ready(() => {

  function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  function mySchedule() {
    const ul = document.getElementById('week');
    for (let i = 0; i < schedule.length; i += 1) {
      const li = createNode('li');
      const p = createNode('p');
      p.append('Week:  ', schedule[i].week,'    Day: ', schedule[i].day,'    Unit: ', schedule[i].unit, '   Challenge: ', schedule[i].challenge, '   Goals: ', schedule[i].goals,);
      append(li, p);
      append(ul, li);
    }
  }

mySchedule();

  function lyout(){
    let weeks = 0;
    const tb = document.getElementById('calendar');
    for (let i = 0; i < schedule.length; i += 1) {
      if (schedule[i].week > weeks) weeks = schedule[i].week;
    }
    console.log(weeks);

    for (let i = 0; i < weeks; i += 1) {
        let monday = createNode('td');
        let tuesday = createNode('td');
        let wednesday = createNode('td');
        let thursday = createNode('td');
        let friday = createNode('td');
        $(monday).addClass('Monday');
        $(tuesday).addClass('Tuesday');
        $(wednesday).addClass('Wednesday');
        $(thursday).addClass('Thursday');
        $(friday).addClass('Friday');
        
        console.log('working');
        newWeek = createNode('tr');
        console.log(newWeek)
        $(newWeek).addClass('week'+i);
        append(tb, newWeek);
        append (newWeek, monday)
        append (newWeek, tuesday)
        append (newWeek, wednesday)
        append (newWeek, thursday)
        append (newWeek, friday)
        
      for (let j = 0; j < schedule.length; j += 1) {    if(i === schedule[j].week) {
          console.log(schedule[j].week, schedule[i].day)
          
         }
      }
      
    } // i loop
  }

lyout();

});