function findPlaceKey(place) {
    if (!place) return null;
    const lower = place.toLowerCase();
    for (const key in placeData) {
        if (key.toLowerCase() === lower) return key;
    }
    return null;
}

function showPlace() {
    const placeInput = document.getElementById('placeSearch');
    const place = placeInput.value.trim();
    const resultDiv = document.getElementById('result');

    if (!place) {
        resultDiv.innerHTML = '<p>Please enter or select a place from the list.</p>';
        return;
    }

    const matchKey = findPlaceKey(place);
    if (!matchKey) {
        resultDiv.innerHTML = '<p style="color: red;">"' + place + '" is not listed in our database. Please select from the available options.</p>';
        return;
    }

    resultDiv.innerHTML = `<strong>You selected:</strong> ${matchKey}`;
}

function showAvailableInfo() {
    const placeInput = document.getElementById('placeSearch');
    const place = placeInput.value.trim();
    const availableInfoDiv = document.getElementById('availableInfo');

    if (!place) {
        availableInfoDiv.innerHTML = '<p>Please enter or select a place from the list.</p>';
        return;
    }

    const matchKey = findPlaceKey(place);
    if (matchKey) {
        const data = placeData[matchKey];
        let imagesHTML = '';

        if (data.images && Array.isArray(data.images)) {
            imagesHTML = data.images.map(img =>
                `<img src="${img}" alt="${matchKey}" class="place-image" style="width: 100%; max-width: 300px; border-radius: 5px; margin-top: 10px; margin-bottom: 10px;">`
            ).join('');
        } else if (data.image) {
            imagesHTML = `<img src="${data.image}" alt="${matchKey}" class="place-image" style="width: 100%; max-width: 300px; border-radius: 5px; margin-top: 10px;">`;
        }

        availableInfoDiv.innerHTML = `
            <p><strong>${matchKey}</strong></p>
            <p>${data.description}</p>
            ${imagesHTML}
        `;
    } else {
        availableInfoDiv.innerHTML = `<p>No information available for ${place}</p>`;
    }
}

const placeData = {
    "Mombasa": {
        description: "Mombasa is a coastal city in Kenya known for its beautiful beaches and rich history.",
        images: [
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1000&auto=format&fit=crop&q=60"
        ]
    },
    "Kisumu": {
        description: "Kisumu is a lakeside city on Lake Victoria, known for its fishing and wildlife.",
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1500516659405-41601c0d9c21?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1504681869696-d977e3a34b2d?w=1000&auto=format&fit=crop&q=60"
        ]
    },
    "Maasai Mara": {
        description: "Maasai Mara is a national wildlife reserve famous for its abundant wildlife and safari experiences.",
        images: [
            "https://images.unsplash.com/photo-1518459384564-ecfd8e80721f?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1543107484-b13a21b26e8c?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1554990772-0bea55d510d5?w=1000&auto=format&fit=crop&q=60"
        ]
    },
    "Kenya National Museum": {
        description: "Kenya National Museum in Nairobi showcases artifacts, wildlife, and natural history.",
        images: [
            "https://images.unsplash.com/photo-1478854355073-e2654c3a7408?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1000&auto=format&fit=crop&q=60"
        ]
    },
    "Nairobi National Park": {
        description: "Nairobi National Park is one of Kenya's most visited parks with diverse wildlife.",
        images: [
            "https://images.unsplash.com/photo-1488681073095-39c5b6705f24?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1516426122078-8023e26e2ced?w=1000&auto=format&fit=crop&q=60"
        ]
    },
    "Diani Beach": {
        description: "Diani Beach is a stunning coastal destination known for its white sand and water sports.",
        images: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1495854482210-f5b7f9e0e76d?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1507371341519-86a013bb338d?w=1000&auto=format&fit=crop&q=60"
        ]
    },
    "Lamu Island": {
        description: "Lamu Island is a UNESCO World Heritage Site featuring Swahili culture and architecture.",
        images: [
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe3e?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1512207736139-757ea7b3eaeb?w=1000&auto=format&fit=crop&q=60"
        ]
    },
    "Mount Kenya": {
        description: "Mount Kenya is Africa's second-highest mountain, popular for hiking and climbing.",
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1483729558449-99daa71cb63e?w=1000&auto=format&fit=crop&q=60"
        ]
    },
    "Aberdare Ranges": {
        description: "Aberdare Ranges is a mountain range known for its scenic beauty and wildlife.",
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe3e?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1000&auto=format&fit=crop&q=60"
        ]
    },
    "Lake Naivasha": {
        description: "Lake Naivasha is a freshwater lake known for its bird watching and water activities.",
        images: [
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1500516659405-41601c0d9c21?w=1000&auto=format&fit=crop&q=60"
        ]
    },
    "Mt Longonot": {
        description: "Mt Longonot is a volcanic mountain offering hiking trails and panoramic views.",
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1000&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1483729558449-99daa71cb63e?w=1000&auto=format&fit=crop&q=60"
        ]
    }
};


// Auto-update the displayed selection as the user types (case-insensitive)
const placeInputEl = document.getElementById('placeSearch');
if (placeInputEl) {
    placeInputEl.addEventListener('input', showPlace);
}
























