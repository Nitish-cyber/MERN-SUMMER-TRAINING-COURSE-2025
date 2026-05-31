// 1. Defining Core Donor Profiles using Constants
const donorId = "DON-99827";
const donorName = "Hilton Event Center";
const donorLocation = "Sector 62, Noida";
const isLicensed = true;
const hasColdStorage = false; // Flag from Day 2 practice challenge

// 2. Mutable Donor States using Let
let donorRating = 4.2;
let successfulDonationsCount = 28;

// 3. Dynamic Rating Updates (Arithmetic)
// Add a new review score to the total donation count
successfulDonationsCount = successfulDonationsCount + 1;
// Recalculate a mock rating score after a perfect rating entry
donorRating = (donorRating * 9 + 5.0) / 10; 

console.log("--- Zero Hunger Donor Profile Loaded ---");
console.log("Donor ID:", donorId);
console.log("Donor Name:", donorName);
console.log("Completed Donations:", successfulDonationsCount);
console.log("Recalculated Rating:", donorRating);

// 4. Qualification Verification Function (Includes practice parameters)
function checkDonorEligibility(rating, licensedFlag, coldStorageFlag) {
    const minRequiredRating = 3.5;
    
    // Comparison and Logical evaluations
    const isEligible = (rating >= minRequiredRating) && (licensedFlag === true);
    
    let resultMessage = "";
    if (isEligible) {
        resultMessage = "ELIGIBLE: Donor meets all food safety regulations and performance metrics.";
        
        // Practice implementation: warning validation for cold storage
        if (!coldStorageFlag) {
            resultMessage += " WARNING: Cold storage not detected. Restricted to dry-goods donations only.";
        } else {
            resultMessage += " INFO: Cold storage detected. Approved for perishable hot-meal transport.";
        }
    } else {
        resultMessage = "REJECTED: Donor rating is below minimum thresholds or lacks active health certification.";
    }
    
    return resultMessage;
}

// 5. Run Verification
const eligibilityStatus = checkDonorEligibility(donorRating, isLicensed, hasColdStorage);
console.log("Status Result:", eligibilityStatus);
