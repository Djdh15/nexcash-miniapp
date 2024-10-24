document.getElementById("show-leaders").addEventListener("click", function() {
    const leaders = [
        { username: "User1", points: 100 },
        { username: "User2", points: 80 },
        { username: "User3", points: 60 },
    ];

    let leadersList = "<h2>قائمة المتصدرين:</h2><ul>";
    leaders.forEach(leader => {
        leadersList += `<li>@${leader.username} - النقاط: ${leader.points}</li>`;
    });
    leadersList += "</ul>";

    const leadersDiv = document.getElementById("leaders");
    leadersDiv.innerHTML = leadersList;
    leadersDiv.classList.toggle("hidden");
});
