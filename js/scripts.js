const inputs = document.querySelectorAll('.slide > input')

for(let input of inputs) {
   console.log(input)
   input.addEventListener('focusout', handleFocusOut)
}

function handleFocusOut() {
   if(this.value === '') {
      this.classList.remove('has-val')
   } else {
      this.classList.add('has-val')
   }
}