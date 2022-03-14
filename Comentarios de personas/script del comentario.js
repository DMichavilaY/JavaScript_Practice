const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Agata',
    position: 'Servicio de traducción',
    photo:
      'https://www.consilium.europa.eu/media/38891/ag%C3%A1ta-small.jpg',
    text:
      "Aprendí mucho sobre la organización del trabajo de los traductores y sobre la forma de hacer búsquedas terminológicas eficazmente, y entré en contacto enseguida con la jerga comunitaria y las herramientas de traducción asistida por ordenador.",
  },
  {
    name: 'Jean David',
    position: 'Servicio jurídico',
    photo: 'https://www.consilium.europa.eu/media/38894/jean-david-small.jpg',
    text:
      'He tenido el privilegio de trabajar con un equipo que intenta garantizar que las políticas europeas de asilo y migración reflejen normas más exigentes en materia de derechos humanos.',
  },
  {
    name: 'Clemencia',
    position: 'Asuntos exteriores',
    photo: 'https://www.consilium.europa.eu/media/38892/cl%C3%A9mence-small.jpg',
    text:
      "A quienes trabajen en prácticas en el futuro, les recomendaría que investiguen todo lo que puedan no solo sobre el trabajo dentro del Consejo, sino también en las demás instituciones y organizaciones de España.",
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)