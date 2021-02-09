const emailInput = document.querySelector("#member-input");
const nameInput = document.querySelector("#name-input");

document.querySelector(".become-member").addEventListener("click", () => {
  let valid = true;
  if (!emailInput.checkValidity()) {
    valid = false;
    emailInput.style.borderColor = "red";
  }
  if (!nameInput.checkValidity()) {
    valid = false;
    nameInput.style.borderColor = "red";
  }

  if (valid == true) {
    let exist = false;
    if (users != null && users != []) {
      for (i = 0; i < users.length; i++) {
        if (
          nameInput.value == users[i].name &&
          emailInput.value == users[i].email
        ) {
          exist = true;
          activeUser = users[i];
        }
      }
    }
    if (exist == false) {
      let member = {
        name: nameInput.value,
        email: emailInput.value,
        bonsaiID: Math.floor(Math.random() * 99999),
        since: new Date().toISOString().slice(0, 10),
        orders: [],
      };
      users.push(member);
      localStorage.setItem("users", JSON.stringify(users));
      activeUser = member;
    }
    console.log(exist);
    localStorage.setItem("active", JSON.stringify(activeUser));
    localStorage.setItem("logIn", true);
    window.location.href = "./account.html";
  }
});

if (logIn == "true") {
  window.location.href = "account.html";
}
