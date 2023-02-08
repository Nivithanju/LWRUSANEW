// A reference to Stripe.js initialized with your real test publishable API key.

var _stripeKeyIN = "pk_live_51K5aZwSCDoTsNNdU7isCzCRIuCeiGp4qUvHHgyhK5ujXSv7dkrviYoPFzdNCcPpMiVX6UPuPmj0wtZx3qZSuvQJm00T14arfCf";
var _stripeKeyOther = "pk_live_XmcPzQeRWJNvPbKvbAra5OZt";
var stripe = ""
let paymentId="";
var stripe2=""
let currentTab = 0;
let _donatinamount = "25";
let currentTab1 = 3;
let productId="prod_Kr53O0kstK9jLE";

// The items the customer wants to buy
let purchase = {
  items: {
    amount: "0",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state:"",
    state123:"",
    zipCode: "",
    description: "",
    country: "",
    currency:""
  }
};

let countrySpec = [
  { country: 'United States', code: 'US' },
  { country: 'Australia', code: 'AU' },
  { country: 'Austria', code: 'AT' },
  { country: 'Belgium', code: 'BE' },
  { country: 'Bulgaria', code: 'BG' },
  { country: 'Brazil ', code: 'BR' },
  { country: 'Canada', code: 'CA' },
  { country: 'Cyprus', code: 'CY' },
  { country: 'Czech Republic', code: 'CZ' },
  { country: 'Denmark', code: 'DK' },
  { country: 'Estonia', code: 'EE' },
  { country: 'Finland', code: 'FI' },
  { country: 'France', code: 'FR' },
  { country: 'Germany', code: 'DE' },
  { country: 'Greece', code: 'GR' },
  { country: 'Hong Kong', code: 'HK' },
  { country: 'Hungary', code: 'HU' },
  { country: 'India', code: 'IN' },
  { country: 'Ireland', code: 'IE' },
  { country: 'Italy', code: 'IT' },
  { country: 'Japan', code: 'JP' },
  { country: 'Latvia', code: 'LV' },
  { country: 'Lithuania', code: 'LT' },
  { country: 'Luxembourg', code: 'LU' },
  { country: 'Malaysia', code: 'MY' },
  { country: 'Malta', code: 'MT' },
  { country: 'Mexico ', code: 'MX' },
  { country: 'Netherlands', code: 'NL' },
  { country: 'New Zealand', code: 'NZ' },
  { country: 'Norway', code: 'NO' },
  { country: 'Poland', code: 'PL' },
  { country: 'Portugal', code: 'PT' },
  { country: 'Romania', code: 'RO' },
  { country: 'Singapore', code: 'SG' },
  { country: 'Slovakia', code: 'SK' },
  { country: 'Slovenia', code: 'SI' },
  { country: 'Spain', code: 'ES' },
  { country: 'Sweden', code: 'SE' },
  { country: 'Switzerland', code: 'CH' },
  { country: 'United Kingdom', code: 'GB' }
]
let statevalue = [
  { state : 'Alabama', code: 'AL' },
  { state : 'Alaska', code: 'AK' },
  { state : 'Arizona', code: 'AZ' },
  { state : 'Arkansas', code: 'AR' },
  { state : 'California', code: 'CA' },
  { state : 'Colorado', code: 'CO' },
  { state : 'Connecticut', code: 'CT' },
  { state : 'Delaware', code: 'DE' },
  { state : 'Florida', code: 'FL' },
  { state : 'Georgia', code: 'GA' },
  { state : 'Hawaii', code: 'HI' },
  { state : 'Idaho', code: 'ID' },
  { state : 'Illinois', code: 'IL' },
  { state : 'Indiana', code: 'IN' },
  { state : 'Iowa', code: 'IA' },
  { state : 'Kansas', code: 'KS' },
  { state : 'Kentucky[D]', code: 'KY' },
  { state : 'Louisiana', code: 'LA' },
  { state : 'Maine', code: 'ME' },
  { state : 'Maryland', code: 'MD' },
  { state : 'Massachusetts[D]', code: 'MA' },
  { state : 'Michigan', code: 'MI' },
  { state : 'Minnesota', code: 'MN' },
  { state : 'Mississippi', code: 'MS' },
  { state : 'Missouri', code: 'MO' },
  { state : 'Montana', code: 'MT' },
  { state : 'Nebraska', code: 'NE' },
  { state : 'Nevada', code: 'NV' },
  { state : 'New Hampshire', code: 'NH' },
  { state : 'New Jersey', code: 'NJ' },
  { state : 'New Mexico', code: 'NM' },
  { state : 'New York', code: 'NY' },
  { state : 'North Carolina', code: 'NC' },
  { state : 'North Dakota', code: 'ND' },
  { state : 'Ohio', code: 'OH' },
  { state : 'Oklahoma', code: 'OK' },
  { state : 'Oregon', code: 'OR' },
  { state : 'Pennsylvania[D]', code: 'PA' },
  { state : 'Rhode Island', code: 'RI' },
  { state : 'South Carolina', code: 'SC' },
  { state : 'South Dakota', code: 'SD' },
  { state : 'Tennessee', code: 'TN' },
  { state : 'Texas', code: 'TX' },
  { state : 'Utah', code: 'UT' },
  { state : 'Vermont', code: 'VT' },
  { state : 'Virginia[D]', code: 'VA' },
  { state : 'Washington', code: 'WA' },
  { state : 'West Virginia', code: 'WV' },
  { state : 'Wisconsin', code: 'WI' },
  { state : 'Wyoming', code: 'WY' }
]
let _country = "US";
createbllingCountry();
selectState();
let ct = localStorage.getItem("country")
if (!ct) {

  localStorage.setItem("country", "US")
  _country = "US";
  purchase.items.currency="usd";
  paymentId="price_1KBMtnAG1vMJz1E5vPFW1mhQ";
  productId="prod_Kr53O0kstK9jLE";
  stripe = Stripe(_stripeKeyOther);
  stripe2 = Stripe(_stripeKeyOther);
  _donatinamount="25"
  changeSymbol("$");
  document.getElementById("state").style.display="none";
    document.getElementById("state1").style.display="none";
  document.getElementById("state123").style.display="block";
  document.getElementById("state1123").style.display="block";
  amtOther()
}
else {
  if (ct == "US") {
     document.getElementById("state").style.display="none";
     document.getElementById("state1").style.display="none";
  document.getElementById("state123").style.display="block";
  document.getElementById("state1123").style.display="block";
}else{
   document.getElementById("state").style.display="block";
   document.getElementById("state1").style.display="block";
  document.getElementById("state123").style.display="none";
  document.getElementById("state1123").style.display="none";
}
  _country = ct
  if (ct == "IN") {
    stripe = Stripe(_stripeKeyIN);
    stripe2 = Stripe(_stripeKeyIN);
    purchase.items.currency="inr";
    _donatinamount="200";
    paymentId="price_1KBGl4SCDoTsNNdUAq9jepEb";
    productId="prod_MOBgsern4mNGsB"
    changeSymbol("₹")
    amtIN()

  } else {
    stripe = Stripe(_stripeKeyOther);
    stripe2 = Stripe(_stripeKeyOther);
    purchase.items.currency="usd";
    paymentId="price_1KBMtnAG1vMJz1E5vPFW1mhQ";
    productId="prod_Kr53O0kstK9jLE"
    _donatinamount="25"
    changeSymbol("$");
    amtOther()

  }
}
document.getElementById("billingCountry").value = ct

