const options = document.querySelectorAll(".option");
const personChoice = document.getElementById("person-pick");
const pcChoice = document.getElementById("pc-picked");
const playButton = document.getElementById("play");
const winsDisplay = document.getElementById("total-wins");
const outcomeDesc = document.getElementById("outcome");
const match = {
  wins: 0,
  lossed: 0,
  tie: 0,
  total: 0,
  person: null,
  pc: null,
};
function checkWhoWon() {
  outcomeDesc.classList = "outcome";
  match.total++;
  if (
    (match.person === "scissor" && match.pc === "paper") ||
    (match.person === "rock" && match.pc === "scissors") ||
    (match.person === "paper" && match.pc === "rock")
  ) {
    personChoice.className = "winner";
    pcChoice.className = "loser";
    match.wins++;
    outcomeDesc.innerText = "You win";
  } else if (match.person === match.pc) {
    match.tie++;
    personChoice.className = "tie";
    pcChoice.className = "tie";
    outcomeDesc.innerText = "It's a Tie";
  } else {
    pcChoice.className = "winner";
    personChoice.className = "loser";
    match.lossed++;
    outcomeDesc.innerText = "You Lost";
  }

  winsDisplay.innerText = `Wins:${match.wins} | Loss:${match.lossed} |Total matches:${match.total}`;
}
options.forEach((option) => {
  option.addEventListener("click", () => {
    const html = `<figcaption>You Picked</figcaption>`;
    let coppy = option.cloneNode();
    personChoice.innerHTML = html;
    personChoice.appendChild(coppy);
    match.person = coppy.id;
  });
});

playButton.addEventListener("click", () => {
  outcomeDesc.classList = "";
  outcomeDesc.innerText = "";
  if (match.person === null) {
    outcomeDesc.innerText = "PLEASE PICK A OPTION";
    outcomeDesc.classList = "alert";
    return;
  }
  const html = `<figcaption>PC Picked</figcaption>`;
  const pcPick = Math.floor(Math.random() * 3);
  let coppy = options[pcPick].cloneNode();
  pcChoice.innerHTML = html;
  pcChoice.appendChild(coppy);
  match.pc = coppy.id;
  checkWhoWon();
});
