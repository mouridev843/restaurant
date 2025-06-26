const Contact = () => {
  const content = document.getElementById("content");

  const newDiv = document.createElement("div");
  newDiv.classList.add("contactContainer");
  newDiv.innerHTML = `
  <div class="contactHeader">
    <h1 class="contacTitle" >Contactez-nous</h1>
    <p class="contactIntro">Nous sommes là pour répondre à toutes vos questions et vous aider à planifier votre visite.</p>
    </div>
    <form id="contact-form" class="contactForm">
    <div class="formGroup">
      <label for="name" class="formLabel">Nom :</label>
      <input type="text" id="name" name="name" class="formInput" required>
      </div>
      <div class="formGroup">
      <label for="email" class="formLabel">Email :</label>
      <input type="email" id="email" name="email" class="formInput" required>
      </div>
      <div class="formGroup">
      <label for="message" class="formLabel">Message :</label>
      <textarea id="message" name="message" rows="4" class="formInput"  required></textarea>
      </div>
      <button type="submit" class="submitButton">Envoyer</button>
    </form>
  `;
  const form = newDiv.querySelector("#contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Simulate sending the message
    console.log(`Message from ${name} (${email}): ${message}`);

    // Clear the form
    form.reset();

    // Show a success message
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
  });
  content.appendChild(newDiv);
};
export default Contact;
