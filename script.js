fetch('dogs.json')
  .then(function (response) {
    return response.json();
  })
  .then(function(collection){
    renderItems(collection.reverse());
  });

function renderItems(items) {
  const container = document.getElementById('animal-list');
  container.innerHTML = '';

  items.forEach(function(item) {
    const animalItem = document.createElement('div');
    animalItem.classList.add('animal-item');

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

    container.appendChild(animalItem);
  });
}
