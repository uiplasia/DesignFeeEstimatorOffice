// Constants and variables for factors and prices
const basePricesOriginal = {
  warmshell: { Mumbai: 300, Ahmedabad: 200, Hyderabad: 250, "Metro City 1" : 300, "Metro City Outskirts" : 200, "Metro City 2" :250 },
  bareshell: { Mumbai: 345, Ahmedabad: 230, Hyderabad: 287.5, "Metro City 1" :345, "Metro City Outskirts" : 230, "Metro City 2" :287.5  },
  renovation: { Mumbai: 345, Ahmedabad: 230, Hyderabad: 287.5,"Metro City 1" : 345, "Metro City Outskirts" : 230, "Metro City 2" :287.5  },
  architecture: { Mumbai: 750, Ahmedabad: 500, Hyderabad: 625 ,"Metro City 1" : 750, "Metro City Outskirts" : 500, "Metro City 2" :625 },
};

const propertyFactors = {
  Office: 1.25,
  CorporateHouse: 1,
  FactoryOffice: 0.75,
};

const stylingFactors = {
  Low: 1,
  Medium: 1.1,
  High: 1.2,
  "Very High": 1.3,
};

// const ceilingHeightFactors = {
//   "10ft": 1,
//   "11ft": 1.05,
//   "12ft": 1.1,
//   "13ft": 1.15,
//   "14ft": 1.2,
//   "14ft+": 1.5,
// };

const planFactors = {
  Premium: 1,
  "Premium Plus": 1.2,
  Luxury: 1.5,
  "Ultra Luxury": 2,
};

// const addOnPrices = {
//   "Automation": { Mumbai: 350, Ahmedabad: 200, Hyderabad: 250,"Metro City 1" : 350, "Metro City Outskirts" : 200, "Metro City 2" :250  },
//   "Civil Changes": { Mumbai: 150, Ahmedabad: 50, Hyderabad: 100,"Metro City 1" : 150, "Metro City Outskirts" : 50, "Metro City 2" :100  },
//   "Fire Fighting": { Mumbai: 25, Ahmedabad: 25, Hyderabad: 25,"Metro City 1" : 25, "Metro City Outskirts" : 25, "Metro City 2" :25  },
//   "Flooring": 	{Mumbai: 350,	Ahmedabad: 200, Hyderabad:	250,"Metro City 1" : 350, "Metro City Outskirts" : 200, "Metro City 2" :250 },
//   "House Keeping": 	{Mumbai: 20, Ahmedabad: 12.5, Hyderabad:	15,"Metro City 1" : 20, "Metro City Outskirts" : 12.5, "Metro City 2" :15 },
//   "Pest Control":	{Mumbai: 10, Ahmedabad:	10, Hyderabad:	10,"Metro City 1" : 10, "Metro City Outskirts" : 10, "Metro City 2" :10 },
//   "Surveillance":	{Mumbai: 50, Ahmedabad:	50, Hyderabad:	50,"Metro City 1" : 50, "Metro City Outskirts" : 50, "Metro City 2" :50 },
//   "Split AC": 	{Mumbai: 337.5, Ahmedabad: 300,	Hyderabad: 300,"Metro City 1" : 450, "Metro City Outskirts" : 300, "Metro City 2" :300 },
//   "VRF": {Mumbai: 506.25, Ahmedabad: 450,	Hyderabad: 450,"Metro City 1" : 506.25, "Metro City Outskirts" : 450, "Metro City 2" :450}
//   // ...other add-ons
// };


