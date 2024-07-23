const N = 5; // Задайте число N
let currentProblem = 1;

const problemContainer = document.getElementById("problem-container");
const problemElement = document.getElementById("problem");
const answerInput = document.getElementById("answer");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");

// рендер уровнении
function generateProblem() {
  problemElement.textContent = `${currentProblem} x ${N} = `;
}

// создание количество кубов
function creatCube() {
  let cubes = "";
  for (let index = 0; index < N; index++) {
    cubes += '<span class="cube"></span>';
  }
  return cubes;
}

//  Создание кубов
function checkAnswer() {
  const userAnswer = parseInt(answerInput.value, 10);
  const correctAnswer = currentProblem * N;

  if (userAnswer === correctAnswer) {
    const newCubeContainer = document.createElement("div");
    newCubeContainer.classList = "container-cube fadeIn";
    newCubeContainer.innerHTML = creatCube();

    feedback.appendChild(newCubeContainer);

    submitBtn.style.backgroundColor = "#228B22"
    submitBtn.style.color = "#fff"

    setTimeout(() => {
      newCubeContainer.classList.remove("fadeIn");
      submitBtn.style.backgroundColor = "";
      submitBtn.style.color = "";
    }, 500);
    
    answerInput.value = "";
    currentProblem++;
    
    generateProblem();
  } else {
    answerInput.style.backgroundColor = "#FA8072";
    submitBtn.style.backgroundColor = "#FA8072";
    setTimeout(() => {
      answerInput.style.backgroundColor = "";
      submitBtn.style.backgroundColor = "";
    }, 500);
  }
  toggleButton();
}
// проверка наличие значение
function toggleButton() {
  if (answerInput.value === "") {
    submitBtn.classList.add("disabled");
    submitBtn.disabled = true;
  } else {
    submitBtn.classList.remove("disabled");
    submitBtn.disabled = false;
  }
}


answerInput.addEventListener("input", toggleButton);
submitBtn.addEventListener("click", checkAnswer);
submitBtn.addEventListener("mouseover", () => submitBtn.classList.add("hover"));
submitBtn.addEventListener("mouseout", () =>
  submitBtn.classList.remove("hover")
);

generateProblem();
