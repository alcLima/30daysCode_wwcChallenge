const inputs = document.querySelectorAll(".controls input");

function HandleUpdate() {
  const suffix = this.dataset.sizing || ""; //dataset is an object that will contain all data attributes from that element
  // console.log(suffix);
  // console.log(this.name);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", HandleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", HandleUpdate));
