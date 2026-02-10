function showPlace() {
    const place = document.getElementById('Places').value;
    const resultDiv = document.getElementById('result');
    const containerDiv = document.getElementById('container');
    resultDiv.innerHTML = `You selected: ${place}`;
    containerDiv.innerHTML = `<img src="${place.toLowerCase().replace(/ /g, '_')}.jpg" alt="${place}" class="place-image">`;
    // When Mombasa is selected, displays "mombasa.jpg"
    // When Nairobi is selected, displays "nairobi.jpg"
    // When Mt Longonot is selected, displays "mt_longonot.jpg"
}






















