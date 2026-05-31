/**
 * Title: Zero Hunger Terminal Dashboard Console Engine
 * Description: Fully integrated console app managing registration, donation logic, 
 * asynchronous allocation routing, and API directory searches.
 */

// 1. In-Memory Database Structure
const state = {
    donors: [],
    donations: [
        { id: "DON-101", item: "Chicken Biryani", quantityKgs: 12, hoursRemaining: 1.5, type: "Non-Veg", status: "Available" },
        { id: "DON-102", item: "Stuffed Parathas", quantityKgs: 25, hoursRemaining: 5, type: "Veg", status: "Available" },
        { id: "DON-103", item: "Fruit Salad Cups", quantityKgs: 8, hoursRemaining: 0.8, type: "Veg", status: "Available" }
    ],
    logs: []
};

// 2. Helper Utility: Immutably add events to logs
const logSystemActivity = (activity) => {
    state.logs = [...state.logs, { timestamp: new Date().toLocaleTimeString(), activity }];
};

// 3. Module 1: Scoped variables & logic to register donors
const registerDonor = (name, hasFssai, licenseId) => {
    if (!name || typeof name !== "string") {
        throw new Error("Invalid donor name specified.");
    }
    
    const isApproved = hasFssai === true;
    const newDonor = {
        id: `DNR-${state.donors.length + 100}`,
        name,
        isApproved,
        licenseId: isApproved ? licenseId : "NONE"
    };
    
    state.donors.push(newDonor);
    logSystemActivity(`Registered Donor: ${name} (${newDonor.id})`);
    return newDonor;
};

// 4. Module 2: ES6 filtering, mapping, and destructuring
const getUrgentDonations = () => {
    // Return donations expiring in <= 2 hours using arrow functions
    return state.donations.filter(don => don.hoursRemaining <= 2);
};

const displayFormattedDonations = () => {
    console.log("\n=================== ACTIVE DONATIONS CATALOG ===================");
    state.donations.forEach(({ id, item, quantityKgs, hoursRemaining, status }) => {
        const warning = hoursRemaining <= 2 ? "[URGENT!]" : "[STABLE]";
        console.log(`- ID: ${id} | ${item} (${quantityKgs}kg) | Remaining: ${hoursRemaining}h | Status: ${status} ${warning}`);
    });
};

// 5. Module 3 & 4: Promises, Async/Await, Error Handling & Fetch simulation
const simulateVolunteerLookup = (donationId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hasVolunteer = Math.random() > 0.15; // 85% success chance
            if (hasVolunteer) {
                resolve({ volunteerName: "Vikram Malhotra", phone: "9876543210" });
            } else {
                reject("No nearby volunteer accepted the pickup request.");
            }
        }, 1500);
    });
};

const processDonationDispatch = async (donationId) => {
    logSystemActivity(`Initiated Dispatch Pipeline for ${donationId}`);
    console.log(`\n>>> Dispatching logistics for donation ${donationId}...`);
    
    try {
        const donation = state.donations.find(d => d.id === donationId);
        
        if (!donation) {
            throw new Error("Invalid donation reference ID.");
        }
        
        if (donation.status !== "Available") {
            throw new Error("This donation is already claimed or dispatched.");
        }
        
        // Await simulated volunteer assignment
        const volunteerInfo = await simulateVolunteerLookup(donationId);
        
        // Update state immutably using mapping
        state.donations = state.donations.map(d => {
            if (d.id === donationId) {
                return { ...d, status: "Dispatched", assignedVolunteer: volunteerInfo.volunteerName };
            }
            return d;
        });
        
        console.log("SUCCESS: Volunteer Assigned!");
        console.log(`Volunteer: ${volunteerInfo.volunteerName} (Tel: ${volunteerInfo.phone})`);
        logSystemActivity(`Dispatched ${donationId} via ${volunteerInfo.volunteerName}`);
        
    } catch (dispatchError) {
        console.error(`DISPATCH FAILED: ${dispatchError.message}`);
        logSystemActivity(`Dispatch failed for ${donationId}. Reason: ${dispatchError.message}`);
    } finally {
        console.log("Dispatch request iteration ended.");
    }
};

// 6. External Network Fetch API Simulation
const verifyInspectorAgencyDetails = async () => {
    console.log("\n>>> Accessing international Food Safety directory database...");
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/users/3");
        if (!result.ok) throw new Error("Central server returned bad response.");
        const data = await result.json();
        console.log(`Verified inspection agency contact: ${data.name} (Email: ${data.email})`);
        logSystemActivity(`Verified FSSAI agent: ${data.name}`);
    } catch (networkErr) {
        console.error("Network validation error: Running in offline local validation mode.");
    }
};

// 7. Interactive Orchestrated Main Execution Routine
async function runSystemTest() {
    console.log("=== STARTING CAPSTONE WORKSHOP TEST ENVIRONMENT ===");
    
    // Test Module 1: Register Donors
    registerDonor("Taj Palace Banquet", true, "FSSAI-98716253401");
    registerDonor("Local Cafe House", false);
    
    console.log("\nRegistered Donors database list:");
    console.log(state.donors);
    
    // Test Module 2: Display active listings and urgent ones
    displayFormattedDonations();
    
    const urgentItems = getUrgentDonations();
    console.log("\nUrgent Donations Filter Result:");
    console.log(urgentItems);
    
    // Test Module 3 & 4: Dispatch Process
    // Dispatch urgent item DON-101
    await processDonationDispatch("DON-101");
    
    // Attempt dispatch with invalid ID to test error handling catches
    await processDonationDispatch("DON-INVALID");
    
    // Test Fetch API simulation
    await verifyInspectorAgencyDetails();
    
    // Display updated Catalog and final system logs
    displayFormattedDonations();
    
    console.log("\n=================== FINAL SYSTEM AUDIT LOGS ===================");
    state.logs.forEach(({ timestamp, activity }) => {
        console.log(`[${timestamp}] - ${activity}`);
    });
}

// Run test engine
runSystemTest();
