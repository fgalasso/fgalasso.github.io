function togglea(ref,b){
  var el = document.getElementById(ref);
  if (el) 
  {
    if (el.style.display == "none")
    {
      el.style.display="block"
    } else {
      el.style.display="none"
    }
  }
}
