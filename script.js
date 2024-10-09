// Initialize the map
const map = L.map("map").setView([37.76, -122.44], 12.3);

// Add a tile layer (Stamen Toner Background)
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

  // Bind tooltip to marker with maxWidth and minWidth for better text wrapping
  marker.bindTooltip(location.description, {
    permanent: false, // Only show when hovered
    direction: "top",
    className: "custom-tooltip", // Add custom class for styling
    maxWidth: 300, // Increase the width for longer lines
    minWidth: 250, // Prevent wrapping too early
  });
});

////// Stacked Bar Chart ///////
// Set up the dimensions and margins for the chart
const margin = {top: 20, right: 30, bottom: 20, left: 50},
  width = Math.min(1000, window.innerWidth * 0.8) - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// Append SVG to the #chart div
const svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// Load the CSV data
d3.csv("processed_victims_Types_data.csv").then(function (data) {
  // List of subgroups (victim roles)
  const subgroups = data.columns.slice(1).reverse(); // Reverse the order of the subgroups

  // List of groups (years)
  const groups = data.map((d) => d.accident_year);

  // X axis: scale for years
  const x = d3.scaleBand().domain(groups).range([0, width]).padding([0.2]);

  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickSize(1))
    .selectAll("text")
    .style("font-size", "14px");

  // Y axis: scale for count, with nice background tick lines
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d3.sum(subgroups, (key) => +d[key]))])
    .nice()
    .range([height, 0]);

  const maxY = d3.max(data, (d) => d3.sum(subgroups, (key) => +d[key]));
  const yTicks = d3.range(0, maxY + 10, 10);

  const yAxis = svg
    .append("g")
    .call(d3.axisLeft(y).tickValues(yTicks).tickSize(-width))
    .call((g) => g.select(".domain").remove()) // Remove vertical line
    .call((g) => g.selectAll("line").attr("stroke", "#e0e0e0"))
    .call((g) => g.selectAll("text").attr("font-size", "14px"));

  const color = d3.scaleOrdinal().domain(subgroups).range([
    "#fed9a6", // light orange
    "#c3410f", // deep orange-red
    "#e08964", // light orange-red
    "#c56a4a", // medium red-orange
    "#a44b34", // softer red-orange
    "#5a1a0d", // deep wine red;
  ]);

  // Stack the data
  const stackedData = d3.stack().keys(subgroups.reverse())(data); // Make sure the stack is in correct order

  // Show the bars
  const bars = svg
    .append("g")
    .selectAll("g")
    .data(stackedData)
    .enter()
    .append("g")
    .attr("fill", (d) => color(d.key)) // Use the subgroups' order for colors
    .attr("class", (d) => `subgroup-${d.key}`) // Add a class to each subgroup
    .selectAll("rect")
    .data((d) => d)
    .enter()
    .append("rect")
    .attr("x", (d) => x(d.data.accident_year))
    .attr("y", (d) => y(d[1]))
    .attr("height", (d) => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth())
    .on("mouseover", function (event, d) {
      const subgroup = d3.select(this.parentNode).datum().key;

      // Fade out other subgroups' bars
      d3.selectAll("g").selectAll("rect").attr("fill-opacity", 0.3);

      // Highlight all rects of the same subgroup
      d3.selectAll(`.subgroup-${subgroup}`).selectAll("rect").attr("fill-opacity", 1);

      // Fade out other subgroups' legend
      d3.selectAll(".legend").selectAll("rect").attr("fill-opacity", 0.3);

      // Highlight the legend for the same subgroup
      d3.select(`.legend-${subgroup}`).selectAll("rect").attr("fill-opacity", 1);

      // Show the count for all bars of the same subgroup
      d3.selectAll(`.subgroup-${subgroup}`)
        .selectAll("rect")
        .each(function (d) {
          svg
            .append("text")
            .attr("class", "value-label")
            .attr("x", x(d.data.accident_year) + x.bandwidth() / 2)
            .attr("y", (y(d[0]) + y(d[1])) / 2)
            .attr("text-anchor", "middle")
            .text(d[1] - d[0])
            .attr("fill", "white");
        });
    })
    .on("mouseout", function () {
      // Restore all bars
      d3.selectAll("rect").attr("fill-opacity", 1);
      // Restore all legends
      d3.selectAll(".legend").selectAll("rect").attr("fill-opacity", 1);
      // Remove the count labels
      svg.selectAll(".value-label").remove();
    });

  // Add a legend
  const legend = svg
    .selectAll(".legend")
    .data(subgroups.reverse()) // Reverse the legend order
    .enter()
    .append("g")
    .attr("class", (d) => `legend legend-${d}`) // Add class to identify each legend
    .attr("transform", (d, i) => `translate(40,${i * 20})`);

  legend
    .append("rect")
    .attr("x", width - 18)
    .attr("width", 18)
    .attr("height", 18)
    .style("fill", (d) => color(d)); // Use the same color mapping

  legend
    .append("text")
    .attr("x", width - 24)
    .attr("y", 9)
    .attr("dy", ".35em")
    .style("text-anchor", "end")
    .text((d) => d);
});
