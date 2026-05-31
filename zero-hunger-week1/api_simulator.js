// 1. Mock Database Table
const mockDatabase = [
    { id: "DON-201", donor: "Grand Hotel", item: "Rice & Dal", quantityKg: 40, status: "Pending" },
    { id: "DON-202", donor: "Royal Hall", item: "Veg Biryani", quantityKg: 55, status: "Claimed" }
];

console.log("--- Zero Hunger API Server Simulator ---");

// 2. Creating a Promise-based Database Query (With Day 4 Practice Timeouts)
const fetchDonationsFromDb = (responseDelayMs = 1500) => {
    return new Promise((resolve, reject) => {
        console.log(`\n[Server] Connecting to MongoDB (simulating delay: ${responseDelayMs}ms)...`);
        console.log("[Server] Executing query: find({ status: 'Pending' })...");

        // Simulate network latency
        setTimeout(() => {
            // Day 4 Practice challenge: reject if timeout exceeds 2 seconds (2000ms)
            if (responseDelayMs > 2000) {
                reject(`TIMEOUT_ERROR: Connection to MongoDB timed out after ${responseDelayMs}ms (threshold 2000ms).`);
            } else {
                resolve(mockDatabase);
            }
        }, responseDelayMs);
    });
};

// 3. Reusable callback logging function
const notifyNgo = (donations) => {
    console.log(`[Notification] NGO informed: ${donations.length} active packages ready for dispatch.`);
};

// 4. Asynchronous Controller using Async / Await & Try-Catch
const processDonationRequests = async (delay) => {
    try {
        console.log(`\n[Controller] Initiating request cycle (configured delay: ${delay}ms)...`);
        
        // Await the asynchronous database query
        const data = await fetchDonationsFromDb(delay);
        
        console.log("[Controller] Data successfully retrieved from Database.");
        console.log(data);
        
        // Execute callback
        notifyNgo(data);
        
    } catch (error) {
        console.log("[Controller] Error caught during execution cycle!");
        console.error(`[Error Log] ${error}`);
    } finally {
        console.log("[Controller] Request cycle completed.");
    }
};

// 5. Test Suite Runs
const executeTestRuns = async () => {
    // Run 1: Normal fast execution (1200ms delay) - Success expected
    await processDonationRequests(1200);
    
    // Run 2: Slow lagging execution (3000ms delay) - Timeout rejection expected
    await processDonationRequests(3000);
};

// Run the suite
executeTestRuns();
