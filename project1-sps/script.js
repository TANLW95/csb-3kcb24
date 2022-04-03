// To generate random no. between 0 - 3
var programGeneratedSPS = function () {
  var randomNo = Math.floor(Math.random() * 3);

  switch (randomNo) {
    case 0:
      return "scissors";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "stone";
      break;
    default:
      break;
  }
};

// To generate random no. between 0 - 3
var programGeneratedReversedSPS = function () {
  var randomNo = Math.floor(Math.random() * 3);

  switch (randomNo) {
    case 0:
      return "reversed scissors";
      break;
    case 1:
      return "reversed paper";
      break;
    case 2:
      return "reversed stone";
      break;
    default:
      break;
  }
};

// Percentage calculation
function percentage(count, totalGameCount) {
  return ((count / totalGameCount) * 100).toFixed(2);
}

// Declaration of global variables
var yourWinCOunt = 0;
var computerWinCount = 0;
var tieCount = 0;
var totalGameCount = 0;

var main = function (input) {
  var programOutput = programGeneratedSPS();
  var programReversedOutput = programGeneratedReversedSPS();
  var gameOutcome;
  totalGameCount += 1;

  // Validation check for input response
  if (
    input != "scissors" &&
    input != "paper" &&
    input != "stone" &&
    input != "reversed scissors" &&
    input != "reversed paper" &&
    input != "reversed stone"
  ) {
    return `Please submit a valid input! Enter either scissors, paper or stone!`;
  }

  if (input.includes("reversed")) {
    if (input == programReversedOutput) {
      tieCount += 1;
      gameOutcome = `Its a tie! `;
    } else if (
      (input == "reversed scissors" &&
        programReversedOutput == "reversed stone") ||
      (input == "reversed stone" &&
        programReversedOutput == "reversed paper") ||
      (input == "reversed paper" &&
        programReversedOutput == "reversed scissors")
    ) {
      yourWinCOunt += 1;
      gameOutcome = `You win! <br> You chose ${input} and the computer chose ${programReversedOutput}. Try another round!`;
    } else {
      computerWinCount += 1;
      gameOutcome = `You lose! <br> You chose ${input} and the computer chose ${programReversedOutput}. Try another round!`;
    }
  } else {
    if (input == programOutput) {
      tieCount += 1;
      gameOutcome = `Its a tie!`;
    } else if (
      (input == "scissors" && programOutput == "paper") ||
      (input == "stone" && programOutput == "scissors") ||
      (input == "paper" && programOutput == "stone")
    ) {
      yourWinCOunt += 1;
      gameOutcome = `You win! <br> You chose ${input} and the computer chose ${programOutput}. Try another round!`;
    } else {
      computerWinCount += 1;
      gameOutcome = `You lose! <br> You chose ${input} and the computer chose ${programOutput}. Try another round!`;
    }
  }

  var winPercentage = percentage(yourWinCOunt, totalGameCount);
  var losePercentage = percentage(computerWinCount, totalGameCount);
  var tiePercentage = percentage(tieCount, totalGameCount);

  if (input === "" && totalGameCount === 0) {
    return "What is your name?";
  } else {
    return (
      gameOutcome +
      ("<br><br>GAME SCORE:" +
        "<br>Total rounds played: " +
        totalGameCount +
        "<br>Wins: " +
        yourWinCOunt +
        " (" +
        winPercentage +
        "%)" +
        "<br>Losses: " +
        computerWinCount +
        " (" +
        losePercentage +
        "%)" +
        "<br>Ties: " +
        tieCount +
        " (" +
        tiePercentage +
        "%)")
    );
  }
};
