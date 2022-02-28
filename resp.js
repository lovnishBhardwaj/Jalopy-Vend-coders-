burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')


burger.addEventListener('click', ()=>{
     navbar.classList.toggle('h-nav-resp');
     navList.classList.toggle('v-class-resp');
})

function getVal(){
  const val = document.querySelector('input').value;
  console.log(val);
}

$(document).ready(function(){
     $("form").submit(function(){
          name = $("input[name='name']").val();
          phone = $("input[name='phone']").val();
          email = $("input[name='email']").val();
          subject = $("input[name='subject']").val();
          text = $("textarea[name='text']").val();

          document.writeln(name);
          document.writeln(phone);
          document.writeln(email);
          document.writeln(subject);
          document.writeln(text);
          return false;
     })
})