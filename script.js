function showPlace() {
    const place = document.getElementById('Places').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>You selected:</strong> ${place}`;
}

function showAvailableInfo() {
    const place = document.getElementById('Places').value;
    const availableInfoDiv = document.getElementById('availableInfo');
    
    if (placeData[place]) {
        const data = placeData[place];
        availableInfoDiv.innerHTML = `
            <p><strong>${place}</strong></p>
            <p>${data.description}</p>
            <img src="${data.image}" alt="${place}" class="place-image" style="width: 100%; max-width: 300px; border-radius: 5px; margin-top: 10px;">
        `;
    } else {
        availableInfoDiv.innerHTML = `<p>No information available for ${place}</p>`;
    }
}

const placeData = {
    "Mombasa": {
        description: "Mombasa is a coastal city in Kenya known for its beautiful beaches and rich history.",
        image: "https://plus.unsplash.com/premium_photo-1697729911993-626a3e2c44eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9tYmFzYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    "Kisumu": {
        description: "Kisumu is a lakeside city on Lake Victoria, known for its fishing and wildlife.",
        image: "https://plus.unsplash.com/premium_photo-1697729911993-626a3e2c44eb?w=600"
    },
    "Maasai Mara": {
        description: "Maasai Mara is a national wildlife reserve famous for its abundant wildlife and safari experiences.",
        image: "https://plus.unsplash.com/premium_photo-1697729911993-626a3e2c44eb?w=600"
    },
    "Kenya National Museum": {
        description: "Kenya National Museum in Nairobi showcases artifacts, wildlife, and natural history.",
        image: "https://plus.unsplash.com/premium_photo-1697729911993-626a3e2c44eb?w=600"
    },
    "Nairobi National Park": {
        description: "Nairobi National Park is one of Kenya's most visited parks with diverse wildlife.",
        image: "https://plus.unsplash.com/premium_photo-1697729911993-626a3e2c44eb?w=600"
    },
    "Diani Beach": {
        description: "Diani Beach is a stunning coastal destination known for its white sand and water sports.",
        image: "https://plus.unsplash.com/premium_photo-1697729911993-626a3e2c44eb?w=600"
    },
    "Lamu Island": {
        description: "Lamu Island is a UNESCO World Heritage Site featuring Swahili culture and architecture.",
        image: "https://plus.unsplash.com/premium_photo-1697729911993-626a3e2c44eb?w=600"
    },
    "Mount Kenya": {
        description: "Mount Kenya is Africa's second-highest mountain, popular for hiking and climbing.",
        image: "https://plus.unsplash.com/premium_photo-1697729911993-626a3e2c44eb?w=600"
    },
    "Aberdare Ranges": {
        description: "Aberdare Ranges is a mountain range known for its scenic beauty and wildlife.",
        image: "https://plus.unsplash.com/premium_photo-1697729911993-626a3e2c44eb?w=600"
    },
    "Lake Naivasha": {
        description: "Lake Naivasha is a freshwater lake known for its bird watching and water activities.",
        image: "https://plus.unsplash.com/premium_photo-1697729911993-626a3e2c44eb?w=600"
    },
    "Mt Longonot": {
        description: "Mt Longonot is a volcanic mountain offering hiking trails and panoramic views.",
        image: "https://plus.unsplash.com/premium_photo-1697729911993-626a3e2c44eb?w=600"
    }
};
























