// 1. Defining the Database Model using an Array of Objects
const activeDonations = [
    { id: "DON-101", donorName: "Grand Plaza", item: "Rice & Dal", quantityKg: 45, expiryHours: 12, isClaimed: false },
    { id: "DON-102", donorName: "Royal Caterers", item: "Chicken Curry", quantityKg: 60, expiryHours: 3, isClaimed: false },
    { id: "DON-103", donorName: "Sweet Center", item: "Mixed Sweets", quantityKg: 15, expiryHours: 24, isClaimed: true },
    { id: "DON-104", donorName: "Shelter Inn", item: "Assorted Breads", quantityKg: 30, expiryHours: 8, isClaimed: false }
];

console.log("--- Zero Hunger Allocation Engine ---");

// 2. Destructuring and Arrow Functions
// Reusable helper function to display donation details
const printDonationDetails = ({ donorName, item, quantityKg }) => {
    console.log(`- Request: ${donorName} donated ${quantityKg}kg of ${item}.`);
};

// 3. Array Iteration: filter() unclaimed donations
const unclaimedDonations = activeDonations.filter(donation => !donation.isClaimed);

console.log("\nUnclaimed Active Donations:");
unclaimedDonations.forEach(printDonationDetails);

// 4. Array Iteration: map() to format titles for volunteers
const volunteerPickupsList = unclaimedDonations.map(donation => {
    // Destructure properties from donation
    const { id, item, quantityKg } = donation;
    return `PICKUP TASK [ID: ${id}] -> Collect ${quantityKg}kg of ${item}`;
});

console.log("\nVolunteer Dispatch Tasks:");
console.log(volunteerPickupsList);

// 5. Spread Operator: Adding a new donation safely (Immutability)
const newListing = { id: "DON-105", donorName: "Saffron Inn", item: "Veg Pulao", quantityKg: 25, expiryHours: 6, isClaimed: false };

// Create a copy of original array and insert new listing using Spread
const updatedDonationsList = [...activeDonations, newListing];

console.log("\nTotal Donation Listings in Registry (Including New):", updatedDonationsList.length);

// 6. Day 3 Practice: Dynamic Urgency Filters (expiring in under 10 hours)
const urgentDonations = updatedDonationsList.filter(donation => donation.expiryHours < 10 && !donation.isClaimed);
const urgentAlertMessages = urgentDonations.map(({ item, donorName, expiryHours }) => {
    return `URGENT PICKUP REQUIRED: ${item} from ${donorName} expires in ${expiryHours} hours!`;
});

console.log("\n⚠️ Real-time Urgency Alerts dispatched to Volunteers:");
urgentAlertMessages.forEach(msg => console.log(msg));
