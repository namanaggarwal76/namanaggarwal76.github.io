const before = document.getElementById("before");
const liner = document.getElementById("liner");
const command = document.getElementById("typer");
const textarea = document.getElementById("texter");
const terminal = document.getElementById("terminal");
const contentscroll = document.getElementById("contentscroll");

let git = 0;
let pw = false;
const commands = [];
let suggestedCommand = null;
let awaitingConfirmation = false;
let isGameRunning = false;

function scrollToBottom() {
  if (contentscroll) {
    contentscroll.scrollTop = contentscroll.scrollHeight;
  }
}

const commandMap = {
  help: "help",
  aboutme: "aboutme",
  projects: "projects",
  social: "social",
  email: "email",
  history: "history",
  sudo: "sudo",
  clear: "clear",
  linkedin: "linkedin",
  instagram: "instagram",
  github: "github",
  tictactoe: "tictactoe",
};

setTimeout(function () {
  loopLines(banner, "", 80);
  textarea.focus();
  scrollToBottom();
}, 100);

window.addEventListener("keyup", function (e) {
  if (isGameRunning) return;
  enterKey(e);
  scrollToBottom();
});

window.addEventListener("keydown", function (e) {
  if (isGameRunning) return;
  textarea.focus();
  scrollToBottom();
});

document.addEventListener("click", function () {
  textarea.focus();
  scrollToBottom();
});

terminal.addEventListener("click", function () {
  textarea.focus();
  scrollToBottom();
});

textarea.addEventListener("input", scrollToBottom);

textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  textarea.focus();
  scrollToBottom();

  if (e.keyCode === 181) {
    document.location.reload(true);
  }

  if (e.key === "Tab") {
    e.preventDefault();
    const partial = textarea.value.toLowerCase();
    const matches = Object.keys(commandMap).filter((cmd) =>
      cmd.startsWith(partial),
    );
    if (matches.length === 1) {
      textarea.value = matches[0];
      command.innerHTML = matches[0];
    } else if (matches.length > 1) {
      addLine("<br>", "", 0);
      loopLines(matches, "color2", 80);
      addLine("<br>", "", matches.length * 80 + 100);
    }
    scrollToBottom();
    return;
  }

  if (e.ctrlKey && e.key === "r") {
    e.preventDefault();
    const search = prompt("Reverse search:");
    const match = commands
      .slice()
      .reverse()
      .find((cmd) => cmd.includes(search));
    if (match) {
      textarea.value = match;
      command.innerHTML = match;
    } else {
      addLine("No match found in history.", "error", 100);
    }
    scrollToBottom();
  }

  if (e.keyCode === 13) {
    const input = command.innerHTML.trim().toLowerCase();
    addLine("[naman@aggarwal]~$" + command.innerHTML, "no-animation", 0);

    if (awaitingConfirmation && suggestedCommand) {
      if (input === "y") {
        commander(suggestedCommand);
      } else {
        addLine("Cancelled.", "color2", 80);
      }
      awaitingConfirmation = false;
      suggestedCommand = null;
    } else {
      commands.push(command.innerHTML);
      git = commands.length;
      commander(input);
    }

    command.innerHTML = "";
    textarea.value = "";
    scrollToBottom();
  }

  if (e.keyCode === 38 && git !== 0) {
    git -= 1;
    textarea.value = commands[git];
    command.innerHTML = textarea.value;
    scrollToBottom();
  }

  if (e.keyCode === 40 && git !== commands.length) {
    git += 1;
    textarea.value = commands[git] || "";
    command.innerHTML = textarea.value;
    scrollToBottom();
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "aboutme":
      loopLines(aboutme, "color2 margin", 80);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      loopLines(emails, "color2 margin", 80);
      break;
    case "clear":
      setTimeout(function () {
        const paragraphs = terminal.querySelectorAll("p");
        paragraphs.forEach((p) => p.remove());
        if (!document.getElementById("before")) {
          const beforeElement = document.createElement("a");
          beforeElement.id = "before";
          terminal.insertBefore(beforeElement, terminal.firstChild);
          before = beforeElement;
        }
        if (typeof banner !== "undefined") {
          loopLines(banner, "", 80);
        }
        textarea.focus();
        scrollToBottom();
      }, 1);
      break;
    case "dev":
      addLine("Opening Dev.to...", "color2", 80);
      newTab(dev);
      break;
    case "twitter":
      addLine("Opening Twitter...", "color2", 0);
      newTab(twitter);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    case "sudo":
      addLine("Oh no, you're not an admin...", "color2", 0);
      newTab(sudo);
      break;
    case "tictactoe":
      runTicTacToe();
      break;
    default:
      const closest = findClosestCommand(cmd);
      if (closest) {
        suggestedCommand = closest;
        awaitingConfirmation = true;
        addLine(
          `<span class="inherit">Command not found. Did you mean <span class="command">'${closest}'</span>? (y/n)</span>`,
          "error",
          100,
        );
      } else {
        addLine(
          `<span class="inherit">Command not found. Type <span class="command">'help'</span> for available commands.</span>`,
          "error",
          100,
        );
      }
      break;
  }
  scrollToBottom();
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  let t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === " " && text.charAt(i + 1) === " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }

  setTimeout(function () {
    const next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;
    before.parentNode.insertBefore(next, before);
    contentscroll.scrollTop = contentscroll.scrollHeight;
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
  setTimeout(
    function () {
      scrollToBottom();
    },
    name.length * time + 50,
  );
}

function findClosestCommand(input) {
  const threshold = 3;
  let minDist = Infinity;
  let closest = null;
  Object.keys(commandMap).forEach((cmd) => {
    const dist = levenshtein(input, cmd);
    if (dist < minDist && dist <= threshold) {
      minDist = dist;
      closest = cmd;
    }
  });
  return closest;
}

function levenshtein(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0),
  );
  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }
  return matrix[a.length][b.length];
}

