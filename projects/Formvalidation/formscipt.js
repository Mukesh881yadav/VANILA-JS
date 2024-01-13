const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");
const password = document.getElementById("password");

form.addEventListener((e) => {
  e.e.preventdefault();
  validate();
});

const isEmail=(emailvalue)=>{
var sumbol=emailvalue.indexOf()
}

const validate = () => {
  const usernamevalue = username.value.trim();
  const emailvalue = email.value.trim();
  const phonenumbervalue = phonenumber.value.trim();
  const passwordvalue = password.value.trim();

  if (usernamevalue === "") {
    setErrormsg(username, "user can not be blank");
  } else if (usernamevalue.length <= 2) {
    setErrormsg(username, "user char 3");
  } else {
    setsuccessmg(username);
  }

  if (emailvalue === "") {
    setErrormsg(username, "user can not be blank emial");
  } else if (!isEmail(emailvalue)) {
    setErrormsg(email, "user char 3");
  } else {
    setsuccessmg(email);
  }

  
};