function selecctAccount(e) {
   if(e.target.value == "US") {
    selectState();
    document.getElementById("state").style.display="none";
   document.getElementById("state1").style.display="none";
    document.getElementById("state123").style.display="block";
  document.getElementById("state1123").style.display="block";
  }
  else {
    document.getElementById("state123").style.display="none";
  document.getElementById("state1123").style.display="none";
   document.getElementById("state1").style.display="block";
    document.getElementById("state").style.display="block";
  }
  createCard();
localStorage.setItem("country", e.target.value)
let ct1= localStorage.getItem("country")
  if (!ct1) {
  localStorage.setItem("country", "US")
  _country = "US";
  purchase.items.currency="usd";
  paymentId="price_1KBMtnAG1vMJz1E5vPFW1mhQ";
  productId="prod_Kr53O0kstK9jLE";
  stripe = Stripe(_stripeKeyOther);
  stripe2 = Stripe(_stripeKeyOther);
  _donatinamount="25"
  changeSymbol("$");
  amtOther();
  selectState();
}
else {
  _country = ct1
  if (ct1 == "IN") {
    stripe = Stripe(_stripeKeyIN);
    stripe2 = Stripe(_stripeKeyIN);
    purchase.items.currency="inr"
    _donatinamount="200"
    paymentId="price_1KBGl4SCDoTsNNdUAq9jepEb";
    productId="prod_MOBgsern4mNGsB"
    changeSymbol("₹")
    amtIN()

  } else {
    stripe = Stripe(_stripeKeyOther);
    stripe2 = Stripe(_stripeKeyOther);
    purchase.items.currency="usd";
    paymentId="price_1KBMtnAG1vMJz1E5vPFW1mhQ";
     productId="prod_Kr53O0kstK9jLE";
    _donatinamount="25"
    changeSymbol("$");
    amtOther()

  }
}
document.getElementById("billingCountry").value = ct1
}

   
function selectState(e){
  try {
    let selectst = document.getElementById('state123');
    let selectst1 = document.getElementById('state1123');
    for (let i = 0; i <= statevalue.length; i++) {
      let opt = document.createElement('option');
      opt.value = statevalue[i].state;
      opt.innerHTML = statevalue[i].state;
       let opt1 = document.createElement('option');
      opt1.value = statevalue[i].state;
      opt1.innerHTML = statevalue[i].state;
      selectst.appendChild(opt);
      selectst1.appendChild(opt1);
    }
  } catch {
    // alert("Something went wrong, Please try after sometime!");
  }
}
function changeSymbol(sympol){
  let items = document.getElementsByClassName("cs");
  for (let i=0; i < items.length; i++) {
    items[i].innerHTML =sympol
  }
}
function amtOther(){
  changeAmt('at1','25')
  changeAmt('at2','50')
  changeAmt('at3','100')
  changeAmt('at4','1000')
  changeAmt('at5','25')
  changeAmt('at6','50')
  changeAmt('at7','100')
  changeAmt('at8','1000')
}
function amtIN(){
  changeAmt('at1','100')
  changeAmt('at2','200')
  changeAmt('at3','500')
  changeAmt('at4','1000')
  changeAmt('at5','100')
  changeAmt('at6','200')
  changeAmt('at7','500')
  changeAmt('at8','1000')
}
function changeAmt(id,amount){
  document.getElementById(id).innerHTML=amount
}



