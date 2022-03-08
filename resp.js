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
          name = $("input[name='name']").validate();
          phone = $("input[name='phone']").validate();
          email = $("input[name='email']").validate();
          subject = $("input[name='subject']").validate();
          text = $("textarea[name='text']").validate();

          document.writeln(name);
          document.writeln(phone);
          document.writeln(email);
          document.writeln(subject);
          document.writeln(text);
          return false;
     })
})