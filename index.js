// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit",masaiPL)
var scheduleArr=JSON.parse(localStorage.getItem("schedule"))||[];
function masaiPL(){
    event.preventDefault();

    var scheduleObj={
        match:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
    }
    scheduleArr.push(scheduleObj)
   localStorage.setItem("schedule",JSON.stringify(scheduleArr));
   document.querySelector("#masaiForm").reset();
}