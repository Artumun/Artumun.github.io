let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: 21.81441609448606, lng: -102.76966134534443 },
        zoom: 15,
    });
}

initMap();


21.81441609448606, -102.76966134534443