function calculateEstimate() {
  const projectType = document.querySelector('.button-option-project.button-selected').getAttribute('data-value');
  const city = document.querySelector('.button-option-city.button-selected').getAttribute('data-value');
  const propertyType = document.querySelector('.button-option-property.button-selected').getAttribute('data-value');
  const styling = document.querySelector('.button-option-styling.button-selected').getAttribute('data-value');
  const plan = document.querySelector('.button-option-plan.button-selected').getAttribute('data-value');
  const carpetArea = parseFloat(document.getElementById('carpet-area').value);

  // Define base prices based on carpet area range only if property type is "Office"
  let basePrices = basePricesOriginal; // Use the global basePrices object by default

  if (propertyType === 'Office') {
    if (carpetArea <= 1500) {
      basePrices = {
        warmshell: { Mumbai: 300, Ahmedabad: 200, Hyderabad: 250, "Metro City 1": 300, "Metro City Outskirts": 200, "Metro City 2": 250 },
        bareshell: { Mumbai: 345, Ahmedabad: 230, Hyderabad: 287.5, "Metro City 1": 345, "Metro City Outskirts": 230, "Metro City 2": 287.5 },
        renovation: { Mumbai: 345, Ahmedabad: 230, Hyderabad: 287.5, "Metro City 1": 345, "Metro City Outskirts": 230, "Metro City 2": 287.5 },
        architecture: { Mumbai: 750, Ahmedabad: 500, Hyderabad: 625, "Metro City 1": 750, "Metro City Outskirts": 500, "Metro City 2": 625 },
      };
    } else if (carpetArea <= 4000) {
      basePrices = {
        warmshell: { Mumbai: 225, Ahmedabad: 150, Hyderabad: 187.5, "Metro City 1": 225, "Metro City Outskirts": 150, "Metro City 2": 187.5 },
        bareshell: { Mumbai: 258.75, Ahmedabad: 172.5, Hyderabad: 215.625, "Metro City 1": 258.75, "Metro City Outskirts": 172.5, "Metro City 2": 215.625 },
        renovation: { Mumbai: 258.75, Ahmedabad: 172.5, Hyderabad: 215.625, "Metro City 1": 258.75, "Metro City Outskirts": 172.5, "Metro City 2": 215.625 },
        architecture: { Mumbai: 562.5, Ahmedabad: 375, Hyderabad: 468.75, "Metro City 1": 562.5, "Metro City Outskirts": 375, "Metro City 2": 468.75 },
      };
    } else {
      basePrices = {
        warmshell: { Mumbai: 202.5, Ahmedabad: 135, Hyderabad: 168.75, "Metro City 1": 202.5, "Metro City Outskirts": 135, "Metro City 2": 168.75 },
        bareshell: { Mumbai: 232.875, Ahmedabad: 155.25, Hyderabad: 194.06, "Metro City 1": 232.875, "Metro City Outskirts": 155.25, "Metro City 2": 194.06 },
        renovation: { Mumbai: 232.875, Ahmedabad: 155.25, Hyderabad: 194.06, "Metro City 1": 232.875, "Metro City Outskirts": 155.25, "Metro City 2": 194.06 },
        architecture: { Mumbai: 506.25, Ahmedabad: 337.5, Hyderabad: 219.375, "Metro City 1": 506.25, "Metro City Outskirts": 337.5, "Metro City 2": 219.375 },
      };
    }
  }

  // Calculate the base price for the selected property type and city
  const basePrice = basePrices[projectType][city];

  const propertyFactor = propertyFactors[propertyType];
  const stylingFactor = stylingFactors[styling];
  const planFactor = planFactors[plan];
  const combinedFactor = stylingFactor * planFactor * propertyFactor;

  let estimatedPrice = basePrice * carpetArea * combinedFactor;

  // Check if estimatedPrice is a valid number
  if (isNaN(estimatedPrice)) {
    alert('Please enter valid input values.'); // You can provide an error message or handle this differently
    return;
  }

  // Update the result on the web page
  document.getElementById('result-project-type').textContent = projectType;
  document.getElementById('result-city').textContent = city;
  document.getElementById('result-property-type').textContent = propertyType;
  document.getElementById('result-styling').textContent = styling;
  document.getElementById('result-plan-type').textContent = plan;
  document.getElementById('result-carpet-area').textContent = carpetArea;
  document.getElementById('result-estimated-price').textContent = estimatedPrice.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  return estimatedPrice;
}



// function generateAddOnsCheckboxes() {
//   const addOnsContainer = document.getElementById("add-ons-container");

//   for (const addOn in addOnPrices) {
//     const checkboxOption = document.createElement("div");
//     checkboxOption.className = "checkbox-option";

//     const addOnCheckbox = document.createElement("input");
//     addOnCheckbox.type = "checkbox";
//     addOnCheckbox.name = "add-on";
//     addOnCheckbox.value = addOn;

//     const addOnLabel = document.createElement("label");
//     addOnLabel.textContent = addOn;

//     checkboxOption.appendChild(addOnCheckbox);
//     checkboxOption.appendChild(addOnLabel);
//     addOnsContainer.appendChild(checkboxOption);
//   }
// }



// Function to gather user selections
function gatherUserSelections() {
  const projectType = document.querySelector(".button-option-project.button-selected").dataset.value;
  const city = document.querySelector(".button-option-city.button-selected").dataset.value;
  const propertyType = document.querySelector(".button-option-property.button-selected").dataset.value;
  const styling = document.querySelector(".button-option-styling.button-selected").dataset.value;
  //const ceilingHeight = document.querySelector(".button-option-ceiling.button-selected").dataset.value;
  const plan = document.querySelector(".button-option-plan.button-selected").dataset.value;
  const carpetArea = parseFloat(document.getElementById("carpet-area").value);

  // const selectedAddOns = [];
  // const addOnCheckboxes = document.querySelectorAll('input[name="add-on"]:checked');
  // addOnCheckboxes.forEach((checkbox) => {
  //     selectedAddOns.push(checkbox.value);
  // });

  return {
      projectType,
      city,
      propertyType,
      styling,
      
      plan,
      carpetArea,
      
  };
}



