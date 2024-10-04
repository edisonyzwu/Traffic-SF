// Initialize the map
const map = L.map("map").setView([37.76, -122.44], 12.3);

// Add a tile layer (Stamen Toner Background as per your example)
const Stadia_StamenTonerBackground = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    ext: "png",
  }
);
Stadia_StamenTonerBackground.addTo(map);

// Coordinates with descriptions
const locations = [
  {
    lat: 37.7802,
    lng: -122.5107,
    description:
      "On September 3 at 16:39, the driver of a sedan was speeding northbound, lost control of the vehicle, struck trees and vehicles, and was ejected. The driver succumbed to his injuries.",
  },
  {
    lat: 37.8007,
    lng: -122.4274,
    description:
      "On September 12 at 5:55, the driver of a sedan was speeding northbound, lost control of the vehicle, struck trees and vehicles, and was ejected. The driver succumbed to his injuries.",
  },
  {
    lat: 37.799,
    lng: -122.4264,
    description:
      "On September 21 at 23:32, a driver was traveling eastbound and struck the victim, who was crossing southbound in the west side crosswalk. The driver of the vehicle fled the scene.",
  },
  {
    lat: 37.78488444,
    lng: -122.4126387,
    description:
      "On May 23 at 12:37, the driver of a box truck was stopped at a red light at westbound Ellis St. The victim was walking northbound and proceeded to climb under the truck. When the Ellis St traffic signal became green, the driver proceeded and struck the victim, who succumbed to their injuries.",
  },
  {
    lat: 37.7213,
    lng: -122.4106,
    description:
      "On May 3 at 23:34, the driver was speeding eastbound on Mansell Street, ran the stop sign at San Bruno Avenue, struck a MUNI bus, and struck a building. The passenger of the vehicle later succumbed to their injuries a few days later.",
  },
  {
    lat: 37.7351,
    lng: -122.3874,
    description:
      "On May 30 at 10:27, a driver of a SFPUC pickup truck parked north of the intersection and opened the driver-side door. The victim was bicycling northbound and struck the open car door. The victim later succumbed to their injuries.",
  },
  {
    lat: 37.78169559,
    lng: -122.4151811,
    description:
      "On March 2 at 0:25, a driver of a pickup truck was parked on the north side of Golden Gate Avenue when the victim walked and stood in the roadway. The driver began traveling eastbound and struck the victim. The driver fled the scene and was later arrested. The victim was experiencing homelessness.",
  },
  {
    lat: 37.76879096,
    lng: -122.4683676,
    description:
      "On March 8 at 15:20, a driver of a motorcycle was speeding westbound and swerved to avoid a driver from the Music Concourse approach. The motorcyclist lost control, was ejected, and succumbed to their injuries.",
  },
  {
    lat: 37.7403,
    lng: -122.4646,
    description:
      "On March 16 at 12:13, the driver of a sedan was speeding northbound, lost control of the vehicle, struck trees and vehicles, and was ejected. The driver succumbed to his injuries.",
  },
  {
    lat: 37.7489,
    lng: -122.4407,
    description:
      "On March 30 at 10:27, the driver of a sedan was speeding northbound, lost control of the vehicle, struck trees and vehicles, and was ejected. The driver succumbed to his injuries.",
  },
  {
    lat: 37.74129376,
    lng: -122.4226683,
    description:
      "On June 10 at 3:41, a driver of a vehicle was traveling northbound and struck the victim.",
  },
  {
    lat: 37.77742608,
    lng: -122.4038761,
    description:
      "On June 30 at 16:48, a driver of a minivan was speeding westbound when the victim ran northbound in front of the vehicle midblock. The victim later succumbed to their injuries.",
  },
  {
    lat: 37.74408483,
    lng: -122.3987569,
    description:
      "On June 17 at 21:30, a driver of a tour bus was traveling eastbound, stopped at the STOP sign, made a left turn onto northbound Toland, and struck the victim, who was crossing westbound in the north side crosswalk.",
  },
  {
    lat: 37.7966,
    lng: -122.4233,
    description:
      "On June 15 at 11:36, a driver was traveling westbound on Broadway and struck the victim, who was crossing northbound in the west side crosswalk against the solid red hand. The victim later succumbed to their injuries.",
  },
  {
    lat: 37.71919259,
    lng: -122.4439543,
    description:
      "On July 11 at 0:40, a driver was traveling westbound under the influence and struck the victim, who was previously sitting in the roadway.",
  },
  {
    lat: 37.7652,
    lng: -122.4173,
    description:
      "On July 5 at 13:14, a driver of a vehicle was traveling northbound and struck the driver and passenger of a motorcycle, who were traveling southbound. The driver of the motorcycle later succumbed to their injuries. The driver of the vehicle fled the scene.",
  },
  {
    lat: 37.77430323,
    lng: -122.4584156,
    description:
      "On January 31 at 5:18, the driver of a minivan was traveling westbound, proceeded on a green light, and struck the victim, who was crossing northbound in the west side crosswalk.",
  },
  {
    lat: 37.70860136,
    lng: -122.4710062,
    description:
      "On January 1 at 20:26, the driver of a sedan was speeding northbound, lost control of the vehicle, struck trees and vehicles, and was ejected. The driver succumbed to his injuries.",
  },
  {
    lat: 37.71990031,
    lng: -122.4749546,
    description:
      "On February 8 at 1:06, the driver of a sedan was speeding southbound on 19th Avenue and collided with a parked tow truck. The driver succumbed to their injuries.",
  },
  {
    lat: 37.77603932,
    lng: -122.4025241,
    description:
      "On February 8 at 4:58, a driver of a pickup truck struck the victim, who was lying in the roadway for unknown reasons.",
  },
  {
    lat: 37.73103887,
    lng: -122.4295675,
    description:
      "On February 25 at 18:40, a driver traveling eastbound struck the victim, who was crossing southbound in the east side crosswalk. The driver fled the scene.",
  },
  {
    lat: 37.7438,
    lng: -122.4036,
    description:
      "On August 9 at 15:38, a driver of a pickup truck was making a southbound left turn into a parking lot and failed to yield to the victim, who was bicycling northbound and struck the rear of the pickup truck.",
  },
  {
    lat: 37.7332,
    lng: -122.4347,
    description:
      "On August 15 at 14:39, a driver of a box truck was making an eastbound right turn and struck the victim, who was crossing eastbound in the southside crosswalk.",
  },
];

// Loop through locations and add markers with tooltips
locations.forEach(function (location) {
  const marker = L.circleMarker([location.lat, location.lng], {
    color: "white",
    fillColor: "red",
    fillOpacity: 0.8,
    radius: 7,
  }).addTo(map);

  // Bind tooltip to marker
  marker.bindTooltip(location.description, {
    permanent: false, // Only show when hovered
    direction: "top",
  });
});
