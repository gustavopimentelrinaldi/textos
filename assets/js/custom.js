// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
      }, false)
    })
})()

$("#enviar").click(function() {
  var usuario = $('input[name="user"]').val();
  var senha = $('input[name="password"]').val();
  if(usuario === "deb" && senha === "minhabebe"){
    return this;
    
  } else if(usuario !== "deb" || senha !== "minhabebe"){
    alert("Não autenticado!");
    return false;
  }
});