function createbllingCountry() {
  try {
    let select = document.getElementById('billingCountry');
    for (let i = 0; i <= countrySpec.length; i++) {
      let opt = document.createElement('option');
      opt.value = countrySpec[i].code;
      opt.innerHTML = countrySpec[i].country;
      select.appendChild(opt);
    }
  } catch {

  }
}



ActivateForm(1);
function ActivateForm(id) {
  let form1 = document.getElementById("payment-form");
  let form2 = document.getElementById("payment-form1");
  let s1 = document.getElementById("s1");
  let s2 = document.getElementById("s2");
  form1.reset();
  form2.reset();
  let current = document.querySelectorAll(".amt-btn");
    selectDisable(current);
    current[1].classList.add("selected")
    let current1 = document.querySelectorAll(".amt-btn1");
    selectDisable(current1);
    current1[1].classList.add("selected")
   
  if (id == 1) {
    form2.style.display = 'none';
    form1.style.display = 'block';
    s1.classList.add('active');
    s2.classList.remove('active');
    currentTab=0;
    showTab(currentTab);
    if (ct == "IN") {
      _donatinamount="200";
      paymentId="price_1KBGl4SCDoTsNNdUAq9jepEb";
  
    } else {
      _donatinamount="25";
      paymentId="price_1KBMtnAG1vMJz1E5vPFW1mhQ";
  
    }

  }
  else {
    form1.style.display = 'none';
    form2.style.display = 'block';
    s1.classList.remove('active');
    s2.classList.add('active');
    currentTab1=3;
    showTab(currentTab1);
    if (ct == "IN") {
      _donatinamount="200";
      paymentId="price_1KBGl4SCDoTsNNdUAq9jepEb";
  
    } else {
      paymentId="price_1KBMtnAG1vMJz1E5vPFW1mhQ";
      _donatinamount="25"
  
    }

  }
}

