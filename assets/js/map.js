document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167295.88833792854!2d-74.19245563034023!3d4.63166577275923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1708889338632!5m2!1ses!2sco" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
  }, 700);
});
