var team1={
    name: "FC Barcelona",
    score: 0,
    strike:[]
};

var team2={
    name: "Real Madrid",
    score: 0,
    strike:[]
};

var goal=["G","X"];

var flag;

window.onload=()=>{
    selectToss();
    updateButton();
}

function selectToss(){
    flag = Math.round(Math.random())+1;
}

function updateButton(){
    if(flag===1)
        document.getElementById("strike").textContent = team1.name+" Strike";
    else
        document.getElementById("strike").textContent = team2.name+" Strike";
}

refresh=()=>{
    window.location.reload("Refresh");
}


handleStrike=()=>{
    var g = goal[Math.floor(Math.random()*goal.length)];
    if(flag===1)
    {
        team1.strike.push(g);
        if(g==='G')
            team1.score++;
        updateButton();
        updateScore();
        flag=2;
    }
    else
    {
        team2.strike.push(g);
        if(g==="G")
            team2.score++;
        updateButton();
        updateScore();
        flag=1;
    }
    if(team1.strike.length===5 && team2.strike.length===5)
    {
        updateScore();
        var button = document.getElementById("strike");
        var result = document.getElementById("result");
        button.remove();
        if(team1.score>team2.score)
            result.textContent=team1.name+" Wins";
        else if(team1.score < team2.score)
            result.textContent=team2.name+" Wins";
        else
            result.textContent="Match Draw";
    }
}

function updateScore(){
    document.getElementById("team1score").textContent = team1.score;
    document.getElementById("team2score").textContent = team2.score;
    updateGoals();
}

function updateGoals()
{
    var team1run = document.getElementById("team1goals").children;
    team1.strike.forEach((run,value)=>{
    if(run==="G")
        team1run[value].style.backgroundColor= "#008000";
    else
        team1run[value].style.backgroundColor= "#FF0000";
    });

    var team2run = document.getElementById("team2goals").children;
    team2.strike.forEach((run,value)=>{
        if(run==="G")
        team2run[value].style.backgroundColor= "#008000";
    else
        team2run[value].style.backgroundColor= "#FF0000";
    });
}
