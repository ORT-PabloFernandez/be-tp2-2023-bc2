const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

// funciones que me permitar saber el total de duracion de un tipo video en segundos
// Tip1: Lograr convertir la cadena en un array objetos
// Tip2: Hacer un split

function getVideos(str){
  return str
    .replace('<ul>','')
    .replace('</ul>','')  
    .split('</li>')
    .slice(0,-1) // Elimina el ultimo elemento
    .map(video => (
      {
        min: parseInt(video
          .split('"')[1]
          .split(":")[0]), 
        seg: parseInt(video
          .split('"')[1]
          .split(":")[1]), 
        tipo: video
          .split(">")[1]
      }
      )
    )
}

function getTotalSegundos(videos, tipo){
  const videosFiltrados =  videos.filter(video => video.tipo === tipo);
  let totalSegundos = 0;
  for (const video of videosFiltrados) {
    totalSegundos += video.seg + video.min * 60;
  }
  // .reduce
  return totalSegundos;
}

console.log(getTotalSegundos(getVideos(str), "Flexbox Video"));