let header = document.getElementById("amountselect");
let btns = header.getElementsByClassName("amt-btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    _donatinamount = "";
    document.querySelector(".onlyamt").value = "";
    switch (i) {
      case 0: {
        if(_country=="IN"){
          _donatinamount="100"
        }else{
          _donatinamount = "25"
        }
        
    }; break;
      case 1:{
        if(_country=="IN"){
          _donatinamount="200"
        }else{
          _donatinamount = "50"
        }
        
    } ; break;
      case 2:{
        if(_country=="IN"){
          _donatinamount="500"
        }else{
          _donatinamount = "100"
        }
        
    } ; break;
      case 3:{
        if(_country=="IN"){
          _donatinamount="1000"
        }else{
          _donatinamount = "1000"
        }
        
    }; break;
      default: _donatinamount = "0"; break;
    }
    let donateinput = document.querySelector(".other-button");
    donateinput.classList.add("hidden")
    document.querySelector(".other-amt-btn").classList.remove("hidden");
    let current = document.querySelectorAll(".amt-btn");
    selectDisable(current);
    current[i].classList.add("selected")
  });
}
document.querySelector(".other-amt-btn").addEventListener("click", function (n) {
  _donatinamount = "";
  let current = document.querySelectorAll(".amt-btn");
  selectDisable(current);
  let donateinput = document.querySelector(".other-amt-btn");
  let donateinputa = document.querySelector(".other-button");
  donateinput.classList.add("hidden");
  donateinputa.classList.remove("hidden");
  document.querySelector(".onlyamt").focus()
});

document.querySelector(".onlyamt").addEventListener("keyup", function (evt) {
  if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
    if (evt.which != 46) {
      evt.preventDefault();
    }
  }
  if (!evt.target.value == "") {
    _donatinamount = evt.target.value;
  } else {
    _donatinamount = "0"
  }
});
//donate monthly

let header1 = document.getElementById("amountselect1");
let btns1 = header1.getElementsByClassName("amt-btn1");
for (let i = 0; i < btns1.length; i++) {
  btns1[i].addEventListener("click", function () {
    _donatinamount = "";
    document.querySelector(".onlyamt").value = "";
    switch (i) {
      case 0: {
        if(_country=="IN"){
          _donatinamount="100"
          paymentId="price_1KBGl3SCDoTsNNdUMBXcUZK1"
        }else{
          _donatinamount = "25";
          paymentId="price_1KBMtnAG1vMJz1E5vPFW1mhQ"
        }
        
    }; break;
      case 1:{
        if(_country=="IN"){
          _donatinamount="200"
          paymentId="price_1KBGl4SCDoTsNNdUAq9jepEb"
        }else{
          _donatinamount = "50"
          paymentId="price_1KBMtnAG1vMJz1E5D4NhmmjL"
        }
        
    } ; break;
      case 2:{
        if(_country=="IN"){
          _donatinamount="500"
          paymentId="price_1KBGl3SCDoTsNNdURmMkHQtV"
        }else{
          _donatinamount = "100"
          paymentId="price_1KBMtnAG1vMJz1E5g2FNTYBJ"
        }
        
    } ; break;
      case 3:{
        if(_country=="IN"){
          _donatinamount="1000"
          paymentId="price_1KBGl4SCDoTsNNdUIQF7PxqT"
        }else{
          _donatinamount = "1000"
           paymentId="price_1KBMtnAG1vMJz1E5jQ4YfMcj"
        }
        
    }; break;
      default: _donatinamount = "0"; break;
    }
    let donateinput = document.querySelector(".other-button1");
    donateinput.classList.add("hidden")
    document.querySelector(".other-amt-btn1").classList.remove("hidden");
    let current = document.querySelectorAll(".amt-btn1");
    selectDisable(current);
    current[i].classList.add("selected")
  });
}
document.querySelector(".other-amt-btn1").addEventListener("click", function (n) {
  _donatinamount = "";
  paymentId="";
  let current = document.querySelectorAll(".amt-btn1");
  selectDisable(current);
  let donateinput = document.querySelector(".other-amt-btn1");
  let donateinputa = document.querySelector(".other-button1");
  donateinput.classList.add("hidden");
  donateinputa.classList.remove("hidden");
  document.querySelector(".onlyamt1").focus()
});
document.querySelector(".onlyamt1").addEventListener("keyup", function (evt) {
  if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
    if (evt.which != 46) {
      evt.preventDefault();
    }
  }
  if (!evt.target.value == "") {
    _donatinamount = evt.target.value;
  } else {
    _donatinamount = "0"
  }
});
//donate monthly end


