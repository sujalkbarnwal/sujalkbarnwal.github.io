function openPlanner() {
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('planner-page').classList.add('active');
}

function showPlaces() {
    const destination = document.getElementById('destination').value;
    const placesContainer = document.getElementById('places-container');
    const stateSelected = document.getElementById('state-selected');

    // Dummy data for places based on states
    const places = {
        "Andhra Pradesh": ["Hyderabad", "Vishakhapatnam", "Tirupati"],
        "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro"],
        "Assam": ["Guwahati", "Kaziranga", "Jorhat"],
        "Bihar": ["Patna", "Bodh Gaya", "Nalanda"],
        "West Bengal": ["Kolkata", "Darjeeling", "Sundarbans"],
    };

    placesContainer.innerHTML = ""; // Clear previous places
    if (destination) {
        stateSelected.innerText = `Best Places in ${destination}:`;
        places[destination].forEach(place => {
            const placeElement = document.createElement('div');
            placeElement.innerHTML = `<input type="checkbox" id="${place}" value="${place}"> ${place}`;
            placesContainer.appendChild(placeElement);
        });
        document.getElementById('places-page').classList.add('active');
        document.getElementById('planner-page').classList.remove('active');
    } else {
        alert("Please select a state.");
    }
}

function showCostPage() {
    const selectedPlaces = Array.from(document.querySelectorAll('#places-container input:checked')).map(input => input.value);
    const costDetails = document.getElementById('cost-details');

    costDetails.innerHTML = ""; // Clear previous cost details

    // Dummy cost data for selected places
    const costData = {
        "Hyderabad": { accommodation: 2000, transportation: 500, activities: 1500 },
        "Vishakhapatnam": { accommodation: 2500, transportation: 600, activities: 1200 },
        "Tirupati": { accommodation: 1500, transportation: 300, activities: 1000 },
        "Itanagar": { accommodation: 1800, transportation: 400, activities: 900 },
        "Tawang": { accommodation: 3000, transportation: 700, activities: 2000 },
        "Ziro": { accommodation: 2500, transportation: 500, activities: 1500 },
        "Guwahati": { accommodation: 2200, transportation: 600, activities: 1300 },
        "Kaziranga": { accommodation: 2800, transportation: 800, activities: 1700 },
        "Jorhat": { accommodation: 2400, transportation: 500, activities: 1400 },
        "Patna": { accommodation: 1900, transportation: 300, activities: 800 },
        "Bodh Gaya": { accommodation: 2100, transportation: 400, activities: 900 },
        "Nalanda": { accommodation: 2300, transportation: 500, activities: 1000 },
        "Kolkata": { accommodation: 3000, transportation: 800, activities: 2000 },
        "Darjeeling": { accommodation: 3200, transportation: 900, activities: 2500 },
        "Sundarbans": { accommodation: 2900, transportation: 700, activities: 2200 },
    };

    selectedPlaces.forEach(place => {
        if (costData[place]) {
            const { accommodation, transportation, activities } = costData[place];
            const totalCost = accommodation + transportation + activities;
            costDetails.innerHTML += `<div><strong>${place}</strong>: Accommodation - ₹${accommodation}, Transportation - ₹${transportation}, Activities - ₹${activities}, Total - ₹${totalCost}</div>`;
        }
    });

    document.getElementById('cost-page').classList.add('active');
    document.getElementById('places-page').classList.remove('active');
}

// Navigate back to the previous page
function goBack(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}
