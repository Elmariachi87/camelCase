const enterBtn = document.querySelector("button");
const outputArea = document.querySelector(".textOutput");

enterBtn.addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  outputArea.innerHTML = "";

  for (const row of rows) {
    const text = row.toLowerCase().trim().replaceAll("_", " ").split(" ");
    const [word1, word2] = [...text];
    const word2Camel = word2[0].toUpperCase() + word2.slice(1);
    const fullWords = word1 + word2Camel;
    console.log(fullWords);
    outputArea.innerHTML += fullWords + "<br/>";
  }
});

// test text
// joe_hookham
//  amelia_beatrice
//  kaiser_wilhelm