// document.getElementById("billingCountry").addEventListener('change', function (e) {
//   _country = e.target.value;
// })

showTab(currentTab);


function selectDisable(current) {
  for (let j = 0; j < current.length; j++) {
    current[j].classList.remove("selected");
  }
}
function showTab(n) {
  let elems = document.querySelectorAll(".tab");
  let i = 0, length = elems.length;
  for (; i < length; i++) {
    elems[i].style.display = "none";
  }
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  x[currentTab].style.display = "none";
  if (currentTab == 0) {
    createCard();
  }
  currentTab = currentTab + n;

  if (currentTab == 0) {
    _donatinamount = "25";
    let current = document.querySelectorAll(".amt-btn");
    selectDisable(current);
    current[1].classList.add("selected")
  }
  let headermsg = document.getElementById("msg-amt");
  let headermsg1 = document.getElementById("msg-amt1");
  headermsg.innerHTML = "Giving "+((_country=="IN")?"₹":"$")+ _donatinamount +" Once <a class='edit-amt' onclick='nextPrev(-1)'>(edit amount)</a>";
  headermsg1.innerHTML = "Giving "+((_country=="IN")?"₹":"$") + _donatinamount +" Once <a class='edit-amt' onclick='nextPrev(-2)'>(edit amount)</a>";

  showTab(currentTab);
}

function nextPrev1(n) {
  var x = document.getElementsByClassName("tab");
  x[currentTab1].style.display = "none";
  if (currentTab1 == 3) {
    createCard1();
  }
  currentTab1 = currentTab1 + n;

  if (currentTab1 == 3) {
    if(_country=="IN"){
      _donatinamount="200"
      paymentId="price_1KBGl4SCDoTsNNdUAq9jepEb"
    }else{
      _donatinamount = "50"
      paymentId="price_1KBMtnAG1vMJz1E5D4NhmmjL"
    }
    let current = document.querySelectorAll(".amt-btn1");
    selectDisable(current);
    current[1].classList.add("selected")
  }
  let headermsg = document.getElementById("msg-amtm");
  let headermsg1 = document.getElementById("msg-amt1m");
  headermsg.innerHTML = "Giving "+((_country=="IN")?"₹":"$") + _donatinamount + " per month <a class='edit-amt' onclick='nextPrev1(-1)'>(edit amount)</a>";
  headermsg1.innerHTML = "Giving "+((_country=="IN")?"₹":"$")+_donatinamount + " per month <a class='edit-amt' onclick='nextPrev1(-2)'>(edit amount)</a>";

  showTab(currentTab1);
}


// Disable the button until we have Stripe set up on the page
document.querySelector("#submit").disabled = true;