function runTicTacToe() {
  isGameRunning = true;
  let board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let currentPlayer = "X";
  let gameActive = true;
  let gameElement;

  // Disable textarea input during game
  textarea.disabled = true;

  function draw() {
    let screen = `
 ${board[0]} | ${board[1]} | ${board[2]}
---+---+---
 ${board[3]} | ${board[4]} | ${board[5]}
---+---+---
 ${board[6]} | ${board[7]} | ${board[8]}
`;
    if (!gameActive) {
      screen += `\nGame Over!`;
    } else {
      screen += `\nPlayer ${currentPlayer}'s turn (Press 1-9)`;
    }

    if (!gameElement) {
      gameElement = document.createElement("p");
      gameElement.className = "color2";
      gameElement.innerHTML = `<pre>${screen}</pre>`;
      before.parentNode.insertBefore(gameElement, before);
    } else {
      gameElement.innerHTML = `<pre>${screen}</pre>`;
    }
    contentscroll.scrollTop = contentscroll.scrollHeight;
  }

  function checkWin() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Cols
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (board[a] === board[b] && board[b] === board[c]) {
        return true;
      }
    }
    return false;
  }

  function checkDraw() {
    return board.every((cell) => cell === "X" || cell === "O");
  }

  function keyHandler(e) {
    if (e.key === "Escape" || e.key === "q") {
      cleanup();
      gameElement.innerHTML += `<br><span class="color2">🛑 Tic-Tac-Toe exited.</span>`;
      return;
    }

    if (!gameActive) return;

    const key = parseInt(e.key);
    if (key >= 1 && key <= 9) {
      const index = key - 1;
      if (board[index] !== "X" && board[index] !== "O") {
        board[index] = currentPlayer;
        if (checkWin()) {
          draw();
          gameElement.innerHTML += `<br><span class="command">🎉 Player ${currentPlayer} wins!</span><br>Press 'q' to exit.`;
          gameActive = false;
        } else if (checkDraw()) {
          draw();
          gameElement.innerHTML += `<br><span class="color2">🤝 It's a draw!</span><br>Press 'q' to exit.`;
          gameActive = false;
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          draw();
        }
      }
    }
  }

  function cleanup() {
    window.removeEventListener("keydown", keyHandler);
    isGameRunning = false;
    textarea.disabled = false;
    textarea.focus();
  }

  window.addEventListener("keydown", keyHandler);
  addLine(
    "🎮 Starting Tic-Tac-Toe... Press 1-9 to place your mark. 'q' or Esc to quit.",
    "color2",
    0,
  );
  draw();
}
