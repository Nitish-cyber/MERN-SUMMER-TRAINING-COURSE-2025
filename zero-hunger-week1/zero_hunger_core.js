// ==========================================
// PART 1: Variable Declarations & Donor memory
// ==========================================
const donorId = "DON-99827";
const donorName = "Hilton Event Center";
const isLicensed = true;
const hasColdStorage = false;

let donorRating = 4.2;
let successfulDonationsCount = 28;

// Rating calculation (Arithmetic)
successfulDonationsCount += 1;
donorRating = (donorRating * 9 + 5.0) / 10; // Recalculate rating score

console.log("--- Zero Hunger Donor Profile Loaded ---");
console.log(`Donor: ${donorName} (ID: ${donorId})`);
console.log(`Donations Completed: ${successfulDonationsCount} | Rating: ${donorRating}`);

// ==========================================
// PART 2: Reusable Validation Functions
// ==========================================
const checkDonorEligibility = (rating, licensedFlag, coldStorageFlag) => {
    const minRequiredRating = 3.5;
    const isEligible = (rating >= minRequiredRating) && (licensedFlag === true);
    
    let resultMessage = "";
    if (isEligible) {
        resultMessage = "ELIGIBLE: Approved for active distribution.";
        if (!coldStorageFlag) {
            resultMessage += " WARNING: Cold storage absent. Restrict to dry-goods.";
        }
    } else {
        resultMessage = "REJECTED: Below rating baseline or lacks safety licensing.";
    }
    return resultMessage;
};

console.log("Status Result:", checkDonorEligibility(donorRating, isLicensed, hasColdStorage));

// ==========================================
// PART 3: ES6 Collection Arrays & Matrix
// ==========================================
const activeDonations = [
    { id: "DON-101", donorName: "Grand Plaza", item: "Rice & Dal", quantityKg: 45, expiryHours: 12, isClaimed: false },
    { id: "DON-102", donorName: "Royal Caterers", item: "Chicken Curry", quantityKg: 60, expiryHours: 3, isClaimed: false },
    { id: "DON-103", donorName: "Sweet Center", item: "Mixed Sweets", quantityKg: 15, expiryHours: 24, isClaimed: true },
    { id: "DON-104", donorName: "Shelter Inn", item: "Assorted Breads", quantityKg: 30, expiryHours: 8, isClaimed: false }
];

// Add fresh item safely via Spread Operator
const newListing = { id: "DON-105", donorName: "Saffron Inn", item: "Veg Pulao", quantityKg: 25, expiryHours: 6, isClaimed: false };
const updatedDonationsList = [...activeDonations, newListing];

console.log(`\nRegistry holds ${updatedDonationsList.length} total food packages.`);

// Unpack and display unclaimed donations using Destructuring and Arrow functions
console.log("\nUnclaimed Active Listings:");
const unclaimedListings = updatedDonationsList.filter(donation => !donation.isClaimed);

unclaimedListings.forEach(({ donorName, item, quantityKg }) => {
    console.log(`- Request: ${donorName} listed ${quantityKg}kg of ${item}.`);
});

// Map volunteer dispatch courier lists
const volunteerTaskMap = unclaimedListings.map(({ id, item, quantityKg }) => {
    return `PICKUP TASK [ID: ${id}] -> Collect ${quantityKg}kg of ${item}`;
});

console.log("\nCourier Task Boards:");
console.log(volunteerTaskMap);

// ==========================================
// PART 4: Student Practice: Dynamic Urgency Warnings
// ==========================================
const urgentDonations = updatedDonationsList.filter(donation => donation.expiryHours < 10 && !donation.isClaimed);
const urgentAlertMessages = urgentDonations.map(({ item, donorName, expiryHours }) => {
    return `URGENT PICKUP REQUIRED: ${item} from ${donorName} expires in ${expiryHours} hours!`;
});

console.log("\n⚠️ Real-time Urgency Alerts dispatched to Volunteers:");
urgentAlertMessages.forEach(msg => console.log(msg));