let _cardEvent = false;
let _cardError = "";
let _cardrefresh = true;
let _cardEvent1 = false;
_cardrefresh1=true;
let card;
let card1;
createCard();
createCard1();
function createCard() {
  if (_cardrefresh) {
    var elements = stripe.elements();
    var style = {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    };

    card = elements.create("card", {
      hidePostalCode: true, style: style
    });
    card.mount("#card-element");

    card.on("change", function (event) {
      document.querySelector("#submit").disabled = event.empty;
      document.querySelector("#card-error").textContent = event.error ? event.error.message : "";
      _cardEvent = event.error;
      _cardError = event.error ? event.error.message : "";
    });

    let form = document.getElementById("payment-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!_cardEvent) {
        createPayment(stripe, card);
      }
      else {
        alert(_cardError)
      }
    });
  }
  _cardrefresh = false;
  card.clear()
}

function createCard1() {
  if (_cardrefresh1) {
    var elements = stripe2.elements();
    var style = {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    };

    card1 = elements.create("card", {
      hidePostalCode: true, style: style
    });
    card1.mount("#card-element1");

    card1.on("change", function (event) {
      document.querySelector("#submit").disabled = event.empty;
      document.querySelector("#card-error").textContent = event.error ? event.error.message : "";
      _cardEvent = event.error;
      _cardError = event.error ? event.error.message : "";
    });

    let form = document.getElementById("payment-form1");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!_cardEvent1) {
        createPayment1(stripe2, card1);
      }
      else {
        alert(_cardError)
      }
    });
  }
  _cardrefresh1 = false;
  card1.clear()
}

function getValueById(id) {
  return document.getElementById(id).value;
}

function validateform() {
  if (purchase.items.amount != "" && purchase.items.firstName != "" &&
    purchase.items.lastName != "" && purchase.items.email != "" &&
    purchase.items.address != "" && purchase.items.city != "" &&
    purchase.items.zipCode != "" && purchase.items._country != ""
  ) {
    return false;
  }
  else {
    return true;
  }
}

function createPayment(stripe, card) {
  purchase.items.amount = _donatinamount;
  purchase.items.firstName = getValueById("firstname");
  purchase.items.lastName = getValueById("lastname");
  purchase.items.email = getValueById("email");
  purchase.items.address = getValueById("address");
  purchase.items.city = getValueById("city");
  purchase.items.state = _country=="US"?getValueById("state123"):getValueById("state");
  purchase.items.zipCode = getValueById("zipcode");
  purchase.items.description = getValueById("description");
  purchase.items.country = _country;
  if (validateform()) {
    alert("Fill all required information")
    return false;
  }
  loading(true);
  fetch("create.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(purchase)
  })
    .then(function (result) {
      return result.json();
    })
    .then(function (data) {
      payWithCard(stripe, card, data.clientSecret);
    })
    .catch(function (err) {
      console.log(err)
    })

  var payWithCard = function (stripe, card, clientSecret) {
    loading(true);
    stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card
        }
      })
      .then(function (result) {
        if (result.error) {
          // Show error to your customer
          showError(result.error.message);
        } else {
           fetch("donationmail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(purchase)
  })
          // The payment succeeded!
          orderComplete(result.paymentIntent.id);
        }
      });
  };
}


function createPayment1(stripe, card) {
  purchase.items.amount = _donatinamount;
  purchase.items.firstName = getValueById("firstname1");
  purchase.items.lastName = getValueById("lastname1");
  purchase.items.email = getValueById("email1");
  purchase.items.address = getValueById("address1");
  purchase.items.city = getValueById("city1");
  purchase.items.state = _country=="US"?getValueById("state1123"):getValueById("state1");
  //purchase.items.state123 = getValueById("state1123");
  purchase.items.zipCode = getValueById("zipcode1");
  purchase.items.description = getValueById("description1");
  purchase.items.country = _country;
  if (validateform()) {
    alert("Fill all required information")
    return false;
  }
  loading(true);
  fetch("customer.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(purchase)
  })
    .then(function (result) {
      return result.json();
    })
    .then(function (data) {
      if(paymentId==''){
        fetch("createpayment.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            currency: purchase.items.currency,
            id:productId,
            amount:_donatinamount,
            country:_country
          })
        })
          .then(function (result1) {
            return result1.json();
          })
          .then(function (data1) {
            if(paymentId==''){
              createPaymentMethod(data.data.id,( purchase.items.firstName+" "+purchase.items.lastName),(data1.data.id),stripe,card)
            }
            else{
              alert("error")
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      }
      else{
      createPaymentMethod(data.data.id,( purchase.items.firstName+" "+purchase.items.lastName),paymentId,stripe,card)
      }
    })
    .catch(function (err) {
      console.log(err)
    })

 
}

