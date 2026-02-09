// ARROW FUNCTIONS //
function ask(question, yes, no) {
  if (confirm(question)) {
    yes()
  } else { 
    no()
  }
}

console.log(ask("Do you agree?", () => alert("You agreed."), () => alert("You canceled the execution.")))

