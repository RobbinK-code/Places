function showPlace() {
    const place = document.getElementById('Places').value;
    const resultDiv = document.getElementById('result');
    const containerDiv = document.getElementById('container');
    resultDiv.innerHTML = `You selected: ${place}`;
    containerDiv.innerHTML = `<img src="${place.toLowerCase().replace(/ /g, '_')}.jpg" alt="${place}" class="place-image">`;
    // When Mombasa is selected, displays {
    //When show available info button is clicked, displays(
    // "Mombasa is a coastal city in Kenya known for its beautiful beaches and rich history."
    // "img src="https://plus.unsplash.com/premium_photo-1697729911993-626a3e2c44eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9tYmFzYXxlbnwwfHwwfHx8MA%3D%3D" alt="Mombasa" class="place-image">




}
    // When Nairobi is selected, displays "nairobi.jpg"
    // When Mt Longonot is selected, displays "mt_longonot.jpg"























