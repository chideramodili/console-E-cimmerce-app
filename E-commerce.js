const footWares = [
  "D'Orsay Flats",
  "Flat Mules",
  "Slip-Ons",
  "Loafers",
  "Moccasins",
  "Boat Shoes",
  "Canvas Shoes",
  "ABO",
  "ballenciaga",
  "jordan",
  "nike",
  "crocks",
  "bathroom slippers",
  "pams"
];

const shirts = ["sweatshirts", "polo", "T-shirts", "tank tops", "singlets"];

const trousers = ["shorts", "boxers", "sweat pants", "tri-quat"];

const juwerise = [
  "rollex",
  "apple watch",
  "g-shock",
  "pateck",
  "ice roller",
  "gold necklase",
  "silver necklase",
  "bronze nacklase",
  "fake necklase",
  "rings"
];
const welcome = alert("welcome to dandelion's online boutique");
let confirmation = confirm("would like to shop with us?");

function myFunction() {
  let choice;
  let feet;
  let priceTag;
  let cart = [""];

  if (confirmation === true) {
    let choice = prompt(
      `would you like to shop from the FOOTWARE section, SHIRT section, TROUSER section, or the JUWERY section`
    );
    switch (choice) {
      case "footware":
        feet = prompt(`here are the available footwares at the store right now; ${footWares} 
      which would you like to add to cart`);
        if (feet === "loafers") {
          priceTag = alert(`the price for ${feet} is 5000`);
        } else if (feet === "flat mules") {
          priceTag = alert(`the price for ${feet} is 45000 `);
          addToCart = confirm(`would you like to add ${feet} to cart`);

          if (addToCart === true) {
            alert("Added to cart");
            shopMore = confirm("would you like to shop more?");
            if (shopMore === true) {
              return myFunction();
            } else {
              viewCart = confirm(
                "would you like to view your cart before exiting?"
              );

              while (addToCart === true) {
                cart === +feet;
                alert(cart[addToCart]);
              }
            }
          } else {
            return feet;
          }
        } else if (feet === "D'Orsay Flats") {
          confirm(`the price for ${feet} is 48000 `);
        } else if (feet === "Slip-Ons") {
          confirm(`the price for ${feet} is 5000 `);
        } else if (feet === "Moccasins") {
          confirm(`the price for ${feet} is 8000 `);
        } else if (feet === "Boat Shoes") {
          confirm(`the price for ${feet} is 5000 `);
        } else if (feet === "Canvas Shoes") {
          confirm(`the price for ${feet} is 4000 `);
        } else if (feet === "ABO") {
          confirm(`the price for ${feet} is 95000 `);
        } else if (feet === "ballenciaga") {
          confirm(`the price for ${feet} is 450000 `);
        } else if (feet === "jordan") {
          confirm(`the price for ${feet} is 45000 `);
        } else if (feet === "nike") {
          confirm(`the price for ${feet} is 75000 `);
        } else if (feet === "crocks") {
          confirm(`the price for ${feet} is 1500 `);
        } else if (feet === "bathroom slippers") {
          confirm(`the price for ${feet} is 500 `);
        } else if (feet === "pams") {
          confirm(`the price for ${feet} is 2500 `);
        } else {
          availability = confirm("not available in store at the moment");
          if (availability === true) {
            return feet;
          }
        }
        break;
      case "shirts": {
        choise = prompt(`here are the available shirts at the store right now; ${shirts} 
            which would you like to add to cart`);
        break;
      }
      case "juweries": {
        choise = prompt(`here are the available juweries at the store right now; ${juwerise} 
            which would you like to add to cart`);
        break;
      }
      case "trouser": {
        choise = prompt(`here are the available trouser at the store right now; ${trousers} 
            which would you like to add to cart`);
        break;
      }
      case "": {
        choice = alert(
          "please insert either 'TRUOSER', 'SHIRT', 'JUWERIES', or 'FOOTWARE' "
        );
        return myFunction();
      }
      default: {
        choise = alert(
          `you have to chose between "SHOES", "SHIRTS", TROUSERS, and JUWERIS.`
        );
        return myFunction();
      }
    }
  } else {
    alert("okay byee see you next time");
  }
}

myFunction();
