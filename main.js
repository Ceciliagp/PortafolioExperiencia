let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web, conocimiento en base de datos, conocimiento en redes y conocimiento en graficación.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
