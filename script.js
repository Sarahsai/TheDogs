fetch('dogs.json')
  .then(function (response) {
    return response.json();
  })
  .then(function(collection){
    renderItems(collection.reverse());
    //buildsite(collection);
  });

function renderItems(items) {
  console.log(items)
  const container = document.getElementById('animal-list');
  container.innerHTML = '';

  items.forEach(function(item) {
    const animalItem = document.createElement('div');
    animalItem.classList.add('animal-item');
    let animalBreed = item.BreedName.replace(/\s+/g, '');

    animalItem.classList.add(`${animalBreed}`)
    const animalName = document.createElement('h2');
    animalName.innerText = item.AnimalName;
    animalItem.appendChild(animalName);

    const animalGender = document.createElement('p');
    animalGender.innerText = 'Gender: ' + item.AnimalGender;
    animalItem.appendChild(animalGender);

    const animalBirthYear = document.createElement('p');
    animalBirthYear.innerText = 'Birth Year: ' + item.AnimalBirthYear;
    animalItem.appendChild(animalBirthYear);

    const breedName = document.createElement('p');
    breedName.innerText = 'Breed: ' + item.BreedName;
    animalItem.appendChild(breedName);

    const zipCode = document.createElement('p');
    zipCode.innerText = 'Zip Code: ' + item.ZipCode;
    animalItem.appendChild(zipCode);

    const licenseIssuedDate = document.createElement('p');
    licenseIssuedDate.innerText = 'License Issued Date: ' + item.LicenseIssuedDate;
    animalItem.appendChild(licenseIssuedDate);

    const licenseExpiredDate = document.createElement('p');
    licenseExpiredDate.innerText = 'License Expired Date: ' + item.LicenseExpiredDate;
    animalItem.appendChild(licenseExpiredDate);

    const ImagePath = document.createElement('img');
    ImagePath.src = item.ImagePath;
    animalItem.appendChild(ImagePath);

    container.appendChild(animalItem);
  });
}


// get each individual breed filtering button
const labradorButton = document.getElementById('dogsbutton1');

// add an event listener to each button that does our filtering on click
labradorButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const labradorList = document.querySelectorAll('.Labrador');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  labradorList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})




// get each individual breed filtering button
const germanshepherdButton = document.getElementById('dogsbutton2');

// add an event listener to each button that does our filtering on click
germanshepherdButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const germanshepherdList = document.querySelectorAll('.GermanShepherd');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  germanshepherdList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const bichonButton = document.getElementById('dogsbutton3');

// add an event listener to each button that does our filtering on click
bichonButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const bichonList = document.querySelectorAll('.Bichon');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  bichonList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const yorkshireButton = document.getElementById('dogsbutton4');

// add an event listener to each button that does our filtering on click
yorkshireButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const yorkshireList = document.querySelectorAll('.Yorkshire');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  yorkshireList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const huskyButton = document.getElementById('dogsbutton5');

// add an event listener to each button that does our filtering on click
huskyButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const huskyList = document.querySelectorAll('.Husky');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  huskyList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const poodleButton = document.getElementById('dogsbutton6');

// add an event listener to each button that does our filtering on click
poodleButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const poodleList = document.querySelectorAll('.Poodle');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  poodleList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const morkieButton = document.getElementById('dogsbutton7');

// add an event listener to each button that does our filtering on click
morkieButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const morkieList = document.querySelectorAll('.Morkie');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
 morkieList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const malteseButton = document.getElementById('dogsbutton8');

// add an event listener to each button that does our filtering on click
malteseButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const malteseList = document.querySelectorAll('.Maltese');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  malteseList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const griffonButton = document.getElementById('dogsbutton9');

// add an event listener to each button that does our filtering on click
griffonButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const griffonList = document.querySelectorAll('.Griffon');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  griffonList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const maltipooButton = document.getElementById('dogsbutton10');