// Update estimated price on user interaction
document.getElementById("calculate-btn").addEventListener("click", function () {
  const selections = gatherUserSelections();
  const estimatedPrice = calculateEstimate(selections);
  window.scrollTo({ top: 0, behavior: "smooth" });
  
});

document.getElementById("Confirm-btn").addEventListener("click", function () {
  const selections = gatherUserSelections();
  const estimatedPrice = calculateEstimate(selections);
  const resultUrl = `result.html?projectType=${encodeURIComponent(selections.projectType)}&city=${encodeURIComponent(selections.city)}&propertyType=${encodeURIComponent(selections.propertyType)}&styling=${encodeURIComponent(selections.styling)}&plan=${encodeURIComponent(selections.plan)}&carpetArea=${encodeURIComponent(selections.carpetArea)}&estimatedPrice=${encodeURIComponent(estimatedPrice)}`;

 
  // Redirect to the result.html page
  window.open(resultUrl, "_blank");

});

// // Generate add-ons checkboxes
// generateAddOnsCheckboxes();
// // ... (previous code)



// Add event listeners for property type buttons
const propertyTypeButtons = document.querySelectorAll(".button-option-property");
propertyTypeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the .button-selected class from all buttons
    propertyTypeButtons.forEach((btn) => btn.classList.remove("button-selected"));

    // Add the .button-selected class to the clicked button
    button.classList.add("button-selected");
  });
});

// Add event listeners for city buttons
const cityButtons = document.querySelectorAll(".button-option-city");
cityButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the .button-selected class from all buttons
    cityButtons.forEach((btn) => btn.classList.remove("button-selected"));

    // Add the .button-selected class to the clicked button
    button.classList.add("button-selected");
  });
});

// Add event listeners for ceiling height buttons
const ceilingHeightButtons = document.querySelectorAll(".button-option-ceiling");
ceilingHeightButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the .button-selected class from all buttons
    ceilingHeightButtons.forEach((btn) => btn.classList.remove("button-selected"));

    // Add the .button-selected class to the clicked button
    button.classList.add("button-selected");
  });
});

// Add event listeners for styling buttons
const stylingButtons = document.querySelectorAll(".button-option-styling");
stylingButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the .button-selected class from all buttons
    stylingButtons.forEach((btn) => btn.classList.remove("button-selected"));

    // Add the .button-selected class to the clicked button
    button.classList.add("button-selected");
  });
});

// Add event listeners for project type buttons
const projectTypeButtons = document.querySelectorAll(".button-option-project");
projectTypeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the .button-selected class from all buttons
    projectTypeButtons.forEach((btn) => btn.classList.remove("button-selected"));

    // Add the .button-selected class to the clicked button
    button.classList.add("button-selected");
  });
});

// Add event listeners for plan buttons
const planButtons = document.querySelectorAll(".button-option-plan");
planButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the .button-selected class from all buttons
    planButtons.forEach((btn) => btn.classList.remove("button-selected"));

    // Add the .button-selected class to the clicked button
    button.classList.add("button-selected");
  });
});

// Add event listener for the "Calculate Estimate" button
document.getElementById("calculate-btn").addEventListener("click", function () {
  console.log("Button clicked!"); // Check if the button click event is registered
  const selections = gatherUserSelections();
  console.log("Selections:", selections); // Check if selections are correctly gathered
  const estimatedPrice = calculateEstimate(selections);
  console.log("Estimated Price:", estimatedPrice); // Check if estimated price is calculated correctly
  
});
document.getElementById("calculate-btn").addEventListener("click", function () {
  const selections = gatherUserSelections();
  const estimatedPrice = calculateEstimate(selections);
  console.log("Calculate Button Clicked");
  console.log("Selections:", selections);
  console.log("Estimated Price:", estimatedPrice);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("Confirm-btn").addEventListener("click", function () {
  const selections = gatherUserSelections();
  const estimatedPrice = calculateEstimate(selections);
  console.log("Confirm Button Clicked");
  console.log("Selections:", selections);
  console.log("Estimated Price:", estimatedPrice);
  const resultUrl = `result.html?projectType=${encodeURIComponent(selections.projectType)}&city=${encodeURIComponent(selections.city)}&propertyType=${encodeURIComponent(selections.propertyType)}&styling=${encodeURIComponent(selections.styling)}&plan=${encodeURIComponent(selections.plan)}&carpetArea=${encodeURIComponent(selections.carpetArea)}&estimatedPrice=${encodeURIComponent(estimatedPrice)}`;
  console.log("Result URL:", resultUrl);

  // Redirect to the result.html page
  window.open(resultUrl, "_blank");
});