function createPaymentMethod(id,name,priceId,stripe,card) {
  const customerId = id;
  // Set up payment method for recurring usage

  stripe
    .createPaymentMethod({
      type: 'card',
      card: card,
      billing_details: {
        name: name,
      },
    })
    .then((result) => {
      if (result.error) {
        displayError1(result.error.message);
      } else {
        console.log(result)
        createSubscription({
          customerId: customerId,
          paymentMethodId: result.paymentMethod.id,
          priceId: priceId,
        });
      }
    });
}

function createSubscription({ customerId, paymentMethodId, priceId }) {
  return (
    fetch("subscription.php", {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        customerId: customerId,
        paymentMethodId: paymentMethodId,
        priceId: priceId,
        country:_country
      }),
    })
      .then((response) => {
        return response.json();
      })
      // If the card is declined, display an error to the user.
      .then((result) => {
        if (result.error) {
          showError1(result.error.message);
        }
        return result;
      })
      .then((result) => {
        console.log(result)
        orderComplete1(result.data.id);
      })
  );
}

/* ------- UI helpers ------- */

// Shows a success message when the payment is complete
var orderComplete = function (paymentIntentId) {
  loading(false);
  document
    .querySelector(".result-message a")
    .setAttribute(
      "href",
      "https://dashboard.stripe.com/test/payments/" + paymentIntentId
    );
  document.querySelector(".result-message").classList.remove("hidden");
  document.querySelector("#submit").disabled = true;
  // document.querySelector("#loading").classList.add("hidden")
  
};

// Show the customer the error from Stripe if their card fails to charge
var showError = function (errorMsgText) {
  loading(false);
  var errorMsg = document.querySelector("#card-error");
  errorMsg.textContent = errorMsgText;
  var errorMsg1 = document.querySelector("#card-error1");
  errorMsg1.textContent = errorMsgText;
  setTimeout(function () {
    errorMsg.textContent = "";
    errorMsg.textContent = "";
  }, 4000);
};


var orderComplete1 = function (paymentIntentId) {
  loading(false);
  document
    .querySelector(".result-message1 a")
    .setAttribute(
      "href",
      "https://dashboard.stripe.com/test/payments/" + paymentIntentId
    );
  document.querySelector(".result-message1").classList.remove("hidden");
  document.querySelector("#submit").disabled = true;
  // document.querySelector("#loading").classList.add("hidden")
  // alert("Thankyou");
};

// Show the customer the error from Stripe if their card fails to charge
var showError1 = function (errorMsgText) {
  loading(false);
  var errorMsg = document.querySelector("#card-error1");
  errorMsg.textContent = errorMsgText;
  var errorMsg1 = document.querySelector("#card-error11");
  errorMsg1.textContent = errorMsgText;
  setTimeout(function () {
    errorMsg.textContent = "";
    errorMsg.textContent = "";
  }, 4000);
};


// Show a spinner on payment submission
var loading = function (isLoading) {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector("#submit").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
    document.querySelector("#spinner1").classList.remove("hidden");
    document.querySelector("#button-text1").classList.add("hidden");
    // document.querySelector("#loading").classList.remove("hidden")

  } else {
    document.querySelector("#submit").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
    document.querySelector("#spinner1").classList.add("hidden");
    document.querySelector("#button-text1").classList.remove("hidden");
    // document.querySelector("#loading").classList.add("hidden")
  }
};


// checkout page