// add an event listener to each button that does our filtering on click
maltipooButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const maltipooList = document.querySelectorAll('.Maltipoo');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
maltipooList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const goldenretrieverButton = document.getElementById('dogsbutton11');

// add an event listener to each button that does our filtering on click
goldenretrieverButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const goldenretrieverList = document.querySelectorAll('.GoldenRetriever');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  goldenretrieverList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const shihtzuButton = document.getElementById('dogsbutton12');

// add an event listener to each button that does our filtering on click
shihtzuButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const shihtzuList = document.querySelectorAll('.ShihTzu');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  shihtzuList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const chihuahuaButton = document.getElementById('dogsbutton13');

// add an event listener to each button that does our filtering on click
chihuahuaButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const chihuahuaList = document.querySelectorAll('.Chihuahua');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  chihuahuaList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})


const terrierButton = document.getElementById('dogsbutton14');

// add an event listener to each button that does our filtering on click
terrierButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const terrierList = document.querySelectorAll('.Terrier');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  terrierList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const dachshundButton = document.getElementById('dogsbutton15');

// add an event listener to each button that does our filtering on click
dachshundButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const dachshundList = document.querySelectorAll('.Dachshund');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  dachshundList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const bulldogButton = document.getElementById('dogsbutton16');

// add an event listener to each button that does our filtering on click
bulldogButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const bulldogList = document.querySelectorAll('.Bulldog');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  bulldogList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const havaneseButton = document.getElementById('dogsbutton18');

// add an event listener to each button that does our filtering on click
havaneseButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const havaneseList = document.querySelectorAll('.Havanese');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  havaneseList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})
const greyhoundButton = document.getElementById('dogsbutton19');

// add an event listener to each button that does our filtering on click
greyhoundButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const greyhoundList = document.querySelectorAll('.Greyhound');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  greyhoundList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})
const dobermanButton = document.getElementById('dogsbutton20');

// add an event listener to each button that does our filtering on click
dobermanButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const dobermanList = document.querySelectorAll('.Doberman');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  dobermanList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const corgiButton = document.getElementById('dogsbutton21');

// add an event listener to each button that does our filtering on click
corgiButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const corgiList = document.querySelectorAll('.Corgi');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  corgiList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const pitbullButton = document.getElementById('dogsbutton22');

// add an event listener to each button that does our filtering on click
pitbullButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const pitbullList = document.querySelectorAll('.PitBull');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  pitbullList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const cockapooButton = document.getElementById('dogsbutton23');

// add an event listener to each button that does our filtering on click
cockapooButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const cockapooList = document.querySelectorAll('.Cockapoo');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  cockapooList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const basenjiButton = document.getElementById('dogsbutton24');

// add an event listener to each button that does our filtering on click
basenjiButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const basenjiList = document.querySelectorAll('.Basenji');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  basenjiList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const shibainuButton = document.getElementById('dogsbutton25');

// add an event listener to each button that does our filtering on click
shibainuButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const shibainuList = document.querySelectorAll('.ShibaInu');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  shibainuList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})

const pomeranianButton = document.getElementById('dogsbutton26');

// add an event listener to each button that does our filtering on click
pomeranianButton.addEventListener('click', () => {

  // get a list of everything on the page with the "animal-item" class (the period before the animal item is important)
  // important that this happens in the event listener so that everything with the animal-item class has already been created by Javascript
  const dogList = document.querySelectorAll('.animal-item')
  
  // like before, get a list of everything on the page with the breed class that matches our button (the period before the breed is important)
  const pomeranianList = document.querySelectorAll('.Pomeranian');

  // go through our list of every item and set it's display style to none so we can hide it
  dogList.forEach(item => {
    item.style.display = 'none';
  })

  // go through the list of every item that matches the breed we selected and set display style to flex so we can show it
  pomeranianList.forEach(item => {
    item.style.display = 'flex';
  })
  
  
})





