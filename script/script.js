let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");

function converter(from, value) {
  if (from === "celsius") {
    fahrenheit.value = value * 1.8 + 32;
  } else if (from === "fahrenheit") {
    celsius.value = (value - 32) / 1.8;
  }
}

celsius.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    converter("celsius", celsius.value);
  }
});

fahrenheit.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      converter("fahrenheit", fahrenheit.value);
    }
  });
